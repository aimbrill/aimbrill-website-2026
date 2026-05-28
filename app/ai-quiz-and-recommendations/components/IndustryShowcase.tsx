"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type Industry = {
  id: string;
  title: string;
  description: string;
  theme: "pink" | "lavender" | "mint" | "blue" | "peach";
  icon: string;
  phoneTitle: string;
  phoneSub: string;
  tag: string;
  checks: string[];
  cta: string;
  images: string[];
};

const INDUSTRIES: Industry[] = [
  {
    id: "skincare",
    title: "Skincare",
    description: "Help customers find the perfect skincare routine.",
    theme: "pink",
    icon: "✨",
    phoneTitle: "Your perfect skincare routine",
    phoneSub: "Based on your skin type",
    tag: "Perfect for dry skin",
    checks: ["Hydrates & nourishes", "Strengthens skin barrier", "Suitable for sensitive skin"],
    cta: "Add all to cart - $89",
    images: [
      "/ai-quiz-landing/industries/skincare/1.jpg",
      "/ai-quiz-landing/industries/skincare/2.jpg",
      "/ai-quiz-landing/industries/skincare/3.jpg",
    ],
  },
  {
    id: "fashion",
    title: "Fashion",
    description: "Recommend styles, sizes, and outfits.",
    theme: "lavender",
    icon: "👕",
    phoneTitle: "Complete your look",
    phoneSub: "We found the perfect items for you",
    tag: "Why you'll love it",
    checks: ["Trendy & modern style", "Perfect fit for you", "Easy to mix & match"],
    cta: "Add all to cart - $129",
    images: [
      "/ai-quiz-landing/industries/fashion/1.jpg",
      "/ai-quiz-landing/industries/fashion/2.jpg",
      "/ai-quiz-landing/industries/fashion/3.jpg",
    ],
  },
  {
    id: "supplements",
    title: "Wellness",
    description: "Create personalized wellness recommendations.",
    theme: "mint",
    icon: "🌿",
    phoneTitle: "Your personalized wellness stack",
    phoneSub: "Recommended for you",
    tag: "Support your goals",
    checks: ["Boost energy", "Support immunity", "Improve overall health"],
    cta: "Add all to cart - $74",
    images: [
      "/ai-quiz-landing/industries/supplements/1.jpg",
      "/ai-quiz-landing/industries/supplements/2.jpg",
      "/ai-quiz-landing/industries/supplements/3.jpg",
    ],
  },
  {
    id: "electronics",
    title: "Tech",
    description: "Guide shoppers to the right devices faster.",
    theme: "blue",
    icon: "💻",
    phoneTitle: "Find the perfect tech for you",
    phoneSub: "Based on your needs",
    tag: "Perfect for",
    checks: ["Work & productivity", "Entertainment", "On-the-go use"],
    cta: "Add all to cart - $499",
    images: [
      "/ai-quiz-landing/industries/electronics/1.jpg",
      "/ai-quiz-landing/industries/electronics/2.jpg",
      "/ai-quiz-landing/industries/electronics/3.jpg",
    ],
  },
  {
    id: "gifts",
    title: "Gifting",
    description: "Create AI gift finder quizzes.",
    theme: "peach",
    icon: "🎁",
    phoneTitle: "Find the perfect gift",
    phoneSub: "Thoughtful picks for any occasion",
    tag: "Handpicked for you",
    checks: ["Unique & thoughtful", "Loved by everyone", "Perfect for any occasion"],
    cta: "View gift ideas",
    images: [
      "/ai-quiz-landing/industries/gifts/1.jpg",
      "/ai-quiz-landing/industries/gifts/2.jpg",
      "/ai-quiz-landing/industries/gifts/3.jpg",
    ],
  },
];

const ANIMATION_MS = 480;

