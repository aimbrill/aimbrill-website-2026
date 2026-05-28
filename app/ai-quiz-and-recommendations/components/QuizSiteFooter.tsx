import Link from "next/link";
import type { ReactNode } from "react";
import { QuizLogo } from "./QuizLogo";

const SHOPIFY_APP_URL = "https://apps.shopify.com/ai-quiz-recommendation";
const INSTAGRAM_URL = "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2";
const LINKEDIN_URL = "https://www.linkedin.com/company/aimbrill/";

const RESOURCE_LINKS = [
  { href: "/ai-quiz-and-recommendations/try-demo", label: "Book a Demo" },
  { href: "/blog", label: "Blog" },
  { href: "/ai-quiz-and-recommendations/privacy", label: "Privacy Policy" },
];

function ShopifyAppBadge() {
  return (
    <a
      href={SHOPIFY_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="aq-footer__shopify-badge"
      aria-label="Find it on the Shopify App Store"
    >
      <span className="aq-footer__shopify-label">Find it on the</span>
      <span className="aq-footer__shopify-row">
        <svg width="22" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z" fill="currentColor" opacity="0.95" />
          <path
            d="M12 5.5v13M6.5 8.5l11 7M17.5 8.5l-11 7"
            stroke="#111"
            strokeWidth="1"
            opacity="0.35"
          />
        </svg>
        <span>
          <strong>Shopify</strong> App Store
        </span>
      </span>
    </a>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="aq-footer__social-link"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function QuizSiteFooter() {
  return (
    <footer className="aq-footer">
      <span className="aq-footer__watermark" aria-hidden>
        AI Quiz
      </span>

      <div className="aq-wrap aq-footer__wrap">
        <div className="aq-footer__main">
          <div className="aq-footer__start">
            <p className="aq-footer__title" role="heading" aria-level={2}>
              Get started
            </p>
            <p className="aq-footer__desc">
              Deliver personalized shopping at scale with AI-driven quizzes built for Shopify.
            </p>
            <ShopifyAppBadge />
            <div className="aq-footer__social">
              <SocialIcon href={INSTAGRAM_URL} label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.2c2.7 0 3 .01 4.05.06 1.05.05 1.77.22 2.4.47.64.25 1.18.58 1.72 1.12.54.54.87 1.08 1.12 1.72.25.63.42 1.35.47 2.4.05 1.05.06 1.35.06 4.05s-.01 3-.06 4.05c-.05 1.05-.22 1.77-.47 2.4a4.6 4.6 0 0 1-1.12 1.72 4.6 4.6 0 0 1-1.72 1.12c-.63.25-1.35.42-2.4.47-1.05.05-1.35.06-4.05.06s-3-.01-4.05-.06c-1.05-.05-1.77-.22-2.4-.47a4.6 4.6 0 0 1-1.72-1.12 4.6 4.6 0 0 1-1.12-1.72c-.25-.63-.42-1.35-.47-2.4C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.05c.05-1.05.22-1.77.47-2.4.25-.64.58-1.18 1.12-1.72.54-.54 1.08-.87 1.72-1.12.63-.25 1.35-.42 2.4-.47C9 2.21 9.3 2.2 12 2.2zm0 1.8a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3.7a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6zm6.9-4.4a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0z" />
                </svg>
              </SocialIcon>
              <SocialIcon href={LINKEDIN_URL} label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2zM8.2 19.2H5.1V9.55h3.1V19.2zM6.65 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm12.55 11H16.1v-4.68c0-1.12-.02-2.55-1.55-2.55-1.55 0-1.79 1.22-1.79 2.47V19.2h-3.1V9.55h3v1.28h.04c.42-.8 1.44-1.64 2.96-1.64 3.17 0 3.75 2.09 3.75 4.8V19.2z" />
                </svg>
              </SocialIcon>
            </div>
            <div className="aq-footer__logo">
              <QuizLogo light />
            </div>
          </div>

          <div className="aq-footer__resources">
            <p className="aq-footer__title" role="heading" aria-level={2}>
              Resources
            </p>
            <ul className="aq-footer__links">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <p className="aq-footer__credit">
              <a href="https://aimbrill.com" target="_blank" rel="noopener noreferrer">
                Built by Aimbrill
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
