import Image from "next/image";

const PRODUCT_BASE = "/ai-quiz-landing/before-after/products";

const TRADITIONAL_ISSUES = [
  "Too many products",
  "Overwhelmed shoppers",
  "Hard to find the right product",
  "Low conversion rates",
];

const AI_BENEFITS = [
  "Guided shopping journey",
  "Personalized recommendations",
  "Faster purchase decisions",
  "Higher conversion rates",
];

const GRID_PRODUCTS = [
  { name: "Hydrating Cleanser", price: "$24.00", img: `${PRODUCT_BASE}/1.jpg` },
  { name: "Vitamin C Serum", price: "$32.00", img: `${PRODUCT_BASE}/2.jpg` },
  { name: "Night Cream", price: "$28.00", img: `${PRODUCT_BASE}/3.jpg` },
  { name: "SPF Moisturizer", price: "$26.00", img: `${PRODUCT_BASE}/4.jpg` },
  { name: "Eye Cream", price: "$22.00", img: `${PRODUCT_BASE}/5.jpg` },
  { name: "Face Mask", price: "$18.00", img: `${PRODUCT_BASE}/6.jpg` },
];

const QUIZ_OPTIONS = ["Acne", "Dryness", "Sensitivity", "Uneven Tone"];

const ANALYSIS_STEPS = [
  "Understanding your skin",
  "Matching with products",
  "Finding perfect routine",
];

const RESULT_PRODUCTS = [
  {
    name: "Hydrating Serum",
    price: "$23.00",
    match: "98% Match",
    img: `${PRODUCT_BASE}/2.jpg`,
  },
  {
    name: "Moisturizer",
    price: "$19.00",
    match: "96% Match",
    img: `${PRODUCT_BASE}/4.jpg`,
  },
  {
    name: "Sunscreen SPF 50",
    price: "$21.00",
    match: "94% Match",
    img: `${PRODUCT_BASE}/6.jpg`,
  },
];

