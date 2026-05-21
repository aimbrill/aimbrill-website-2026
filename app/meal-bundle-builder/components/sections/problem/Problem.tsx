"use client";

import ProblemCard from "../../ui/ProblemCard";
import EyebrowPill from "../../ui/EyebrowPill";
import SplitSectionHeadline from "../../ui/SplitSectionHeadline";
import SectionShell from "../../ui/SectionShell";
import { Motion, fadeUp } from "../../../lib/motion";
import { problemCards } from "./problem.data";

export default function Problem() {
  return (
    <SectionShell id="problem" className="bg-[var(--bg)] py-8 sm:py-10">
      <div className="mb-10 text-center">
        <EyebrowPill label="WHAT WE SOLVE" />
        <SplitSectionHeadline
          className="section-headline h2-display mx-auto mt-6 max-w-[860px] text-center text-balance !font-black !tracking-tighter"
          lead="You’re using multiple apps —"
          accent="but they don’t work together."
        />
        <p className="body-copy mx-auto mb-6 mt-0 max-w-[720px] text-[17px] leading-relaxed">
          Different apps handle delivery, subscriptions, and bundles but they were never built to
          work together. So every week, your team ends up fixing what should be automatic.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {problemCards.slice(0, 4).map((card, index) => (
          <Motion.div
            key={card.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="h-full"
          >
            <ProblemCard card={card} />
          </Motion.div>
        ))}
        <div className="flex justify-center md:col-span-2">
          <div className="w-full md:w-[calc(50%-12px)]">
            <Motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="h-full"
            >
              <ProblemCard card={problemCards[4]} />
            </Motion.div>
          </div>
        </div>
      </div>

      <Motion.div
        className="mx-auto mt-16 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="text-[19px] font-black tracking-tight text-[var(--heading)] sm:text-[22px]">
          You don&apos;t need more apps. You need a system that connects everything.
        </p>
      </Motion.div>
    </SectionShell>
  );
}
