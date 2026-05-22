"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

import "./styles.css";

const BOXES = [
  { id: "solo", name: "Solo", emoji: "🥡", max: 1, price: 14, subtitle: "Just for you" },
  { id: "duo", name: "Duo", emoji: "📦", max: 2, price: 24, subtitle: "For 2 people" },
  {
    id: "family",
    name: "Family",
    emoji: "🎁",
    max: 4,
    price: 42,
    subtitle: "Most popular",
    recommended: true,
  },
  { id: "feast", name: "Feast", emoji: "🏠", max: 6, price: 64, subtitle: "Party-sized" },
];

const MEALS = [
  {
    id: 1,
    name: "Paneer Tikka Bowl",
    emoji: "🍛",
    cal: "420 kcal",
    category: "BESTSELLER",
    dietTags: ["veg", "highprotein"],
  },
  {
    id: 2,
    name: "Grilled Chicken",
    emoji: "🍗",
    cal: "380 kcal",
    category: "HIGH PROTEIN",
    dietTags: ["nonveg", "highprotein"],
  },
  {
    id: 3,
    name: "Quinoa Salad",
    emoji: "🥗",
    cal: "290 kcal",
    category: "LOW CAL",
    dietTags: ["vegan", "lowcarb"],
  },
  {
    id: 4,
    name: "Butter Dal Rice",
    emoji: "🍚",
    cal: "350 kcal",
    category: null,
    dietTags: ["veg"],
  },
  {
    id: 5,
    name: "Veg Biryani",
    emoji: "🍲",
    cal: "410 kcal",
    category: "CHEF SPECIAL",
    dietTags: ["veg"],
  },
  {
    id: 6,
    name: "Egg Bhurji Wrap",
    emoji: "🌯",
    cal: "320 kcal",
    category: null,
    dietTags: ["nonveg", "highprotein"],
  },
  {
    id: 7,
    name: "Palak Paneer",
    emoji: "🥘",
    cal: "300 kcal",
    category: "LOW CAL",
    dietTags: ["veg"],
  },
  {
    id: 8,
    name: "Chicken Curry Bowl",
    emoji: "🍜",
    cal: "390 kcal",
    category: "HIGH PROTEIN",
    dietTags: ["nonveg"],
  },
];

const PLANS = [
  {
    id: "daily",
    icon: "⚡",
    name: "Daily",
    desc: "Great for trying us out",
    tag: "Full price · try us out",
    tagTone: "neutral",
  },
  {
    id: "weekly",
    icon: "📅",
    name: "Weekly",
    desc: "Most popular · save 10% every week",
    tag: "10% off",
    tagTone: "terracotta",
    badge: "POPULAR",
  },
  {
    id: "monthly",
    icon: "📋",
    name: "Monthly",
    desc: "Best value · save 20% every month",
    tag: "20% off",
    tagTone: "gold",
    badge: "BEST VALUE",
  },
];

const DELIVERY_FEE = 6;

const DELIVERY_SLOTS = [
  { id: "morning", icon: "🌅", title: "Morning", time: "7:00 – 10:00 am", mostPopular: true },
  { id: "afternoon", icon: "☀️", title: "Afternoon", time: "12:00 – 2:00 pm" },
  { id: "evening", icon: "🌙", title: "Evening", time: "6:00 – 8:00 pm" },
];

// Currency formatting helper for meal3: display amounts in dollars
const formatCurrency = (n: number) => `$${Number(n || 0).toLocaleString("en-US")}`;

