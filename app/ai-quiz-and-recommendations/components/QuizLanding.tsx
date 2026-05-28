"use client";

import Link from "next/link";
import { QuizSiteHeader } from "./QuizSiteHeader";
import { QuizSiteFooter } from "./QuizSiteFooter";
import { HeroIllustration } from "./HeroIllustration";
import { HowItWorks } from "./HowItWorks";
import { FeatureShowcase } from "./FeatureShowcase";
import { IndustryShowcase } from "./IndustryShowcase";
import { BeforeVsAfter } from "./BeforeVsAfter";
// import { QuizFaq } from "./QuizFaq";

const SHOPIFY_APP_URL = "https://apps.shopify.com/ai-quiz-recommendation";

function ShopifyMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="currentColor" opacity="0.95" />
      <path d="M12 6v15M3 7l9 5 9-5" stroke="#fff" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

function PlayMark() {
  return (
    <span className="aq-hero-play" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" />
      </svg>
    </span>
  );
}

export function QuizLanding() {
  return (
    <>
      <QuizSiteHeader />

      <section className="aq-hero" id="top">
        <div className="aq-hero-glow" aria-hidden />
        <div className="aq-wrap">
          <div className="aq-hero-grid">
            <div>
              <h1>
                Turn Your Shopify Store Into a Smarter Shopping Experience With{" "}
                <span className="aq-hero-accent">AI Quizzes</span>
              </h1>
              <p className="aq-hero-sub">
                Help customers find the right products faster with personalized AI-powered product
                recommendations.
              </p>
              <div className="aq-hero-ctas">
                <a
                  href={SHOPIFY_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aq-btn aq-btn--primary aq-btn--lg aq-hero-cta-shopify"
                >
                  <ShopifyMark />
                  Install free on Shopify
                  <span className="aq-hero-cta-arrow" aria-hidden>
                    →
                  </span>
                </a>
                <Link
                  href="/ai-quiz-and-recommendations/try-demo"
                  className="aq-btn aq-btn--outline aq-btn--lg aq-hero-cta-demo"
                >
                  <PlayMark />
                  Try demo
                </Link>
              </div>
            </div>
            <div className="aq-hero-visual">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <FeatureShowcase />

      <IndustryShowcase />

      <BeforeVsAfter />

      {/* <section className="aq-section aq-section--white" id="faq">
        <div className="aq-wrap">
          <div className="aq-section-intro">
            <span className="aq-section-eyebrow">FAQ</span>
            <h2>Common Questions About AI Quiz Setup</h2>
          </div>
          <QuizFaq />
        </div>
      </section> */}

      <section className="aq-cta-band">
        <h2>Ready to Transform Your Store?</h2>
        <p>
          Join Shopify merchants using AI-powered quizzes to deliver personalized shopping
          experiences and boost sales.
        </p>
        <a
          href={SHOPIFY_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="aq-btn aq-btn--primary aq-btn--lg"
        >
          Install Free on Shopify
          <span aria-hidden>→</span>
        </a>
      </section>

      <QuizSiteFooter />
    </>
  );
}
