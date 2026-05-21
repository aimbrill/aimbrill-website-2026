"use client";

import { Check, X } from "lucide-react";
import EyebrowPill from "../../ui/EyebrowPill";
import SplitSectionHeadline from "../../ui/SplitSectionHeadline";
import SectionShell from "../../ui/SectionShell";
import { comparisonRows } from "./comparison.data";

function cellIcon(value: boolean) {
  if (value) {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E]/10 text-[#22C55E]">
          <Check size={16} strokeWidth={3} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EF4444]/10 text-[#EF4444]">
        <X size={14} strokeWidth={3} />
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <SectionShell id="comparison" className="relative bg-[var(--bg)]">
      <div className="relative z-10 mx-auto mb-10 w-full max-w-[820px] text-center">
        <div className="flex justify-center">
          <EyebrowPill label="COMPARE YOUR OPTIONS" />
        </div>
        <SplitSectionHeadline
          className="section-headline h2-display mx-auto mt-6 max-w-[820px] text-center text-balance !font-black !tracking-tighter px-1 sm:px-0"
          lead="Not all solutions fix the "
          accent="real problem"
        />
        <p className="body-copy mx-auto mb-6 mt-0 max-w-[720px] text-[17px] leading-relaxed text-balance px-1 sm:px-0">
          Most apps solve one part. Your system needs every layer to work together.
        </p>
      </div>

      <div className="relative z-10 w-full min-w-0 overflow-hidden rounded-[16px] border border-[color-mix(in_srgb,var(--heading)_10%,transparent)] bg-white shadow-[0_10px_30px_rgba(61,52,46,0.06)]">
        <div className="comparison-table-scroll w-full min-w-0 max-md:overflow-x-scroll overflow-x-auto overscroll-x-contain">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="bg-[color-mix(in_srgb,var(--bg)_55%,#f0ebe6)]">
                <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--subtle)]">
                  FEATURE
                </th>
                <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--subtle)]">
                  DELIVERY APPS
                </th>
                <th className="px-5 py-3 text-[11px] font-bold uppercase tracking-wider text-[var(--subtle)]">
                  SUBSCRIPTION APPS
                </th>
                <th
                  className="border-l-2 px-5 py-3 text-[11px] font-extrabold uppercase tracking-wider text-[var(--heading)]"
                  style={{ borderColor: "var(--brown)", background: "var(--brown-soft)" }}
                >
                  CUSTOM SYSTEM (WEUPSELL)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[color-mix(in_srgb,var(--heading)_8%,transparent)]">
              {comparisonRows.map((row, i) => (
                <tr
                  key={row[0]}
                  className={`group transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--brown)_5%,transparent)] ${i % 2 === 1 ? "bg-[color-mix(in_srgb,var(--bg)_92%,#efe8e2)]" : "bg-white"}`}
                >
                  <td className="px-5 py-3 text-[13px] font-bold text-[var(--heading)]">
                    {row[0]}
                  </td>
                  <td className="px-5 py-3">{cellIcon(row[1])}</td>
                  <td className="px-5 py-3">{cellIcon(row[2])}</td>
                  <td
                    className="border-l-2 px-5 py-3 font-bold text-[var(--heading)]"
                    style={{
                      borderColor: "var(--brown)",
                      background: "color-mix(in srgb, var(--brown) 8%, transparent)",
                    }}
                  >
                    {cellIcon(row[3])}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-7 w-full max-w-[820px] text-center">
        <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[var(--subtle)] text-balance sm:text-[14px] sm:tracking-[0.1em] px-1 sm:px-0">
          USING MORE APPS INCREASES COMPLEXITY — NOT CLARITY.
        </p>
        <p className="mt-3 text-[16px] font-extrabold leading-snug text-[var(--heading)] text-balance sm:text-[18px] px-1 sm:px-0">
          WHAT YOU NEED IS ONE SYSTEM THAT CONNECTS EVERYTHING.
        </p>
      </div>
    </SectionShell>
  );
}
