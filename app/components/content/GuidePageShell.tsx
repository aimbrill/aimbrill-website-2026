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
