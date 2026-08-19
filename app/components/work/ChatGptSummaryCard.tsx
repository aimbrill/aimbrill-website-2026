"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, Copy, Check } from "lucide-react";

interface ChatGptSummaryCardProps {
  pageUrl: string;
  title: string;
}

export function chatgptSummaryUrl(pageUrl: string, title: string) {
  const prompt = `Summarize this Aimbrill case study in 8–10 bullets. Cover: the brand, the problem, the functional solution, the technical solution, and the result. Do not invent facts. Source: ${pageUrl} — Title: ${title}`;
  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}

export function ChatGptSummaryCard({ pageUrl, title }: ChatGptSummaryCardProps) {
  const [copied, setCopied] = useState(false);
  const promptText = `Summarize ${pageUrl}. Cover problem, functional solution, technical solution, and results. Do not invent metrics.`;
  const summaryUrl = chatgptSummaryUrl(pageUrl, title);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="not-prose my-8 overflow-hidden rounded-3xl border border-lime-400/60 bg-card p-5 sm:p-6 shadow-soft">
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
          className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-5 py-2.5 text-xs sm:text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95 shrink-0"
        >
          <span>Ask ChatGPT for a summary</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* Copy prompt fallback */}
      <div className="mt-4 pt-3.5 border-t border-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
        <span className="font-mono text-[11px] text-muted-foreground truncate max-w-xl">
          Prompt: &ldquo;{promptText}&rdquo;
        </span>
        <button
          type="button"
          onClick={handleCopyPrompt}
          className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-600" />
              <span>Copied prompt!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy prompt</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
