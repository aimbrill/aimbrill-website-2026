"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface ChatGptSummaryCardProps {
  pageUrl: string;
  title: string;
}

export function chatgptSummaryUrl(pageUrl: string, title: string) {
  const prompt = `Summarize this Aimbrill case study in 8–10 bullets. Cover: the brand, the problem, the functional solution, the technical solution, and the result. Do not invent facts. Source: ${pageUrl} — Title: ${title}`;
  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}

export function ChatGptSummaryCard({ pageUrl, title }: ChatGptSummaryCardProps) {
  const summaryUrl = chatgptSummaryUrl(pageUrl, title);

  return (
    <div className="not-prose my-3.5 overflow-hidden rounded-2xl border border-lime-400/60 bg-card p-3.5 shadow-soft sm:my-8 sm:rounded-3xl sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-lime text-ink shadow-sm">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-ink">
                Want a 60-second version?
              </span>
              <span className="rounded-full bg-lime/20 text-lime-900 dark:text-lime-300 px-2 py-0.5 text-[10px] font-bold">
                AI Summary
              </span>
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Opens ChatGPT with this case study pre-loaded. No signup required on our site.
            </p>
          </div>
        </div>

        <a
          href={summaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-xs sm:text-sm font-bold !text-ink !no-underline shadow-sm transition hover:bg-lime hover:!text-ink hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
        >
          <span className="!text-ink">Ask ChatGPT for a summary</span>
          <ArrowRight className="h-4 w-4 !text-ink" />
        </a>
      </div>
    </div>
  );
}
