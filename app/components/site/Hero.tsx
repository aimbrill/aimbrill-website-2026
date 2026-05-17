import { useReveal } from "@/hooks/use-reveal";
import Image from "next/image";

const CALENDLY_URL = "/#apps";

export function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0 dot-grid opacity-[0.08]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        <div className="reveal flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--lime)] shadow-[0_0_12px_var(--lime)]" />
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-muted-foreground">
            AI-Powered Shopify Studio
          </span>
        </div>

        <h1 className="reveal mt-6 max-w-4xl font-display text-[70px] font-semibold leading-[1.02] tracking-tight">
          We build AI automation, smart apps & solutions for D2C brands.
        </h1>

        <p className="reveal mt-6 max-w-2xl text-[16px] text-muted-foreground">
          From custom Shopify apps to AI integrations — we help growing brands run smarter, sell
          more, and automate the work that slows them down.
        </p>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={CALENDLY_URL}
            data-cursor="view-apps"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[16px] font-semibold text-background transition hover:scale-[1.03]"
          >
            View our apps
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-background/60 px-6 py-3.5 text-[16px] font-semibold backdrop-blur transition hover:bg-secondary"
          >
            See our work <span aria-hidden>↓</span>
          </a>
        </div>

        <div className="mt-6 flex justify-center">
          <Image
            src="/images/shopify-growth-studio-badge-1.png"
            alt="Shopify Growth Studio — AI Experts for D2C Brands"
            width={360}
            height={72}
            className="mx-auto object-contain w-[160px] sm:w-[200px] md:w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
