"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import SectionShell from "../../ui/SectionShell";
import SplitSectionHeadline from "../../ui/SplitSectionHeadline";
import { mealFlowLinks } from "../../../lib/links";

export default function FinalCTA() {
  return (
    <SectionShell id="cta" className="pt-10 sm:pt-12">
      <div
        className="relative mx-auto max-w-[900px] overflow-hidden rounded-[28px] border px-6 py-20 text-center sm:px-8 md:px-14 md:py-20"
        style={{ background: "var(--card)", borderColor: "var(--border)" }}
      >
        <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-[11px] font-semibold tracking-[0.12em] text-[var(--subtle)]">
          <span>⊙ NO OBLIGATION</span>
          <span>⊙ JUST CLARITY ON WHAT YOUR STORE ACTUALLY NEEDS</span>
        </div>
        <SplitSectionHeadline
          className="section-headline h2-display mx-auto max-w-[860px] overflow-visible pb-1.5 text-center text-balance !font-black !tracking-tighter"
          lead="Fix your Shopify system -"
          accent="before it costs you more"
        />
        <p className="body-copy mx-auto mt-0 max-w-[520px]">
          Get a free review of your current setup. We&apos;ll show exactly what&apos;s not working -
          and how to fix it with a system that actually works together.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={mealFlowLinks.shopify}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            Install on Shopify <ArrowRight size={15} />
          </a>
          <a
            href={mealFlowLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-2"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
        {/* Footer tagline removed as requested */}
      </div>
    </SectionShell>
  );
}
