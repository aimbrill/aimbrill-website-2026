"use client";

import Image from "next/image";
import Link from "next/link";
import EyebrowPill from "../../ui/EyebrowPill";
import SplitSectionHeadline from "../../ui/SplitSectionHeadline";
import SectionShell from "../../ui/SectionShell";
import { Motion, fadeUp, stagger } from "../../../lib/motion";
import { mealFlowLinks } from "../../../lib/links";
import { industryCards } from "./industries.data";

export default function Industries() {
  return (
    <>
      <div className="mx-auto max-w-6xl py-6 text-center md:py-8">
        <div className="mt-0">
          <EyebrowPill label="REAL-WORLD FLOWS" />
        </div>
        <SplitSectionHeadline
          className="section-headline h2-display mx-auto mt-6 max-w-[860px] text-center text-balance !font-black !tracking-tighter"
          lead="See how this works across "
          accent="different Shopify brands"
        />
        <p className="body-copy mx-auto mt-0 max-w-[620px]">
          Real flows built for meal, food, and recurring delivery operations with strict fulfillment
          logic.
        </p>
      </div>

      <SectionShell
        id="industries"
        className="section--lg pb-0 pt-0"
        style={{ overflow: "hidden" }}
      >
        <Motion.div
          className="mx-auto mt-6 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {industryCards.map((card) => (
            <Motion.article
              key={card.title}
              className="card-hover group relative flex h-full min-h-[560px] w-full flex-col overflow-hidden rounded-[24px] border transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] md:min-h-[590px]"
              style={{ background: "var(--card)", borderColor: "var(--border)" }}
              variants={fadeUp}
            >
              <div className="relative h-[240px] w-full overflow-hidden lg:h-[260px]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--bg) 40%, transparent) 50%, color-mix(in srgb, var(--bg) 90%, transparent) 100%)",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h3 className="mb-3 text-[18px] font-extrabold tracking-[0.02em]">{card.title}</h3>
                <div className="mb-5 flex items-start gap-4">
                  <span className="inline-block w-1 self-stretch rounded bg-[var(--brown)]" />
                  <p className="whitespace-pre-line text-[15px] leading-[1.65] text-[var(--muted)]">
                    {card.desc}
                  </p>
                </div>
                {card.usedBy && (
                  <p className="mb-6 text-[11px] font-bold tracking-[0.15em] text-[var(--subtle)]">
                    USED BY: {card.usedBy}
                  </p>
                )}
                <div className="mt-auto flex flex-wrap gap-2.5">
                  <Link
                    href={card.demoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[12px] border px-5 py-3 text-[13px] font-bold text-[var(--text)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--brown-bg)]"
                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                  >
                    TRY DEMO
                  </Link>
                  <Link
                    href={card.watchHref ?? mealFlowLinks.tryMealFlow}
                    className="inline-flex items-center justify-center rounded-[12px] border px-5 py-3 text-[13px] font-bold text-[var(--brown)] transition-all duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:bg-[var(--brown-bg)]"
                    style={{
                      background: "var(--brown-bg)",
                      borderColor: "color-mix(in srgb, var(--brown) 35%, transparent)",
                    }}
                  >
                    WATCH FLOW VIDEO ▶
                  </Link>
                </div>
              </div>
            </Motion.article>
          ))}
        </Motion.div>

        <div className="mb-0 mt-4 text-center">
          <p className="text-[16px] font-semibold text-[var(--subtle)]">
            Different industries. Different rules.
          </p>
          <p className="mt-2 text-[18px] font-bold">
            One system that makes everything work together.
          </p>
        </div>
      </SectionShell>
    </>
  );
}
