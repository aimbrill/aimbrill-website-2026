"use client";

import { Check } from "lucide-react";
import { Motion, fadeUp } from "../../lib/motion";
import type { ProblemCard as ProblemCardData } from "../sections/problem/problem.data";

export default function ProblemCard({ card }: { card: ProblemCardData }) {
  const Icon = card.icon;
  return (
    <Motion.div
      className="group relative flex h-full flex-col rounded-[24px] border border-slate-100 bg-white p-6 shadow-[0_4px_20px_rgba(30,27,75,0.02)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(30,27,75,0.06)]"
      variants={fadeUp}
    >
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brown-soft)] text-[var(--brown)]">
          <Icon size={20} />
        </div>
        <h3 className="text-[17px] font-bold text-[var(--heading)]">{card.title}</h3>
      </div>

      <p className="mb-6 text-[14px] font-medium leading-relaxed text-slate-500">{card.problem}</p>

      <div
        className="mt-auto rounded-[16px] border p-4"
        style={{ borderColor: "var(--brown-soft)", background: "var(--brown-bg)" }}
      >
        <div className="mb-2 flex items-center gap-2">
          <Check size={14} className="text-green-500" strokeWidth={3} />
          <span className="text-[11px] font-black uppercase tracking-wider text-green-600">
            How we fix it
          </span>
        </div>
        <p className="text-[13px] font-bold leading-relaxed text-[var(--heading)]">{card.fix}</p>
      </div>
    </Motion.div>
  );
}
