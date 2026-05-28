"use client";

import { useState } from "react";
import Link from "next/link";
import { QuizLogo } from "./QuizLogo";

const SHOPIFY_APP_URL = "https://apps.shopify.com/ai-quiz-recommendation";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#before-after", label: "Showcase" },
];

export function QuizSiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="aq-header">
      <div className="aq-wrap">
        <div className="aq-header-inner">
          <Link href="/ai-quiz-and-recommendations" onClick={() => setOpen(false)}>
            <QuizLogo />
          </Link>
          <nav className="aq-nav" aria-label="Main">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={SHOPIFY_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="aq-btn aq-btn--primary aq-header-cta"
          >
            Install free
            <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            className="aq-menu-toggle"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
        {open && (
          <nav className="aq-mobile-nav" aria-label="Mobile">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href={SHOPIFY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aq-btn aq-btn--primary aq-mobile-nav-cta"
            >
              Install free
              <span aria-hidden>→</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