function PhoneMockup({ industry }: { industry: Industry }) {
  return (
    <div className={`aq-ind-phone aq-ind-phone--${industry.theme}`}>
      <div className="aq-ind-phone__screen">
        <div className="aq-ind-phone__status" aria-hidden>
          <span className="aq-ind-phone__time">9:41</span>
          <span className="aq-ind-phone__signals">
            <span className="aq-ind-phone__signal" />
            <span className="aq-ind-phone__wifi" />
            <span className="aq-ind-phone__battery" />
          </span>
        </div>
        <span className="aq-ind-phone__sparkle" aria-hidden>
          ✦
        </span>
        <p className="aq-ind-phone__title">{industry.phoneTitle}</p>
        <p className="aq-ind-phone__sub">{industry.phoneSub}</p>
        <div className="aq-ind-phone__visual">
          {industry.images.map((src, i) => (
            <div
              key={`${industry.id}-${i}`}
              className={`aq-ind-phone__product aq-ind-phone__product--${i + 1}`}
            >
              <Image src={src} alt="" fill sizes="90px" className="aq-ind-phone__photo" />
            </div>
          ))}
        </div>
        <span className="aq-ind-phone__tag">{industry.tag}</span>
        <ul className="aq-ind-phone__checks">
          {industry.checks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span className="aq-ind-phone__cta">{industry.cta}</span>
      </div>
    </div>
  );
}

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <>
      <PhoneMockup industry={industry} />
      <div className={`aq-ind-meta aq-ind-meta--${industry.theme}`}>
        <div className="aq-ind-meta__head">
          <span className="aq-ind-meta__icon" aria-hidden>
            {industry.icon}
          </span>
          <div className="aq-ind-meta__copy">
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function getCenteredScrollLeft(track: HTMLElement, column: HTMLElement) {
  const trackRect = track.getBoundingClientRect();
  const columnRect = column.getBoundingClientRect();
  const target =
    track.scrollLeft +
    (columnRect.left - trackRect.left) +
    columnRect.width / 2 -
    trackRect.width / 2;
  const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
  return Math.max(0, Math.min(target, maxScroll));
}

function getNearestIndex(track: HTMLElement) {
  const columns = Array.from(track.children) as HTMLElement[];
  const trackRect = track.getBoundingClientRect();
  const viewportCenter = trackRect.left + trackRect.width / 2;

  let closest = 0;
  let minDistance = Number.POSITIVE_INFINITY;

  columns.forEach((column, index) => {
    const rect = column.getBoundingClientRect();
    const columnCenter = rect.left + rect.width / 2;
    const distance = Math.abs(columnCenter - viewportCenter);
    if (distance < minDistance) {
      minDistance = distance;
      closest = index;
    }
  });

  return closest;
}

export function IndustryShowcase() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const isNavigatingRef = useRef(false);
  const animTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const didInitRef = useRef(false);
  const total = INDUSTRIES.length;

  const finishNavigation = useCallback(() => {
    isAnimatingRef.current = false;
    isNavigatingRef.current = false;
  }, []);

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const track = trackRef.current;
    if (!track) return;
    const column = track.children[index] as HTMLElement | undefined;
    if (!column) return;

    const targetLeft = getCenteredScrollLeft(track, column);
    track.scrollTo({ left: targetLeft, behavior });
  }, []);

  const setActiveIndex = useCallback(
    (index: number) => {
      const next = ((index % total) + total) % total;
      activeRef.current = next;
      setActive(next);
      return next;
    },
    [total],
  );

  const goTo = useCallback(
    (index: number, options?: { behavior?: ScrollBehavior; force?: boolean }) => {
      if (isAnimatingRef.current && !options?.force) return;

      const current = activeRef.current;
      const next = setActiveIndex(index);
      if (next === current && !options?.force) return;

      const isWrap = (current === total - 1 && next === 0) || (current === 0 && next === total - 1);
      const behavior = options?.behavior ?? (isWrap ? "auto" : "smooth");

      isAnimatingRef.current = behavior === "smooth";
      isNavigatingRef.current = true;

      if (animTimerRef.current) clearTimeout(animTimerRef.current);

      requestAnimationFrame(() => {
        scrollToIndex(next, behavior);
      });

      if (behavior === "auto") {
        finishNavigation();
      } else {
        animTimerRef.current = setTimeout(finishNavigation, ANIMATION_MS);
      }
    },
    [finishNavigation, scrollToIndex, setActiveIndex, total],
  );

  const goPrev = useCallback(() => {
    goTo(activeRef.current - 1);
  }, [goTo]);

  const goNext = useCallback(() => {
    goTo(activeRef.current + 1);
  }, [goTo]);

  useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;
    goTo(0, { behavior: "auto", force: true });
  }, [goTo]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScrollEnd = () => {
      if (isNavigatingRef.current) {
        finishNavigation();
        return;
      }

      const nearest = getNearestIndex(track);
      if (nearest !== activeRef.current) {
        setActiveIndex(nearest);
      }
    };

    track.addEventListener("scrollend", onScrollEnd);

    const onResize = () => {
      scrollToIndex(activeRef.current, "auto");
    };
    window.addEventListener("resize", onResize);

    return () => {
      track.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("resize", onResize);
      if (animTimerRef.current) clearTimeout(animTimerRef.current);
    };
  }, [finishNavigation, scrollToIndex, setActiveIndex]);

  return (
    <section className="aq-section aq-industries" id="industries">
      <div className="aq-wrap aq-industries__wrap">
        <div className="aq-industries__layout">
          <div className="aq-section-intro aq-section-intro--left aq-industries__intro">
            <h2>
              Personalized Shopping For{" "}
              <span className="aq-section-accent aq-section-accent--break">Every Industry</span>
            </h2>
            <p>
              Create AI-powered quizzes and recommendations tailored to your customers, products,
              and shopping experience.
            </p>
            <Link
              href="/ai-quiz-and-recommendations/try-demo"
              className="aq-btn aq-btn--primary aq-btn--lg aq-industries__cta"
            >
              See it in action
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="aq-industries__showcase">
            <div className="aq-ind-slider">
              <button
                type="button"
                className="aq-ind-slider__arrow aq-ind-slider__arrow--prev"
                onClick={goPrev}
                aria-label="Previous industry"
              >
                ‹
              </button>

              <div className="aq-ind-slider__viewport">
                <div className="aq-industries__track" ref={trackRef}>
                  {INDUSTRIES.map((industry, index) => (
                    <article
                      key={industry.id}
                      className={`aq-ind-col${index === active ? " is-active" : ""}`}
                      data-index={index}
                    >
                      <IndustryCard industry={industry} />
                    </article>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="aq-ind-slider__arrow aq-ind-slider__arrow--next"
                onClick={goNext}
                aria-label="Next industry"
              >
                ›
              </button>
            </div>

            <div className="aq-industries__nav" aria-label="Browse industries">
              <div className="aq-ind-dots" role="tablist">
                {INDUSTRIES.map((ind, i) => (
                  <button
                    key={ind.id}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={ind.title}
                    className={i === active ? "is-active" : ""}
                    onClick={() => goTo(i, { force: true })}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
