"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mapApiQuestionsToDemo, type DemoQuestion } from "@/lib/quiz-preview/map-questions";
import { normalizeShopUrl } from "@/lib/quiz-preview/normalize-shop";
import type { QuizPreviewApiQuestion } from "@/lib/quiz-preview/types";

type DemoStep =
  | "url"
  | "select"
  | "scanning"
  | "generated"
  | "quiz"
  | "generating"
  | "review"
  | "recommendations";

type QuestionType = DemoQuestion["type"];

type SourceKind = "collection" | "product" | null;

type RecommendationPreview = {
  id: string;
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  gallery: Array<{ url: string; altText?: string }>;
  price?: string;
  priceRange?: string;
  subtitle?: string;
  url?: string;
  description?: string;
  reason?: string;
  score?: number;
  status?: string;
  productType?: string;
  tags: string[];
  availableForSale?: boolean;
  variants: Array<{
    id: string;
    title?: string;
    price?: string;
    availableForSale?: boolean;
    image?: string;
  }>;
};

type RecommendationUiCopy = {
  summary?: string;
  expertAdvice?: {
    title?: string;
    body?: string;
  };
  marketTrends?: {
    title?: string;
    body?: string;
  };
  bundle?: {
    title?: string;
    subtitle?: string;
    tagline?: string;
    discountLabel?: string;
    discountPercent?: number;
  };
};

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

function defaultAnswerForQuestion(question: DemoQuestion): string {
  if (question.type === "input") {
    return "";
  }
  return question.options?.[0] ?? "Answer";
}

function buildDefaultAnswersMap(questions: DemoQuestion[]): Record<string, string> {
  return questions.reduce<Record<string, string>>((acc, question) => {
    acc[question.id] = defaultAnswerForQuestion(question);
    return acc;
  }, {});
}

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
              <Link href="/ai-quiz-and-recommendations" className="td-back-link">
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

function toRecommendationQuestions(questions: DemoQuestion[]): QuizPreviewApiQuestion[] {
  return questions.map((question) => ({
    type: question.type === "input" ? "input" : "choice",
    question: question.text,
    answers: question.options ?? [],
    inputType:
      question.type === "input" && /email/i.test(question.text)
        ? "email"
        : question.type === "input"
          ? "text"
          : undefined,
  }));
}

function mapRecommendationProducts(
  products: Array<Record<string, unknown>>,
  shop: string,
): RecommendationPreview[] {
  return products.slice(0, 6).map((product, index) => {
    const nested =
      typeof product.productData === "object" && product.productData !== null
        ? (product.productData as Record<string, unknown>)
        : null;
    const source = nested ?? product;
    const handle = typeof source.handle === "string" ? source.handle : undefined;
    const shopDomain = normalizeShopUrl(shop);
    const gallery: RecommendationPreview["gallery"] = Array.isArray(source.images)
      ? source.images.reduce<RecommendationPreview["gallery"]>((acc, item) => {
          if (typeof item !== "object" || item === null) return acc;
          const img = item as Record<string, unknown>;
          if (typeof img.url !== "string") return acc;
          acc.push({
            url: img.url,
            altText: typeof img.altText === "string" ? img.altText : undefined,
          });
          return acc;
        }, [])
      : [];
    const variants: RecommendationPreview["variants"] = Array.isArray(source.variants)
      ? source.variants.reduce<RecommendationPreview["variants"]>((acc, variant) => {
          if (typeof variant !== "object" || variant === null) return acc;
          const v = variant as Record<string, unknown>;
          const id = String(v.id ?? "");
          if (!id) return acc;
          acc.push({
            id,
            title: typeof v.title === "string" ? v.title : undefined,
            price:
              typeof v.price === "string" || typeof v.price === "number"
                ? String(v.price)
                : undefined,
            availableForSale:
              typeof v.availableForSale === "boolean" ? v.availableForSale : undefined,
            image: typeof v.image === "string" ? v.image : undefined,
          });
          return acc;
        }, [])
      : [];

    return {
      id: String(product.productId ?? source.id ?? index + 1),
      title: String(source.title ?? source.name ?? `Recommended product ${index + 1}`),
      imageUrl:
        typeof source.image === "string"
          ? source.image
          : typeof source.imageUrl === "string"
            ? source.imageUrl
            : undefined,
      imageAlt: typeof source.imageAlt === "string" ? source.imageAlt : undefined,
      gallery,
      price:
        typeof source.price === "string" || typeof source.price === "number"
          ? String(source.price)
          : undefined,
      priceRange:
        typeof source.priceRange === "string" || typeof source.priceRange === "number"
          ? String(source.priceRange)
          : undefined,
      subtitle: typeof source.vendor === "string" ? source.vendor : undefined,
      description: typeof source.description === "string" ? source.description : undefined,
      reason:
        typeof product.reason === "string"
          ? product.reason
          : typeof source.quizDescription === "string"
            ? source.quizDescription
            : undefined,
      score: typeof product.score === "number" ? product.score : undefined,
      status: typeof source.status === "string" ? source.status : undefined,
      productType: typeof source.productType === "string" ? source.productType : undefined,
      tags: Array.isArray(source.tags)
        ? source.tags.filter((tag): tag is string => typeof tag === "string")
        : [],
      availableForSale:
        typeof source.availableForSale === "boolean" ? source.availableForSale : undefined,
      variants,
      url:
        typeof source.url === "string"
          ? source.url
          : shopDomain && handle
            ? `https://${shopDomain}/products/${handle}`
            : undefined,
    };
  });
}

