"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

export function FounderNote() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-12 md:py-20">
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
                  src="/images/founder-dharmik.png"
                  alt="Dharmik profile"
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="scale-110 object-cover object-center"
                />
              </div>
              <div className="mt-4 font-display text-xl font-semibold leading-none text-ink">
                Dharmik
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Founder, Aimbrill</div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-surface-2"
              >
                Work with me <span aria-hidden>→</span>
              </a>
            </div>

            <div>
              <span className="mb-6 inline-block h-1 w-12 rounded-full bg-[color:var(--lime)]" />
              <blockquote className="max-w-4xl font-display text-lg font-semibold leading-tight tracking-tight text-ink md:text-[2rem] md:leading-[1.22]">
                {`"I started Aimbrill because I was frustrated watching Shopify brands overpay for
                generic agencies that didn't understand e-commerce. We're a small team that ships
                real work - for brands that want a partner, not just a vendor."`}
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
