"use client";

import Link from "next/link";
import { BarChart3, MessageCircleQuestion, Sparkles, Wand2 } from "lucide-react";

export type AiToolItem = {
  name: string;
  desc: string;
  href: string;
  badge?: string;
  icon: "seo" | "quiz" | "brand";
  isExternal?: boolean;
};

export const aiToolsList: AiToolItem[] = [
  {
    name: "SEO Dashboard",
    desc: "AI-driven store audit, search visibility analysis, keyword ranking, and organic growth insights.",
    href: "/seo-dashboard",
    badge: "New",
    icon: "seo",
  },
];

export function AiToolIcon({ icon }: { icon: AiToolItem["icon"] }) {
  if (icon === "seo") {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-400 text-ink shadow-sm">
        <BarChart3 className="h-5 w-5" strokeWidth={2.25} />
      </div>
    );
  }
  if (icon === "quiz") {
    return (
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm">
        <MessageCircleQuestion className="h-5 w-5" strokeWidth={2.25} />
      </div>
    );
  }
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500 text-white shadow-sm">
      <Wand2 className="h-5 w-5" strokeWidth={2.25} />
    </div>
  );
}

type AiToolsMegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function AiToolsMegaMenu({ open, onClose }: AiToolsMegaMenuProps) {
  if (!open) return null;

  return (
    <div
      role="menu"
      aria-label="AI Tools"
      className="absolute left-1/2 top-full z-30 mt-4 w-[min(30rem,calc(100vw-2rem))] -translate-x-1/2 rounded-2xl border border-border bg-background p-3 shadow-[0_24px_60px_-16px_rgba(15,15,15,0.18)]"
    >
      <ul className="grid gap-1">
        {aiToolsList.map((tool) => (
          <li
            key={tool.name}
            role="none"
            className="rounded-xl transition-colors hover:bg-surface-2"
          >
            <Link
              href={tool.href}
              role="menuitem"
              target={tool.isExternal ? "_blank" : undefined}
              rel={tool.isExternal ? "noopener noreferrer" : undefined}
              onClick={onClose}
              className="group/item flex items-start gap-4 p-3"
            >
              <AiToolIcon icon={tool.icon} />
              <div className="min-w-0 flex-1 pt-0.5">
                <div className="flex items-center gap-2">
                  <p className="text-[15px] font-semibold leading-snug text-ink">{tool.name}</p>
                  {tool.badge ? (
                    <span className="inline-flex items-center rounded-full bg-lime/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lime-800">
                      {tool.badge}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  {tool.desc}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