function formatDisplayPrice(raw?: string): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();
  if (!trimmed) return undefined;
  if (/^usd\s+/i.test(trimmed)) {
    return trimmed.replace(/^usd\s+/i, "$");
  }
  if (trimmed.startsWith("$")) return trimmed;
  if (/^\d/.test(trimmed)) return `$${trimmed}`;
  return trimmed;
}

function parsePriceAmount(raw?: string): number | null {
  if (!raw) return null;
  const match = raw.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  if (!match) return null;
  const value = Number.parseFloat(match[1]);
  return Number.isFinite(value) ? value : null;
}

function formatUsdAmount(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function TryDemoFlow() {
  const [step, setStep] = useState<DemoStep>("url");
  const [shopUrl, setShopUrl] = useState("");
  const [sourceKind, setSourceKind] = useState<SourceKind>(null);
  const [selectionLabel, setSelectionLabel] = useState("");
  const [questions, setQuestions] = useState<DemoQuestion[]>(INITIAL_QUESTIONS);
  const [installUrl, setInstallUrl] = useState("");
  const [previewQuizId, setPreviewQuizId] = useState("");
  const [previewToken, setPreviewToken] = useState("");
  const [generateError, setGenerateError] = useState<string | null>(null);
  const [createQuizError, setCreateQuizError] = useState<string | null>(null);
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationPreview[]>([]);
  const [recommendationUiCopy, setRecommendationUiCopy] = useState<RecommendationUiCopy | null>(
    null,
  );
  const [generatedRevealCount, setGeneratedRevealCount] = useState(0);
  const [demoQuestionIndex, setDemoQuestionIndex] = useState(0);
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<Record<string, boolean>>({});
  const [questionAnswers, setQuestionAnswers] = useState<Record<string, string>>(
    buildDefaultAnswersMap(INITIAL_QUESTIONS),
  );
  const [cartDemoNoteOpen, setCartDemoNoteOpen] = useState(false);
  const generateAbortRef = useRef<AbortController | null>(null);
  const recommendationsInFlightRef = useRef(false);
  const canProceedSelect = sourceKind !== null && selectionLabel.length > 0;

  const footerStatus = useMemo(() => {
    if (!sourceKind) return "No items selected";
    return sourceKind === "collection" ? `1 collection: ${selectionLabel}` : selectionLabel;
  }, [sourceKind, selectionLabel]);

  const startGenerating = useCallback(() => {
    setStep("generating");
  }, []);

  useEffect(() => {
    if (step !== "scanning") return;

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
        setPreviewQuizId(payload.data.previewQuizId ?? "");
        setPreviewToken(payload.data.previewToken ?? "");
        setQuestions(mapped);
        setQuestionAnswers(buildDefaultAnswersMap(mapped));
        setActiveQuestionIndex(0);
        setDemoQuestionIndex(0);
        setGeneratedRevealCount(0);
        setRecommendations([]);
        setRecommendationUiCopy(null);
        setGenerateError(null);
        setStep("generated");
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

  useEffect(() => {
    if (step !== "generated") return;
    if (generatedRevealCount >= questions.length) return;
    const timer = window.setTimeout(() => {
      setGeneratedRevealCount((prev) => Math.min(prev + 1, questions.length));
    }, 400);
    return () => window.clearTimeout(timer);
  }, [generatedRevealCount, questions.length, step]);

  const showCartDemoNote = useCallback(() => {
    setCartDemoNoteOpen(true);
  }, []);

  const closeCartDemoNote = useCallback(() => {
    setCartDemoNoteOpen(false);
  }, []);

  useEffect(() => {
    if (step !== "recommendations") setCartDemoNoteOpen(false);
  }, [step]);

  useEffect(() => {
    if (!cartDemoNoteOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCartDemoNote();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [cartDemoNoteOpen, closeCartDemoNote]);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = normalizeShopUrl(shopUrl);
    if (!normalized) return;
    setShopUrl(normalized);
    setGenerateError(null);
    setPreviewQuizId("");
    setPreviewToken("");
    setSourceKind(null);
    setSelectionLabel("");
    setGeneratedRevealCount(0);
    setDemoQuestionIndex(0);
    setQuestionAnswers(buildDefaultAnswersMap(INITIAL_QUESTIONS));
    setUserSelectedAnswers({});
    setStep("scanning");
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
    setQuestionAnswers((prev) => {
      if (!(id in prev)) return prev;
      return { ...prev, [id]: text && /email/i.test(text) ? "" : prev[id] };
    });
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
    setQuestionAnswers((prev) => {
      const current = prev[qId];
      if (!current || index !== 0) return prev;
      return { ...prev, [qId]: value || "Answer" };
    });
  };

  const changeQuestionType = (id: string, type: QuestionType) => {
    let nextDefaultAnswer: string | null = null;
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== id) return q;
        if (type === "input") {
          nextDefaultAnswer = "";
          return { ...q, type, options: undefined };
        }
        const nextOptions = q.options?.length ? q.options : ["Option 1", "Option 2"];
        nextDefaultAnswer = nextOptions[0] ?? "Answer";
        return {
          ...q,
          type,
          options: nextOptions,
        };
      }),
    );
    setQuestionAnswers((prev) => {
      if (!nextDefaultAnswer) return prev;
      return {
        ...prev,
        [id]: nextDefaultAnswer,
      };
    });
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
    let nextDefaultAnswer: string | null = null;
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.id !== qId || !q.options || q.options.length <= 2) return q;
        const nextOptions = q.options.filter((_, i) => i !== index);
        if (index === 0) {
          nextDefaultAnswer = nextOptions[0] ?? "Answer";
        }
        return { ...q, options: nextOptions };
      }),
    );
    setQuestionAnswers((prev) => {
      if (index !== 0 || !nextDefaultAnswer) return prev;
      return { ...prev, [qId]: nextDefaultAnswer };
    });
  };

  const removeQuestion = (id: string) => {
    setQuestions((prev) => {
      if (prev.length <= 1) return prev;
      const next = prev.filter((q) => q.id !== id);
      setActiveQuestionIndex((i) => Math.min(i, Math.max(0, next.length - 1)));
      return next;
    });
    setQuestionAnswers((prev) => {
      if (!(id in prev)) return prev;
      const next = { ...prev };
      delete next[id];
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
    setQuestionAnswers((prev) => ({ ...prev, [id]: "Option 1" }));
  };

  const activeQuestion = questions[activeQuestionIndex];
  const isFirstQuestion = activeQuestionIndex === 0;
  const isLastQuestion = activeQuestionIndex === questions.length - 1;
  const demoQuestion = questions[demoQuestionIndex];
  const isLastDemoQuestion = demoQuestionIndex === questions.length - 1;

  const handleShowRecommendations = useCallback(async () => {
    if (recommendationsInFlightRef.current) return;

    recommendationsInFlightRef.current = true;
    setCreateQuizError(null);
    setIsCreatingQuiz(true);

    try {
      const recommendationQuestions = toRecommendationQuestions(questions);
      const recommendationAnswers = questions.map((question) => {
        const answer = questionAnswers[question.id];
        if (typeof answer === "string" && answer.trim().length > 0) return answer.trim();
        return defaultAnswerForQuestion(question);
      });

      const res = await fetch("/api/quiz-preview/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shop: shopUrl,
          previewQuizId: previewQuizId || undefined,
          previewToken: previewToken || undefined,
          questions: recommendationQuestions,
          answers: recommendationAnswers,
        }),
      });

      const payload = (await res.json()) as {
        success: boolean;
        data?: {
          products?: Array<Record<string, unknown>>;
          uiCopy?: RecommendationUiCopy;
        };
        error?: string;
      };

      if (!payload.success || !payload.data) {
        setCreateQuizError(payload.error ?? "Could not generate recommendations.");
        return;
      }

      const mappedRecommendations = mapRecommendationProducts(payload.data.products ?? [], shopUrl);
      if (!mappedRecommendations.length) {
        setCreateQuizError("No recommendations found for this quiz yet.");
        return;
      }

      setRecommendations(mappedRecommendations);
      setRecommendationUiCopy(payload.data.uiCopy ?? null);
      setStep("recommendations");
    } catch {
      setCreateQuizError("Could not generate recommendations. Please try again.");
    } finally {
      recommendationsInFlightRef.current = false;
      setIsCreatingQuiz(false);
    }
  }, [previewQuizId, previewToken, questionAnswers, questions, shopUrl]);

  const handleSelectDemoAnswer = (question: DemoQuestion, answer: string) => {
    if (isCreatingQuiz) return;

    setQuestionAnswers((prev) => ({ ...prev, [question.id]: answer }));
    setUserSelectedAnswers((prev) => ({ ...prev, [question.id]: true }));
    if (demoQuestionIndex >= questions.length - 1) {
      void handleShowRecommendations();
      return;
    }
    setDemoQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
  };

  if (step === "scanning") {
    return (
      <div className="td-root">
        <div className="td-url-page">
          <main className="td-url-main">
            <div className="td-scan-status">
              <span className="td-scan-spinner" aria-hidden />
              <strong>Scanning https://{shopUrl}/</strong>
            </div>
            <p className="td-demo-progress">Generating questions...</p>
            <p className="td-url-sub">Please wait while we analyze products and collections.</p>
          </main>
        </div>
      </div>
    );
  }

  if (step === "generated") {
    const visibleQuestions = questions.slice(0, generatedRevealCount);
    const allRevealed = generatedRevealCount >= questions.length;
    return (
      <div className="td-root">
        <div className="td-url-page">
          <main className="td-generated-main">
            {allRevealed ? (
              <div className="td-generated-done-row">
                <div className="td-scan-status">
                  <span className="td-scan-done" aria-hidden>
                    ✓
                  </span>
                  <strong>Done</strong>
                </div>
              </div>
            ) : (
              <div className="td-scan-status">
                <span className="td-scan-spinner" aria-hidden />
                <strong>Generating AI logic...</strong>
              </div>
            )}
            <section className="td-generated-card">
              <h2>Your Quiz</h2>
              {visibleQuestions.map((question, index) => (
                <article key={question.id} className="td-generated-question">
                  <p>
                    {index + 1}. {question.text}
                  </p>
                  {question.type === "multiple" && question.options ? (
                    <div className="td-generated-options">
                      {question.options.map((option) => (
                        <button key={`${question.id}-${option}`} type="button" disabled>
                          {option}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="td-generated-input">Input field</div>
                  )}
                </article>
              ))}
            </section>
            {allRevealed && (
              <button
                type="button"
                className="td-btn td-btn--primary td-start-demo-btn"
                onClick={() => setStep("quiz")}
              >
                <span aria-hidden>▷</span> Demo Quiz
              </button>
            )}
          </main>
        </div>
      </div>
    );
  }

  if (step === "quiz" && demoQuestion) {
    const selectedAnswer = questionAnswers[demoQuestion.id] ?? "";
    return (
      <div className="td-root">
        <div className="td-url-page">
          <main className="td-generated-main">
            <span className="td-url-badge">✦ AI Quiz Builder Demo</span>
            <h1 className="td-demo-title">AI Quiz</h1>
            <section className="td-generated-card">
              <p className="td-demo-progress">
                Question {demoQuestionIndex + 1} of {questions.length}
              </p>
              <article className="td-generated-question td-generated-question--active">
                <p>{demoQuestion.text}</p>
                {demoQuestion.type === "multiple" && demoQuestion.options ? (
                  <div className="td-generated-options td-generated-options--active">
                    {demoQuestion.options.map((option) => (
                      <button
                        key={`${demoQuestion.id}-${option}`}
                        type="button"
                        disabled={isCreatingQuiz}
                        className={
                          userSelectedAnswers[demoQuestion.id] && selectedAnswer === option
                            ? "is-selected"
                            : ""
                        }
                        onClick={() => handleSelectDemoAnswer(demoQuestion, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <form
                    className="td-demo-input-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (isCreatingQuiz) return;
                      if (!selectedAnswer.trim()) return;
                      handleSelectDemoAnswer(demoQuestion, selectedAnswer.trim());
                    }}
                  >
                    <input
                      className="td-option-input"
                      type={/email/i.test(demoQuestion.text) ? "email" : "text"}
                      value={selectedAnswer}
                      placeholder={
                        /email/i.test(demoQuestion.text) ? "Your email address" : "Type your answer"
                      }
                      onChange={(e) => {
                        setQuestionAnswers((prev) => ({
                          ...prev,
                          [demoQuestion.id]: e.target.value,
                        }));
                        setUserSelectedAnswers((prev) => ({ ...prev, [demoQuestion.id]: true }));
                      }}
                      required
                    />
                    <button type="submit" className="td-btn td-btn--primary">
                      {isLastDemoQuestion ? (
                        isCreatingQuiz ? (
                          <span className="td-btn-spinner" aria-label="Loading" />
                        ) : (
                          "Finish Quiz"
                        )
                      ) : (
                        "Next Question"
                      )}
                    </button>
                  </form>
                )}
              </article>
            </section>
            <div className="td-quiz-actions">
              <button
                type="button"
                className="td-btn td-btn--ghost"
                onClick={() => setDemoQuestionIndex((prev) => Math.max(prev - 1, 0))}
                disabled={demoQuestionIndex === 0 || isCreatingQuiz}
              >
                Previous
              </button>
              <button
                type="button"
                className="td-btn td-btn--ghost"
                onClick={() => {
                  if (isCreatingQuiz) return;
                  setDemoQuestionIndex(0);
                  setQuestionAnswers(buildDefaultAnswersMap(questions));
                  setUserSelectedAnswers({});
                }}
                disabled={isCreatingQuiz}
              >
                Restart Quiz
              </button>
            </div>
            {createQuizError && (
              <p className="td-review-error" role="alert">
                {createQuizError}
              </p>
            )}
          </main>
        </div>
      </div>
    );
  }

  if (step === "recommendations") {
    const shopperName = questions.reduce<string | null>((name, question) => {
      if (name) return name;
      if (question.type !== "input") return null;
      if (/email/i.test(question.text)) return null;
      const answer = questionAnswers[question.id]?.trim();
      return answer ? answer : null;
    }, null);

    const bundleProducts = recommendations.slice(0, 3);

    const bundleImages = bundleProducts
      .map((product) => ({
        id: product.id,
        src: product.imageUrl || product.gallery[0]?.url,
        alt: product.imageAlt || product.title,
      }))
      .filter((item): item is { id: string; src: string; alt: string } => Boolean(item.src));

    const bundleDiscountPercent = Math.min(
      50,
      Math.max(5, recommendationUiCopy?.bundle?.discountPercent ?? 15),
    );

    const bundlePriceParts = bundleProducts
      .map((product) => parsePriceAmount(product.price || product.priceRange))
      .filter((amount): amount is number => amount !== null);

    const bundleCompareTotal =
      bundlePriceParts.length > 0
        ? bundlePriceParts.reduce((sum, amount) => sum + amount, 0)
        : null;

    const bundleOfferTotal =
      bundleCompareTotal !== null
        ? Math.round(bundleCompareTotal * (1 - bundleDiscountPercent / 100) * 100) / 100
        : null;

    const bundleSavings =
      bundleCompareTotal !== null && bundleOfferTotal !== null
        ? Math.round((bundleCompareTotal - bundleOfferTotal) * 100) / 100
        : null;

    const summaryWithoutName = recommendationUiCopy?.summary
      ? recommendationUiCopy.summary.replace(/^((hi|hello)\s+[^,!.]+[,.!]\s*)/i, "").trim()
      : undefined;

    return (
      <div className="td-root">
        <div className="td-reco-page">
          <div className="td-reco-page__wrap">
            <div className="td-reco-page__head">
              {shopperName && <h1>Hello {shopperName}!</h1>}
              {summaryWithoutName && <p>{summaryWithoutName}</p>}
            </div>

            <section className="td-reco-v2-products">
              <h2>Recommended Products for You</h2>
              <div className="td-reco-v2-grid">
                {recommendations.map((product) => (
                  <article key={product.id} className="td-reco-v2-card">
                    {product.imageUrl ? (
                      <div className="td-reco-v2-image-wrap">
                        <Image
                          src={product.imageUrl}
                          alt={product.imageAlt || product.title}
                          className="td-reco-v2-image"
                          fill
                          sizes="(max-width: 820px) 90vw, 320px"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="td-reco-v2-image-wrap td-reco-v2-image-wrap--placeholder" />
                    )}
                    <p className="td-reco-v2-title">{product.title}</p>
                    {(product.price || product.priceRange) && (
                      <p className="td-reco-v2-price">
                        {formatDisplayPrice(product.price || product.priceRange)}
                      </p>
                    )}
                    <button type="button" className="td-reco-v2-cart" onClick={showCartDemoNote}>
                      Add to Cart
                    </button>
                  </article>
                ))}
              </div>

              {(recommendationUiCopy?.expertAdvice || recommendationUiCopy?.marketTrends) && (
                <div className="td-reco-v2-insights">
                  {recommendationUiCopy?.expertAdvice && (
                    <article className="td-reco-v2-insight-card">
                      <Image
                        src="/ai-quiz-landing/before-after/quiz-expert-icon.png"
                        alt=""
                        aria-hidden
                        className="td-reco-v2-insight-icon"
                        width={56}
                        height={56}
                        unoptimized
                      />
                      <h3>{recommendationUiCopy.expertAdvice.title || "Expert Advice"}</h3>
                      {recommendationUiCopy.expertAdvice.body && (
                        <p>{recommendationUiCopy.expertAdvice.body}</p>
                      )}
                    </article>
                  )}
                  {recommendationUiCopy?.marketTrends && (
                    <article className="td-reco-v2-insight-card">
                      <Image
                        src="/ai-quiz-landing/before-after/quiz-market-icon.png"
                        alt=""
                        aria-hidden
                        className="td-reco-v2-insight-icon"
                        width={56}
                        height={56}
                        unoptimized
                      />
                      <h3>{recommendationUiCopy.marketTrends.title || "Market Trends"}</h3>
                      {recommendationUiCopy.marketTrends.body && (
                        <p>{recommendationUiCopy.marketTrends.body}</p>
                      )}
                    </article>
                  )}
                </div>
              )}
            </section>

            {recommendationUiCopy?.bundle && (
              <aside className="td-reco-v2-upsell" aria-label="Bundle offer">
                <span className="td-reco-v2-upsell-badge">
                  {recommendationUiCopy.bundle.discountLabel ||
                    `Save ${bundleDiscountPercent}% — bundle deal`}
                </span>
                <p className="td-reco-v2-upsell-kicker">
                  Buy together as a bundle and get a discount on your full routine.
                </p>

                {bundleImages.length > 0 && (
                  <div className="td-reco-v2-bundle-images">
                    {bundleImages.map((image) => (
                      <div key={`bundle-${image.id}`} className="td-reco-v2-bundle-image-wrap">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          className="td-reco-v2-bundle-image"
                          fill
                          sizes="132px"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                )}

                <h3 className="td-reco-v2-upsell-title">
                  {recommendationUiCopy.bundle.title || "Your Perfect Daily Bundle"}
                </h3>
                {recommendationUiCopy.bundle.subtitle && (
                  <p className="td-reco-v2-upsell-desc">{recommendationUiCopy.bundle.subtitle}</p>
                )}
                {recommendationUiCopy.bundle.tagline && (
                  <p className="td-reco-v2-upsell-tagline">{recommendationUiCopy.bundle.tagline}</p>
                )}

                {bundleCompareTotal !== null && bundleOfferTotal !== null && (
                  <div className="td-reco-v2-upsell-pricing">
                    <span className="td-reco-v2-upsell-compare">
                      {formatUsdAmount(bundleCompareTotal)}
                    </span>
                    <span className="td-reco-v2-upsell-offer">
                      {formatUsdAmount(bundleOfferTotal)}
                    </span>
                    {bundleSavings !== null && bundleSavings > 0 && (
                      <span className="td-reco-v2-upsell-save">
                        You save {formatUsdAmount(bundleSavings)}
                      </span>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  className="td-reco-v2-cart td-reco-v2-upsell-cta"
                  onClick={showCartDemoNote}
                >
                  Add Bundle to Cart
                </button>
              </aside>
            )}

            <div className="td-reco-v2-retake">
              <button
                type="button"
                className="td-reco-v2-retake-link"
                onClick={() => {
                  setDemoQuestionIndex(0);
                  setStep("quiz");
                }}
              >
                Retake Quiz
              </button>
            </div>
            <p className="td-reco-v2-install-note">
              Want to try the full AI Quiz app on your store?{" "}
              <a
                href="https://apps.shopify.com/ai-quiz-recommendation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install from Shopify App Store
              </a>
              .
            </p>
          </div>
        </div>

        {cartDemoNoteOpen && (
          <div
            className="td-cart-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="td-cart-modal-title"
          >
            <button
              type="button"
              className="td-cart-modal__backdrop"
              aria-label="Close dialog"
              onClick={closeCartDemoNote}
            />
            <div className="td-cart-modal__panel">
              <button
                type="button"
                className="td-cart-modal__close"
                aria-label="Close"
                onClick={closeCartDemoNote}
              >
                ×
              </button>
              <h2 id="td-cart-modal-title" className="td-cart-modal__title">
                This is a demo preview
              </h2>
              <p className="td-cart-modal__text">
                Add to Cart is not available in this demo. To offer personalized recommendations,
                then checkout on your store, install AI Quiz from the Shopify App Store, connect
                your product catalog, and publish your quiz. You will see the best results when
                shoppers use it on your live storefront.
              </p>
              <a
                href="https://apps.shopify.com/ai-quiz-recommendation"
                target="_blank"
                rel="noopener noreferrer"
                className="td-cart-modal__cta"
              >
                Install on Shopify App Store
              </a>
            </div>
          </div>
        )}
      </div>
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
                placeholder="https://yourstore.myshopify.com"
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
                onClick={handleShowRecommendations}
                disabled={isCreatingQuiz}
              >
                {isCreatingQuiz ? "Loading..." : "Show recommendations"}
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
                <div className="td-options">
                  <p className="td-options-label">Answer used for recommendations</p>
                  {activeQuestion.type === "multiple" && activeQuestion.options ? (
                    <select
                      className="td-q-type"
                      value={questionAnswers[activeQuestion.id] ?? activeQuestion.options[0] ?? ""}
                      onChange={(e) =>
                        setQuestionAnswers((prev) => ({
                          ...prev,
                          [activeQuestion.id]: e.target.value,
                        }))
                      }
                      aria-label="Selected answer"
                    >
                      {activeQuestion.options.map((option, index) => (
                        <option key={`${activeQuestion.id}-answer-${index}`} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className="td-option-input"
                      type={/email/i.test(activeQuestion.text) ? "email" : "text"}
                      value={
                        questionAnswers[activeQuestion.id] ??
                        defaultAnswerForQuestion(activeQuestion)
                      }
                      onChange={(e) =>
                        setQuestionAnswers((prev) => ({
                          ...prev,
                          [activeQuestion.id]: e.target.value,
                        }))
                      }
                      placeholder={
                        /email/i.test(activeQuestion.text) ? "Your email address" : "Enter answer"
                      }
                      aria-label="Input answer"
                    />
                  )}
                </div>
              </div>
            </div>
          </article>
        )}

        {createQuizError && (
          <p className="td-review-error" role="alert">
            {createQuizError}
          </p>
        )}

        {recommendations.length > 0 && (
          <section className="td-reco-panel">
            <h3>Recommended products preview</h3>
            <div className="td-reco-grid">
              {recommendations.map((product) => (
                <article key={product.id} className="td-reco-card">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      className="td-reco-image"
                      width={320}
                      height={180}
                      unoptimized
                    />
                  ) : (
                    <div className="td-reco-image td-reco-image--placeholder" />
                  )}
                  <p className="td-reco-title">{product.title}</p>
                  {product.subtitle && <p className="td-reco-subtitle">{product.subtitle}</p>}
                  {product.price && <p className="td-reco-price">{product.price}</p>}
                  {product.url && (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="td-reco-link"
                    >
                      View product →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </section>
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
