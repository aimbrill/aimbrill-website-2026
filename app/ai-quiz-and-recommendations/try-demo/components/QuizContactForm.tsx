"use client";

import { useState } from "react";
import Link from "next/link";

type QuizContactFormProps = {
  shopUrl: string;
  installUrl?: string;
  onBack: () => void;
};

function RequiredMark() {
  return (
    <span className="td-contact-required" aria-hidden>
      *
    </span>
  );
}

const HOW_IT_WORKS = [
  {
    title: "Connect store",
    description: "Link your Shopify catalog, collections, and product data.",
    icon: "scan",
  },
  {
    title: "Generate questions",
    description: "AI builds a tailored quiz flow for your products and audience.",
    icon: "goals",
  },
  {
    title: "Build quiz",
    description: "Edit questions, answers, and recommendations before you publish.",
    icon: "build",
  },
  {
    title: "Grow results",
    description: "Launch on your storefront and track completions and revenue.",
    icon: "grow",
  },
] as const;

function HowItWorksIcon({ type }: { type: (typeof HOW_IT_WORKS)[number]["icon"] }) {
  if (type === "scan") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 15l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "goals") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 18V8M10 18V5M15 18v-6M20 18V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "build") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 10h6M9 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 18V8M10 18V5M15 18v-6M20 18V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 18L9 11l4 4 7-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShopifyBagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3L4 7v10l8 4 8-4V7l-8-4z"
        stroke="#008060"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 7v14M4 7l8 4 8-4" stroke="#008060" strokeWidth="1.5" />
    </svg>
  );
}

export function QuizContactForm({ shopUrl, installUrl, onBack }: QuizContactFormProps) {
  const [tab, setTab] = useState<"signin" | "create">("create");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const websiteDefault = shopUrl.startsWith("http") ? shopUrl : `https://${shopUrl}`;
  const shopifyInstallHref = installUrl || "https://apps.shopify.com/ai-quiz-recommendation";
  const safeShopifyInstallHref = (() => {
    if (!shopifyInstallHref) return "https://apps.shopify.com/ai-quiz-recommendation";
    if (/^https?:\/\//i.test(shopifyInstallHref)) return shopifyInstallHref;
    return `https://${shopifyInstallHref.replace(/^\/+/, "")}`;
  })();

  const handleContinueWithShopify = () => {
    if (typeof window === "undefined") return;
    const opened = window.open(safeShopifyInstallHref, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = safeShopifyInstallHref;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const country = (form.elements.namedItem("country") as HTMLSelectElement).value;
    const website = (form.elements.namedItem("website") as HTMLInputElement).value.trim();

    if (!name || !country || !website) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="td-contact-page">
        <div className="td-contact-glow" aria-hidden />
        <div className="td-contact-success">
          <div className="td-contact-success-icon" aria-hidden>
            ✓
          </div>
          <h2>Thanks — we&apos;ll be in touch!</h2>
          <p>Your request was received. Our team will help you finish setup on Shopify.</p>
          <div className="td-contact-success-actions">
            <Link
              href="/ai-quiz-and-recommendations"
              className="td-contact-btn td-contact-btn--gradient"
            >
              Back to home
            </Link>
            <a
              href={shopifyInstallHref}
              target="_blank"
              rel="noopener noreferrer"
              className="td-contact-btn td-contact-btn--shopify"
            >
              <ShopifyBagIcon />
              Install on Shopify
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="td-contact-page">
      <div className="td-contact-glow" aria-hidden />

      <div className="td-contact-layout">
        <div className="td-contact-left">
          <Link href="/ai-quiz-and-recommendations" className="td-contact-brand">
            <span className="td-contact-brand-icon" aria-hidden>
              <BrandIcon />
            </span>
            AI Quiz
          </Link>

          <h1>Launch your AI product quiz in minutes</h1>
          <p>
            Sign in or create an account to generate quizzes, product recommendations, and
            personalized shopping flows from your Shopify catalog.
          </p>

          <Link href="/ai-quiz-and-recommendations/" className="td-contact-wizard-link">
            <span aria-hidden>🪄</span> Try the quiz demo — paste any store URL
          </Link>

          <div className="td-contact-how">
            <p className="td-contact-how-label">How it works</p>
            <h3>From catalog to converting quiz</h3>
            <div className="td-contact-features">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} className="td-contact-feature">
                  <span className={`td-contact-feature-icon td-contact-feature-icon--${item.icon}`}>
                    <HowItWorksIcon type={item.icon} />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="td-contact-card">
          <div className="td-contact-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={tab === "signin"}
              className={tab === "signin" ? "is-active" : ""}
              onClick={() => setTab("signin")}
            >
              Sign in
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === "create"}
              className={tab === "create" ? "is-active" : ""}
              onClick={() => setTab("create")}
            >
              Create account
            </button>
          </div>

          <form className="td-contact-form" onSubmit={handleSubmit}>
            <label>
              <span className="td-contact-label-text">
                Full Name
                <RequiredMark />
              </span>
              <input type="text" name="name" required placeholder="Your name" />
            </label>

            <label>
              Email Address
              <input
                type="email"
                name="email"
                required
                placeholder="you@store.com"
                autoComplete="email"
              />
            </label>

            <label>
              Password (6+ characters)
              <span className="td-contact-password-wrap">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  minLength={6}
                  placeholder="••••••••"
                  autoComplete={tab === "create" ? "new-password" : "current-password"}
                />
                <button
                  type="button"
                  className="td-contact-eye"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </button>
              </span>
            </label>

            <div className="td-contact-form-row">
              <label>
                <span className="td-contact-label-text">
                  Country
                  <RequiredMark />
                </span>
                <select name="country" required defaultValue="">
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="US">United States</option>
                  <option value="IN">India</option>
                  <option value="GB">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
              </label>
              <label>
                <span className="td-contact-label-text">
                  Website URL
                  <RequiredMark />
                </span>
                <input
                  type="url"
                  name="website"
                  required
                  defaultValue={websiteDefault}
                  placeholder="https://yourstore.com"
                />
              </label>
            </div>

            <button type="submit" className="td-contact-btn td-contact-btn--gradient">
              {tab === "create" ? "Create account" : "Sign in"}
            </button>

            <button
              type="button"
              className="td-contact-btn td-contact-btn--shopify"
              onClick={handleContinueWithShopify}
            >
              <ShopifyBagIcon />
              Continue with Shopify
            </button>
          </form>

          <button type="button" className="td-contact-back-demo" onClick={onBack}>
            ← Back to quiz editor
          </button>
        </div>
      </div>
    </div>
  );
}
