"use client";

import Link from "next/link";
import { QuizSiteHeader } from "./QuizSiteHeader";
import { QuizSiteFooter } from "./QuizSiteFooter";
import { HeroIllustration } from "./HeroIllustration";
import { HowItWorks } from "./HowItWorks";
import { FeatureShowcase } from "./FeatureShowcase";
import { IndustryShowcase } from "./IndustryShowcase";
import { BeforeVsAfter } from "./BeforeVsAfter";
// ShopifyMark removed from hero to eliminate decorative icons
// import { QuizFaq } from "./QuizFaq";

const SHOPIFY_APP_URL = "https://apps.shopify.com/ai-quiz-recommendation";

function PlayMark() {
  return null;
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
                  Install free on Shopify
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
        </a>
      </section>

      <QuizSiteFooter />
    </>
  );
}
