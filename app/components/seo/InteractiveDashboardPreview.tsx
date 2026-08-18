"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  RotateCw,
  LogOut,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  Globe,
} from "lucide-react";

export function InteractiveDashboardPreview() {
  const [activeTab, setActiveTab] = useState<string>("actions");
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Safely scroll only the tab container (without moving the page viewport)
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const container = scrollContainerRef.current;
    const btn = tabRefs.current[tabId];
    if (container && btn) {
      const btnLeft = btn.offsetLeft;
      const btnWidth = btn.offsetWidth;
      const containerWidth = container.offsetWidth;
      const targetScroll = btnLeft - (containerWidth - btnWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    {
      id: "overview",
      name: "Overview",
      desc: "KPIs, brand vs non-brand health",
      icon: "🏠",
    },
    {
      id: "actions",
      name: "Action Center",
      desc: "What to fix next + fix briefs",
      icon: "✅",
      badge: "8 Issues",
    },
    {
      id: "daily",
      name: "Daily Report",
      desc: "Day-over-day wins & problems",
      icon: "📅",
    },
    {
      id: "pages",
      name: "Pages",
      desc: "Joined GSC + GA4 page insights",
      icon: "📄",
    },
    {
      id: "keywords",
      name: "Keywords",
      desc: "Rankings, moves & stuck terms",
      icon: "🔑",
    },
    {
      id: "technical",
      name: "Technical SEO",
      desc: "Website crawl issues",
      icon: "🛠️",
    },
    {
      id: "competitors",
      name: "Competitors",
      desc: "Gaps vs Wiser, Selleasy & more",
      icon: "⚔️",
    },
    {
      id: "traffic",
      name: "Traffic Journey",
      desc: "Search → site → conversion",
      icon: "🛤️",
    },
  ];

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-[#fafafa] dark:bg-[#0f1117] text-ink shadow-pop text-left transition-all duration-300">
      {/* 1. COMPACT TOP COMMAND HEADER */}
      <div className="border-b border-border bg-white dark:bg-[#151923] p-3 sm:p-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-display text-base font-extrabold text-white shadow-sm">
              A
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <span>• AIMBRILL •</span>
                <span>SEO COMMAND CENTER</span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-extrabold tracking-tight text-ink">
                Search Console + GA4 Intelligence
              </h3>
            </div>
          </div>

          {/* Connection Controls & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Connected - hello@aimbrill.com</span>
            </div>

            <div className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink">
              <span>Last 28 days</span>
              <ChevronDown className="h-3 w-3 text-muted-foreground" />
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-600 px-3 py-1 text-[11px] font-bold text-white shadow-sm hover:bg-blue-700 transition cursor-pointer"
            >
              <RotateCw className="h-3 w-3" />
              <span>Refresh report</span>
            </button>

            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-lg border border-border bg-surface px-2.5 py-1 text-[11px] font-medium text-muted-foreground hover:text-ink transition cursor-pointer"
            >
              <LogOut className="h-3 w-3" />
              <span>Disconnect</span>
            </button>
          </div>
        </div>

        {/* 2. COMPACT TOP 6 KPI METRIC CARDS */}
        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {[
            {
              label: "GSC CLICKS",
              icon: "👆",
              val: "1,420",
              delta: "vs prev +320",
              color: "border-t-orange-500",
            },
            {
              label: "IMPRESSIONS",
              icon: "👁️",
              val: "48,900",
              delta: "vs prev +6,450",
              color: "border-t-amber-500",
            },
            {
              label: "AVERAGE CTR",
              icon: "🎯",
              val: "2.90%",
              delta: "prev period 2.45%",
              color: "border-t-rose-500",
            },
            {
              label: "AVG POSITION",
              icon: "📍",
              val: "14.2",
              delta: "prev period 18.1",
              color: "border-t-purple-500",
            },
            {
              label: "GA4 USERS",
              icon: "👥",
              val: "12,650",
              delta: "sessions 14,870",
              color: "border-t-blue-500",
            },
            {
              label: "ORGANIC SESSIONS",
              icon: "🌱",
              val: "4,120",
              delta: "conversions 342",
              color: "border-t-emerald-500",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`rounded-xl border border-border bg-card p-2.5 shadow-soft border-t-[3px] ${card.color}`}
            >
              <div className="flex items-center justify-between text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                <span>{card.label}</span>
                <span className="text-xs">{card.icon}</span>
              </div>
              <div className="mt-1 font-display text-lg sm:text-xl font-bold text-ink">
                {card.val}
              </div>
              <div className="mt-0.5 text-[10px] font-medium text-muted-foreground truncate">
                {card.delta}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. MAIN BODY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[420px]">
        {/* Left Sidebar on desktop, Top Horizontal Scroll Bar on mobile */}
        <div
          ref={scrollContainerRef}
          className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-border bg-white dark:bg-[#151923] p-2 sm:p-2.5 flex lg:flex-col gap-1.5 overflow-x-auto scroll-smooth flex-nowrap shrink-0 touch-pan-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  tabRefs.current[item.id] = el;
                }}
                type="button"
                onClick={() => handleTabClick(item.id)}
                className={`shrink-0 flex items-center lg:items-start gap-2 rounded-xl px-3.5 py-2.5 lg:p-2 text-left transition cursor-pointer whitespace-nowrap lg:whitespace-normal ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 border border-blue-300 dark:border-blue-800/80 shadow-sm font-semibold ring-1 ring-blue-400/20"
                    : "hover:bg-surface text-ink border border-transparent"
                }`}
              >
                <span className="text-base sm:text-sm shrink-0">{item.icon}</span>
                <div className="min-w-0 flex items-center lg:block gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold">{item.name}</span>
                    {item.badge && (
                      <span className="rounded-full bg-rose-500/15 text-rose-700 px-1.5 py-0.2 text-[8px] font-extrabold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="hidden lg:block text-[10px] text-muted-foreground truncate leading-tight mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-9 p-3.5 sm:p-5 bg-[#fbfbfb] dark:bg-[#0c0e14] transition-all duration-200">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <span className="text-lg">🏠</span>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink">Overview</h4>
                  <p className="text-[11px] text-muted-foreground">
                    KPIs, brand vs non-brand health
                  </p>
                </div>
              </div>

              {/* Brand vs Non-Brand Split Card */}
              <div className="rounded-xl border border-border bg-card p-4 shadow-soft">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-ink">
                    Brand vs. Non-Brand Search Traffic Split
                  </span>
                  <span className="text-muted-foreground font-medium">Total: 1,420 Clicks</span>
                </div>
                <div className="mt-2.5 flex h-2.5 w-full overflow-hidden rounded-full bg-surface">
                  <div className="bg-lime" style={{ width: "29.5%" }} title="Brand: 29.5%" />
                  <div
                    className="bg-blue-600"
                    style={{ width: "70.5%" }}
                    title="Non-Brand: 70.5%"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-lime" /> Brand Queries: 29.5% (420
                    clicks)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-blue-600" /> Non-Brand Commercial:
                    70.5% (1,000 clicks)
                  </span>
                </div>
              </div>

              {/* Quick Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
                  <span className="text-muted-foreground text-[11px] font-medium">
                    Organic Click Growth
                  </span>
                  <div className="text-lg font-bold text-emerald-600 mt-0.5">+29.1% MoM</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
                  <span className="text-muted-foreground text-[11px] font-medium">
                    Average Page 1 CTR
                  </span>
                  <div className="text-lg font-bold text-blue-600 mt-0.5">4.82%</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
                  <span className="text-muted-foreground text-[11px] font-medium">
                    Organic Install Conv.
                  </span>
                  <div className="text-lg font-bold text-lime-800 mt-0.5">8.30% (342 conv)</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ACTION CENTER */}
          {activeTab === "actions" && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-border pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-ink">
                      Action Center
                    </h4>
                    <p className="text-[11px] text-muted-foreground">
                      What to fix next + fix briefs
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-rose-500/15 text-rose-700 px-2 py-0.5 text-[11px] font-bold">
                  8 Open Actions
                </span>
              </div>

              {/* Description Header */}
              <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
                <h5 className="font-display text-xs font-bold text-ink">What should I do next?</h5>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">
                  One prioritized list from GSC + GA4 + website. Fix P0 first. Each item tracks
                  Added / Changed / Solved when Google data improves.
                </p>
              </div>

              {/* Action Card 1 */}
              <div className="rounded-xl border border-border bg-card p-3.5 shadow-soft">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded bg-rose-500/15 text-rose-700 px-1.5 py-0.2 text-[9px] font-bold">
                    P0
                  </span>
                  <span className="rounded bg-surface border border-border px-1.5 py-0.2 text-[9px] font-medium text-muted-foreground">
                    striking distance
                  </span>
                  <span className="font-mono text-xs font-bold text-ink">
                    &ldquo;shopify upsell app&rdquo;
                  </span>
                </div>

                <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px]">
                  <div className="rounded-lg border border-border bg-surface p-1.5">
                    <span className="text-muted-foreground uppercase text-[8px] font-bold">
                      Added
                    </span>
                    <div className="font-mono font-bold text-ink mt-0.5">2026-08-16</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-1.5">
                    <span className="text-muted-foreground uppercase text-[8px] font-bold">
                      Rank
                    </span>
                    <div className="font-mono font-bold text-amber-600 mt-0.5">#4.2</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-1.5">
                    <span className="text-muted-foreground uppercase text-[8px] font-bold">
                      Impressions
                    </span>
                    <div className="font-mono font-bold text-purple-600 mt-0.5">14,200/mo</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-1.5">
                    <span className="text-muted-foreground uppercase text-[8px] font-bold">
                      Status
                    </span>
                    <div className="font-bold text-rose-600 mt-0.5">open</div>
                  </div>
                </div>

                <h5 className="mt-2.5 font-display text-xs font-bold text-ink">
                  Action Brief: Push to Top 3
                </h5>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">
                  Add 2 internal links from high-ranking guides and update the H1 tag to capture
                  +420 monthly clicks.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: DAILY REPORT */}
          {activeTab === "daily" && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-border pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-lg">📅</span>
                  <div>
                    <h4 className="font-display text-sm sm:text-base font-bold text-ink">
                      Daily Report
                    </h4>
                    <p className="text-[11px] text-muted-foreground">
                      Day-over-day wins &amp; problems
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-500/15 text-emerald-700 px-2 py-0.5 text-[11px] font-bold">
                  Dates aligned
                </span>
              </div>

              {/* Day Metrics Row */}
              <div className="rounded-xl border border-border bg-card p-3 shadow-soft">
                <div className="text-[11px] font-bold text-ink pb-1.5">
                  Day metrics • 2026-08-17 vs previous day 2026-08-16
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
                  <div className="rounded-lg border border-border bg-surface p-2 text-center">
                    <span className="text-muted-foreground text-[9px] uppercase font-bold">
                      GSC Clicks
                    </span>
                    <div className="text-base font-bold text-ink mt-0.5">48</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-2 text-center">
                    <span className="text-muted-foreground text-[9px] uppercase font-bold">
                      Impressions
                    </span>
                    <div className="text-base font-bold text-ink mt-0.5">1,820</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-2 text-center">
                    <span className="text-muted-foreground text-[9px] uppercase font-bold">
                      Avg Position
                    </span>
                    <div className="text-base font-bold text-ink mt-0.5">12.4</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-2 text-center">
                    <span className="text-muted-foreground text-[9px] uppercase font-bold">
                      GA4 Sessions
                    </span>
                    <div className="text-base font-bold text-ink mt-0.5">540</div>
                  </div>
                  <div className="rounded-lg border border-border bg-surface p-2 text-center">
                    <span className="text-muted-foreground text-[9px] uppercase font-bold">
                      Conversions
                    </span>
                    <div className="text-base font-bold text-emerald-600 mt-0.5">24 ($1,480)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PAGES */}
          {activeTab === "pages" && (
            <div className="space-y-3.5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <span className="text-lg">📄</span>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink">Pages</h4>
                  <p className="text-[11px] text-muted-foreground">
                    Joined GSC + GA4 page insights
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-soft">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-surface text-muted-foreground font-semibold">
                    <tr>
                      <th className="py-2.5 px-3">Page URL</th>
                      <th className="py-2.5 px-2">Impressions</th>
                      <th className="py-2.5 px-2">Clicks</th>
                      <th className="py-2.5 px-2">CTR</th>
                      <th className="py-2.5 px-2">Rank</th>
                      <th className="py-2.5 px-2">Sessions</th>
                      <th className="py-2.5 px-3">Conv. Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 text-ink text-[11px]">
                    <tr>
                      <td className="py-2 px-3 font-mono text-[10px]">/apps/weupsell-popup</td>
                      <td className="py-2 px-2 font-mono">18,500</td>
                      <td className="py-2 px-2 font-mono font-bold text-blue-600">620</td>
                      <td className="py-2 px-2">3.35%</td>
                      <td className="py-2 px-2 font-bold text-emerald-600">#3.2</td>
                      <td className="py-2 px-2 font-mono">1,120</td>
                      <td className="py-2 px-3 font-bold text-lime-800">8.42%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-mono text-[10px]">/apps/meal-bundle-builder</td>
                      <td className="py-2 px-2 font-mono">14,200</td>
                      <td className="py-2 px-2 font-mono font-bold text-blue-600">410</td>
                      <td className="py-2 px-2">2.88%</td>
                      <td className="py-2 px-2 font-bold text-blue-600">#4.6</td>
                      <td className="py-2 px-2 font-mono">820</td>
                      <td className="py-2 px-3 font-bold text-lime-800">6.70%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 5: KEYWORDS */}
          {activeTab === "keywords" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <span className="text-lg">🔑</span>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink">Keywords</h4>
                  <p className="text-[11px] text-muted-foreground">
                    Rankings, moves &amp; stuck terms
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-soft">
                <table className="w-full text-left text-xs">
                  <thead className="border-b border-border bg-surface text-muted-foreground font-semibold">
                    <tr>
                      <th className="py-2.5 px-3">QUERY</th>
                      <th className="py-2.5 px-2">CLICKS</th>
                      <th className="py-2.5 px-2">IMP</th>
                      <th className="py-2.5 px-2">CTR</th>
                      <th className="py-2.5 px-2">POS</th>
                      <th className="py-2.5 px-3">TREND</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 text-ink text-[11px]">
                    <tr>
                      <td className="py-2 px-3 font-medium">shopify upsell app case study</td>
                      <td className="py-2 px-2 font-mono">14</td>
                      <td className="py-2 px-2 font-mono">390</td>
                      <td className="py-2 px-2">3.58%</td>
                      <td className="py-2 px-2 font-mono">14.6</td>
                      <td className="py-2 px-3">
                        <span className="rounded bg-rose-500/15 text-rose-700 px-1.5 py-0.2 text-[9px] font-bold">
                          declining -2.4
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-medium">reconvert alternative 2026</td>
                      <td className="py-2 px-2 font-mono">28</td>
                      <td className="py-2 px-2 font-mono">360</td>
                      <td className="py-2 px-2">7.77%</td>
                      <td className="py-2 px-2 font-mono">3.8</td>
                      <td className="py-2 px-3">
                        <span className="rounded bg-emerald-500/15 text-emerald-700 px-1.5 py-0.2 text-[9px] font-bold">
                          improving +4.8
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: TECHNICAL SEO */}
          {activeTab === "technical" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <span className="text-lg">🛠️</span>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink">
                    Technical SEO
                  </h4>
                  <p className="text-[11px] text-muted-foreground">Website crawl issues</p>
                </div>
              </div>

              {/* Issue Card 1 */}
              <div className="rounded-xl border border-border bg-card p-3.5 shadow-soft">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded bg-amber-500/15 text-amber-800 px-1.5 py-0.2 text-[9px] font-bold">
                    medium
                  </span>
                  <span className="rounded bg-surface border border-border px-1.5 py-0.2 text-[9px] font-medium text-muted-foreground">
                    redirect
                  </span>
                  <span className="rounded bg-surface border border-border px-1.5 py-0.2 text-[9px] font-medium text-muted-foreground">
                    open
                  </span>
                </div>

                <h5 className="mt-2 font-mono text-xs font-bold text-ink">/</h5>
                <p className="mt-0.5 text-[11px] text-muted-foreground">
                  Redirects to https://www.aimbrill.com/
                </p>
                <div className="mt-1.5 rounded-lg border border-border bg-surface p-2 text-[11px] text-ink">
                  <strong>Fix:</strong> Prefer a direct canonical URL in sitemaps and internal
                  links.
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: COMPETITORS */}
          {activeTab === "competitors" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <span className="text-lg">⚔️</span>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink">
                    Competitors
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    Gaps vs Wiser, Selleasy &amp; more
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-3.5 shadow-soft text-xs">
                <div className="flex justify-between items-center pb-1.5 border-b border-border font-bold">
                  <span>Wiser Alternative Page</span>
                  <span className="text-emerald-600 font-bold">8.4% Conv Rate</span>
                </div>
                <p className="mt-1.5 text-muted-foreground text-[11px] leading-relaxed">
                  Capturing 350 high-intent search clicks/month from shoppers comparing Shopify
                  upsell competitors.
                </p>
              </div>
            </div>
          )}

          {/* TAB 8: TRAFFIC JOURNEY */}
          {activeTab === "traffic" && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 border-b border-border pb-2.5">
                <span className="text-lg">🛤️</span>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-ink">
                    Traffic Journey
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    Search → site → conversion funnel
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="rounded-xl border border-border bg-card p-2.5 text-center shadow-soft">
                  <span className="text-muted-foreground text-[10px] font-medium">
                    1. Google Views
                  </span>
                  <div className="text-base font-bold text-purple-600 mt-0.5">48.9K</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-2.5 text-center shadow-soft">
                  <span className="text-muted-foreground text-[10px] font-medium">2. Clicks</span>
                  <div className="text-base font-bold text-blue-600 mt-0.5">1.4K (2.9%)</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-2.5 text-center shadow-soft">
                  <span className="text-muted-foreground text-[10px] font-medium">3. Sessions</span>
                  <div className="text-base font-bold text-sky-600 mt-0.5">14.8K</div>
                </div>
                <div className="rounded-xl border border-border bg-card p-2.5 text-center shadow-soft">
                  <span className="text-muted-foreground text-[10px] font-medium">
                    4. Conversions
                  </span>
                  <div className="text-base font-bold text-lime-800 mt-0.5">342 (8.3%)</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4. COMPACT FOOTER TIP BAR */}
      <div className="border-t border-border bg-white dark:bg-[#151923] px-4 py-2.5 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-blue-600 shrink-0" />
          Click any sidebar tab on the left to see live previews of all 8 tabs.
        </span>
        <a
          href="#ai-prompt"
          className="font-bold text-blue-600 hover:underline flex items-center gap-1 transition"
        >
          <span>Copy AI Prompt to Build This Exact Dashboard</span>
          <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
