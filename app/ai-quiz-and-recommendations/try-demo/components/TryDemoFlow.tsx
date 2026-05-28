"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mapApiQuestionsToDemo, type DemoQuestion } from "@/lib/quiz-preview/map-questions";
import { normalizeShopUrl } from "@/lib/quiz-preview/normalize-shop";
import type { QuizPreviewApiQuestion } from "@/lib/quiz-preview/types";
import { QuizContactForm } from "./QuizContactForm";

type DemoStep = "url" | "select" | "generating" | "review" | "recommendations" | "contact";

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

function toRecommendationAnswers(questions: DemoQuestion[]): string[] {
  return questions.map((question) => {
    if (question.type === "input") {
      return /email/i.test(question.text) ? "preview@example.com" : "Preview User";
    }
    return question.options?.[0] ?? "Answer";
  });
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

export function TryDemoFlow() {
  const [step, setStep] = useState<DemoStep>("url");
  const [shopUrl, setShopUrl] = useState("www.gharsoaps.shop");
  const [sourceKind, setSourceKind] = useState<SourceKind>(null);
  const [selectionLabel, setSelectionLabel] = useState("");
  const [questions, setQuestions] = useState<DemoQuestion[]>(INITIAL_QUESTIONS);
  const [installUrl, setInstallUrl] = useState("");
  const [generateError, setGenerateError] = useState<string | null>(null);
  const [createQuizError, setCreateQuizError] = useState<string | null>(null);
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [recommendations, setRecommendations] = useState<RecommendationPreview[]>([]);
  const [recommendationUiCopy, setRecommendationUiCopy] = useState<RecommendationUiCopy | null>(
    null,
  );
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [emailValue, setEmailValue] = useState("");
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

  const handleShowRecommendations = useCallback(async () => {
    setCreateQuizError(null);
    setIsCreatingQuiz(true);

    try {
      const recommendationQuestions = toRecommendationQuestions(questions);
      const recommendationAnswers = toRecommendationAnswers(questions);

      const res = await fetch("/api/quiz-preview/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shop: shopUrl,
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
      setIsCreatingQuiz(false);
    }
  }, [questions, shopUrl]);

  const handleEmailPopupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailValue.trim()) return;
    setShowEmailPopup(false);
    setStep("contact");
  };

  if (step === "contact") {
    return (
      <QuizContactForm
        shopUrl={shopUrl}
        installUrl={installUrl || undefined}
        onBack={() => setStep(recommendations.length ? "recommendations" : "review")}
      />
    );
  }

  if (step === "recommendations") {
    return (
      <div className="td-root">
        <div className="td-reco-page">
          <div className="td-reco-page__wrap">
            <div className="td-reco-page__head">
              <h1>AI Recommendations</h1>
              <p>
                {recommendationUiCopy?.summary ??
                  "Based on quiz answers, these products are the best fit for this shopper."}
              </p>
            </div>

            <section className="td-reco-page__products">
              {recommendations.map((product) => (
                <article key={product.id} className="td-reco-page__card">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt || product.title}
                      className="td-reco-page__image"
                      width={480}
                      height={320}
                      unoptimized
                    />
                  ) : (
                    <div className="td-reco-page__image td-reco-page__image--placeholder" />
                  )}
                  <div className="td-reco-page__meta">
                    <p className="td-reco-page__title">{product.title}</p>
                    {product.subtitle && (
                      <p className="td-reco-page__subtitle">{product.subtitle}</p>
                    )}
                    {product.price && <p className="td-reco-page__price">{product.price}</p>}
                    {product.priceRange && product.priceRange !== product.price && (
                      <p className="td-reco-page__price">Range: {product.priceRange}</p>
                    )}
                    {product.reason && <p className="td-reco-page__reason">{product.reason}</p>}
                    {typeof product.score === "number" && (
                      <p className="td-reco-page__score">Score: {product.score.toFixed(2)}</p>
                    )}
                    <div className="td-reco-page__chips">
                      {product.status && (
                        <span className="td-reco-page__chip">{product.status}</span>
                      )}
                      {typeof product.availableForSale === "boolean" && (
                        <span
                          className={`td-reco-page__chip${product.availableForSale ? " is-instock" : " is-outstock"}`}
                        >
                          {product.availableForSale ? "In stock" : "Out of stock"}
                        </span>
                      )}
                      {product.productType && (
                        <span className="td-reco-page__chip">{product.productType}</span>
                      )}
                    </div>
                    {product.tags.length > 0 && (
                      <p className="td-reco-page__tags">
                        Tags: {product.tags.slice(0, 4).join(", ")}
                      </p>
                    )}
                    {product.description && (
                      <p className="td-reco-page__description">{product.description}</p>
                    )}
                    {product.gallery.length > 1 && (
                      <div className="td-reco-page__gallery">
                        {product.gallery.slice(0, 6).map((image, index) => (
                          <Image
                            key={`${product.id}-gallery-${index}`}
                            src={image.url}
                            alt={image.altText || `${product.title} ${index + 1}`}
                            className="td-reco-page__thumb"
                            width={54}
                            height={54}
                            unoptimized
                          />
                        ))}
                      </div>
                    )}
                    {product.variants.length > 0 && (
                      <div className="td-reco-page__variants">
                        <p className="td-reco-page__variants-title">Variants</p>
                        <ul>
                          {product.variants.slice(0, 3).map((variant) => (
                            <li key={variant.id}>
                              <span>{variant.title || "Default"}</span>
                              {variant.price && <strong>{variant.price}</strong>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                  </div>
                </article>
              ))}
            </section>

            {(recommendationUiCopy?.expertAdvice ||
              recommendationUiCopy?.marketTrends ||
              recommendationUiCopy?.bundle) && (
              <section className="td-reco-page__insights">
                {recommendationUiCopy?.expertAdvice && (
                  <article className="td-reco-page__insight-card">
                    <h3>{recommendationUiCopy.expertAdvice.title ?? "Expert Advice"}</h3>
                    <p>{recommendationUiCopy.expertAdvice.body}</p>
                  </article>
                )}
                {recommendationUiCopy?.marketTrends && (
                  <article className="td-reco-page__insight-card">
                    <h3>{recommendationUiCopy.marketTrends.title ?? "Market Trends"}</h3>
                    <p>{recommendationUiCopy.marketTrends.body}</p>
                  </article>
                )}
                {recommendationUiCopy?.bundle && (
                  <article className="td-reco-page__bundle">
                    <h3>{recommendationUiCopy.bundle.title ?? "Bundle Recommendation"}</h3>
                    {recommendationUiCopy.bundle.subtitle && (
                      <p>{recommendationUiCopy.bundle.subtitle}</p>
                    )}
                    {recommendationUiCopy.bundle.tagline && (
                      <span>{recommendationUiCopy.bundle.tagline}</span>
                    )}
                  </article>
                )}
              </section>
            )}

            <div className="td-reco-page__actions">
              <button
                type="button"
                className="td-btn td-btn--ghost"
                onClick={() => setStep("review")}
              >
                Back to review
              </button>
              <button
                type="button"
                className="td-btn td-btn--primary"
                onClick={() => setShowEmailPopup(true)}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
        {showEmailPopup && (
          <div className="td-email-popup-backdrop" role="dialog" aria-modal="true">
            <form className="td-email-popup" onSubmit={handleEmailPopupSubmit}>
              <h3>Get your recommendations by email</h3>
              <p>
                Your recommendations are ready. Add your email and we&apos;ll share the full quiz
                preview with you.
              </p>
              <input
                type="email"
                required
                placeholder="you@store.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <div className="td-email-popup-actions">
                <button
                  type="button"
                  className="td-btn td-btn--ghost"
                  onClick={() => setShowEmailPopup(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="td-btn td-btn--primary">
                  Continue
                </button>
              </div>
            </form>
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
      {showEmailPopup && (
        <div className="td-email-popup-backdrop" role="dialog" aria-modal="true">
          <form className="td-email-popup" onSubmit={handleEmailPopupSubmit}>
            <h3>Get your recommendations by email</h3>
            <p>
              Your recommendations are ready. Add your email and we&apos;ll share the full quiz
              preview with you.
            </p>
            <input
              type="email"
              required
              placeholder="you@store.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <div className="td-email-popup-actions">
              <button
                type="button"
                className="td-btn td-btn--ghost"
                onClick={() => setShowEmailPopup(false)}
              >
                Cancel
              </button>
              <button type="submit" className="td-btn td-btn--primary">
                Continue
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
