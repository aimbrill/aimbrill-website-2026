"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { mapApiQuestionsToDemo, type DemoQuestion } from "@/lib/quiz-preview/map-questions";
import { normalizeShopUrl } from "@/lib/quiz-preview/normalize-shop";
import type { QuizPreviewApiQuestion } from "@/lib/quiz-preview/types";
import { QuizContactForm } from "./QuizContactForm";

type DemoStep = "url" | "select" | "generating" | "review" | "contact";

type QuestionType = DemoQuestion["type"];

type SourceKind = "collection" | "product" | null;

const MOCK_COLLECTION = "Snack & Wellness Collection";
const MOCK_PRODUCTS = "12 products selected";

const INITIAL_QUESTIONS: DemoQuestion[] = [
  {
    id: "q1",
    text: "What's your first name (or nickname)?",
    type: "input",
  },
  {
    id: "q2",
    text: "What type of snacks do you prefer?",
    type: "multiple",
    options: ["Savory", "Sweet", "Spicy", "Healthy"],
  },
  {
    id: "q3",
    text: "How often do you shop for snacks online?",
    type: "multiple",
    options: ["Weekly", "Monthly", "A few times a year", "First time"],
  },
  {
    id: "q4",
    text: "Any dietary preferences we should know?",
    type: "multiple",
    options: ["None", "Gluten-free", "Vegan", "High protein"],
  },
  {
    id: "q5",
    text: "What's your budget per order?",
    type: "multiple",
    options: ["Under $25", "$25–$50", "$50–$100", "$100+"],
  },
  {
    id: "q6",
    text: "Who are you shopping for?",
    type: "multiple",
    options: ["Myself", "Family", "Gift", "Office / team"],
  },
  {
    id: "q7",
    text: "What's your email for personalized recommendations?",
    type: "input",
  },
];

