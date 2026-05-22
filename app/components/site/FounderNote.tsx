"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

const INSTAGRAM_URL = "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2";
const LINKEDIN_URL = "https://www.linkedin.com/company/aimbrill/";

export function FounderNote() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-12 md:py-10">
      <div className="mx-auto max-w-7xl pl-0 pr-4">
        <div className="reveal flex items-center gap-5">
          <span className="h-px w-16 bg-ink/70" />
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink md:text-xs md:tracking-[0.34em]">
            The person behind Aimbrill
          </span>
        </div>

        <article className="reveal mt-8 rounded-[2rem] border border-border bg-surface p-5 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-[200px_minmax(0,1fr)] md:items-center md:gap-10">
            <div className="flex flex-col items-center text-center md:pb-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-background bg-surface-2 ring-1 ring-border md:h-44 md:w-44">
                <Image
                  src="/images/AIICON.png"
                  alt="Aimbrill AI icon"
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  quality={85}
                  loading="lazy"
                  className="scale-110 object-cover object-center"
                />
              </div>
              <div className="mt-4 font-display text-xl font-semibold leading-none text-ink">
                Aimbrill Team.
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Shopify Growth Specialists</div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-surface-2"
              >
                Work with us <span aria-hidden>→</span>
              </a>
              <div className="mt-4 flex items-center justify-center gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover-lift inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-ink transition-all duration-300 hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)]/15 hover:shadow-[0_0_18px_var(--lime)]"
                >
                  <span className="pointer-events-none flex size-[22px] items-center justify-center">
                    <svg viewBox="0 0 16 16" className="block size-full" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      />
                    </svg>
                  </span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover-lift inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-background text-ink transition-all duration-300 hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)]/15 hover:shadow-[0_0_18px_var(--lime)]"
                >
                  <span className="pointer-events-none flex size-[22px] items-center justify-center">
                    <svg viewBox="0 0 16 16" className="block size-full" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <span className="mb-6 inline-block h-1 w-12 rounded-full bg-[color:var(--lime)]" />
              <blockquote className="max-w-4xl font-display text-[28px] font-semibold leading-[1.18] tracking-tight text-ink md:text-[28px] md:leading-[1.18]">
                {`Aimbrill was built with one belief — every brand deserves brilliant execution, not just “good enough.” Our name reflects the way we work: aim higher, deliver brilliance. Over the last 3 years, we’ve grown into a team focused on shipping real work, building Shopify systems, and becoming the partner brands can truly rely on.`}
              </blockquote>

              <div className="mt-7 border-t border-border pt-5">
                <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-semibold text-muted-foreground md:text-sm">
                  <span className="inline-flex items-center rounded-full bg-background px-4 py-2">
                    <span className="mr-2 text-[color:var(--lime)]">●</span>3 years Shopify
                    experience
                  </span>
                  <span className="inline-flex items-center rounded-full bg-background px-4 py-2">
                    <span className="mr-2 text-[color:var(--lime)]">●</span>Built apps used by real
                    merchants
                  </span>
                  <span className="inline-flex items-center rounded-full bg-background px-4 py-2">
                    <span className="mr-2 text-[color:var(--lime)]">●</span>Shopify App Store
                    developer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
