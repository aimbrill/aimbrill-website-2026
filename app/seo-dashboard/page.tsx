import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PromptCopyBox, EnvExampleCopyBox } from "@/components/seo/PromptCopyBox";
import { InteractiveDashboardPreview } from "@/components/seo/InteractiveDashboardPreview";
import { ProblemSolutionVisualizer } from "@/components/seo/ProblemSolutionVisualizer";
import { ArrowRight, CheckCircle2, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Marketing & SEO Dashboard: GSC, GA4 & Ads | Aimbrill",
  description:
    "See your traffic, Google rankings, ads, and conversions in one dashboard. Spot problems faster and take action in seconds.",
  alternates: {
    canonical: "/seo-dashboard",
  },
  keywords: [
    "SEO dashboard",
    "marketing analytics dashboard",
    "google search console ga4 unified",
    "google ads meta ads dashboard",
    "growth command center",
  ],
  openGraph: {
    title: "Marketing & SEO Dashboard: GSC, GA4 & Ads | Aimbrill",
    description:
      "See your traffic, Google rankings, ads, and conversions in one dashboard. Spot problems faster and take action in seconds.",
    url: "https://www.aimbrill.com/seo-dashboard",
    siteName: "Aimbrill",
    type: "website",
    images: [
      {
        url: "/images/seo/seo-diagnosis-hard.png",
        width: 1200,
        height: 800,
        alt: "Marketing & SEO Dashboard: GSC, GA4 & Ads in One Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing & SEO Dashboard: GSC, GA4 & Ads | Aimbrill",
    description:
      "See your traffic, Google rankings, ads, and conversions in one dashboard. Spot problems faster and take action in seconds.",
    images: ["/images/seo/seo-diagnosis-hard.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

const DASHBOARD_PROMPT = `You are an expert full-stack TypeScript and Next.js engineer. Build a complete, production-ready **Unified Growth & Marketing Intelligence Dashboard** matching this exact architecture, design system, and tab structure using Next.js 15 (App Router), TypeScript, Google APIs, and Meta Marketing APIs.

---

### Project Overview
A unified local/cloud command center connecting **Google Search Console (GSC)**, **Google Analytics 4 (GA4)**, **Google Tag Manager (GTM)**, **Google Ads**, and **Meta Ads (Facebook/Instagram)** into a single dashboard for organic rankings, paid campaign ROAS, tag tracking integrity, traffic journeys, and automated fix briefs.

---

### Core Tech Stack & Dependencies
- **Framework:** Next.js 15 (App Router) with TypeScript
- **Styling:** Custom CSS design system with CSS variables, sleek dark/light aesthetics, KPI stat cards, badges (\`improving\`, \`declining\`, \`stable\`, \`solved\`), life-date trackers, share bars, and responsive tables
- **APIs & SDKs:**
  - Google OAuth 2.0 (\`googleapis\` / \`google-auth-library\`)
  - Google Search Console API (\`webmasters.readonly\`)
  - Google Analytics Data API (\`analytics.readonly\` via GA4 RunReport)
  - Google Tag Manager API (\`tagmanager.readonly\`)
  - Google Ads API / REST endpoint for campaign performance & ROAS
  - Meta Graph API (Marketing API \`ads_read\` for Facebook/Instagram Ads spend, impressions, CTR, and ROAS)
- **Data Persistence:** Local JSON token store and daily snapshot cache store (\`/data/tokens.json\`, \`/data/daily-snapshots.json\`)

---

### Key Dashboard Tabs & UI Structure

The dashboard component (\`DashboardClient.tsx\`) must implement these exact tabs:

1. **🏠 Overview (\`overview\`):**
   - Top KPI Cards: Organic Clicks (\`👆\`), Total Impressions (\`👁️\`), Avg CTR (\`🎯\`), Avg Position (\`📍\`), GA4 Sessions (\`👥\`), Paid Ads ROAS (\`💰\`).
   - Day-over-day delta badges (+ / - changes).
   - Brand vs. Non-Brand search query traffic split.
   - Blended Revenue breakdown: Organic Search vs. Google Ads vs. Meta Ads vs. Direct.

2. **✅ Action Center (\`actions\`):**
   - Prioritized Fix Briefs & recommendations generated from multi-channel data.
   - Each action card includes a **Life Dates Tracker**: \`Added\`, \`Changed\`, \`Solved\`, and status badge (\`open\`, \`improving\`, \`declining\`, \`solved\`).
   - Cross-channel diagnostic alerts (e.g. *Organic Page 1 Low CTR*, *Google Ads Keyword Cannibalizing Organic #1*, *Meta Ads High CPM / Low Conv*, *GTM Missing Purchase Event*).

3. **📅 Daily Report (\`daily\`):**
   - Latest finalized GSC day metrics vs. previous day.
   - Same-day GA4 sessions, organic visitors, Google Ads spend, Meta Ads spend, and blended ROAS.
   - Top Rising & Dropping organic queries and paid ad creatives.

4. **📄 Pages & Landing Pages (\`pages\`):**
   - Joined table mapping paths across GSC organic rank, GA4 sessions, Google Ads landing page spend, and Meta ad landing page conversion rates.

5. **🔑 Keywords & Search Queries (\`keywords\`):**
   - Search queries with search volume/impressions, clicks, CTR, and average position.
   - Paid vs. Organic keyword overlap and striking distance queries (Pos 4–15).

6. **🛠️ Technical SEO (\`technical\`):**
   - Website crawl diagnostics, meta tag check (missing titles, descriptions), canonical tag validation, and indexability errors directly tied to ranking loss.

7. **⚔️ Competitors (\`competitors\`):**
   - Keyword gap tracking and comparison page performance (e.g. \`/brand-vs-competitor\` URLs) capturing high-intent competitor search traffic.

8. **🛤️ Traffic Journey (\`traffic\`):**
   - Complete Search → Site → Conversion funnel visualization showing the journey from initial SERP impression to key event completion.

---

### Environment Variables (\`.env.example\`)
\`\`\`env
# Google OAuth 2.0 Credentials (for GSC, GA4, GTM, Google Ads)
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback

# Properties & IDs
GSC_SITE_URL=https://www.yoursite.com/
GA4_PROPERTY_ID=123456789
GTM_CONTAINER_ID=GTM-XXXXXXX
GOOGLE_ADS_CUSTOMER_ID=123-456-7890

# Meta Ads Marketing API
META_APP_ID=your-meta-app-id
META_APP_SECRET=your-meta-app-secret
META_ACCESS_TOKEN=your-meta-user-access-token
META_AD_ACCOUNT_ID=act_1234567890

APP_NAME="Unified Marketing & SEO Intelligence Dashboard"
BRAND_NAME="Your Brand"
SITE_DOMAIN="yoursite.com"
APP_BASE_URL=http://localhost:3000
\`\`\``;

const ENV_EXAMPLE_SNIPPET = `# Google OAuth 2.0 (Search Console, GA4, GTM, Google Ads)
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback

# Google Search Console & Analytics
GSC_SITE_URL=https://www.yoursite.com/
GA4_PROPERTY_ID=123456789
GTM_CONTAINER_ID=GTM-XXXXXXX
GOOGLE_ADS_CUSTOMER_ID=123-456-7890

# Meta Ads (Facebook & Instagram)
META_ACCESS_TOKEN=your-meta-access-token
META_AD_ACCOUNT_ID=act_1234567890

APP_NAME="Unified Marketing & SEO Intelligence Dashboard"
SITE_DOMAIN="yoursite.com"
APP_BASE_URL=http://localhost:3000`;

export default function SeoDashboardPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-lime selection:text-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Glow ambient decoration */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 h-72 w-[600px] rounded-full bg-lime/20 blur-[120px] pointer-events-none" />

        <div className="text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.16] max-w-5xl mx-auto">
            Stop Switching Between Tabs.
            <br className="hidden sm:inline" /> See Your Entire Marketing Performance in{" "}
            <span className="whitespace-nowrap underline decoration-lime decoration-4 underline-offset-4">
              One Dashboard
            </span>
            .
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            See your website traffic, Google rankings, ads, conversions, and tracking performance in
            one place. Find what&apos;s changing, spot problems faster, and know exactly what needs
            your attention.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#ai-prompt"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm sm:text-base font-bold text-ink shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Code2 className="h-5 w-5" />
              <span>Copy AI Builder Prompt</span>
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-4 text-sm sm:text-base font-semibold text-ink transition hover:bg-surface-2"
            >
              <span>Get Free Store Audit</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Live Interactive Preview Container */}
        <div className="mt-14 sm:mt-16">
          <div className="text-center mb-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground">
              👇 Live Interactive Command Center Preview (Click tabs to explore)
            </span>
          </div>
          <InteractiveDashboardPreview />
        </div>
      </section>

      {/* SECTION 1: THE REAL PROBLEM (BEFORE VS AFTER) */}
      <section className="border-t border-border/60 bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
              Why SEO Data Is Hard to Diagnose
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              GSC shows search performance. GA4 shows traffic. Your website holds the real answers,
              but connecting the dots manually takes too long.
            </p>
          </div>

          {/* Interactive Illustrated Problem vs Solution Breakdown */}
          <ProblemSolutionVisualizer />
        </div>
      </section>

      {/* SECTION 2: THE 8-TAB BREAKDOWN */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
              The Unified Solution: 8 Purpose-Built Intelligence Tabs
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Every tab is engineered to solve a specific data blindspot in seconds, replacing hours
              of manual CSV spreadsheets with real-time actionable intelligence:
            </p>
          </div>

          {/* 8 Tabs Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Tab 1 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-blue-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 font-bold text-lg">
                    🏠
                  </div>
                  <span className="rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 px-2 py-0.5 text-[10px] font-bold">
                    Executive View
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">1. Overview</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Connects 6 Top KPIs (Clicks, Impressions, CTR, Position, Sessions, Organic Users)
                  and splits <strong>Brand vs. Non-Brand</strong> search traffic instantly.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-blue-600 dark:text-blue-400">
                ✓ Solves: Siloed traffic vs revenue overview
              </div>
            </div>

            {/* Tab 2 */}
            <div className="rounded-3xl border border-lime-400/60 bg-card p-5 sm:p-6 shadow-pop transition hover:border-lime flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime text-ink font-bold text-lg shadow-sm">
                    ✅
                  </div>
                  <span className="rounded-full bg-lime/20 text-lime-900 px-2 py-0.5 text-[10px] font-bold">
                    Automated Fixes
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">2. Action Center</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Prioritized P0/P1 fix briefs with <strong>Life Dates Tracking</strong> (
                  <code>Added</code>, <code>Changed</code>, <code>Solved</code>) and automated
                  progress status badges.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-bold text-lime-800 dark:text-lime-400">
                ✓ Solves: Guessing what code to fix next
              </div>
            </div>

            {/* Tab 3 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-purple-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 font-bold text-lg">
                    📅
                  </div>
                  <span className="rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2 py-0.5 text-[10px] font-bold">
                    Day-Over-Day
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">3. Daily Report</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Aligns the latest finalized GSC day with same-day GA4 conversions, spotlighting
                  top daily rising and dropping search queries automatically.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-purple-600 dark:text-purple-400">
                ✓ Solves: 48h Google Search Console data lag
              </div>
            </div>

            {/* Tab 4 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-sky-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 font-bold text-lg">
                    📄
                  </div>
                  <span className="rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-400 px-2 py-0.5 text-[10px] font-bold">
                    URL Normalizer
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">4. Pages</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  A single joined table matching GSC impressions and rank with GA4 checkout
                  conversions per URL, with proportional share visual bars.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-sky-600 dark:text-sky-400">
                ✓ Solves: Broken Excel VLOOKUP formulas
              </div>
            </div>

            {/* Tab 5 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-amber-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 font-bold text-lg">
                    🔑
                  </div>
                  <span className="rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 px-2 py-0.5 text-[10px] font-bold">
                    Rank Intelligence
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">5. Keywords</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Automatic tier bucketing (Top 3, 4–10, 11–20), rank gainers &amp; losers, and
                  alerts for <strong>Striking Distance Queries (Pos 4–15)</strong>.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-amber-600 dark:text-amber-400">
                ✓ Solves: Missed low-hanging rank wins
              </div>
            </div>

            {/* Tab 6 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-rose-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-600 font-bold text-lg">
                    🛠️
                  </div>
                  <span className="rounded-full bg-rose-500/10 text-rose-700 dark:text-rose-400 px-2 py-0.5 text-[10px] font-bold">
                    Code Audit
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">6. Technical SEO</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Crawls and audits meta titles, missing descriptions, broken canonical tags, and
                  indexability errors directly tied to ranking loss.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-rose-600 dark:text-rose-400">
                ✓ Solves: Hidden technical SEO errors
              </div>
            </div>

            {/* Tab 7 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-indigo-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 font-bold text-lg">
                    ⚔️
                  </div>
                  <span className="rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 px-2 py-0.5 text-[10px] font-bold">
                    Market Gap
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">7. Competitors</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Monitors commercial comparison landing pages (e.g.{" "}
                  <code>/brand-vs-competitor</code>) and captures high-intent competitor search
                  terms.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-indigo-600 dark:text-indigo-400">
                ✓ Solves: Competitor keyword gap blindness
              </div>
            </div>

            {/* Tab 8 */}
            <div className="rounded-3xl border border-border bg-card p-5 sm:p-6 shadow-soft transition hover:border-emerald-500/50 hover:shadow-pop flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 font-bold text-lg">
                    🛤️
                  </div>
                  <span className="rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 text-[10px] font-bold">
                    Full Funnel
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-ink">
                  8. Traffic Journey
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Complete search-to-sale funnel mapping:{" "}
                  <strong>
                    Search Impression &rarr; Google Click &rarr; Website Session &rarr; Checkout
                    &amp; Conversion
                  </strong>
                  .
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                ✓ Solves: Fragmented customer journey tracking
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE AI BUILDER PROMPT BOX */}
      <section id="ai-prompt" className="border-t border-border/60 bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
              Copy This Exact Prompt to Build the Complete Dashboard
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Click the button below to copy the complete production prompt. Paste it into your AI
              coding assistant (ChatGPT, Claude 3.7 Sonnet, Cursor, or Antigravity) to build this
              exact system:
            </p>
          </div>

          <div className="mt-10">
            <PromptCopyBox promptText={DASHBOARD_PROMPT} />
          </div>
        </div>
      </section>

      {/* SECTION 4: 4 EASY SETUP STEPS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight">
              How to Connect Your Real Google Account
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
              Follow this 4-step checklist to connect your live Google Search Console and GA4 data
              in under 5 minutes:
            </p>
          </div>

          <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6">
            {/* Step 1 */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 md:p-7 shadow-soft transition hover:border-lime/60">
              <div className="flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-lime font-display text-base font-bold text-ink shadow-sm">
                    1
                  </div>
                  <span className="sm:hidden rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    ⏱️ 1 minute
                  </span>
                </div>

                <div className="flex-1 w-full min-w-0">
                  <div className="hidden sm:flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      Enable Google APIs in Google Cloud Console
                    </h3>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                      ⏱️ 1 minute
                    </span>
                  </div>

                  <h3 className="sm:hidden font-display text-base font-bold text-ink mt-1">
                    Enable Google APIs in Google Cloud Console
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Open{" "}
                    <a
                      href="https://console.cloud.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-bold underline"
                    >
                      console.cloud.google.com
                    </a>{" "}
                    (100% free), create or select your project, go to{" "}
                    <strong>APIs &amp; Services &gt; Library</strong>, and enable these 2 APIs:
                  </p>

                  <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs w-full">
                    <div className="rounded-2xl border border-border bg-surface p-3.5 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink font-bold">Google Search Console API</strong>
                        <p className="text-muted-foreground text-[11px] mt-0.5">
                          Fetches search keywords, impressions, clicks, and rank positions.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border bg-surface p-3.5 flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-ink font-bold">Google Analytics Data API</strong>
                        <p className="text-muted-foreground text-[11px] mt-0.5">
                          Fetches page visits, sessions, and checkout conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 md:p-7 shadow-soft transition hover:border-lime/60">
              <div className="flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-lime font-display text-base font-bold text-ink shadow-sm">
                    2
                  </div>
                  <span className="sm:hidden rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    ⏱️ 2 minutes
                  </span>
                </div>

                <div className="flex-1 w-full min-w-0">
                  <div className="hidden sm:flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      Create Your OAuth 2.0 Client Credentials
                    </h3>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                      ⏱️ 2 minutes
                    </span>
                  </div>

                  <h3 className="sm:hidden font-display text-base font-bold text-ink mt-1">
                    Create Your OAuth 2.0 Client Credentials
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    In Google Cloud, navigate to{" "}
                    <strong>
                      APIs &amp; Services &gt; Credentials &gt; Create Credentials &gt; OAuth Client
                      ID
                    </strong>
                    :
                  </p>

                  <ul className="mt-2.5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <li>
                      • Application Type: <strong>Web application</strong>
                    </li>
                    <li>
                      • Name: <strong>SEO Intelligence Dashboard</strong>
                    </li>
                  </ul>

                  <div className="mt-3.5 rounded-2xl border border-border bg-surface p-3.5 sm:p-4 text-xs w-full">
                    <span className="font-bold text-ink block mb-2">
                      Add this exact URL to &ldquo;Authorized redirect URIs&rdquo;:
                    </span>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 bg-card p-3 rounded-xl border border-border font-mono text-xs text-ink font-semibold w-full overflow-x-auto">
                      <span className="break-all text-[11px] sm:text-xs">
                        http://localhost:3000/api/auth/callback
                      </span>
                      <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded shrink-0">
                        Required
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 md:p-7 shadow-soft transition hover:border-lime/60">
              <div className="flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-lime font-display text-base font-bold text-ink shadow-sm">
                    3
                  </div>
                  <span className="sm:hidden rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    ⏱️ 1 minute
                  </span>
                </div>

                <div className="flex-1 w-full min-w-0">
                  <div className="hidden sm:flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      Paste Your Keys in .env.local
                    </h3>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                      ⏱️ 1 minute
                    </span>
                  </div>

                  <h3 className="sm:hidden font-display text-base font-bold text-ink mt-1">
                    Paste Your Keys in .env.local
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Create a file named{" "}
                    <code className="font-mono text-ink font-bold">.env.local</code> in your project
                    root folder and paste your Client ID, Secret, and Property IDs:
                  </p>

                  <div className="mt-3.5 w-full">
                    <EnvExampleCopyBox envText={ENV_EXAMPLE_SNIPPET} />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl border border-border bg-card p-4 sm:p-6 md:p-7 shadow-soft transition hover:border-lime/60">
              <div className="flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-lime font-display text-base font-bold text-ink shadow-sm">
                    4
                  </div>
                  <span className="sm:hidden rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                    ⏱️ 30 seconds
                  </span>
                </div>

                <div className="flex-1 w-full min-w-0">
                  <div className="hidden sm:flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                      Run &ldquo;npm run dev&rdquo; &amp; Click &ldquo;Connect Google&rdquo;
                    </h3>
                    <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                      ⏱️ 30 seconds
                    </span>
                  </div>

                  <h3 className="sm:hidden font-display text-base font-bold text-ink mt-1">
                    Run &ldquo;npm run dev&rdquo; &amp; Click &ldquo;Connect Google&rdquo;
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Launch your dashboard, click the <strong>&ldquo;Connect Google&rdquo;</strong>{" "}
                    button in the top right, and approve read access once. Your dashboard will
                    immediately fetch, normalize, and display your live data!
                  </p>

                  <div className="mt-3.5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 flex items-center gap-2.5 text-xs text-emerald-800 dark:text-emerald-300 w-full">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>
                      <strong>Auto-Archiving:</strong> Tokens and daily metrics are cached locally
                      so your dashboard loads instantly without re-authenticating every day.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="border-t border-border/60 bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center shadow-soft relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 h-32 w-32 bg-lime/15 rounded-full blur-2xl pointer-events-none" />

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Want Us to Audit Your Store&apos;s SEO for Free?
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl mx-auto">
              Get a personalized 1-on-1 video audit of your Google Search Console and GA4 traffic
              leaks from our e-commerce engineers.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm sm:text-base font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Free SEO Strategy Call</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/#apps"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm sm:text-base font-semibold text-ink transition hover:bg-surface-2"
              >
                Explore Aimbrill Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
