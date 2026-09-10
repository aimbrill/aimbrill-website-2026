"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Instagram } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export interface ReelStory {
  id: string;
  title: string;
  subtitle?: string;
  views: string;
  poster: string;
  videoSrc?: string;
}

const reelStories: ReelStory[] = [
  {
    id: "reel-1",
    title: "Unbox 📦",
    subtitle: "The Experience",
    views: "124K",
    poster:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    videoSrc: "",
  },
  {
    id: "reel-2",
    title: "Tradition",
    subtitle: "Meets Today",
    views: "86K",
    poster:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    videoSrc: "",
  },
  {
    id: "reel-3",
    title: "Crafted",
    subtitle: "By Real People",
    views: "212K",
    poster:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80",
    videoSrc: "",
  },
  {
    id: "reel-4",
    title: "More",
    subtitle: "Than Fashion",
    views: "98K",
    poster:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
    videoSrc: "",
  },
  {
    id: "reel-5",
    title: "A Story",
    subtitle: "In Every Detail",
    views: "76K",
    poster:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
    videoSrc: "",
  },
];

const metaAdCreatives = [
  {
    title: "Festive Elegance",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Tradition in Every Thread",
    image:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "New Arrivals",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Made With Love",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
];

export function BrandStories() {
  const ref = useReveal<HTMLElement>();
  const [activeTab, setActiveTab] = useState<"storytelling" | "meta-ads">("storytelling");
  const scrollRef = useRef<HTMLDivElement>(null);
  const creativesScrollRef = useRef<HTMLDivElement>(null);
  const [activeModalVideo, setActiveModalVideo] = useState<ReelStory | null>(null);

  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [currentCreativeIndex, setCurrentCreativeIndex] = useState(0);

  const scrollReels = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector<HTMLElement>(".reel-card");
      const scrollAmount = card ? card.offsetWidth + 16 : 260;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollCreatives = (direction: "left" | "right") => {
    if (creativesScrollRef.current) {
      const card = creativesScrollRef.current.querySelector<HTMLElement>(".creative-card");
      const scrollAmount = card ? card.offsetWidth + 16 : 220;
      creativesScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleReelScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const card = el.querySelector<HTMLElement>(".reel-card");
    const cardWidth = card ? card.offsetWidth + 16 : 260;
    const index = Math.min(
      Math.max(0, Math.round(el.scrollLeft / cardWidth)),
      reelStories.length - 1,
    );
    if (index !== currentReelIndex) {
      setCurrentReelIndex(index);
    }
  };

  const handleCreativeScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const card = el.querySelector<HTMLElement>(".creative-card");
    const cardWidth = card ? card.offsetWidth + 16 : 220;
    const index = Math.min(
      Math.max(0, Math.round(el.scrollLeft / cardWidth)),
      metaAdCreatives.length - 1,
    );
    if (index !== currentCreativeIndex) {
      setCurrentCreativeIndex(index);
    }
  };

  return (
    <section
      id="brand-stories"
      ref={ref}
      className="relative py-12 md:py-18 bg-background text-foreground overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Top Header Row with Tabs Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          {/* Header Label */}
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-0.5 w-6 bg-ink/70" />
            <span>WHAT WE PROVIDE</span>
          </div>

          {/* Tab Switcher Pills */}
          <div className="flex items-center self-start sm:self-auto rounded-full border border-border bg-surface p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab("storytelling")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "storytelling"
                  ? "bg-ink text-background shadow-soft"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              <span className="font-mono text-[11px] opacity-70">01</span>
              <span>Brand Storytelling</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("meta-ads")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "meta-ads"
                  ? "bg-ink text-background shadow-soft"
                  : "text-muted-foreground hover:text-ink"
              }`}
            >
              <span className="font-mono text-[11px] opacity-70">02</span>
              <span>Meta Ads</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Brand Storytelling Content */}
        {activeTab === "storytelling" && (
          <div className="grid min-w-0 w-full gap-8 lg:gap-10 lg:grid-cols-12 lg:items-center animate-in fade-in duration-300">
            {/* Left Column: Copy & Stats (Desktop) */}
            <div className="min-w-0 w-full lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Heading */}
                <h2 className="font-display tracking-tight leading-[1.05]">
                  <span className="block text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-ink">
                    Turn Your Brand Story
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-ink">
                    Into Content
                  </span>
                  <span className="block text-lg sm:text-xl lg:text-2xl font-serif italic text-muted-foreground mt-1 sm:mt-1.5">
                    In a way so people remember.
                  </span>
                </h2>

                {/* Subheading */}
                <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                  We create Reels and short-form social content that showcase your products,
                  communicate your brand story and keep your audience engaged.
                </p>
              </div>

              {/* CTA Button & Handwritten Note */}
              <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-background shadow-soft transition hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Client Stories</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {/* Handwritten Note with Curved Arrow pointing to Button */}
                <div className="flex items-center gap-1.5 sm:gap-2 select-none shrink-0">
                  <svg
                    className="h-7 w-9 sm:h-8 sm:w-11 text-ink shrink-0 -translate-y-1"
                    viewBox="0 0 44 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 38 2 C 30 15, 16 16, 3 8" />
                    <path d="M 14 3 L 3 8 L 11 15" />
                  </svg>
                  <div
                    className="font-handwriting text-lg sm:text-2xl font-bold text-ink leading-[1.05]"
                    style={{ transform: "rotate(-4deg)" }}
                  >
                    Real content.
                    <br />
                    Real people.
                    <br />
                    Real results.
                  </div>
                </div>
              </div>

              {/* Bottom Pagination (Desktop Only) */}
              <div className="mt-10 hidden lg:flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span>01 / 02</span>
                <div className="flex items-center gap-1.5 w-28 h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-ink rounded-full" />
                  <div className="h-full w-1/2 bg-transparent" />
                </div>
              </div>
            </div>

            {/* Right Column: Video Reels Carousel */}
            <div className="min-w-0 w-full lg:col-span-7 relative">
              {/* Top Right Label: Actual Reels (Desktop Only) */}
              <div className="hidden lg:flex items-center justify-end gap-1.5 mb-2 mr-6 select-none">
                <span
                  className="font-handwriting text-2xl sm:text-3xl text-ink font-bold tracking-wide"
                  style={{ transform: "rotate(-5deg)" }}
                >
                  Actual Reels
                </span>
                <svg
                  className="h-10 w-8 text-ink shrink-0 translate-y-1.5"
                  viewBox="0 0 32 44"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M 4 8 C 16 2, 27 12, 22 36" />
                  <path d="M 15 28 L 22 36 L 28 29" />
                </svg>
              </div>

              {/* Slider Container with Navigation buttons */}
              <div className="relative group w-full min-w-0">
                {/* Previous Button (Desktop Only) */}
                <button
                  type="button"
                  onClick={() => scrollReels("left")}
                  aria-label="Previous reel"
                  className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-border bg-background/95 text-ink shadow-soft backdrop-blur-sm transition-all hover:scale-110 active:scale-95 hover:border-ink"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Next Button (Desktop Only) */}
                <button
                  type="button"
                  onClick={() => scrollReels("right")}
                  aria-label="Next reel"
                  className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-border bg-background/95 text-ink shadow-soft backdrop-blur-sm transition-all hover:scale-110 active:scale-95 hover:border-ink"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Horizontal Scroll Area */}
                <div
                  ref={scrollRef}
                  onScroll={handleReelScroll}
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  className="no-scrollbar flex w-full gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-3 pt-1 px-1 snap-x snap-mandatory"
                >
                  {reelStories.map((reel) => (
                    <div
                      key={reel.id}
                      onClick={() => setActiveModalVideo(reel)}
                      className="reel-card group/card relative h-[400px] w-[260px] sm:h-[400px] sm:w-[250px] lg:h-[410px] lg:w-[225px] shrink-0 cursor-pointer snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                    >
                      <Image
                        src={reel.poster}
                        alt={reel.title}
                        fill
                        sizes="(max-width: 768px) 260px, 240px"
                        className="object-cover object-center transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />

                      {/* Top Instagram views badge */}
                      <div className="absolute left-3.5 top-3.5 z-10 flex items-center gap-1.5 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md border border-white/10">
                        <Instagram className="h-3.5 w-3.5" />
                        <span>{reel.views}</span>
                      </div>

                      {/* Top Right Share Icon */}
                      <div className="absolute right-3.5 top-3.5 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-md border border-white/10">
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="flex h-13 w-13 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-transform duration-300 group-hover/card:scale-115 group-hover/card:bg-black/80 border border-white/20 shadow-lg">
                          <Play className="h-5 w-5 fill-white ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Title & Subtitle */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-4 text-white">
                        <p className="font-serif italic text-lg sm:text-lg leading-tight font-medium drop-shadow-sm">
                          {reel.title}
                        </p>
                        {reel.subtitle ? (
                          <p className="text-sm text-white/90 leading-tight drop-shadow-sm font-sans mt-0.5">
                            {reel.subtitle}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Bottom Navigation Bar (Matching Mockup exactly) */}
              <div className="mt-4 flex lg:hidden items-center justify-between w-full px-1">
                <span className="font-mono text-sm font-bold text-ink">
                  {String(currentReelIndex + 1).padStart(2, "0")}{" "}
                  <span className="font-normal text-muted-foreground">
                    / {String(reelStories.length).padStart(2, "0")}
                  </span>
                </span>

                {/* Dynamic Dots Indicator */}
                <div className="flex items-center gap-1.5">
                  {reelStories.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentReelIndex ? "w-6 bg-ink" : "w-1.5 bg-border"
                      }`}
                    />
                  ))}
                </div>

                {/* Circular Next Button */}
                <button
                  type="button"
                  onClick={() => scrollReels("right")}
                  aria-label="Next reel"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-ink shadow-xs transition hover:scale-105 active:scale-95 border border-border cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Next link (Desktop Only) */}
              <div className="mt-4 hidden lg:flex items-center justify-end px-2 text-xs text-muted-foreground">
                <button
                  type="button"
                  onClick={() => setActiveTab("meta-ads")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:underline cursor-pointer"
                >
                  <span>Next: Meta Ads</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Meta Ads Content */}
        {activeTab === "meta-ads" && (
          <div className="grid min-w-0 w-full gap-8 lg:gap-10 lg:grid-cols-12 lg:items-start animate-in fade-in duration-300">
            {/* Left Column: Copy, What We Provide & CTAs */}
            <div className="min-w-0 w-full lg:col-span-5 flex flex-col justify-between pt-2">
              <div>
                {/* Heading */}
                <h2 className="font-display tracking-tight leading-[1.05]">
                  <span className="block text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-ink">
                    Grow Your Business
                  </span>
                  <span className="block text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-ink">
                    With Smarter
                  </span>
                  <span className="block text-lg sm:text-xl lg:text-2xl font-serif italic text-muted-foreground mt-1 sm:mt-1.5">
                    Meta Ads.
                  </span>
                </h2>

                {/* Subheading */}
                <p className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
                  We manage your Meta advertising from strategy to optimization, helping you reach
                  the right people, reduce wasted spend and increase sales.
                </p>
              </div>

              {/* CTA Buttons & Handwritten Note */}
              <div className="mt-6 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-background shadow-soft transition hover:scale-105 active:scale-95 shrink-0"
                >
                  <span>Client Stories</span>
                  <span aria-hidden="true">→</span>
                </Link>

                {/* Handwritten Note on Mobile right next to button */}
                <div className="flex lg:hidden items-center gap-1.5 select-none shrink-0">
                  <div
                    className="font-handwriting text-lg font-bold text-ink leading-[1.05]"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    Actual ad creatives
                    <br />
                    from the campaign.
                  </div>
                  <svg
                    className="h-10 w-8 sm:h-11 sm:w-9 text-ink shrink-0 translate-y-3"
                    viewBox="0 0 36 44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Larger curve starting from text and curving down toward ad cards */}
                    <path d="M 4 8 C 18 6, 28 16, 24 36" />
                    {/* Arrowhead pointing downward */}
                    <path d="M 15 28 L 24 36 L 30 27" />
                  </svg>
                </div>
              </div>

              {/* Bottom Pagination (Desktop Only) */}
              <div className="mt-10 hidden lg:flex items-center gap-4 text-xs font-mono text-muted-foreground">
                <span>02 / 02</span>
                <div className="flex items-center gap-1.5 w-28 h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-transparent" />
                  <div className="h-full w-1/2 bg-ink rounded-full" />
                </div>
              </div>
            </div>

            {/* Right Column: Ad Creatives */}
            <div className="min-w-0 w-full lg:col-span-7 flex flex-col justify-center">
              {/* Ad Creatives Slider Section */}
              <div className="w-full min-w-0">
                {/* Creatives Slider */}
                <div className="relative group w-full min-w-0">
                  {/* Left Scroll Button for Creatives (Desktop Only) */}
                  <button
                    type="button"
                    onClick={() => scrollCreatives("left")}
                    aria-label="Previous creatives"
                    className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full border border-border bg-background/95 text-ink shadow-soft backdrop-blur-sm transition hover:scale-110 active:scale-95 hover:border-ink"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div
                    ref={creativesScrollRef}
                    onScroll={handleCreativeScroll}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    className="no-scrollbar flex w-full gap-3 sm:gap-4 overflow-x-auto scroll-smooth pb-3 pt-1 px-1 snap-x snap-mandatory"
                  >
                    {metaAdCreatives.map((creative, index) => (
                      <div
                        key={index}
                        className="creative-card group/creative relative h-[310px] w-[215px] sm:h-[300px] sm:w-[200px] md:h-[320px] md:w-[210px] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                      >
                        <Image
                          src={creative.image}
                          alt={creative.title}
                          fill
                          sizes="220px"
                          className="object-cover object-center transition-transform duration-500 group-hover/creative:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 z-10 p-3.5 sm:p-4 text-white">
                          <p className="font-serif italic text-sm sm:text-base font-semibold leading-tight drop-shadow-sm mb-2.5">
                            {creative.title}
                          </p>
                          <span className="inline-block rounded-lg bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm border border-white/20">
                            Shop Now
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Scroll Button for Creatives (Desktop Only) */}
                  <button
                    type="button"
                    onClick={() => scrollCreatives("right")}
                    aria-label="Next creatives"
                    className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full border border-border bg-background/95 text-ink shadow-soft backdrop-blur-sm transition hover:scale-110 active:scale-95 hover:border-ink"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Mobile Bottom Navigation Bar for Creatives */}
                <div className="mt-4 flex lg:hidden items-center justify-between w-full px-1">
                  <span className="font-mono text-sm font-bold text-ink">
                    {String(currentCreativeIndex + 1).padStart(2, "0")}{" "}
                    <span className="font-normal text-muted-foreground">
                      / {String(metaAdCreatives.length).padStart(2, "0")}
                    </span>
                  </span>

                  {/* Dynamic Dots Indicator */}
                  <div className="flex items-center gap-1.5">
                    {metaAdCreatives.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentCreativeIndex ? "w-6 bg-ink" : "w-1.5 bg-border"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Circular Next Button */}
                  <button
                    type="button"
                    onClick={() => scrollCreatives("right")}
                    aria-label="Next creatives"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-ink shadow-xs transition hover:scale-105 active:scale-95 border border-border cursor-pointer"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Bottom-right Handwritten Note for Creatives (Desktop Only) */}
                <div className="hidden lg:flex items-center justify-end gap-3 mt-6 mr-2 sm:mr-8 select-none">
                  <span
                    className="font-handwriting text-xl sm:text-3xl text-ink font-bold leading-tight text-right"
                    style={{ transform: "rotate(-3deg)" }}
                  >
                    Actual ad creatives
                    <br />
                    from the campaign.
                  </span>
                  <svg
                    className="h-10 w-8 sm:h-11 sm:w-9 text-ink shrink-0 -translate-y-2"
                    viewBox="0 0 36 44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Curve pointing up towards the creative cards */}
                    <path d="M 28 38 C 28 22, 20 10, 8 6" />
                    {/* Arrowhead pointing up-left */}
                    <path d="M 18 4 L 8 6 L 12 16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Video Modal Player (if user clicks on a reel) */}
      {activeModalVideo ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/20 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/16] w-full bg-black">
              {activeModalVideo.videoSrc ? (
                <video
                  src={activeModalVideo.videoSrc}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="relative h-full w-full">
                  <Image
                    src={activeModalVideo.poster}
                    alt={activeModalVideo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-center text-white">
                    <Play className="h-12 w-12 mb-3 text-lime" />
                    <h3 className="font-display text-xl font-bold">
                      {activeModalVideo.title} {activeModalVideo.subtitle}
                    </h3>
                    <p className="mt-2 text-xs text-white/80">
                      Video file placeholder. You can drop your real reel video file here anytime!
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 flex items-center justify-between bg-surface border-t border-border">
              <span className="text-xs font-bold text-ink">
                {activeModalVideo.title} {activeModalVideo.subtitle}
              </span>
              <button
                type="button"
                onClick={() => setActiveModalVideo(null)}
                className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-ink hover:bg-border"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
