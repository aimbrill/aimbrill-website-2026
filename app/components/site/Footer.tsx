export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl pl-0 pr-4">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="h-16 w-[170px] overflow-hidden md:h-20 md:w-[210px]">
              <img
                src="/images/aimbrill-wordmark-transparent.png"
                alt="Aimbrill"
                className="h-full w-auto max-w-none -translate-x-5 object-contain md:-translate-x-6"
              />
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              AI-Powered Shopify Studio. We design, build, and automate for growing e-commerce
              brands.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#work" className="underline-grow">
                  Work
                </a>
              </li>
              <li>
                <a href="#apps" className="underline-grow">
                  Apps
                </a>
              </li>
              <li>
                <a href="#contact" className="underline-grow">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Apps
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://apps.shopify.com/aimbrill-popup-ai-automate-bot"
                  className="inline-flex items-center gap-2 underline-grow"
                >
                  WeUpsell on Shopify <span>↗</span>
                </a>
              </li>
              <li>
                <a href="#apps" className="underline-grow">
                  AI Quiz (soon)
                </a>
              </li>
              <li>
                <a href="#apps" className="underline-grow">
                  Meal Flow (soon)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Social
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover-lift inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-ink transition-all duration-300 hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)]/15 hover:shadow-[0_0_18px_var(--lime)]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.3" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/aimbrill/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover-lift inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-ink transition-all duration-300 hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)]/15 hover:shadow-[0_0_18px_var(--lime)]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path d="M7.2 9.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="7.2" cy="6.7" r="1.1" fill="currentColor" />
                  <path
                    d="M11.2 17v-4.4c0-1.9 1.1-3.4 3-3.4s2.8 1.2 2.8 3.3V17"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
              <a
                href="https://wa.me/917990488965"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="hover-lift inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-ink transition-all duration-300 hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)]/15 hover:shadow-[0_0_18px_var(--lime)]"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
                  <path
                    d="M19.2 11.6c0 4-3.2 7.2-7.2 7.2-1.3 0-2.6-.3-3.7-1l-3 .8.9-2.9c-.7-1.2-1.1-2.5-1.1-4.1 0-4 3.2-7.2 7.2-7.2s6.9 3.2 6.9 7.2Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.2 9.4c.1-.2.2-.3.4-.3h.7c.1 0 .3.1.3.2l.8 1.9c.1.2 0 .4-.1.5l-.5.5c.5.9 1.3 1.6 2.2 2.1l.5-.5c.1-.1.3-.2.5-.1l1.8.8c.2.1.3.2.3.4v.7c0 .2-.1.3-.3.4-.4.2-.9.4-1.4.4-2.7 0-5.7-3-5.7-5.7 0-.5.1-1 .4-1.4Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© 2025 Aimbrill. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy" target="_blank" rel="noreferrer" className="underline-grow hover:text-ink">
              Privacy Policy
            </a>
            <span aria-hidden className="opacity-40">
              ·
            </span>
            <a href="/terms" target="_blank" rel="noreferrer" className="underline-grow hover:text-ink">
              Terms and Conditions
            </a>
            <span aria-hidden className="opacity-40">
              ·
            </span>
            <span>Built by the Aimbrill team.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
