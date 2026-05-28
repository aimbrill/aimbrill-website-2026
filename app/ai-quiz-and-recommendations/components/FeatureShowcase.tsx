import Image from "next/image";
import type { ReactNode } from "react";

type FeatureTheme = "mint" | "lavender" | "yellow" | "coral";

type FeatureBlock = {
  num: string;
  emoji: string;
  theme: FeatureTheme;
  title: string;
  description: string;
  items: string[];
  reverse?: boolean;
};

const BLOCKS: FeatureBlock[] = [
  {
    num: "01",
    emoji: "🧠",
    theme: "mint",
    title: "AI-Generated Quizzes",
    description:
      "AI automatically scans your catalog and creates smart, relevant quiz questions tailored to your store.",
    items: ["Auto-generate from your products", "Customize questions & logic", "Launch in minutes"],
  },
  {
    num: "02",
    emoji: "✨",
    theme: "lavender",
    title: "Smart Recommendations",
    description:
      "AI match scores deliver highly accurate product suggestions based on each customer's unique quiz responses.",
    reverse: true,
    items: [
      "High-converting product matches",
      "Personalized for every customer",
      "Increase AOV & customer satisfaction",
    ],
  },
  {
    num: "03",
    emoji: "📊",
    theme: "yellow",
    title: "Real-Time Analytics",
    description:
      "Track quiz completions, drop-offs, conversion rates, and revenue impact — all in one powerful dashboard.",
    items: [
      "Monitor performance in real-time",
      "Identify top products & trends",
      "Data-driven decisions that grow revenue",
    ],
  },
  {
    num: "04",
    emoji: "💻",
    theme: "coral",
    title: "Embedded on Your Store",
    description:
      "Embed quizzes anywhere on your Shopify store. No popups, no redirects — just a seamless experience for your customers.",
    reverse: true,
    items: ["Works on any page", "Fully responsive & fast", "Match your brand perfectly"],
  },
];

const REC_PRODUCTS = [
  {
    name: "Hyaluronic Acid 2% + B5",
    brand: "The Ordinary",
    price: "$6.80",
    match: "98% Match",
    tone: "#e8f4fc",
    image: "/ai-quiz-landing/industries/skincare/1.jpg",
  },
  {
    name: "Moisturizing Cream",
    brand: "CeraVe",
    price: "$16.99",
    match: "95% Match",
    tone: "#eef6ee",
    image: "/ai-quiz-landing/industries/skincare/2.jpg",
  },
  {
    name: "Toleriane Moisturizer",
    brand: "La Roche-Posay",
    price: "$19.99",
    match: "93% Match",
    tone: "#f3eef8",
    image: "/ai-quiz-landing/industries/skincare/3.jpg",
  },
];

function VisualStage({ theme, children }: { theme: FeatureTheme; children: ReactNode }) {
  return (
    <div className={`aq-feat-stage aq-feat-stage--${theme}`}>
      <span className="aq-feat-blob aq-feat-blob--a" aria-hidden />
      <span className="aq-feat-blob aq-feat-blob--b" aria-hidden />
      <div className="aq-feat-stage__inner">{children}</div>
    </div>
  );
}

function QuizVisual() {
  return (
    <VisualStage theme="mint">
      <div className="aq-feat-quiz-wrap">
        <article className="aq-feat-quiz-card">
          <div className="aq-feat-quiz-card__head">
            <span>Shopify Product Quiz</span>
            <span className="aq-feat-quiz-card__step">2 / 5</span>
          </div>
          <div className="aq-feat-quiz-card__bar">
            <span style={{ width: "40%" }} />
          </div>
          <p className="aq-feat-quiz-card__q">What is your skin type?</p>
          <ul className="aq-feat-quiz-options">
            {["Dry", "Oily", "Sensitive", "Combination"].map((opt) => (
              <li key={opt} className={opt === "Dry" ? "is-on" : ""}>
                <span className="aq-feat-radio" />
                {opt}
              </li>
            ))}
          </ul>
          <button type="button" className="aq-feat-quiz-next">
            Next <span aria-hidden>→</span>
          </button>
        </article>
        <svg className="aq-feat-dash-arrow" viewBox="0 0 120 80" aria-hidden>
          <path
            d="M8 12 C 52 8, 98 36, 72 68"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2.2"
            strokeDasharray="5 7"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
        <aside className="aq-feat-ai-tip">
          <span className="aq-feat-ai-tip__icon" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5L12 3z"
                fill="currentColor"
              />
            </svg>
          </span>
          <div>
            <strong>AI is analyzing...</strong>
            <p>Understanding your customer&apos;s needs</p>
          </div>
        </aside>
      </div>
    </VisualStage>
  );
}

function RecsVisual() {
  return (
    <VisualStage theme="lavender">
      <article className="aq-feat-recs-card">
        <h3>
          Recommended for you <span aria-hidden>✦</span>
        </h3>
        <div className="aq-feat-recs-grid">
          {REC_PRODUCTS.map((p) => (
            <div key={p.brand} className="aq-feat-rec-product">
              <span className="aq-feat-rec-product__badge">{p.match}</span>
              <div className="aq-feat-rec-product__img" style={{ background: p.tone }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 900px) 20vw, 120px"
                  className="aq-feat-rec-product__photo"
                />
              </div>
              <p className="aq-feat-rec-product__brand">{p.brand}</p>
              <p className="aq-feat-rec-product__name">{p.name}</p>
              <p className="aq-feat-rec-product__price">{p.price}</p>
              <span className="aq-feat-rec-product__btn">
                View product <span aria-hidden>→</span>
              </span>
            </div>
          ))}
        </div>
      </article>
    </VisualStage>
  );
}

