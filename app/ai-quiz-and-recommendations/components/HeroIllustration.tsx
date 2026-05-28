import Image from "next/image";

const QUIZ_OPTIONS = ["Dry", "Oily", "Combination", "Sensitive"];

const PRODUCTS = [
  {
    name: "Hyaluronic Serum",
    price: "$24.90",
    match: "98%",
    image: "/ai-quiz-landing/before-after/hero3.png",
  },
  {
    name: "Moisturizing Cream",
    price: "$19.90",
    match: "95%",
    image: "/ai-quiz-landing/before-after/hero1.png",
  },
  {
    name: "Daily Moisturizer",
    price: "$18.90",
    match: "93%",
    image: "/ai-quiz-landing/before-after/hreo2.png",
  },
];

export function HeroIllustration() {
  return (
    <div className="aq-hero-mock" aria-hidden>
      <div className="aq-hero-mock__scene">
        {/* Flow lines: quiz top-right → bottle; 98% badge → recs */}
        <svg
          className="aq-hero-mock__flow"
          viewBox="0 0 700 520"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            className="aq-hero-mock__flow-path aq-hero-mock__flow-path--quiz-bottle"
            d="M 448 68
               C 472 28, 528 18, 582 42
               C 628 62, 642 98, 624 132"
            fill="none"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          <path
            className="aq-hero-mock__flow-path aq-hero-mock__flow-path--badge-recs"
            d="M 542 362
               C 492 398, 438 428, 388 468"
            fill="none"
            strokeWidth="1.5"
            strokeDasharray="5 8"
            strokeLinecap="round"
          />
        </svg>

        <div className="aq-hero-mock__decor" aria-hidden>
          <span className="aq-hero-mock__flow-spark aq-hero-mock__flow-spark--1">✦</span>
          <span className="aq-hero-mock__flow-spark aq-hero-mock__flow-spark--2">✦</span>
          <span className="aq-hero-mock__flow-spark aq-hero-mock__flow-spark--3">✦</span>
          <span className="aq-hero-mock__flow-spark aq-hero-mock__flow-spark--4">✦</span>
        </div>

        <div className="aq-hero-mock__left">
          <article className="aq-hero-mock__quiz">
            <div className="aq-hero-mock__quiz-top">
              <div className="aq-hero-mock__quiz-heading">
                <strong>
                  <span className="aq-hero-mock__title-spark" aria-hidden>
                    ✦
                  </span>
                  Skincare Quiz
                </strong>
                <span className="aq-hero-mock__live">
                  <span className="aq-hero-mock__live-dot" />
                  Live personalization
                </span>
              </div>
              <span className="aq-hero-mock__progress">2 / 5</span>
            </div>
            <div className="aq-hero-mock__bar">
              <span />
            </div>
            <p className="aq-hero-mock__question">What is your skin type?</p>
            <ul className="aq-hero-mock__options">
              {QUIZ_OPTIONS.map((opt) => (
                <li key={opt} className={opt === "Dry" ? "is-selected" : ""}>
                  <span className="aq-hero-mock__radio" />
                  {opt}
                </li>
              ))}
            </ul>
            <button type="button" className="aq-hero-mock__next">
              Next <span aria-hidden>→</span>
            </button>
          </article>

          <article className="aq-hero-mock__recs">
            <h3>
              Recommended for you <span aria-hidden>✨</span>
            </h3>
            <div className="aq-hero-mock__products">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="aq-hero-mock__product">
                  <span className="aq-hero-mock__match">Match {p.match}</span>
                  <div className="aq-hero-mock__product-img">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="96px"
                      className="aq-hero-mock__photo"
                    />
                  </div>
                  <p className="aq-hero-mock__product-name">{p.name}</p>
                  <p className="aq-hero-mock__product-price">{p.price}</p>
                  <span className="aq-hero-mock__view">
                    <span className="aq-hero-mock__view-long">View product →</span>
                    <span className="aq-hero-mock__view-short" aria-hidden>
                      View →
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="aq-hero-mock__right">
          <div className="aq-hero-mock__bottle">
            <div className="aq-hero-mock__product-focus">
              <Image
                src="/ai-quiz-landing/before-after/heromain.png"
                alt="Lumière hydrating serum"
                fill
                sizes="320px"
                priority
                className="aq-hero-mock__focus-photo"
              />
            </div>
          </div>

          <div className="aq-hero-mock__score" aria-label="98% Match, AI Recommended">
            <strong className="aq-hero-mock__score-pct">98%</strong>
            <span className="aq-hero-mock__score-label">Match</span>
            <small className="aq-hero-mock__score-meta">AI Recommended</small>
            <span className="aq-hero-mock__score-spark" aria-hidden>
              ✦
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
