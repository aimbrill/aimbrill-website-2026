import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
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
  publishedAt: string;
  publishedAtIso: string;
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

function TocItems({ items }: { items: GuideTocItem[] }) {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.label}</a>
        </li>
      ))}
    </>
  );
}

function TocList({ items }: { items: GuideTocItem[] }) {
  return (
    <ul className="toc toc-root">
      <TocItems items={items} />
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
  const articleClasses = ["guide-article", "guide-prose", articleClassName]
    .filter(Boolean)
    .join(" ");
  const layoutClasses = ["page-layout", "guide-page-layout", layoutClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Navbar />

      <div className="guide-hero border-b border-border bg-card pt-24 md:pt-28">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center md:px-6 md:py-14">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="guide-tag guide-tag-warm">{category}</span>
            {secondaryTag ? (
              <span className="guide-tag guide-tag-muted">{secondaryTag}</span>
            ) : null}
          </div>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink md:text-4xl lg:text-[2.5rem]">
            {title}
          </h1>
          {lead ? (
            <p className="guide-hero-lead mx-auto mt-4 max-w-2xl text-center">{lead}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:gap-x-10">
            <span className="inline-flex items-center gap-3">
              {authorAvatar ? (
                <Image
                  src={authorAvatar}
                  alt={authorAvatarAlt ?? author}
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                  sizes="48px"
                />
              ) : (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-border/50">
                  <Image
                    src="/images/Icon.png"
                    alt="Aimbrill"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    sizes="48px"
                  />
                </span>
              )}
              <span className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
                {author}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-normal text-muted-foreground">
              <CalendarGlyph className="shrink-0 opacity-80" />
              <time dateTime={publishedAtIso}>{publishedAt}</time>
            </span>
            {readingMinutes != null ? (
              <span className="text-sm text-muted-foreground">· {readingMinutes} min read</span>
            ) : null}
            {topicTags?.map((tag) => (
              <span key={tag} className="text-sm text-muted-foreground">
                · {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={`${layoutClasses} mx-auto px-4 py-10 md:px-6 md:py-12`}>
        <aside className="toc-sidebar guide-sidebar" aria-label="Table of contents">
          <div className="toc-panel">
            <nav className="toc" aria-label="On this page">
              <p className="toc-title font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Contents
              </p>
              <TocList items={toc} />
            </nav>
          </div>
          {sidebarCta ? (
            <div className="guide-sidebar-cta">
              <p>{sidebarCta.body}</p>
              {sidebarCta.external === true ||
              sidebarCta.href.startsWith("http://") ||
              sidebarCta.href.startsWith("https://") ? (
                <a href={sidebarCta.href} target="_blank" rel="noreferrer">
                  {sidebarCta.label}
                </a>
              ) : (
                <Link href={sidebarCta.href}>{sidebarCta.label}</Link>
              )}
            </div>
          ) : null}
        </aside>

        <article className={`content-area ${articleClasses}`}>{children}</article>
      </div>
    </>
  );
}