function AnalyticsVisual() {
  const metrics = [
    { label: "Quizzes Taken", value: "2,450", delta: "+28%" },
    { label: "Completion Rate", value: "76%", delta: "+18%" },
    { label: "Conversion Rate", value: "24%", delta: "+36%" },
    { label: "Revenue", value: "$18,650", delta: "+42%" },
  ];
  const months = ["May 1", "May 8", "May 15", "May 22", "May 29"];

  return (
    <VisualStage theme="yellow">
      <article className="aq-feat-dash">
        <div className="aq-feat-dash__head">
          <span>This month</span>
          <span aria-hidden>⌄</span>
        </div>
        <div className="aq-feat-dash__metrics">
          {metrics.map((m) => (
            <div key={m.label} className="aq-feat-dash__metric">
              <span className="aq-feat-dash__label">{m.label}</span>
              <strong>{m.value}</strong>
              <span className="aq-feat-dash__delta">{m.delta}</span>
            </div>
          ))}
        </div>
        <div className="aq-feat-dash__chart-wrap">
          <p className="aq-feat-dash__chart-title">Conversion Over Time</p>
          <div className="aq-feat-dash__chart">
            <svg viewBox="0 0 320 100" preserveAspectRatio="none" className="aq-feat-dash__svg">
              <defs>
                <linearGradient id="aqChartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5a31f4" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#5a31f4" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 84 L40 72 L80 68 L120 52 L160 56 L200 38 L240 49 L280 34 L320 26 L320 100 L0 100 Z"
                fill="url(#aqChartFill)"
              />
              <path
                d="M0 84 L40 72 L80 68 L120 52 L160 56 L200 38 L240 49 L280 34 L320 26"
                fill="none"
                stroke="#5a31f4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {[84, 72, 68, 52, 56, 38, 49, 34, 26].map((y, i) => (
                <circle
                  key={i}
                  cx={i * 40}
                  cy={y}
                  r="4"
                  fill="#fff"
                  stroke="#5a31f4"
                  strokeWidth="2"
                />
              ))}
            </svg>
          </div>
          <div className="aq-feat-dash__months">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </article>
    </VisualStage>
  );
}

function ShopifyBadge() {
  return (
    <div className="aq-feat-shopify-badge">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L4 7v10l8 4 8-4V7l-8-5z" fill="#008060" />
      </svg>
      <span>Seamlessly works with Shopify</span>
    </div>
  );
}

function EmbedVisual() {
  return (
    <VisualStage theme="coral">
      <div className="aq-feat-embed-wrap">
        <ShopifyBadge />
        <div className="aq-feat-store">
          <div className="aq-feat-store__nav">
            <span className="aq-feat-store__logo">Your Store</span>
            <span>Shop</span>
            <span>Bestsellers</span>
            <span>Skincare</span>
            <span>About</span>
            <span aria-hidden>⌕</span>
            <span aria-hidden>◌</span>
          </div>
          <div className="aq-feat-store__hero">
            <h4>Find what&apos;s perfect for you</h4>
            <p className="aq-feat-store__sub">Take our quiz and get personalized product picks</p>
            <button type="button" className="aq-feat-store__cta">
              Take the Quiz
            </button>
            <div className="aq-feat-store__product-shot">
              <Image
                src="/ai-quiz-landing/industries/skincare/2.jpg"
                alt="Skincare product recommendation"
                fill
                sizes="(max-width: 900px) 70vw, 420px"
                className="aq-feat-store__product-image"
              />
            </div>
          </div>
          <article className="aq-feat-embed-quiz aq-feat-embed-quiz--phone">
            <p className="aq-feat-embed-quiz__title">Skin Quiz</p>
            <p className="aq-feat-embed-quiz__step">1 / 5</p>
            <p className="aq-feat-embed-quiz__q">What is your main skin concern?</p>
            <div className="aq-feat-embed-quiz__opts">
              <span>Acne</span>
              <span className="is-on">Dryness</span>
              <span>Dullness</span>
              <span>Sensitivity</span>
            </div>
            <span className="aq-feat-embed-quiz__btn">Next →</span>
          </article>
        </div>
      </div>
    </VisualStage>
  );
}

function FeatureVisual({ index }: { index: number }) {
  if (index === 0) return <QuizVisual />;
  if (index === 1) return <RecsVisual />;
  if (index === 2) return <AnalyticsVisual />;
  return <EmbedVisual />;
}

export function FeatureShowcase() {
  return (
    <section className="aq-section aq-feature-showcase" id="features">
      <div className="aq-wrap">
        <div className="aq-section-intro aq-feature-showcase__intro">
          <h2>
            Everything You Need to <span className="aq-section-accent">Sell Smarter</span>
          </h2>
          <p>
            A complete suite of AI tools designed to turn every store visit into a personalized
            shopping experience.
          </p>
        </div>

        <div className="aq-feat-blocks">
          {BLOCKS.map((block, index) => (
            <article
              key={block.title}
              id={index === 1 ? "showcase" : undefined}
              className={`aq-feat-row aq-feat-row--${block.theme}`}
            >
              <div className={`aq-feat-block${block.reverse ? " aq-feat-block--reverse" : ""}`}>
                <div className="aq-feat-copy">
                  <div className={`aq-feat-num aq-feat-num--${block.theme}`}>
                    <span className="aq-feat-num__n">{block.num}</span>
                    <span className="aq-feat-num__emoji" aria-hidden>
                      {block.emoji}
                    </span>
                  </div>
                  <h3>{block.title}</h3>
                  <p className="aq-feat-desc">{block.description}</p>
                  <ul className={`aq-feat-list aq-feat-list--${block.theme}`}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <FeatureVisual index={index} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
