import Link from "next/link";
import type { ReactNode } from "react";
import { QuizLogo } from "./QuizLogo";
import { ShopifyMark } from "./ShopifyMark";

const SHOPIFY_APP_URL = "https://apps.shopify.com/ai-quiz-recommendation";
const INSTAGRAM_URL = "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2";
const LINKEDIN_URL = "https://www.linkedin.com/company/aimbrill/";
const WHATSAPP_URL = "https://wa.me/917990488965";

const RESOURCE_LINKS = [
  { href: "https://calendly.com/weupsell-experts/ai-campaign-popup", label: "Book a Demo" },
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
        <ShopifyMark size={22} className="aq-footer__shopify-icon" />
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

function FooterSocial() {
  return (
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
      <SocialIcon href={WHATSAPP_URL} label="WhatsApp">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.882 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      </SocialIcon>
    </div>
  );
}

function FooterCredit() {
  return (
    <p className="aq-footer__credit">
      <a href="https://aimbrill.com" target="_blank" rel="noopener noreferrer">
        Built by Aimbrill
      </a>
    </p>
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
            <div className="aq-footer__start-top">
              <p className="aq-footer__title" role="heading" aria-level={2}>
                Get started
              </p>
              <p className="aq-footer__desc">
                Deliver personalized shopping at scale with AI-driven quizzes built for Shopify.
              </p>
              <ShopifyAppBadge />
              <FooterSocial />
            </div>
            <div className="aq-footer__start-foot">
              <div className="aq-footer__logo">
                <QuizLogo />
              </div>
            </div>
          </div>

          <div className="aq-footer__resources">
            <div className="aq-footer__resources-top">
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
            </div>
            <div className="aq-footer__resources-foot">
              <FooterCredit />
            </div>
          </div>

          {/** Single responsive footer block above replaces previous desktop/mobile duplicates */}
        </div>
      </div>
    </footer>
  );
}
