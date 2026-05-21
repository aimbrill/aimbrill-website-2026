"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import EyebrowPill from "../../ui/EyebrowPill";
import { SplitSectionHeadlineLines } from "../../ui/SplitSectionHeadline";
import { howItWorksSteps } from "./how-it-works.data";

export default function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="process" className="section section--lg relative overflow-hidden bg-[var(--bg)]">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mt-0">
            <EyebrowPill label="HOW IT WORKS" />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-headline h2-display mx-auto mt-6 max-w-[860px] text-center text-balance !font-black !tracking-tighter"
          >
            <SplitSectionHeadlineLines
              lead="We understand your store —"
              accent="then fix the system behind it"
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="body-copy mx-auto mt-0 max-w-[620px]"
          >
            We don&apos;t just install apps. We analyze your current setup, identify what&apos;s
            breaking, and build a system based on how your business actually works.
          </motion.p>
        </div>

        <div className="relative mx-auto max-w-[760px]">
          <div className="relative">
            <div className="absolute bottom-6 left-[24px] top-6 w-[1.5px] bg-slate-100 md:left-[32px]" />

            <div className="flex flex-col">
              {howItWorksSteps.map((item, idx) => {
                const needsExtraGap = idx > 0 && hovered === idx;
                return (
                  <motion.div
                    key={item.step}
                    layout
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    className="grid grid-cols-[48px_1fr] items-start gap-4 md:grid-cols-[64px_1fr] md:gap-6"
                    style={{ marginBottom: needsExtraGap ? 24 : undefined }}
                  >
                    <motion.div
                      layout
                      className="flex items-start justify-center"
                      style={{ zIndex: hovered === idx ? 30 : 10 }}
                    >
                      <div
                        className={`${item.color} flex h-[48px] w-[48px] items-center justify-center rounded-[12px] shadow-lg transition-all duration-300 md:h-[64px] md:w-[64px] md:rounded-[20px]`}
                      >
                        <item.icon className="h-5 w-5 text-white md:h-7 md:w-7" strokeWidth={2.5} />
                      </div>
                    </motion.div>

                    <motion.div
                      layout
                      animate={{ y: hovered === idx ? -12 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="pt-1 md:pt-2"
                      style={{ zIndex: hovered === idx ? 40 : 1 }}
                    >
                      <div className="rounded-[20px] border border-[color-mix(in_srgb,var(--heading)_10%,var(--card))] bg-white p-4 shadow-[0_10px_30px_var(--accent-a-04)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--brown)_18%,var(--card))] hover:shadow-[0_15px_40px_var(--accent-a-06)] md:rounded-[24px] md:p-5">
                        <span className="mb-1.5 block text-[10px] font-black uppercase tracking-[0.15em] text-[var(--brown)] md:mb-2 md:text-[11px]">
                          {item.step}
                        </span>
                        <h3 className="mb-1.5 text-[18px] font-black tracking-tight text-[var(--heading)] md:mb-2 md:text-[22px]">
                          {item.title}
                        </h3>
                        <p className="text-[14px] leading-relaxed text-[var(--muted)] md:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
