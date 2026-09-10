"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";

export type BlogCard = {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: string;
  author?: string;
  publishedAt?: string;
  coverImage?: string;
};

interface BlogFeedProps {
  cards: BlogCard[];
}

export function BlogFeed({ cards }: BlogFeedProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories dynamically from the cards
  const categories = useMemo(() => {
    const unique = Array.from(new Set(cards.map((c) => c.category).filter(Boolean)));
    return ["All", ...unique];
  }, [cards]);

  // Filtered cards based on active category & search query
  const filteredCards = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return cards.filter((card) => {
      const matchesCategory =
        selectedCategory === "All" ||
        card.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        !q ||
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.category.toLowerCase().includes(q) ||
        (card.author && card.author.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [cards, selectedCategory, searchQuery]);

  return (
    <div className="mt-8">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto px-4 md:px-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            id="blog-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, strategies & topics..."
            className="w-full rounded-full border border-border bg-background/80 py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-muted-foreground shadow-xs backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lime"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-ink p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>

      {/* Category Tabs below Search Bar */}
      <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-4 sm:px-0 sm:justify-center sm:flex-wrap">
        {categories.map((category) => {
          const count =
            category === "All"
              ? cards.length
              : cards.filter((c) => c.category.toLowerCase() === category.toLowerCase()).length;
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-ink text-background shadow-soft scale-[1.02]"
                  : "border border-border bg-surface text-muted-foreground hover:text-ink hover:border-ink/30"
              }`}
            >
              <span>{category}</span>
              <span
                className={`font-mono text-[11px] rounded-full px-1.5 py-0.2 ${
                  isActive ? "bg-background/20 text-background" : "bg-border text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Blog Cards Grid */}
      {filteredCards.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="blog-card group hover-lift flex flex-col"
            >
              <div className={`blog-card-cover ${post.coverImage ? "blog-card-cover--image" : ""}`}>
                {post.coverImage ? (
                  <>
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="blog-card-cover-overlay" />
                  </>
                ) : null}
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="blog-chip mb-3">{post.category}</span>
                  <h2 className="font-display text-xl font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-lime">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-between gap-4 text-xs font-mono text-muted-foreground pt-3 border-t border-border/50">
                  {post.author ? (
                    <span className="font-sans font-medium text-ink">{post.author}</span>
                  ) : (
                    <span />
                  )}
                  <span className="shrink-0">{post.publishedAt ?? "Read article →"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-12 rounded-3xl border border-dashed border-border bg-surface/50 p-12 text-center max-w-lg mx-auto">
          <p className="text-base font-semibold text-ink">No articles found</p>
          <p className="mt-1.5 text-xs text-muted-foreground">
            No blog posts match your search or selected category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-xs font-semibold text-background shadow-xs hover:scale-105 transition active:scale-95 cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
