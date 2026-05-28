"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does AI generate quiz questions?",
    a: "Our AI scans your Shopify product catalog—titles, descriptions, tags, and collections—to automatically create tailored quiz questions and logic paths that match your brand.",
  },
  {
    q: "Can I customize the quiz design?",
    a: "Yes. Use the visual editor to adjust colors, fonts, and layout, then embed the quiz on any page in your Shopify store.",
  },
  {
    q: "How are product recommendations matched?",
    a: "Each answer maps to products, collections, or tags. Shoppers see match scores and personalized picks based on their responses—pulled from live inventory.",
  },
  {
    q: "Is coding required to install?",
    a: "No. Install from the Shopify App Store, generate your quiz with AI, and publish in minutes—no theme code edits required.",
  },
];

export function QuizFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="aq-faq">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className={`aq-faq-item${isOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="aq-faq-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.q}
              <span className="aq-faq-icon" aria-hidden>
                +
              </span>
            </button>
            {isOpen && <p className="aq-faq-body">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
