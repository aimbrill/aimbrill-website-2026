"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Lock,
  Search,
  BarChart3,
  Globe,
  Maximize2,
  ArrowRight,
  ArrowLeft,
  KeyRound,
  FileCode2,
  PlayCircle,
  HelpCircle,
} from "lucide-react";

interface ImageSlotProps {
  id?: string;
  filename?: string;
  title: string;
  description?: string;
  aiPrompt?: string;
  imageSrc?: string;
}

function ImageSlot({ title, imageSrc }: ImageSlotProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  if (!imageSrc) return null;

  return (
    <div className="mt-4 max-w-xl mx-auto rounded-2xl border border-border bg-surface/60 p-2.5 sm:p-3 transition hover:border-lime/60 shadow-sm">
      <div className="space-y-2">
        {/* Image Container with Zoom trigger */}
        <div
          onClick={() => setIsZoomed(!isZoomed)}
          className="group relative flex items-center justify-center overflow-hidden rounded-xl border border-border bg-black/95 cursor-zoom-in shadow-inner transition hover:border-lime/80 max-h-[230px] sm:max-h-[250px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={title}
            className="w-full max-h-[230px] sm:max-h-[250px] object-contain block transition-transform duration-300 group-hover:scale-[1.005]"
          />

          <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur text-white text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1">
            <Maximize2 className="h-3 w-3" />
            <span>{isZoomed ? "Shrink" : "Expand"}</span>
          </div>
        </div>

        {/* Caption Heading Centered */}
        <div className="px-1 text-center text-xs sm:text-[13px]">
          <p className="font-semibold text-ink leading-snug">{title}</p>
        </div>
      </div>
      {/* Zoom Modal Backdrop */}
      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl border border-border bg-card p-2 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageSrc} alt={title} className="w-full h-auto rounded-xl object-contain" />
            <div className="p-3 text-center">
              <p className="text-xs sm:text-sm font-bold text-ink">{title}</p>
              <p className="text-xs text-muted-foreground">Click anywhere to close preview</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function VisualSetupGuide() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const tabContainerRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const STEPS = [
    {
      id: 1,
      name: "Enable APIs",
      shortTitle: "APIs",
      time: "1 min",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      id: 2,
      name: "OAuth & Test Users",
      shortTitle: "Consent",
      time: "1 min",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
    {
      id: 3,
      name: "OAuth Credentials",
      shortTitle: "Credentials",
      time: "1 min",
      icon: <KeyRound className="h-4 w-4" />,
    },
    {
      id: 4,
      name: "Property IDs",
      shortTitle: "Property IDs",
      time: "1 min",
      icon: <Search className="h-4 w-4" />,
    },
    {
      id: 5,
      name: ".env Setup",
      shortTitle: ".env Setup",
      time: "30 sec",
      icon: <FileCode2 className="h-4 w-4" />,
    },
    {
      id: 6,
      name: "Connect & Launch",
      shortTitle: "Launch",
      time: "30 sec",
      icon: <PlayCircle className="h-4 w-4" />,
    },
  ];

  // Automatically ensure active step and adjacent next/prev step pills are comfortably visible
  useEffect(() => {
    const container = tabContainerRef.current;
    if (!container) return;

    const currEl = tabRefs.current[activeStep - 1];
    if (!currEl) return;

    if (activeStep === 1) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (activeStep === STEPS.length) {
      container.scrollTo({
        left: container.scrollWidth - container.clientWidth,
        behavior: "smooth",
      });
      return;
    }

    const nextEl = tabRefs.current[activeStep]; // Step activeStep + 1
    const prevEl = tabRefs.current[activeStep - 2]; // Step activeStep - 1

    const containerLeft = container.scrollLeft;
    const containerRight = containerLeft + container.clientWidth;

    // Check if next step needs to be revealed on the right
    if (nextEl) {
      const nextRight = nextEl.offsetLeft + nextEl.offsetWidth;
      if (nextRight > containerRight - 8) {
        container.scrollTo({
          left: nextRight - container.clientWidth + 16,
          behavior: "smooth",
        });
        return;
      }
    }

    // Check if previous step needs to be revealed on the left
    if (prevEl) {
      const prevLeft = prevEl.offsetLeft;
      if (prevLeft < containerLeft + 8) {
        container.scrollTo({
          left: Math.max(0, prevLeft - 16),
          behavior: "smooth",
        });
        return;
      }
    }

    // Otherwise make sure current step itself is fully in view
    const currLeft = currEl.offsetLeft;
    const currRight = currLeft + currEl.offsetWidth;
    if (currRight > containerRight - 8) {
      container.scrollTo({
        left: currRight - container.clientWidth + 16,
        behavior: "smooth",
      });
    } else if (currLeft < containerLeft + 8) {
      container.scrollTo({
        left: Math.max(0, currLeft - 16),
        behavior: "smooth",
      });
    }
  }, [activeStep, STEPS.length]);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const ENV_CONFIG_SAMPLE = `# ── Google OAuth Credentials ──────────────────────────────
GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret_here
GOOGLE_REDIRECT_URI=http://localhost:3001/api/auth/callback
OAUTH_STATE=seo-dashboard

# ── GSC & GA4 Identifiers ─────────────────────────────────
GSC_SITE_URL=https://www.yourdomain.com/
GA4_PROPERTY_ID=123456789

# ── Site Branding ──────────────────────────────────────────
APP_NAME="Marketing & SEO Intelligence Dashboard"
BRAND_NAME="Your Brand"
SITE_DOMAIN=yourdomain.com
COMPARE_PATH_PREFIX=/compare-vs

# ── App URL & Port ─────────────────────────────────────────
APP_BASE_URL=http://localhost:3001
PORT=3001`;

  const TROUBLESHOOTING_ITEMS = [
    {
      error: "redirect_uri_mismatch",
      title: "Redirect URI Mismatch in Google Cloud",
      cause:
        "The redirect URI in Google Cloud Console does not match your .env.local configuration.",
      fix: "Make sure 'http://localhost:3001/api/auth/callback' is added under Authorized redirect URIs in your Google Cloud OAuth Client ID settings.",
    },
    {
      error: "403: Access Denied",
      title: "User Not Authorized (Test User Missing)",
      cause:
        "App is in 'Testing' mode and your Google account was not added as an authorized test user.",
      fix: "Go to Google Cloud Console > APIs & Services > OAuth consent screen (or Audience) > Test users > Click '+ Add Users' and add your exact email address.",
    },
    {
      error: "GSC 403 Forbidden",
      title: "Search Console Property Access Error",
      cause:
        "Your Google account lacks permissions for the Search Console property or the URL format is incorrect.",
      fix: "Ensure your email has Owner or Full permissions in Search Console. If you have a Domain property, set GSC_SITE_URL=sc-domain:yourdomain.com.",
    },
    {
      error: "GA4 403 Forbidden",
      title: "Google Analytics 4 Permissions Error",
      cause:
        "Your Google account is not granted Viewer role in Google Analytics 4 or the Property ID is wrong.",
      fix: "Go to GA4 > Admin > Property Access Management, and verify your email has 'Viewer' or 'Analyst' role. Double check GA4_PROPERTY_ID is purely numeric.",
    },
  ];

  const progressPercent = Math.round((activeStep / STEPS.length) * 100);

  return (
    <div className="space-y-8">
      {/* Main Interactive Stepper Container */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        {/* Top Progress Bar */}
        <div className="h-1.5 w-full bg-surface">
          <div
            className="h-full bg-lime transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Horizontal Step Tabs Bar (Horizontal swipe on mobile with invisible scrollbar, 6-col grid on desktop) */}
        <div
          ref={tabContainerRef}
          className="border-b border-border bg-surface/60 p-2 sm:p-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex sm:grid sm:grid-cols-6 gap-1.5 sm:gap-2 min-w-max sm:min-w-0 w-full">
            {STEPS.map((step) => {
              const isActive = activeStep === step.id;
              const isDone = activeStep > step.id;

              return (
                <button
                  key={step.id}
                  ref={(el) => {
                    tabRefs.current[step.id - 1] = el;
                  }}
                  onClick={() => setActiveStep(step.id)}
                  className={`shrink-0 sm:shrink flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl py-2 px-3 sm:px-1.5 text-xs font-bold transition cursor-pointer text-center whitespace-nowrap ${
                    isActive
                      ? "bg-lime text-ink shadow-sm"
                      : isDone
                        ? "bg-card text-ink border border-border/80 hover:bg-surface-2"
                        : "bg-transparent text-muted-foreground hover:text-ink hover:bg-surface"
                  }`}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                      isActive
                        ? "bg-ink text-lime"
                        : isDone
                          ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-400"
                          : "bg-surface border border-border text-muted-foreground"
                    }`}
                  >
                    {isDone ? "✓" : step.id}
                  </span>
                  <span className="text-[11px] sm:text-xs">{step.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Content Area */}
        <div className="p-5 sm:p-8">
          {/* STEP 1: Enable APIs */}
          {activeStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Step 1 of 6
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Create Google Cloud Project &amp; Enable APIs
                  </h3>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  ⏱️ 1 min
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  1. Open the{" "}
                  <a
                    href="https://console.cloud.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 font-bold underline inline-flex items-center gap-1"
                  >
                    Google Cloud Console <ExternalLink className="h-3 w-3" />
                  </a>
                  .
                </p>
                <p>
                  2. Select or create your project (e.g.{" "}
                  <code className="text-ink font-mono font-semibold">my-seo-dashboard</code>) &rarr;
                  Go to <strong>APIs &amp; Services &gt; Library</strong>.
                </p>
                <p>
                  3. In the search bar, search for{" "}
                  <strong>&ldquo;google analytics api&rdquo;</strong> and{" "}
                  <strong>&ldquo;google search console api&rdquo;</strong>, then click{" "}
                  <strong>Enable</strong>:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-border bg-surface p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink font-bold block">Google Analytics Data API</strong>
                    <p className="text-muted-foreground text-[11px] mt-0.5">
                      Accesses live GA4 traffic, user sessions, active visitors &amp; conversions.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-3.5 flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink font-bold block">Google Search Console API</strong>
                    <p className="text-muted-foreground text-[11px] mt-0.5">
                      Provides access to search queries, clicks, impressions &amp; average rank
                      positions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Real Screenshot */}
              <ImageSlot
                imageSrc="/images/seo/01-enable-apis.png"
                title="Google Cloud Console: Searching & Enabling Google Analytics Data API in API Library"
              />
            </div>
          )}

          {/* STEP 2: OAuth & Test Users */}
          {activeStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Step 2 of 6
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Configure OAuth Consent Screen &amp; Add Test Users
                  </h3>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  ⏱️ 1 min
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  1. In Google Cloud / Google Auth Platform, navigate to{" "}
                  <strong>Branding / Overview &gt; Create branding</strong>.
                </p>
                <p>
                  2. Enter <strong>App name</strong> (e.g.{" "}
                  <code className="text-ink font-mono font-semibold">
                    Marketing &amp; SEO Dashboard
                  </code>
                  ) and select your <strong>User support email</strong>.
                </p>
                <p>
                  3. Under <strong>Audience &gt; Test users</strong>{" "}
                  <span className="text-rose-600 dark:text-rose-400 font-bold">
                    (Crucial Step!)
                  </span>
                  : Click <strong>+ Add users</strong> and add the Google email that owns your
                  Search Console &amp; GA4 accounts.
                </p>
              </div>

              {/* Stacked Full-Width Screenshots */}
              <div className="space-y-4">
                <ImageSlot
                  imageSrc="/images/seo/02-oauth-app-information.png"
                  title="Part A: App Information & User Support Email Configuration"
                />

                <ImageSlot
                  imageSrc="/images/seo/02-oauth-test-users.png"
                  title="Part B: Audience & Test Users (+ Add Users)"
                />
              </div>
            </div>
          )}

          {/* STEP 3: OAuth Credentials */}
          {activeStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Step 3 of 6
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Create OAuth 2.0 Credentials (URIs &amp; Callbacks)
                  </h3>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  ⏱️ 1 min
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Go to <strong>Clients &gt; Create client &gt; Web application</strong> and add the
                exact origins and redirect URIs:
              </p>

              <div className="space-y-3">
                <div className="rounded-2xl border border-border bg-surface p-3.5 text-xs">
                  <span className="font-bold text-ink block mb-1.5">
                    Authorised JavaScript origins:
                  </span>
                  <div className="flex items-center justify-between gap-2 bg-card p-2.5 rounded-xl border border-border font-mono text-xs text-ink font-semibold">
                    <span>http://localhost:3001</span>
                    <button
                      onClick={() => copyToClipboard("http://localhost:3001", "origin")}
                      className="text-[11px] font-bold text-lime-900 hover:text-ink cursor-pointer"
                    >
                      {copiedKey === "origin" ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-3.5 text-xs">
                  <span className="font-bold text-ink block mb-1.5">
                    Authorised redirect URIs (Exact match):
                  </span>
                  <div className="flex items-center justify-between gap-2 bg-card p-2.5 rounded-xl border border-border font-mono text-xs text-ink font-semibold">
                    <span className="break-all">http://localhost:3001/api/auth/callback</span>
                    <button
                      onClick={() =>
                        copyToClipboard("http://localhost:3001/api/auth/callback", "redirect")
                      }
                      className="text-[11px] font-bold text-lime-900 hover:text-ink cursor-pointer shrink-0"
                    >
                      {copiedKey === "redirect" ? "✓ Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Real Screenshot */}
              <ImageSlot
                imageSrc="/images/seo/03-oauth-credentials.png"
                title="Create OAuth Client ID: Authorised Origins & Redirect URIs"
              />
            </div>
          )}

          {/* STEP 4: Property IDs */}
          {activeStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Step 4 of 6
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Find GSC Site URL &amp; GA4 Property ID
                  </h3>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  ⏱️ 1 min
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2 font-bold text-ink mb-1.5">
                    <Search className="h-4 w-4 text-amber-500" />
                    <span>A. Google Search Console</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Open Search Console and select your site property from the top-left dropdown:
                  </p>
                  <ul className="mt-2 space-y-1 text-muted-foreground text-[11px]">
                    <li>
                      • URL-prefix format: <code>https://www.yourdomain.com/</code>
                    </li>
                    <li>
                      • Domain format: <code>sc-domain:yourdomain.com</code>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-4">
                  <div className="flex items-center gap-2 font-bold text-ink mb-1.5">
                    <BarChart3 className="h-4 w-4 text-purple-500" />
                    <span>B. Google Analytics 4 (GA4)</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Open Google Analytics &rarr; Click <strong>Admin (Gear icon)</strong> &rarr;{" "}
                    <strong>Property Settings &gt; Property details</strong>.
                  </p>
                  <p className="mt-2 text-muted-foreground text-[11px]">
                    Copy the numeric <strong>Property ID</strong> (e.g. <code>123456789</code>).
                  </p>
                </div>
              </div>

              {/* Screenshots */}
              <div className="space-y-4">
                <ImageSlot
                  imageSrc="/images/seo/04-gsc-property-url.png"
                  title="A. Google Search Console: Selecting Your Site Property URL from the Dropdown"
                />

                <ImageSlot
                  imageSrc="/images/seo/04-ga4-property-id.png"
                  title="B. Google Analytics 4: Selecting Your GA4 Property from the Dropdown"
                />
              </div>
            </div>
          )}

          {/* STEP 5: .env Config */}
          {activeStep === 5 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Step 5 of 6
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Configure .env.local File
                  </h3>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  ⏱️ 30 sec
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                In your{" "}
                <code className="text-ink font-mono font-semibold">analysis-dashboard/</code>{" "}
                directory, open or create{" "}
                <code className="text-ink font-mono font-semibold">.env.local</code> and paste your
                credentials:
              </p>

              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60">
                  <span className="font-mono text-xs font-bold text-ink">
                    analysis-dashboard/.env.local
                  </span>
                  <button
                    onClick={() => copyToClipboard(ENV_CONFIG_SAMPLE, "env")}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-card border border-border px-2.5 py-1 text-xs font-semibold text-ink hover:bg-surface-2 transition cursor-pointer"
                  >
                    {copiedKey === "env" ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy .env Template</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <pre className="font-mono text-[11px] sm:text-xs text-ink leading-relaxed whitespace-pre">
                    {ENV_CONFIG_SAMPLE}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Connect & Launch */}
          {activeStep === 6 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Step 6 of 6
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Start Dashboard &amp; Click &ldquo;Connect Google Account&rdquo;
                  </h3>
                </div>
                <span className="self-start sm:self-auto rounded-full bg-surface border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
                  ⏱️ 30 sec
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>1. Run the development server in your terminal:</p>
                <div className="rounded-xl border border-border bg-surface p-3 font-mono text-xs text-ink flex items-center justify-between">
                  <code>npm run dev</code>
                  <button
                    onClick={() => copyToClipboard("npm run dev", "npm")}
                    className="text-[11px] font-bold text-lime-900 hover:text-ink cursor-pointer"
                  >
                    {copiedKey === "npm" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <p>
                  2. Open <strong className="text-ink font-mono">http://localhost:3001</strong> in
                  your browser.
                </p>
                <p>
                  3. Click the{" "}
                  <strong className="text-ink">&ldquo;Connect Google Account&rdquo;</strong> button
                  and sign in with your authorized test user email.
                </p>
                <p>
                  4. Accept the read-only permissions and click <strong>Continue</strong>. Your live
                  GSC &amp; GA4 data will populate instantly!
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex items-center gap-3 text-xs text-emerald-800 dark:text-emerald-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  <strong>Setup Complete!</strong> Once authorized, tokens and snapshots are cached
                  locally so your dashboard loads instantly on every subsequent visit without
                  re-logging in.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Step Navigation Bar */}
        <div className="flex items-center justify-between gap-3 border-t border-border bg-surface/60 p-4 sm:p-5">
          <button
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
            className={`inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-semibold transition ${
              activeStep === 1
                ? "opacity-35 cursor-not-allowed bg-transparent text-muted-foreground border-border/50"
                : "bg-surface text-ink hover:bg-surface-2 cursor-pointer shadow-sm active:scale-95"
            }`}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Previous Step</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-muted-foreground hidden sm:inline">
              Step {activeStep} of {STEPS.length}
            </span>
            <div className="flex items-center gap-1.5">
              {STEPS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(s.id)}
                  aria-label={`Go to step ${s.id}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeStep === s.id
                      ? "w-6 bg-lime"
                      : activeStep > s.id
                        ? "w-2 bg-emerald-500"
                        : "w-2 bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {activeStep < 6 ? (
            <button
              onClick={() => setActiveStep(Math.min(6, activeStep + 1))}
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-bold text-ink hover:scale-105 active:scale-95 transition cursor-pointer shadow-sm"
            >
              <span>Next Step</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          ) : (
            <a
              href="http://localhost:3001"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-2.5 text-xs font-bold text-ink hover:scale-105 active:scale-95 transition cursor-pointer shadow-sm"
            >
              <span>Open Dashboard</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* 3. Troubleshooting Matrix (Compact Collapsible) */}
      <div className="rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-soft">
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 font-bold">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                Common Errors &amp; Quick Fixes
              </h3>
              <p className="text-xs text-muted-foreground">
                Verified solutions for authentication, test user access, and API permission issues
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {TROUBLESHOOTING_ITEMS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition ${
                  isOpen
                    ? "border-amber-500/40 bg-surface shadow-sm"
                    : "border-border bg-surface/60 hover:bg-surface hover:border-border/80"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-[11px] font-bold text-rose-600 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-lg shrink-0">
                      {item.error}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-ink truncate">
                      {item.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[11px] font-medium text-muted-foreground hidden sm:inline">
                      {isOpen ? "Hide solution" : "View fix"}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-4 w-4 text-ink" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs space-y-2.5 border-t border-border/60 animate-in fade-in duration-200">
                    <div className="text-muted-foreground leading-relaxed pt-1">
                      <strong className="text-ink font-semibold">Root Cause:</strong> {item.cause}
                    </div>
                    <div className="text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl leading-relaxed">
                      <strong className="text-ink font-bold block mb-0.5">Recommended Fix:</strong>
                      {item.fix}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
