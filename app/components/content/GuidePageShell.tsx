"use client";

import Link from "next/link";
import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";
import { ArrowUpRight, ListOrdered, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";

export type GuideTocItem = {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
};

export type GuideSidebarCta = {
  body: string;
  href: string;
  label: string;
  external?: boolean;
};

type GuidePageShellProps = {
  category: string;
  secondaryTag?: string;
  title: string;
  lead?: string;
  topicTags?: string[];
  author: string;
  /** Optional circular author image (e.g. `/images/team/author.jpg`). */
  authorAvatar?: string;
  authorAvatarAlt?: string;
  publishedAt?: string;
  publishedAtIso?: string;
  readingMinutes?: number;
  toc: GuideTocItem[];
  sidebarCta?: GuideSidebarCta;
  articleClassName?: string;
  layoutClassName?: string;
  children: ReactNode;
};

function CalendarGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function TocItems({
  items,
  activeId,
  isNested = false,
}: {
  items: GuideTocItem[];
  activeId: string;
  isNested?: boolean;
}) {
  return (
    <>
      {items.map((item) => {
        const isActive = activeId === item.id;
        const hasChildren = item.children && item.children.length > 0;
        const isChildActive = hasChildren && item.children?.some((c) => c.id === activeId);
        const showChildren = hasChildren && (isActive || isChildActive);

        return (
          <li key={item.id} className={isNested ? "mt-0.5" : "mb-0.5"}>
            <a
              href={`#${item.id}`}
              className={`group flex items-center justify-between rounded-lg px-2.5 py-1 text-xs transition-all duration-150 ${
                isActive
                  ? "bg-lime-500/15 font-semibold text-ink border-l-2 border-lime-500 shadow-2xs"
                  : isChildActive
                    ? "font-semibold text-ink bg-surface/40"
                    : "text-muted-foreground hover:bg-surface/80 hover:text-ink"
              }`}
            >
              <span className="truncate">{item.label}</span>
              {isActive && (
                <span className="h-1.5 w-1.5 rounded-full bg-lime-500 shrink-0 ml-1.5" />
              )}
            </a>
            {hasChildren && showChildren && (
              <ul className="ml-3 my-1 space-y-0.5 border-l-2 border-lime-500/30 pl-2">
                {item.children!.map((child) => {
                  const isThisChildActive = activeId === child.id;
                  return (
                    <li key={child.id}>
                      <a
                        href={`#${child.id}`}
                        className={`block rounded-md px-2 py-0.5 text-[11px] leading-snug transition-colors ${
                          isThisChildActive
                            ? "font-bold text-lime-600 dark:text-lime-400 bg-lime-500/10"
                            : "text-muted-foreground/80 hover:text-ink hover:bg-surface/60"
                        }`}
                      >
                        {child.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </>
  );
}

function TocList({ items, activeId }: { items: GuideTocItem[]; activeId: string }) {
  return (
    <ul className="toc toc-root space-y-0.5">
      <TocItems items={items} activeId={activeId} />
    </ul>
  );
}

export function GuidePageShell({
  category,
  secondaryTag,
  title,
  lead,
  topicTags,
  author,
  authorAvatar,
  authorAvatarAlt,
  publishedAt,
  publishedAtIso,
  readingMinutes,
  toc,
  sidebarCta,
  articleClassName = "",
  layoutClassName = "",
  children,
}: GuidePageShellProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const ids: string[] = [];
    toc.forEach((item) => {
      ids.push(item.id);
      item.children?.forEach((child) => ids.push(child.id));
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPosition) {
            current = id;
          }
        }
      }

      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);

  const articleClasses = ["guide-article", "guide-prose", articleClassName]
    .filter(Boolean)
    .join(" ");
  const layoutClasses = ["page-layout", "guide-page-layout", layoutClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Navbar />

      <div className="guide-hero border-b border-border bg-card pt-16 sm:pt-20 md:pt-28">
        <div className="mx-auto max-w-5xl px-4 py-6 text-center sm:py-8 md:px-6 md:py-14">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="guide-tag guide-tag-warm">{category}</span>
            {secondaryTag ? (
              <span className="guide-tag guide-tag-muted">{secondaryTag}</span>
            ) : null}
          </div>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-2xl font-bold leading-[1.15] tracking-tight text-ink sm:mt-4 sm:text-3xl md:text-4xl lg:text-[2.5rem]">
            {title}
          </h1>
          {lead ? (
            <p className="guide-hero-lead mx-auto mt-2.5 max-w-2xl text-center text-xs sm:mt-4 sm:text-sm md:text-base">
              {lead}
            </p>
          ) : null}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-muted-foreground sm:mt-6 sm:gap-x-3.5 sm:text-sm md:gap-x-5">
            <span className="inline-flex items-center gap-1.5 sm:gap-2">
              {authorAvatar ? (
                <Image
                  src={authorAvatar}
                  alt={authorAvatarAlt ?? author}
                  width={36}
                  height={36}
                  className="h-7 w-7 shrink-0 rounded-full object-cover sm:h-8 sm:w-8"
                  sizes="36px"
                />
              ) : (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border/50 sm:h-8 sm:w-8">
                  <Image
                    src="/images/Icon.png"
                    alt="Aimbrill"
                    width={32}
                    height={32}
                    className="h-6 w-6 object-contain sm:h-7 sm:w-7"
                    sizes="36px"
                  />
                </span>
              )}
              <span className="font-semibold tracking-tight text-ink">{author}</span>
            </span>
            {publishedAt && publishedAtIso ? (
              <span className="inline-flex items-center gap-1">
                <CalendarGlyph className="h-3.5 w-3.5 shrink-0 opacity-70 sm:h-4 sm:w-4" />
                <time dateTime={publishedAtIso}>{publishedAt}</time>
              </span>
            ) : null}
            {readingMinutes != null ? <span>· {readingMinutes} min read</span> : null}
            {topicTags?.map((tag) => (
              <span key={tag}>· {tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${layoutClasses} mx-auto px-4 py-5 sm:py-8 md:px-6 md:py-12`}>
        <aside className="toc-sidebar guide-sidebar hidden lg:block" aria-label="Table of contents">
          <div className="toc-panel shadow-xs border border-border/80 bg-surface/60 backdrop-blur-xs">
            <nav className="toc" aria-label="On this page">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-border/70">
                <div className="flex items-center gap-1.5">
                  <ListOrdered className="w-3.5 h-3.5 text-lime-600 dark:text-lime-400" />
                  <p className="font-display text-[11px] font-bold uppercase tracking-wider text-ink">
                    Contents
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/80">
                  {toc.length} sections
                </span>
              </div>
              <TocList items={toc} activeId={activeId} />
            </nav>
          </div>

          {sidebarCta ? (
            <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-3.5 text-white shadow-sm">
              <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-lime-400/20 blur-xl pointer-events-none" />
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1 rounded-full bg-lime-400/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-lime-400 border border-lime-400/30">
                    <Sparkles className="h-2.5 w-2.5" />
                    Growth Advisory
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed font-normal">
                  {sidebarCta.body}
                </p>
                {sidebarCta.external === true ||
                sidebarCta.href.startsWith("http://") ||
                sidebarCta.href.startsWith("https://") ? (
                  <a
                    href={sidebarCta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-lime px-3.5 py-2 text-xs font-bold text-neutral-950 shadow-xs hover:bg-lime/90 hover:shadow-md active:scale-[0.98] transition-all"
                  >
                    <span>{sidebarCta.label.replace(/→|->/g, "").trim()}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </a>
                ) : (
                  <Link
                    href={sidebarCta.href}
                    className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-lime px-3.5 py-2 text-xs font-bold text-neutral-950 shadow-xs hover:bg-lime/90 hover:shadow-md active:scale-[0.98] transition-all"
                  >
                    <span>{sidebarCta.label.replace(/→|->/g, "").trim()}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </Link>
                )}
              </div>
            </div>
          ) : null}
        </aside>

        <article className={`content-area ${articleClasses}`}>{children}</article>
      </div>
    </>
  );
}