function AdminShell({
  children,
  footer,
  step,
}: {
  children: React.ReactNode;
  footer?: React.ReactNode;
  step: "select" | "generating" | "review";
}) {
  const stepIndex = step === "select" ? 1 : 2;
  const step1Done = stepIndex > 1;

  return (
    <div className="td-admin">
      <div className="td-main">
        <div className="td-content">
          {step !== "generating" && (
            <div className="td-content-inner">
              <Link href="/ai-quiz-and-recommendations/try-demo" className="td-back-link">
                ← Back to dashboard
              </Link>

              <div className="td-stepper" aria-label="Progress">
                <div className="td-stepper-item">
                  <span
                    className={`td-stepper-circle${step1Done ? " td-stepper-circle--done" : " td-stepper-circle--active"}`}
                  >
                    {step1Done ? "✓" : "1"}
                  </span>
                  <span
                    className={`td-stepper-label${!step1Done ? " td-stepper-label--active" : ""}`}
                  >
                    Select Products
                  </span>
                </div>
                <div
                  className={`td-stepper-line${step1Done ? " td-stepper-line--done" : ""}`}
                  aria-hidden
                />
                <div className="td-stepper-item">
                  <span
                    className={`td-stepper-circle${step === "review" ? " td-stepper-circle--active" : ""}`}
                  >
                    2
                  </span>
                  <span
                    className={`td-stepper-label${step === "review" ? " td-stepper-label--active" : ""}`}
                  >
                    Review Questions
                  </span>
                </div>
              </div>

              {children}
            </div>
          )}

          {step === "generating" && children}
          {footer}
        </div>
      </div>
    </div>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2.5 4.5h11M6 4.5V3a1 1 0 011-1h2a1 1 0 011 1v1.5M6.5 7.5v4M9.5 7.5v4M4 4.5l.5 8.5a1 1 0 001 1h5a1 1 0 001-1l.5-8.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TryDemoFlow() {
  const [step, setStep] = useState<DemoStep>("url");
  const [shopUrl, setShopUrl] = useState("www.gharsoaps.shop");
  const [sourceKind, setSourceKind] = useState<SourceKind>(null);
  const [selectionLabel, setSelectionLabel] = useState("");
  const [questions, setQuestions] = useState<DemoQuestion[]>(INITIAL_QUESTIONS);
  const [installUrl, setInstallUrl] = useState("");
  const [generateError, setGenerateError] = useState<string | null>(null);
  const generateAbortRef = useRef<AbortController | null>(null);
  const canProceedSelect = sourceKind !== null && selectionLabel.length > 0;

  const footerStatus = useMemo(() => {
    if (!sourceKind) return "No items selected";
    return sourceKind === "collection" ? `1 collection: ${selectionLabel}` : selectionLabel;
  }, [sourceKind, selectionLabel]);

  const startGenerating = useCallback(() => {
    setStep("generating");
  }, []);

  useEffect(() => {
    if (step !== "generating") return;

    generateAbortRef.current?.abort();
    const controller = new AbortController();
    generateAbortRef.current = controller;

    (async () => {
      try {
        const res = await fetch("/api/quiz-preview/generate-questions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ shop: shopUrl, count: 7 }),
          signal: controller.signal,
        });

        const payload = (await res.json()) as {
          success: boolean;
          data?: {
            previewQuizId: string;
            previewToken: string;
            installUrl: string;
            questions: QuizPreviewApiQuestion[];
          };
          error?: string;
        };

        if (controller.signal.aborted) return;

        if (!payload.success || !payload.data) {
          setGenerateError(payload.error ?? "Could not generate questions for this store.");
          setStep("url");
          return;
        }

        const mapped = mapApiQuestionsToDemo(payload.data.questions);
        if (!mapped.length) {
          setGenerateError("No questions were returned for this store. Try another URL.");
          setStep("url");
          return;
        }

        setInstallUrl(payload.data.installUrl ?? "");
        setQuestions(mapped);
        setActiveQuestionIndex(0);
        setGenerateError(null);
        setStep("review");
      } catch (err) {
        if (controller.signal.aborted) return;
        const message =
          err instanceof Error && err.name === "AbortError"
            ? null
            : "Could not reach the quiz service. Check the URL and try again.";
        if (message) {
          setGenerateError(message);
          setStep("url");
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [step, shopUrl]);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeShopUrl(shopUrl);
    if (!normalized) return;
    setShopUrl(normalized);
    setGenerateError(null);
    setSourceKind(null);
    setSelectionLabel("");
    setStep("generating");
  };

  const pickCollection = () => {
    setSourceKind("collection");
    setSelectionLabel(MOCK_COLLECTION);
  };

  const pickProducts = () => {
    setSourceKind("product");
    setSelectionLabel(MOCK_PRODUCTS);
  };

  const updateQuestionText = (id: string, text: string) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, text } : q)));
  };

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const updateOption = (qId: string, index: number, value: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId || !q.options) return q;
        const options = [...q.options];
        options[index] = value;
        return { ...q, options };
      }),
    );
  };

  const changeQuestionType = (id: string, type: QuestionType) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q;
        if (type === "input") return { ...q, type, options: undefined };
        return {
          ...q,
          type,
          options: q.options?.length ? q.options : ["Option 1", "Option 2"],
        };
      }),
    );
  };

  const addOption = (qId: string) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId) return q;
        const options = [...(q.options ?? []), `Option ${(q.options?.length ?? 0) + 1}`];
        return { ...q, options };
      }),
    );
  };

  const removeOption = (qId: string, index: number) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId || !q.options || q.options.length <= 2) return q;
        return { ...q, options: q.options.filter((_, i) => i !== index) };
      }),
    );
  };

  const removeQuestion = (id: string) => {
    setQuestions((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.filter((q) => q.id !== id);
      setActiveQuestionIndex((i) => Math.min(i, Math.max(0, next.length - 1)));
      return next;
    });
  };

  const addQuestion = () => {
    const id = `q-${Date.now()}`;
    setQuestions((prev) => {
      const next = [
        ...prev,
        {
          id,
          text: "New question",
          type: "multiple" as const,
          options: ["Option 1", "Option 2"],
        },
      ];
      setActiveQuestionIndex(next.length - 1);
      return next;
    });
  };

  const activeQuestion = questions[activeQuestionIndex];
  const isFirstQuestion = activeQuestionIndex === 0;
  const isLastQuestion = activeQuestionIndex === questions.length - 1;

  if (step === "contact") {
    return (
      <QuizContactForm
        shopUrl={shopUrl}
        installUrl={installUrl || undefined}
        onBack={() => setStep("review")}
      />
    );
  }

  if (step === "url") {
    return (
      <div className="td-root">
        <div className="td-url-page">
          <main className="td-url-main">
            <span className="td-url-badge">✦ AI Quiz Builder Demo</span>
            <h1 className="td-url-title">AI Quiz</h1>
            <p className="td-url-sub">
              Build and demo a quiz in 1 minute. AI will generate your quiz and recommend products.
            </p>
            {generateError && (
              <p className="td-url-error" role="alert">
                {generateError}
              </p>
            )}
            <form className="td-url-form" onSubmit={handleUrlSubmit}>
              <input
                className="td-url-input"
                type="text"
                value={shopUrl}
                onChange={(e) => {
                  setShopUrl(e.target.value);
                  if (generateError) setGenerateError(null);
                }}
                placeholder="www.yourstore.com"
                aria-label="Store URL"
                aria-invalid={generateError ? true : undefined}
              />
              <button type="submit" className="td-url-submit" disabled={!shopUrl.trim()}>
                <span aria-hidden>▶</span> Create Quiz
              </button>
            </form>
            <Link href="/ai-quiz-and-recommendations" className="td-url-back">
              ← Back to landing page
            </Link>
          </main>
        </div>
      </div>
    );
  }

  if (step === "select") {
    return (
      <div className="td-root">
        <AdminShell
          step="select"
          footer={
            <div className="td-footer-bar">
              <span className="td-footer-status">{footerStatus}</span>
              <div className="td-footer-actions">
                <button
                  type="button"
                  className="td-btn td-btn--ghost"
                  onClick={() => setStep("url")}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="td-btn td-btn--primary"
                  disabled={!canProceedSelect}
                  onClick={startGenerating}
                >
                  Next
                </button>
              </div>
            </div>
          }
        >
          <p className="td-page-desc td-page-desc--lead">
            Choose a product source to create your AI-powered quiz. Select from collections or
            individual products for <strong>{shopUrl}</strong>.
          </p>

          <div className="td-source-grid">
            <div
              className={`td-source-card${sourceKind === "collection" ? " td-source-card--selected" : ""}`}
              onClick={pickCollection}
              onKeyDown={(e) => e.key === "Enter" && pickCollection()}
              role="button"
              tabIndex={0}
            >
              <div className="td-source-head">
                <span className="td-source-icon" aria-hidden>
                  📚
                </span>
                <div>
                  <strong>Collections</strong>
                  <span>Select collections</span>
                </div>
              </div>
              <div className="td-source-box">
                <label>Collection</label>
                <div className="td-source-row">
                  <span className="td-source-placeholder">
                    {sourceKind === "collection" ? selectionLabel : "Select a collection"}
                  </span>
                  <button
                    type="button"
                    className="td-source-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      pickCollection();
                    }}
                  >
                    Select collection
                  </button>
                </div>
              </div>
            </div>

            <span className="td-or">OR</span>

            <div
              className={`td-source-card${sourceKind === "product" ? " td-source-card--selected" : ""}`}
              onClick={pickProducts}
              onKeyDown={(e) => e.key === "Enter" && pickProducts()}
              role="button"
              tabIndex={0}
            >
              <div className="td-source-head">
                <span className="td-source-icon" aria-hidden>
                  🛍️
                </span>
                <div>
                  <strong>Products</strong>
                  <span>Select products</span>
                </div>
              </div>
              <div className="td-source-box">
                <label>Products</label>
                <div className="td-source-row">
                  <span className="td-source-placeholder">
                    {sourceKind === "product" ? selectionLabel : "Select up to 100 products"}
                  </span>
                  <button
                    type="button"
                    className="td-source-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      pickProducts();
                    }}
                  >
                    Select products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AdminShell>
      </div>
    );
  }

  if (step === "generating") {
    return (
      <div className="td-root">
        <AdminShell step="generating">
          <div className="td-generating">
            <div className="td-spinner" aria-hidden />
            <h2>✨ Generating AI Questions…</h2>
            <p>
              Building a preview quiz for <strong>{shopUrl}</strong>. This may take a moment.
            </p>
          </div>
        </AdminShell>
      </div>
    );
  }

  return (
    <div className="td-root">
      <AdminShell
        step="review"
        footer={
          <div className="td-footer-bar">
            <span className="td-footer-status">{questions.length} questions</span>
            <div className="td-footer-actions">
              <button type="button" className="td-btn td-btn--ghost" onClick={() => setStep("url")}>
                Back
              </button>
              <button
                type="button"
                className="td-btn td-btn--primary"
                onClick={() => setStep("contact")}
              >
                Create quiz
              </button>
            </div>
          </div>
        }
      >
        <div className="td-review-head">
          <h2>Review your quiz</h2>
          <p>
            Add, remove, or edit your AI generated quiz questions and answers. Changes can be made
            later using the quiz editor.
          </p>
        </div>

        <div className="td-review-toolbar">
          <div className="td-review-progress" aria-live="polite">
            <span className="td-review-progress-label">
              Question {activeQuestionIndex + 1} of {questions.length}
            </span>
            <div className="td-review-dots" role="tablist" aria-label="Questions">
              {questions.map((q, i) => (
                <button
                  key={q.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activeQuestionIndex}
                  aria-label={`Go to question ${i + 1}`}
                  className={`td-review-dot${i === activeQuestionIndex ? " td-review-dot--active" : ""}${i < activeQuestionIndex ? " td-review-dot--done" : ""}`}
                  onClick={() => setActiveQuestionIndex(i)}
                />
              ))}
            </div>
          </div>
          <button type="button" className="td-add-question" onClick={addQuestion}>
            + Add question
          </button>
        </div>

        {activeQuestion && (
          <article key={activeQuestion.id} className="td-question-card">
            <div className="td-question-body">
              <span className="td-q-num" aria-hidden>
                {activeQuestionIndex + 1}
              </span>
              <div className="td-q-main">
                <input
                  className="td-q-input"
                  type="text"
                  value={activeQuestion.text}
                  onChange={(e) => updateQuestionText(activeQuestion.id, e.target.value)}
                  aria-label={`Question ${activeQuestionIndex + 1}`}
                />
                <div className="td-q-meta">
                  <select
                    className="td-q-type"
                    value={activeQuestion.type}
                    onChange={(e) =>
                      changeQuestionType(activeQuestion.id, e.target.value as QuestionType)
                    }
                    aria-label="Question type"
                  >
                    <option value="input">Input field</option>
                    <option value="multiple">Multiple choice (options)</option>
                  </select>
                  <button
                    type="button"
                    className="td-delete-q"
                    onClick={() => removeQuestion(activeQuestion.id)}
                    disabled={questions.length <= 1}
                  >
                    Delete question
                  </button>
                </div>
                {activeQuestion.type === "multiple" && activeQuestion.options && (
                  <div className="td-options">
                    <p className="td-options-label">Answer options</p>
                    {activeQuestion.options.map((opt, optIndex) => (
                      <div key={`${activeQuestion.id}-opt-${optIndex}`} className="td-option-row">
                        <input
                          className="td-option-input"
                          type="text"
                          value={opt}
                          onChange={(e) =>
                            updateOption(activeQuestion.id, optIndex, e.target.value)
                          }
                          aria-label={`Option ${optIndex + 1}`}
                        />
                        <button
                          type="button"
                          className="td-option-delete"
                          aria-label="Remove option"
                          disabled={activeQuestion.options!.length <= 2}
                          onClick={() => removeOption(activeQuestion.id, optIndex)}
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="td-add-option"
                      onClick={() => addOption(activeQuestion.id)}
                    >
                      + Add option
                    </button>
                  </div>
                )}
              </div>
            </div>
          </article>
        )}

        <div className="td-review-nav">
          <button
            type="button"
            className="td-btn td-btn--ghost td-review-nav-btn"
            disabled={isFirstQuestion}
            onClick={() => setActiveQuestionIndex((i) => i - 1)}
          >
            ← Previous question
          </button>
          <button
            type="button"
            className="td-btn td-btn--ghost td-review-nav-btn"
            disabled={isLastQuestion}
            onClick={() => setActiveQuestionIndex((i) => i + 1)}
          >
            Next question →
          </button>
        </div>
      </AdminShell>
    </div>
  );
}