function StarRating() {
  return (
    <span className="aq-bva__stars" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

function VsBadge() {
  return (
    <div className="aq-bva__vs" aria-hidden>
      <span>VS</span>
      <svg className="aq-bva__vs-arrows" viewBox="0 0 120 80" fill="none">
        <path
          d="M8 40 C35 12 55 12 60 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        <path
          d="M60 40 C65 68 85 68 112 40"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 4"
          strokeLinecap="round"
        />
        <path
          d="M104 40 L112 40 L108 34"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M104 40 L112 40 L108 46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function BeforeVsAfter() {
  return (
    <section className="aq-section aq-bva" id="before-after">
      <div className="aq-wrap">
        <div className="aq-section-intro">
          <h2>
            Transform Browsing Into{" "}
            <span className="aq-section-accent aq-section-accent--break">
              Personalized Shopping
            </span>
          </h2>
          <p>
            Replace overwhelming product discovery with AI-powered recommendations tailored to every
            shopper.
          </p>
        </div>

        <div className="aq-bva__compare">
          <article className="aq-bva__panel aq-bva__panel--before">
            <header className="aq-bva__panel-head">
              <span className="aq-bva__panel-icon aq-bva__panel-icon--sad" aria-hidden>
                ☹
              </span>
              <div>
                <h3>Traditional Store</h3>
                <p>Shoppers feel lost and overwhelmed</p>
              </div>
            </header>

            <div className="aq-bva__body aq-bva__body--before">
              <div className="aq-bva__scene">
                <div className="aq-bva__store-mock">
                  <div className="aq-bva__filters" aria-hidden>
                    <span>All Categories ▾</span>
                    <span>All Brands ▾</span>
                    <span>Price ▾</span>
                    <span>Sort by ▾</span>
                  </div>
                  <div className="aq-bva__grid aq-bva__grid--blur">
                    {GRID_PRODUCTS.map((p) => (
                      <div key={p.name} className="aq-bva__grid-item">
                        <div className="aq-bva__grid-img">
                          <Image src={p.img} alt="" fill sizes="100px" />
                        </div>
                        <span className="aq-bva__grid-name">{p.name}</span>
                        <span className="aq-bva__grid-price">{p.price}</span>
                        <StarRating />
                      </div>
                    ))}
                  </div>
                  <ul className="aq-bva__overlay-pills aq-bva__list aq-bva__list--bad">
                    {TRADITIONAL_ISSUES.map((item) => (
                      <li key={item}>
                        <span className="aq-bva__mark aq-bva__mark--bad" aria-hidden>
                          ✕
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aq-bva__photo aq-bva__photo--before">
                  <Image
                    src="/ai-quiz-landing/before-after/traditional-shopper.png"
                    alt=""
                    fill
                    sizes="220px"
                    className="aq-bva__photo-img"
                  />
                </div>
              </div>
            </div>
          </article>

          <VsBadge />

          <article className="aq-bva__panel aq-bva__panel--after">
            <header className="aq-bva__panel-head aq-bva__panel-head--after">
              <div className="aq-bva__panel-head-main">
                <span className="aq-bva__panel-icon aq-bva__panel-icon--happy" aria-hidden>
                  ✨
                </span>
                <div>
                  <h3>AI Quiz Experience</h3>
                  <p>Personalized. Guided. Effortless.</p>
                </div>
              </div>
            </header>

            <div className="aq-bva__body aq-bva__body--after">
              <div className="aq-bva__flow">
                <div className="aq-bva__step aq-bva__step--quiz">
                  <span className="aq-bva__step-num">01</span>
                  <p className="aq-bva__step-label">Skin Quiz</p>
                  <p className="aq-bva__step-q">What is your main skin concern?</p>
                  <ul className="aq-bva__options">
                    {QUIZ_OPTIONS.map((opt) => (
                      <li key={opt} className={opt === "Dryness" ? "is-selected" : ""}>
                        <span className="aq-bva__radio" aria-hidden />
                        {opt}
                      </li>
                    ))}
                  </ul>
                  <span className="aq-bva__step-btn">Next →</span>
                </div>

                <div className="aq-bva__step aq-bva__step--ai">
                  <span className="aq-bva__step-num">02</span>
                  <p className="aq-bva__step-label">AI Analysis</p>
                  <div className="aq-bva__robot" aria-hidden>
                    🤖
                  </div>
                  <p className="aq-bva__step-ai-title">Analyzing your answers...</p>
                  <ul className="aq-bva__analysis">
                    {ANALYSIS_STEPS.map((step) => (
                      <li key={step}>
                        <span className="aq-bva__mark aq-bva__mark--good" aria-hidden>
                          ✓
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="aq-bva__step aq-bva__step--results">
                  <span className="aq-bva__step-num">03</span>
                  <p className="aq-bva__step-label">Your Results</p>
                  <p className="aq-bva__results-title">
                    Best matches for you <span aria-hidden>✨</span>
                  </p>
                  <ul className="aq-bva__results">
                    {RESULT_PRODUCTS.map((p) => (
                      <li key={p.name}>
                        <div className="aq-bva__result-img">
                          <Image src={p.img} alt={p.name} fill sizes="56px" />
                        </div>
                        <div className="aq-bva__result-meta">
                          <span>{p.name}</span>
                          <span>{p.price}</span>
                        </div>
                        <span className="aq-bva__result-match">{p.match}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="aq-bva__cart-btn">Add all to cart — $63.00</span>
                </div>
              </div>

              <div className="aq-bva__scene aq-bva__scene--after">
                <ul className="aq-bva__overlay-pills aq-bva__list aq-bva__list--good">
                  {AI_BENEFITS.map((item) => (
                    <li key={item}>
                      <span className="aq-bva__mark aq-bva__mark--good" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="aq-bva__photo-wrap">
                  <p className="aq-bva__bubble">
                    Perfect routine just for you! <span aria-hidden>✨</span>
                  </p>
                  <div className="aq-bva__photo aq-bva__photo--after">
                    <Image
                      src="/ai-quiz-landing/before-after/happy-shopper.png"
                      alt=""
                      fill
                      sizes="180px"
                      className="aq-bva__photo-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
