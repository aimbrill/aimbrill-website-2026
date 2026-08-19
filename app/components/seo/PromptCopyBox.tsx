"use client";

import React, { useState } from "react";
import { Check, Copy, Sparkles, Terminal, FileCode } from "lucide-react";

interface PromptCopyBoxProps {
  promptText: string;
}

export function PromptCopyBox({ promptText }: PromptCopyBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-lime-400/60 bg-card p-5 sm:p-7 shadow-pop">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-border/80">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lime text-ink shadow-[0_0_24px_rgba(208,253,62,0.4)]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                Full-Stack Dashboard AI Prompt
              </h3>
              <span className="inline-flex items-center rounded-full bg-lime/20 border border-lime/30 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-lime-900">
                Production Ready
              </span>
            </div>
            <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">
              Paste this prompt into Claude, ChatGPT, Cursor, or Antigravity to build the entire
              dashboard
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime px-5 py-2.5 text-xs sm:text-sm font-bold text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] transition hover:scale-105 active:scale-95 self-start sm:self-auto cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-ink" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy Full AI Prompt</span>
            </>
          )}
        </button>
      </div>

      {/* Code Block Container */}
      <div className="mt-5 relative">
        <div className="max-h-[420px] overflow-y-auto rounded-2xl border border-border bg-surface p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-ink/90 leading-relaxed [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <pre className="whitespace-pre-wrap font-mono text-xs sm:text-[13px] leading-relaxed selection:bg-lime selection:text-ink">
            {promptText}
          </pre>
        </div>

        {/* Bottom Quick Compatibility Note */}
        <div className="mt-3.5 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <Terminal className="h-4 w-4 text-lime-700 shrink-0" />
          <span>Compatible with Claude 3.7 Sonnet, GPT-4o, Cursor &amp; Antigravity</span>
        </div>
      </div>
    </div>
  );
}

export function EnvExampleCopyBox({ envText }: { envText: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(envText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-3.5 sm:p-5 shadow-soft w-full">
      <div className="flex items-center justify-between pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <FileCode className="h-4 w-4 text-sky-500" />
          <span className="font-mono text-xs sm:text-sm font-bold text-ink">.env.example</span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs sm:text-sm font-semibold text-ink hover:bg-surface-2 transition cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-600" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy Template</span>
            </>
          )}
        </button>
      </div>
      <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-surface p-3 sm:p-4 font-mono text-[11px] sm:text-xs text-ink leading-relaxed w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <pre className="whitespace-pre leading-relaxed">{envText}</pre>
      </div>
    </div>
  );
}
