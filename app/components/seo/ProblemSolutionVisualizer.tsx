"use client";

import React from "react";
import Image from "next/image";

export function ProblemSolutionVisualizer() {
  return (
    <div className="mt-12 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT SIDE: 3 CLEAN PROBLEM CARDS */}
        <div className="lg:col-span-5 space-y-3.5">
          {/* Card 1 */}
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-blue-500/40 hover:shadow-pop">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm">
                1
              </span>
              <h4 className="font-display text-sm sm:text-base font-bold text-ink truncate">
                GSC Shows Keywords, But No Sales
              </h4>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-8.5">
              Search Console shows clicks and rankings, but cannot tell you if the page lost revenue
              or customers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-emerald-500/40 hover:shadow-pop">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white shadow-sm">
                2
              </span>
              <h4 className="font-display text-sm sm:text-base font-bold text-ink truncate">
                GA4 Shows Sessions, But No Keywords
              </h4>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-8.5">
              Google Analytics shows traffic drops and bounce rates, but hides the search queries
              and rankings that caused the loss.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-purple-500/40 hover:shadow-pop">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white shadow-sm">
                3
              </span>
              <h4 className="font-display text-sm sm:text-base font-bold text-ink truncate">
                Website Code &amp; Guesswork
              </h4>
            </div>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-8.5">
              Teams waste 10+ hours every week checking code, titles, content and making changes
              without knowing what works.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: LARGE ILLUSTRATION IMAGE (NO BACKGROUND BOX) */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <div className="relative w-full max-w-[680px]">
            <Image
              src="/images/seo/seo-diagnosis-hard.png"
              alt="Why SEO Data Is Hard to Diagnose: Disconnected Google Search Console, GA4, and Website Code"
              width={1400}
              height={933}
              className="w-full h-auto object-contain drop-shadow-sm"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
