import Image from "next/image";

const QUIZ_OPTIONS = ["Dry", "Oily", "Combination", "Sensitive"];

const PRODUCTS = [
  {
    name: "The Ordinary",
    subtitle: "Hyaluronic Acid 2%",
    price: "$6.80",
    match: "98%",
    image: "/ai-quiz-landing/industries/skincare/1.jpg",
  },
  {
    name: "CeraVe",
    subtitle: "Moisturizing Cream",
    price: "$16.99",
    match: "95%",
    image: "/ai-quiz-landing/industries/skincare/2.jpg",
  },
  {
    name: "La Roche-Posay",
    subtitle: "Toleriane Moisturizer",
    price: "$19.99",
    match: "93%",
    image: "/ai-quiz-landing/industries/skincare/3.jpg",
  },
];

function StatIcon({ type }: { type: "chart" | "spark" | "user" | "bolt" }) {
  if (type === "chart") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 18V10M10 18V6M16 18v-4M20 18V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "spark") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3l1.8 5.5L19 10l-5.2 1.5L12 17l-1.8-5.5L5 10l5.2-1.5L12 3z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (type === "user") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 19c0-3.3 3.1-5 7-5s7 1.7 7 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STATS = [
  { type: "chart" as const, title: "+38%", sub: "Conversion lift" },
  { type: "spark" as const, title: "AI Powered", sub: "Smart matching" },
  { type: "user" as const, title: "Personalized", sub: "For every shopper" },
  { type: "bolt" as const, title: "2 Min Setup", sub: "Super easy" },
];

function HeroFlowDecor() {
  return (
    <div className="aq-hero-flow-decor" aria-hidden>
      <svg className="aq-hero-flow-decor__path aq-hero-flow-decor__path--a" viewBox="0 0 200 120">
        <path
          d="M8 60 C 56 20, 120 24, 168 52"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="2"
          strokeDasharray="5 8"
          strokeLinecap="round"
          opacity="0.75"
        />
      </svg>
      <svg className="aq-hero-flow-decor__path aq-hero-flow-decor__path--b" viewBox="0 0 200 140">
        <path
          d="M12 16 C 72 8, 148 64, 176 112"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="2"
          strokeDasharray="5 8"
          strokeLinecap="round"
          opacity="0.65"
        />
      </svg>
      <span className="aq-hero-flow-decor__star aq-hero-flow-decor__star--1">✦</span>
      <span className="aq-hero-flow-decor__star aq-hero-flow-decor__star--2">✦</span>
      <span className="aq-hero-flow-decor__star aq-hero-flow-decor__star--3">✦</span>
    </div>
  );
}

function HeroSceneDeco() {
  return (
    <div className="aq-hero-scene-deco" aria-hidden>
      <div className="aq-hero-scene-deco__pedestal" />
      <div className="aq-hero-scene-deco__plant">
        <span className="aq-hero-scene-deco__pot" />
        <span className="aq-hero-scene-deco__leaf aq-hero-scene-deco__leaf--1" />
        <span className="aq-hero-scene-deco__leaf aq-hero-scene-deco__leaf--2" />
        <span className="aq-hero-scene-deco__leaf aq-hero-scene-deco__leaf--3" />
      </div>
      <div className="aq-hero-scene-deco__robot">
        <svg viewBox="0 0 48 48" fill="none">
          <defs>
            <linearGradient id="heroRobotGrad" x1="8" y1="8" x2="40" y2="40">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <circle cx="24" cy="24" r="22" fill="url(#heroRobotGrad)" />
          <circle cx="17" cy="20" r="3" fill="#fff" />
          <circle cx="31" cy="20" r="3" fill="#fff" />
          <path
            d="M16 30 Q24 36 32 30"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

export function HeroIllustration() {
  return (
    <div className="aq-hero-showcase" aria-hidden>
      <div className="aq-hero-showcase__frame">
        <span className="aq-hero-bg-box aq-hero-bg-box--lavender" />
        <span className="aq-hero-bg-box aq-hero-bg-box--peach" />
        <span className="aq-hero-bg-box aq-hero-bg-box--mint" />

        <div className="aq-hero-showcase__canvas">
          <div className="aq-hero-showcase__main">
            <div className="aq-hero-showcase__cards">
              <article className="aq-hero-card aq-hero-card--quiz">
                <div className="aq-hero-card__head">
                  <span className="aq-hero-card__title">Skincare Quiz</span>
                  <div className="aq-hero-card__meta">
                    <span className="aq-hero-live-chip">
                      <span className="aq-hero-live-chip__dot" />
                      Live personalization
                    </span>
                    <span className="aq-hero-card__progress">2 / 5</span>
                  </div>
                </div>
                <div className="aq-hero-card__bar">
                  <span style={{ width: "40%" }} />
                </div>
                <p className="aq-hero-card__question">What is your skin type?</p>
                <ul className="aq-hero-quiz-options">
                  {QUIZ_OPTIONS.map((opt) => (
                    <li key={opt} className={opt === "Dry" ? "is-selected" : ""}>
                      <span className="aq-hero-radio" />
                      {opt}
                    </li>
                  ))}
                </ul>
                <button type="button" className="aq-hero-quiz-next">
                  Next <span aria-hidden>→</span>
                </button>
              </article>

              <article className="aq-hero-card aq-hero-card--recs">
                <h3 className="aq-hero-recs-title">
                  Recommended for you{" "}
                  <span className="aq-hero-recs-sparkles" aria-hidden>
                    ✨✨
                  </span>
                </h3>
                <div className="aq-hero-products">
                  {PRODUCTS.map((p) => (
                    <div key={p.name} className="aq-hero-product">
                      <span className="aq-hero-product__match">Match {p.match}</span>
                      <div className="aq-hero-product__img">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="120px"
                          className="aq-hero-product__photo"
                        />
                      </div>
                      <p className="aq-hero-product__name">{p.name}</p>
                      <p className="aq-hero-product__sub">{p.subtitle}</p>
                      <p className="aq-hero-product__price">{p.price}</p>
                      <span className="aq-hero-product__cta">
                        View product <span aria-hidden>→</span>
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="aq-hero-side-stats">
              {STATS.map((stat) => (
                <div key={stat.title} className="aq-hero-side-stat">
                  <span className={`aq-hero-side-stat__icon aq-hero-side-stat__icon--${stat.type}`}>
                    <StatIcon type={stat.type} />
                  </span>
                  <div>
                    <strong>{stat.title}</strong>
                    <span>{stat.sub}</span>
                  </div>
                </div>
              ))}
            </aside>
          </div>

          <HeroFlowDecor />
        </div>

        <HeroSceneDeco />
        <span className="aq-hero-deco-sparkle aq-hero-deco-sparkle--tl">✦</span>
        <span className="aq-hero-deco-sparkle aq-hero-deco-sparkle--tr">✦</span>
      </div>
    </div>
  );
}