function StepProgress({ currentStep }: { currentStep: number }) {
  // currentStep indices: 0=hero, 1=date, 2=box, 3=plan, 4=summary
  const isVisible = currentStep >= 1 && currentStep <= 4;
  if (!isVisible) return null;

  const steps = [
    { label: "Your Area" },
    { label: "Your Date" },
    { label: "Your Box" },
    { label: "Your Plan" },
    { label: "Review" },
  ];

  const active = currentStep;
  const completedCount = currentStep;

  return (
    <div className="meal3-progress">
      <div className="meal3-progress-inner">
        <div className="meal3-progress-track" aria-hidden>
          {steps.map((s, i) => {
            const isCompleted = i < completedCount;
            const isActive = i === active;
            return (
              <React.Fragment key={i}>
                <div
                  className={`meal3-progress-step ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}`}
                >
                  <div className="meal3-progress-dot" aria-hidden>
                    {isCompleted ? (
                      <span className="meal3-progress-check">✓</span>
                    ) : (
                      <span className="meal3-progress-num">{i + 1}</span>
                    )}
                  </div>
                  <div className="meal3-progress-label">{s.label}</div>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`meal3-progress-connector ${i < completedCount ? "done" : ""}`}
                    aria-hidden
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function FloatingCTA({
  isActive,
  label,
  onClick,
  disabled,
}: {
  isActive: boolean;
  label: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <div className={`meal3-floating-cta-wrap ${isActive ? "is-active" : ""}`}>
      <button
        type="button"
        className="meal3-floating-cta"
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
      >
        <span className="meal3-floating-cta-label">{label}</span>
        <span className="meal3-floating-cta-circle" aria-hidden>
          <span className="meal3-floating-cta-arrow">→</span>
        </span>
      </button>
    </div>
  );
}

function Confetti() {
  const colors = ["#E8C87A", "#C45C38", "#4A7C59", "#2D1B0E", "#FDF5E0", "#EAF4EE"];
  return (
    <div className="meal3-confetti" aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => {
        const left = (i * 7) % 100;
        const delay = (i % 12) * 0.035;
        const dur = 0.9 + (i % 6) * 0.08;
        const drift = (i % 2 === 0 ? 1 : -1) * (8 + (i % 5) * 3);
        const rot = (i % 2 === 0 ? 1 : -1) * (30 + (i % 7) * 6);
        const color = colors[i % colors.length];
        const style: React.CSSProperties & { "--drift": string } = {
          left: `${left}%`,
          background: color,
          animationDelay: `${delay}s`,
          animationDuration: `${dur}s`,
          transform: `translate3d(0,0,0) rotate(${rot}deg)`,
          ["--drift"]: `${drift}px`,
        };
        return <span key={i} className="meal3-confetti-piece" style={style} />;
      })}
    </div>
  );
}

function formatDateLabel(date: Date | null) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" });
}

function ProgressValuePill({ text }: { text: string }) {
  return <div className="meal3-confirm-pill">{text}</div>;
}

export default function Meal3Page() {
  /** Visible step index only — changes via CTAs (or pincode → step 1), not by scrolling. */
  const [currentStep, setCurrentStep] = useState(0);

  const [checking, setChecking] = useState(false);
  const [pincode, setPincode] = useState("");
  const [areaStatus, setAreaStatus] = useState<"success" | "error" | null>(null); // "success" | "error" | null

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [deliverySlot, setDeliverySlot] = useState<string | null>(null);

  const [selectedBox, setSelectedBox] = useState("family");
  const [selectedMeals, setSelectedMeals] = useState<number[]>([]);
  const [swapSlotIndex, setSwapSlotIndex] = useState<number | null>(null);
  const [slotAnimatingIndex, setSlotAnimatingIndex] = useState<number | null>(null);

  const [selectedPlan, setSelectedPlan] = useState("weekly");

  const didAutoProceedRef = useRef(false);

  const [giftOpen, setGiftOpen] = useState(false);
  const [giftEmail, setGiftEmail] = useState("");

  const [referOpen, setReferOpen] = useState(false);
  const referralCodeUsed = "MEAL100"; // Usage example

  const [savingsPulse, setSavingsPulse] = useState(false);

  useEffect(() => {
    document.body.style.background = "#FAF6F0";
    document.body.style.color = "#2D1B0E";
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const goToStep = useCallback((idx: number) => {
    setCurrentStep(idx);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const pincodeIsValid = useMemo(() => /^\d{6}$/.test(pincode.trim()), [pincode]);

  // Lock page scrolling until pincode is entered (prevents users from scrolling to other steps early).
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverscroll = body.style.overscrollBehavior;
    const prevHtmlOverscroll = html.style.overscrollBehavior;

    const preventScroll = (e: WheelEvent | TouchEvent) => {
      e.preventDefault();
    };

    if (!pincodeIsValid) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
      body.style.overscrollBehavior = "none";
      html.style.overscrollBehavior = "none";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
      body.style.overscrollBehavior = prevBodyOverscroll;
      html.style.overscrollBehavior = prevHtmlOverscroll;
    };
  }, [pincodeIsValid]);

  const box = useMemo(() => BOXES.find((b) => b.id === selectedBox), [selectedBox]);
  const maxMeals = box?.max || 0;

  const discountRate = useMemo(() => {
    if (selectedPlan === "weekly") return 0.1;
    if (selectedPlan === "monthly") return 0.2;
    return 0;
  }, [selectedPlan]);

  const subtotal = useMemo(() => {
    return (box?.price || 0) + DELIVERY_FEE;
  }, [box]);

  const total = useMemo(() => Math.round(subtotal * (1 - discountRate)), [subtotal, discountRate]);
  const savings = useMemo(() => Math.round(subtotal - total), [subtotal, total]);

  useEffect(() => {
    if (currentStep === 4) {
      setSavingsPulse(true);
      const t = window.setTimeout(() => setSavingsPulse(false), 700);
      return () => window.clearTimeout(t);
    }
    return;
  }, [currentStep]);

  useEffect(() => {
    if (!maxMeals) {
      setSelectedMeals([]);
      return;
    }
    setSelectedMeals((prev) => {
      const defaults = MEALS.slice(0, maxMeals).map((m) => m.id);
      const validUnique = prev.filter(
        (id, idx) => prev.indexOf(id) === idx && MEALS.some((m) => m.id === id),
      );
      const next = [...validUnique];
      for (const id of defaults) {
        if (next.length >= maxMeals) break;
        if (!next.includes(id)) next.push(id);
      }
      return next.slice(0, maxMeals);
    });
  }, [maxMeals]);

  const canProceedArea = pincodeIsValid && !checking;
  const canProceedDate = !!selectedDate;
  const canProceedBox = !!box && selectedMeals.length === maxMeals;
  const canProceedPlan = !!selectedPlan;

  const handleCheckArea = useCallback(() => {
    if (!pincodeIsValid) {
      setAreaStatus("error");
      return;
    }

    setChecking(true);
    setAreaStatus(null);

    window.setTimeout(() => {
      setChecking(false);
      setAreaStatus("success");
      goToStep(1);
    }, 700);
  }, [pincodeIsValid, goToStep]);

  // Auto-advance to date step once a valid pincode is entered (same as before).
  useEffect(() => {
    if (!pincodeIsValid) {
      didAutoProceedRef.current = false;
      setCurrentStep(0);
      return;
    }
    if (checking) return;
    if (currentStep !== 0) return;
    if (didAutoProceedRef.current) return;
    didAutoProceedRef.current = true;
    window.setTimeout(() => goToStep(1), 50);
  }, [pincodeIsValid, checking, currentStep, goToStep]);

  const recommendedDateIndex = 0; // first card is recommended
  const dates = useMemo(() => {
    const result = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      result.push(d);
    }
    return result;
  }, []);

  const selectedDateText = useMemo(() => formatDateLabel(selectedDate), [selectedDate]);
  const selectedPlanLabel =
    selectedPlan === "daily" ? "Daily" : selectedPlan === "weekly" ? "Weekly" : "Monthly";

  const floatingCtaIsActive = (sectionIdx: number) => currentStep === sectionIdx;

  const stepHidden = (step: number) => (currentStep !== step ? "meal3-section--hidden" : "");

  const replaceMealInSlot = useCallback((slotIdx: number, mealId: number) => {
    setSelectedMeals((prev) => {
      const next = [...prev];
      next[slotIdx] = mealId;
      return next;
    });
    setSwapSlotIndex(null);
    setSlotAnimatingIndex(slotIdx);
    window.setTimeout(() => setSlotAnimatingIndex(null), 360);
  }, []);

  return (
    <>
      <div className="meal3-page">
        <main
          className={`meal3-scroll-root ${areaStatus !== "success" ? "locked" : ""}`}
          aria-label="Meal subscription landing page"
        >
          <section className={`meal3-section meal3-section--hero ${stepHidden(0)}`} id="s1">
            <div className="meal3-container meal3-hero-grid">
              <div className="meal3-hero-left">
                <div
                  className="meal3-hero-tagline"
                  style={{ marginBottom: "8px", opacity: 0.6, fontSize: "12px" }}
                >
                  YOUR BRAND IS UNIQUE. WHY IS YOUR MEAL SYSTEM TYPICAL?
                </div>
                <h1 className="meal3-hero-title">
                  <span>Your Daily Meals,</span>
                  <br />
                  <span className="meal3-hero-title-accent">Sorted.</span>
                </h1>

                <p className="meal3-hero-subtitle">
                  Chef-crafted meals at your door every morning. Fresh ingredients, zero effort. We
                  set up your full automated flow — so delivery, subscriptions, and products all
                  work together.
                </p>

                <div className="meal3-hero-tagline">
                  <span style={{ opacity: 0.6 }}>↳</span> Fresh · Prep-Free · Daily · All Connected.
                </div>

                {/* How It Works Strip */}
                <div className="meal3-how-it-works">
                  <div className="meal3-how-label">HOW IT WORKS</div>
                  <div className="meal3-how-steps">
                    <div className="meal3-how-step">
                      <div className="meal3-how-icon">📍</div>
                      <div className="meal3-how-title">Enter pincode</div>
                      <div className="meal3-how-sub">Check availability</div>
                    </div>
                    <div className="meal3-how-arrow">→</div>
                    <div className="meal3-how-step">
                      <div className="meal3-how-icon">📅</div>
                      <div className="meal3-how-title">Pick a Date</div>
                      <div className="meal3-how-sub">Choose delivery day</div>
                    </div>
                    <div className="meal3-how-arrow">→</div>
                    <div className="meal3-how-step">
                      <div className="meal3-how-icon">🍽️</div>
                      <div className="meal3-how-title">Build your box</div>
                      <div className="meal3-how-sub">12+ options weekly</div>
                    </div>
                    <div className="meal3-how-arrow">→</div>
                    <div className="meal3-how-step">
                      <div className="meal3-how-icon">🚚</div>
                      <div className="meal3-how-title">Get it delivered</div>
                      <div className="meal3-how-sub">Fresh to your door</div>
                    </div>
                  </div>
                </div>

                <div className="meal3-form-block">
                  <label className="meal3-form-label" htmlFor="pincode">
                    Check if we deliver to you
                  </label>
                  <div className="meal3-input-wrap">
                    <span className="meal3-input-icon" aria-hidden>
                      📍
                    </span>
                    <input
                      id="pincode"
                      className={`meal3-input ${areaStatus === "error" ? "is-error" : ""}`}
                      value={pincode}
                      onChange={(e) => {
                        const v = e.target.value.replace(/[^\d]/g, "").slice(0, 6);
                        setPincode(v);
                        if (v.length === 6) setAreaStatus("success");
                        else if (v.length > 0) setAreaStatus("error");
                        else setAreaStatus(null);
                      }}
                      type="text"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="e.g. 380024"
                      aria-invalid={areaStatus === "error"}
                    />
                  </div>

                  {areaStatus === "success" && pincodeIsValid && (
                    <div className="meal3-status-pill meal3-status-pill--success">
                      ✓ Meals available in your area! 🎉
                    </div>
                  )}
                  {areaStatus === "error" && (
                    <div className="meal3-status-pill meal3-status-pill--error">
                      ✗ We don&apos;t deliver here yet
                    </div>
                  )}

                  <button
                    type="button"
                    className={`meal3-btn-primary ${checking ? "is-checking" : ""}`}
                    disabled={!canProceedArea}
                    onClick={handleCheckArea}
                  >
                    {checking ? (
                      <>
                        <span className="meal3-spinner" aria-hidden />
                        Checking...
                      </>
                    ) : (
                      <>Check My Area</>
                    )}
                  </button>
                </div>

                <div className="meal3-trust-row" aria-label="Trust indicators">
                  <span>⭐ 4.8 · 2,400+ reviews</span>
                  <span>🍳 Cooked fresh daily</span>
                  <span>↩ Cancel in 2 taps</span>
                  <span>🚚 Doorstep delivery</span>
                </div>
              </div>

              <div className="meal3-hero-right">
                <div className="meal3-hero-image-wrap">
                  <Image
                    src="/meal-bundle-builder/meal-box-hero.png"
                    alt="Premium Indian meal box"
                    width={800}
                    height={600}
                    className="meal3-hero-image"
                    priority
                  />

                  <div className="meal3-hero-floating-badge">
                    🔥 From {formatCurrency(14)} / meal
                  </div>
                </div>
              </div>
            </div>

            <div className="meal3-floating-cta-anchor">
              <FloatingCTA
                isActive={floatingCtaIsActive(0)}
                label="Pick My Date"
                onClick={() => (canProceedArea ? goToStep(1) : null)}
                disabled={!canProceedArea}
              />
            </div>
          </section>

          <section className={`meal3-section ${stepHidden(1)}`} id="s2">
            <StepProgress currentStep={currentStep} />
            <div className="meal3-container meal3-step-date">
              <div className="meal3-screen-badge">STEP 2 OF 4</div>
              <div className="meal3-step-emoji" aria-hidden>
                📅
              </div>
              <h2 className="meal3-step-heading">When&apos;s your first delivery?</h2>
              <p className="meal3-step-subtext">We&apos;ll have your box ready. Just pick a day.</p>

              <div className="meal3-date-scroll" role="list" aria-label="Date selection">
                {dates.map((d, i) => {
                  const active = selectedDate && d.toDateString() === selectedDate.toDateString();
                  return (
                    <button
                      type="button"
                      key={d.toISOString()}
                      className={`meal3-date-card ${active ? "selected" : ""}`}
                      onClick={() => setSelectedDate(d)}
                    >
                      {i === recommendedDateIndex && (
                        <span className="meal3-date-rec">⭐ RECOMMENDED</span>
                      )}
                      {active && (
                        <span className="meal3-date-check" aria-hidden>
                          ✓
                        </span>
                      )}
                      <div className="meal3-date-day">
                        {d.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      <div className="meal3-date-num">{d.getDate()}</div>
                      <div className="meal3-date-month">
                        {d.toLocaleDateString("en-US", { month: "short" })}
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedDate && (
                <ProgressValuePill text={`✓ Your first box arrives ${selectedDateText}`} />
              )}

              <div className="meal3-time-window" aria-label="Delivery time window">
                <div className="meal3-time-label">🕐 When should we deliver?</div>
                <div className="meal3-time-subtext">Pick a time slot that works for you</div>

                <div className="meal3-time-cards" role="list">
                  {DELIVERY_SLOTS.map((s) => {
                    const selected = deliverySlot === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        className={`meal3-time-card ${selected ? "selected" : ""}`}
                        onClick={() => setDeliverySlot(s.id)}
                      >
                        {s.mostPopular && (
                          <span className="meal3-time-mostpopular">🔥 Most popular</span>
                        )}
                        {selected && (
                          <span className="meal3-time-check" aria-hidden>
                            ✓
                          </span>
                        )}
                        <div className="meal3-time-icon" aria-hidden>
                          {s.icon}
                        </div>
                        <div className="meal3-time-title">{s.title}</div>
                        <div className="meal3-time-time">{s.time}</div>
                      </button>
                    );
                  })}
                </div>

                {selectedDate && deliverySlot && (
                  <ProgressValuePill
                    text={`✓ Delivering ${
                      DELIVERY_SLOTS.find((s) => s.id === deliverySlot)?.title || ""
                    }, ${selectedDateText}`}
                  />
                )}
              </div>
            </div>

            <div className="meal3-floating-cta-anchor">
              <FloatingCTA
                isActive={floatingCtaIsActive(1)}
                label="Build My Box"
                onClick={() => (canProceedDate ? goToStep(2) : null)}
                disabled={!canProceedDate}
              />
            </div>
          </section>

          <section className={`meal3-section ${stepHidden(2)}`} id="s3">
            <StepProgress currentStep={currentStep} />
            <div className="meal3-container meal3-step-box">
              <div className="meal3-screen-badge">STEP 3 OF 4</div>
              <div className="meal3-step-head">
                <h2 className="meal3-step-heading">
                  Pick meals you&apos;ll actually look forward to
                </h2>
                <p className="meal3-step-subtext">
                  Choose your box · pick your meals · done in 60 seconds
                </p>
              </div>

              <div className="meal3-box-layout">
                <div className="meal3-box-main">
                  <div className="meal3-section-label">📦 Choose your box size</div>

                  <div className="meal3-box-grid">
                    {BOXES.map((b) => {
                      const active = selectedBox === b.id;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          className={`meal3-box-card ${active ? "selected" : ""}`}
                          onClick={() => setSelectedBox(b.id)}
                        >
                          {b.recommended && (
                            <span className="meal3-recommended-badge">★ RECOMMENDED</span>
                          )}
                          {active && (
                            <span className="meal3-box-check" aria-hidden>
                              ✓
                            </span>
                          )}
                          <div className="meal3-box-icon" aria-hidden>
                            {b.emoji}
                          </div>
                          <div className="meal3-box-name">{b.name}</div>
                          <div className="meal3-box-subtitle">{b.subtitle}</div>
                          <div className="meal3-box-price">{formatCurrency(b.price)}</div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="meal3-meal-progress">
                    <div className="meal3-meal-progress-label">
                      {selectedMeals.length} of {maxMeals} meals chosen ·{" "}
                      {Math.max(0, maxMeals - selectedMeals.length)} more to go
                    </div>
                    <div className="meal3-meal-progress-bar">
                      <div
                        className="meal3-meal-progress-fill"
                        style={{
                          width: `${maxMeals ? (selectedMeals.length / maxMeals) * 100 : 0}%`,
                        }}
                      />
                    </div>
                    <div className="meal3-meal-progress-left">
                      {maxMeals > 0
                        ? `${Math.max(0, maxMeals - selectedMeals.length)} more to go`
                        : ""}
                    </div>
                  </div>
                </div>

                <aside className="meal3-box-sidebar" aria-label="Your Meal Box">
                  <div className="meal3-sidebar-card">
                    <div className="meal3-sidebar-head">
                      <span className="meal3-cart-icon" aria-hidden>
                        🛒
                      </span>
                      Your Meal Box
                    </div>
                    <div className="meal3-sidebar-sub">
                      {box?.name} — {selectedMeals.length} meals · {formatCurrency(box?.price ?? 0)}
                    </div>

                    <div className="meal3-sidebar-slots" aria-label="Meal slots">
                      {Array.from({ length: maxMeals }).map((_, idx) => {
                        const meal = selectedMeals[idx];
                        const item = meal ? MEALS.find((m) => m.id === meal) : null;
                        if (!item) return null;
                        const tags = (item.dietTags || []).slice(0, 2).join(" · ");
                        return (
                          <div
                            key={idx}
                            className={`meal3-slot-card ${slotAnimatingIndex === idx ? "is-updating" : ""}`}
                          >
                            <div className="meal3-slot-pill">
                              <span className="meal3-slot-emoji" aria-hidden>
                                {item.emoji}
                              </span>
                              <span className="meal3-slot-content">
                                <span className="meal3-slot-meal-name">{item.name}</span>
                                <span className="meal3-slot-meal-meta">
                                  {item.cal} · {tags}
                                </span>
                              </span>
                            </div>
                            <button
                              type="button"
                              className="meal3-slot-swap-btn"
                              onClick={() => setSwapSlotIndex(idx)}
                            >
                              Swap
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="meal3-sidebar-divider" />
                    <div className="meal3-sidebar-total">
                      <div className="meal3-sidebar-total-label">Estimated</div>
                      <div className="meal3-sidebar-total-amount">{formatCurrency(total)}</div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>

            <div className="meal3-floating-cta-anchor">
              <FloatingCTA
                isActive={floatingCtaIsActive(2)}
                label="Choose My Meals"
                onClick={() => (canProceedBox ? goToStep(3) : null)}
                disabled={!canProceedBox}
              />
            </div>
          </section>

          <section className={`meal3-section ${stepHidden(3)}`} id="s4">
            <StepProgress currentStep={currentStep} />
            <div className="meal3-container meal3-step-plan">
              <div className="meal3-screen-badge">STEP 4 OF 4</div>
              <div className="meal3-step-head">
                <h2 className="meal3-step-heading">The more you commit, the more you save.</h2>
                <p className="meal3-step-subtext">Pick a frequency that fits your life</p>
              </div>

              <div className="meal3-plan-grid" role="list" aria-label="Subscription plans">
                {PLANS.map((p) => {
                  const active = selectedPlan === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      className={`meal3-plan-card ${active ? "selected" : ""}`}
                      onClick={() => setSelectedPlan(p.id)}
                    >
                      {p.badge && (
                        <span className={`meal3-plan-topbadge meal3-plan-topbadge--${p.tagTone}`}>
                          {p.badge}
                        </span>
                      )}
                      {active && (
                        <span className="meal3-plan-check" aria-hidden>
                          ✓
                        </span>
                      )}
                      <span className="meal3-plan-icon" aria-hidden>
                        {p.icon}
                      </span>
                      <div className="meal3-plan-name">{p.name}</div>
                      <div className="meal3-plan-desc">{p.desc}</div>
                      <span className={`meal3-plan-tag meal3-plan-tag--${p.tagTone}`}>{p.tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="meal3-floating-cta-anchor">
              <FloatingCTA
                isActive={floatingCtaIsActive(3)}
                label="Lock In My Plan"
                onClick={() => (canProceedPlan ? goToStep(4) : null)}
                disabled={!canProceedPlan}
              />
            </div>
          </section>

          <section className={`meal3-section ${stepHidden(4)}`} id="s5">
            <StepProgress currentStep={currentStep} />
            <div className="meal3-container meal3-step-summary">
              <Confetti />
              <h2 className="meal3-summary-title">Your meal plan is ready!</h2>
              <p className="meal3-summary-subtext">Review before we start cooking</p>

              <div className="meal3-summary-card">
                <div className="meal3-summary-section">
                  <div className="meal3-summary-label">📍 DELIVERING TO</div>
                  <div className="meal3-summary-value">Pincode {pincode || "—"}</div>
                </div>

                <div className="meal3-summary-section">
                  <div className="meal3-summary-label">📦 MEAL BOX</div>
                  <div className="meal3-summary-value">
                    {box?.emoji} {box?.name} — {formatCurrency(box?.price ?? 0)}
                  </div>
                </div>

                <div className="meal3-summary-section">
                  <div className="meal3-summary-label">🍽 YOUR MEALS</div>
                  <div className="meal3-summary-pillrow">
                    {selectedMeals.map((id) => {
                      const item = MEALS.find((m) => m.id === id);
                      if (!item) return null;
                      return (
                        <span key={id} className="meal3-summary-pill">
                          {item.emoji} {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="meal3-summary-section">
                  <div className="meal3-summary-label">📅 PLAN</div>
                  <div className="meal3-summary-value">
                    {selectedPlan === "daily"
                      ? "⚡ Daily"
                      : selectedPlan === "weekly"
                        ? "📅 Weekly (10% off)"
                        : "📋 Monthly (20% off)"}
                  </div>
                </div>

                <div className="meal3-reassurance-block">
                  <div className="meal3-reassurance-item">
                    <div className="meal3-reassurance-icon" aria-hidden>
                      ⏸
                    </div>
                    <div className="meal3-reassurance-title">Pause anytime</div>
                    <div className="meal3-reassurance-desc">
                      2 taps in your dashboard. No calls.
                    </div>
                  </div>
                  <div className="meal3-reassurance-item">
                    <div className="meal3-reassurance-icon" aria-hidden>
                      ⏭
                    </div>
                    <div className="meal3-reassurance-title">Skip a week</div>
                    <div className="meal3-reassurance-desc">Miss a week? Skip it instantly.</div>
                  </div>
                  <div className="meal3-reassurance-item">
                    <div className="meal3-reassurance-icon" aria-hidden>
                      ✖
                    </div>
                    <div className="meal3-reassurance-title">Cancel freely</div>
                    <div className="meal3-reassurance-desc">No forms, no hidden charges.</div>
                  </div>
                </div>

                <div className="meal3-guarantee-banner">
                  <span className="meal3-guarantee-icon" aria-hidden>
                    ✅
                  </span>
                  First box guarantee — not happy? Full refund. No questions asked.
                </div>

                <div className="meal3-summary-section meal3-summary-section--feature">
                  <div className="meal3-summary-feature-row">
                    <span className="meal3-feature-pill">✅ No commitment</span>
                    <span className="meal3-feature-pill">🔄 Pause anytime</span>
                    <span className="meal3-feature-pill">⭐ Fresh meals</span>
                  </div>
                </div>

                <div className="meal3-dashed-divider" />

                <div className={`meal3-savings-badge ${savingsPulse ? "pulse" : ""}`}>
                  🎟 You&apos;re saving {formatCurrency(savings)} with the {selectedPlanLabel} plan!
                </div>

                <div className="meal3-summary-total-row">
                  <div className="meal3-summary-total-label">Total</div>
                  <div className="meal3-summary-total-amount">{formatCurrency(total)}</div>
                </div>
              </div>

              <div className="meal3-summary-trustline">
                No hidden charges. Cancel anytime, no questions asked.
              </div>

              <button
                type="button"
                className="meal3-btn-summary"
                onClick={() => {
                  alert("Subscription started. We’ll reach out shortly!");
                }}
              >
                ⚡ Start My Subscription
              </button>

              <div className="meal3-referral-section" aria-label="Gift and referral">
                <div className="meal3-referral-links">
                  <button
                    type="button"
                    className="meal3-referral-link"
                    onClick={() => {
                      setGiftOpen(true);
                      setReferOpen(false);
                    }}
                  >
                    🎁 Gift this plan to someone
                  </button>
                  <span className="meal3-referral-divider" aria-hidden>
                    |
                  </span>
                  <button
                    type="button"
                    className="meal3-referral-link"
                    onClick={() => {
                      setGiftOpen(false);
                      setReferOpen(true);
                    }}
                  >
                    Refer a friend, get {formatCurrency(100)} off
                  </button>
                </div>

                <div className={`meal3-referral-tooltip ${giftOpen ? "open" : ""}`}>
                  <div className="meal3-referral-tooltip-title">
                    Enter your friend&apos;s email and we&apos;ll send them a gift card for this
                    exact plan.
                  </div>

                  <div className="meal3-referral-gift-row">
                    <input
                      type="email"
                      className="meal3-referral-input"
                      value={giftEmail}
                      placeholder="friend@example.com"
                      onChange={(e) => setGiftEmail(e.target.value)}
                    />
                    <button
                      type="button"
                      className="meal3-referral-send-btn"
                      disabled={!giftEmail.trim()}
                      onClick={() => {
                        alert("Gift request sent. We" + "'" + "ll email your friend shortly!");
                        setGiftOpen(false);
                        setGiftEmail("");
                      }}
                    >
                      Send Gift
                    </button>
                  </div>
                </div>

                <div className={`meal3-referral-tooltip ${referOpen ? "open" : ""}`}>
                  <div className="meal3-referral-tooltip-title">
                    Your referral code: {referralCodeUsed}
                  </div>
                  <div className="meal3-referral-code-row">
                    <span className="meal3-referral-code">{referralCodeUsed}</span>
                    <button
                      type="button"
                      className="meal3-referral-copy-btn"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(referralCodeUsed);
                          alert("Copied!");
                        } catch {
                          alert("Copy not supported in this browser.");
                        }
                      }}
                    >
                      Copy
                    </button>
                  </div>
                  <div className="meal3-referral-share">
                    Share this with friends. They get {formatCurrency(100)} off their first box. You
                    get {formatCurrency(100)} credit.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {swapSlotIndex !== null && (
            <div
              className="meal3-modal-backdrop is-open"
              role="dialog"
              aria-modal="true"
              aria-label="Swap meal"
              onClick={() => setSwapSlotIndex(null)}
            >
              <div
                className="meal3-modal meal3-swap-modal is-open"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="meal3-modal-close"
                  onClick={() => setSwapSlotIndex(null)}
                  aria-label="Close"
                >
                  ×
                </button>

                <div className="meal3-modal-top">
                  <h2 className="meal3-modal-title">Swap Meal</h2>
                  <div className="meal3-modal-cal">Choose a meal for slot {swapSlotIndex + 1}</div>
                </div>

                <div className="meal3-swap-grid" role="list" aria-label="Available meals">
                  {MEALS.map((m) => (
                    <article key={m.id} className="meal3-swap-card">
                      <div className="meal3-swap-image" aria-hidden>
                        {m.emoji}
                      </div>
                      <div className="meal3-swap-name">{m.name}</div>
                      <div className="meal3-swap-meta">{m.cal}</div>
                      <button
                        type="button"
                        className="meal3-swap-select-btn"
                        onClick={() => replaceMealInSlot(swapSlotIndex, m.id)}
                      >
                        Select
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
