import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GuidePageShell, type GuideTocItem } from "@/components/content/GuidePageShell";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { Footer } from "@/components/site/Footer";
import {
  Star,
  Mail,
  Search,
  Zap,
  TrendingUp,
  Sparkles,
  Bot,
  HeartHandshake,
  Share2,
  Bell,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  Layers,
  ShoppingBag,
  Target,
  Users,
  Repeat,
  DollarSign,
  ArrowRight,
  Info,
} from "lucide-react";

const SITE = "https://aimbrill.com";
const CANONICAL = "/shopify-marketing-apps-2026";
const PUBLISHED_ISO = "2026-09-22";
const PUBLISHED_DISPLAY = "September 22, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const ARTICLE_TITLE = "10 Shopify Marketing Apps to Help Grow Your Store in 2026";
const ARTICLE_LEAD =
  "Looking for the best Shopify marketing apps in 2026? The right apps can help you attract more visitors, convert more shoppers, recover lost sales, and bring existing customers back.";

export const metadata: Metadata = {
  title: "10 Shopify Marketing Apps to Grow Your Store in 2026 | Aimbrill",
  description:
    "Discover 10 Shopify marketing apps for 2026. Compare pricing, use cases, and tools for traffic, conversion, retention, email, SEO, reviews, and loyalty.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "shopify marketing apps 2026",
    "best Shopify marketing apps",
    "Shopify apps for marketing",
    "Shopify email marketing apps",
    "Shopify SEO apps",
    "Shopify retargeting apps",
    "Shopify conversion apps",
    "Shopify review apps",
    "Shopify SMS marketing apps",
    "Shopify loyalty apps",
    "Shopify customer retention apps",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "10 Shopify Marketing Apps to Grow Your Store in 2026",
    description:
      "Discover 10 Shopify marketing apps for 2026. Compare pricing, use cases, and tools for traffic, conversion, retention, email, SEO, reviews, and loyalty.",
    url: `${SITE}${CANONICAL}`,
    type: "article",
    publishedTime: PUBLISHED_ISO,
    authors: ["Aimbrill Team"],
    siteName: "Aimbrill",
    images: [
      {
        url: `${SITE}/images/shopify/blogs/main%20image/shopify-marketing-apps.png`,
        width: 1200,
        height: 675,
        alt: "Shopify marketing apps for traffic, conversion and customer retention",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 Shopify Marketing Apps to Grow Your Store in 2026",
    description:
      "Compare 10 Shopify marketing apps for SEO, retargeting, reviews, email, SMS, push notifications, and loyalty in 2026.",
    images: [`${SITE}/images/shopify/blogs/main%20image/shopify-marketing-apps.png`],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: ARTICLE_LEAD,
  author: {
    "@type": "Organization",
    name: "Aimbrill Team",
    url: SITE,
  },
  publisher: {
    "@type": "Organization",
    name: "Aimbrill",
    logo: { "@type": "ImageObject", url: `${SITE}/images/aimbrill-logo.png` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE}${CANONICAL}`,
  },
  image: `${SITE}/images/shopify/blogs/main%20image/shopify-marketing-apps.png`,
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Shopify Apps",
      item: `${SITE}/blog`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "10 Shopify Marketing Apps to Grow Your Store in 2026",
      item: `${SITE}${CANONICAL}`,
    },
  ],
};

const faqs = [
  {
    id: "do-i-need-all-10-apps",
    question: "Do I need to install all 10 marketing apps?",
    answer:
      "No, you definitely don't need to install everything on this list. Start with the bottleneck your store is actively facing: if you need visitors, focus on SEO and ads; if visitors aren't buying, optimize product pages, reviews, and popups; if you have customers but low repeat purchases, focus on automated email, SMS, loyalty, and push notifications. Installing too many apps at once causes feature overlap and dilutes focus.",
  },
  {
    id: "can-i-start-for-free",
    question: "Can I build an effective marketing stack on Shopify for $0/month?",
    answer:
      "Yes! Smaller stores can combine Judge.me (Forever Free tier for unlimited reviews), Omnisend (Free tier for up to 250 contacts & 500 emails/month), Yotpo Loyalty (Free for under 100 monthly orders), and Brevo PushOwl (Basic Bundle for 500 push notifications/month). This gives you reviews, email capture, loyalty rewards, and push notifications without paying recurring software fees.",
  },
  {
    id: "klaviyo-vs-omnisend",
    question: "When should I choose Klaviyo over Omnisend?",
    answer:
      "Choose Klaviyo if you need sophisticated behavioral segmentation, predictive analytics, custom RFM segments, and multi-channel journeys across Email, SMS, and WhatsApp. Choose Omnisend if you want a clean, straightforward ecommerce email/SMS platform with quick setup templates and a higher sending cap on the free plan.",
  },
  {
    id: "are-marketing-app-pricings-guaranteed",
    question: "Are the app pricing tiers listed here permanent?",
    answer:
      "Pricing was verified directly from each app's official Shopify App Store listing as of September 22, 2026. Developers adjust tiers, order thresholds, and included usage quotas from time to time, so always check the live App Store listing before installing.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const TOC: GuideTocItem[] = [
  { id: "growth-framework", label: "Shopify Growth Framework" },
  {
    id: "pillar-1-attract",
    label: "Pillar 1: Attract & Retarget",
    children: [
      { id: "app-1-plug-in-seo", label: "1. Plug in SEO" },
      { id: "app-2-adroll", label: "2. AdRoll" },
    ],
  },
  {
    id: "pillar-2-convert",
    label: "Pillar 2: Convert Visitors",
    children: [
      { id: "app-3-privy", label: "3. Privy" },
      { id: "app-4-judgeme", label: "4. Judge.me" },
      { id: "app-5-loox", label: "5. Loox" },
      { id: "app-6-shogun", label: "6. Shogun" },
    ],
  },
  {
    id: "pillar-3-retention",
    label: "Pillar 3: Customer Retention",
    children: [
      { id: "app-7-klaviyo", label: "7. Klaviyo" },
      { id: "app-8-omnisend", label: "8. Omnisend" },
      { id: "app-9-yotpo", label: "9. Yotpo Loyalty" },
      { id: "app-10-brevo-pushowl", label: "10. Brevo PushOwl" },
    ],
  },
  { id: "comparison-email-stack", label: "Klaviyo vs Omnisend vs PushOwl" },
  { id: "decision-guide", label: "Which App to Choose?" },
  { id: "putting-it-together", label: "Recommended Stack" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "related-guides", label: "Related Guides" },
];

export default function ShopifyMarketingApps2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-background pb-8 text-foreground md:pb-12">
        <GuidePageShell
          category="Shopify Apps"
          secondaryTag="App Stack · Marketing Growth 2026"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          readingMinutes={11}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Need help selecting and fine-tuning the right marketing stack for your Shopify store?",
            href: CALENDLY_URL,
            label: "Book a Strategy Call →",
            external: true,
          }}
        >
          <p>
            Below, we&apos;ve grouped 10 Shopify marketing apps by the job they actually help with —
            from SEO and retargeting to reviews, email, SMS, push notifications, and loyalty — along
            with verified pricing for each.
          </p>

          {/* Section: What Every Shopify Brand Is Actually Trying to Do */}
          <h2 id="growth-framework" className="!mt-6 sm:!mt-7 !mb-3 sm:!mb-3.5">
            What Every Shopify Brand Is Actually Trying to Do
          </h2>

          <p>
            No matter how different two Shopify stores look — one selling candles and another
            selling car parts — they&apos;re usually trying to achieve the same three things.
            Shopify itself frames growth this way:{" "}
            <strong>traffic &rarr; conversion &rarr; retention</strong>.
          </p>

          <p>Think of it like running a shop on a busy street.</p>

          {/* 3 Step Interactive Cards - Horizontal One by One */}
          <div className="not-prose my-6 space-y-4">
            {/* Step 1 */}
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs transition-all hover:border-border hover:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-400 font-bold text-base shrink-0 shadow-xs">
                  1
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                    1. Get people to walk in (Traffic)
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    People need to know your shop exists before anything else matters. This is Meta
                    Ads, Google Ads, SEO, influencers, social media — anything that pulls a stranger
                    toward your storefront.
                  </p>
                  <div className="mt-3 rounded-xl bg-surface/80 p-3 sm:p-3.5 text-xs text-muted-foreground border border-border/60">
                    <strong className="text-ink font-semibold">Example:</strong> You run a Facebook
                    ad for a new skincare serum. 500 people click through to your store. That&apos;s
                    traffic. Without it, even the best store in the world makes zero sales, because
                    nobody&apos;s walked in yet.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs transition-all hover:border-border hover:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-500/15 text-lime-700 dark:text-lime-400 font-bold text-base shrink-0 shadow-xs">
                  2
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                    2. Get the people inside to buy something (Conversion)
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Out of those 500 visitors, maybe only 10 buy. Maybe the product page didn&apos;t
                    answer their questions, there were no reviews to build trust, or the checkout
                    felt clunky.
                  </p>
                  <div className="mt-3 rounded-xl bg-surface/80 p-3 sm:p-3.5 text-xs text-muted-foreground border border-border/60">
                    <strong className="text-ink font-semibold">For example:</strong> Imagine you add
                    customer photos and a &ldquo;4.8 stars, 2,000 reviews&rdquo; badge to the
                    product page. If that helps build trust with visitors, you might see 18 out of
                    500 buy instead of 10 — same traffic, more sales, purely because trust went up.
                    The exact numbers will vary store to store, but the principle holds: small trust
                    signals can move conversion meaningfully.
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs transition-all hover:border-border hover:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-600 dark:text-purple-400 font-bold text-base shrink-0 shadow-xs">
                  3
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                    3. Get them to buy from you again (Retention)
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    This is the part most new store owners forget. Getting an existing customer to
                    buy again can be much cheaper than acquiring a new one, especially once you
                    already have their permission to email or text them.
                  </p>
                  <div className="mt-3 rounded-xl bg-surface/80 p-3 sm:p-3.5 text-xs text-muted-foreground border border-border/60">
                    <strong className="text-ink font-semibold">Example:</strong> Someone buys your
                    serum. Two months later, an automatic email reminds them it&apos;s about to run
                    out, with a small reorder discount. They buy again without needing another paid
                    acquisition campaign.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goal vs Wants vs Tools Table */}
          <div className="not-prose my-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-surface/40 backdrop-blur-xs shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-surface/90">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Growth Goal
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      What the Brand Wants
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Example Channels & Tools
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0 shadow-xs">
                          <Target className="h-4 w-4" />
                        </span>
                        <span className="font-display font-bold text-ink">Get Found (Traffic)</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs sm:text-sm text-muted-foreground align-middle">
                      Attention and visits from qualified new prospects
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Meta & Google Ads
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          SEO
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Influencers
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Social Media
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-500/15 text-lime-700 dark:text-lime-400 shrink-0 shadow-xs">
                          <TrendingUp className="h-4 w-4" />
                        </span>
                        <span className="font-display font-bold text-ink">Convert Visitors</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs sm:text-sm text-muted-foreground align-middle">
                      Turn browsing visitors into paying buyers
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          High-converting Pages
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Verified Reviews
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Exit Popups
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Checkout CRO
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shrink-0 shadow-xs">
                          <Repeat className="h-4 w-4" />
                        </span>
                        <span className="font-display font-bold text-ink">
                          Keep Customers Returning
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-xs sm:text-sm text-muted-foreground align-middle">
                      Increase repeat purchases without paying for new ads
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-wrap gap-1.5">
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Automated Email
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          WhatsApp & SMS
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Loyalty & VIP Tiers
                        </span>
                        <span className="inline-flex items-center rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-ink border border-border/70">
                          Push Alerts
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p>
            The ten apps below follow that exact order, with verified pricing pulled directly from
            each app&apos;s current Shopify App Store listing.
          </p>

          {/* PILLAR 1: ATTRACT & RE-ENGAGE */}
          <h2 id="pillar-1-attract">ATTRACT & RE-ENGAGE — SEO & Retargeting</h2>
          <p>
            Before you can convert visitors, you need steady traffic. Organic search visibility and
            retargeting campaigns ensure both fresh discovery and high-intent re-engagement.
          </p>

          {/* App 1: Plug in SEO */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-600 dark:text-blue-400 font-extrabold text-sm">
                  1
                </span>
                <div>
                  <h3
                    id="app-1-plug-in-seo"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/plug-in-seo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Plug in SEO
                    </a>{" "}
                    — Search Visibility
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.6 ★ (675+ reviews) · Built for Shopify
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-border">
                <Search className="h-3.5 w-3.5" />
                Technical & AI SEO
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Scans your store for technical SEO issues — missing meta tags, broken schema markup,
                and 404 broken links — and pairs that with AI keyword research and AI-assisted
                product titles and descriptions (you approve every single change before it goes
                live). It also embeds structured JSON-LD schema markup so your catalog can get cited
                in emerging AI search assistants (Perplexity, ChatGPT Search) as well as ranking
                conventionally on Google.
              </p>

              {/* Plug in SEO App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/plugin-seo-shopify-app.png"
                    alt="Plug in SEO Shopify app listing on Shopify App Store"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Plug in SEO: Automated technical health audits, structured data, and keyword
                  optimizations.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Lite: $29.99/month</strong> — scan up to 200 pages,
                    AI keyword research for 20 pages, 2 monthly SEO audits
                  </li>
                  <li>
                    <strong className="text-ink">Standard: $49.99/month</strong> — scan up to 2,000
                    pages, 5 monthly audits, plus a free 30-minute consultation call with an SEO
                    expert
                  </li>
                  <li>
                    <strong className="text-ink">Premium: $79.99/month</strong> — unlimited pages,
                    10 monthly audits, priority live chat and dedicated email support
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> There is no permanent
                  free plan, only a limited free trial. Budget for this as a paid operating tool
                  from day one.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Stores with growing catalogs needing
                technical hygiene and rich snippets without manual code tinkering.
              </div>
              <a
                href="https://apps.shopify.com/plug-in-seo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Plug in SEO on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 2: AdRoll */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-600 dark:text-blue-400 font-extrabold text-sm">
                  2
                </span>
                <div>
                  <h3
                    id="app-2-adroll"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/adroll-marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      AdRoll
                    </a>{" "}
                    — Retargeting Ads
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.3 ★ (320+ reviews) · AdRoll Official
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-border">
                <Target className="h-3.5 w-3.5" />
                Cross-Channel Remarketing
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Keeps showing your products to shoppers who have already visited your store,
                orchestrating display ads, native placements, social video, and CTV commercials
                across channels like Facebook, Instagram, TikTok, and the Google Display Network. It
                features AI-powered automated bidding and centralized multi-touch ROAS attribution
                reporting.
              </p>
              <p>
                Unlike SEO, which is engineered to attract fresh organic prospects, AdRoll
                capitalizes on an audience you have already earned. It is pure high-intent
                re-engagement rather than cold discovery.
              </p>

              {/* AdRoll App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/adroll-shopify-app.png"
                    alt="AdRoll Marketing and Advertising app listing on Shopify App Store"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  AdRoll: Retargeting abandoned visitors across 500+ ad networks and social
                  channels.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Structure:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Free to install:</strong> No recurring monthly
                    software app subscription fee.
                  </li>
                  <li>
                    <strong className="text-ink">Ad spend billed separately:</strong> Minimum media
                    spend budget of $5/day required to run active retargeting campaigns.
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-xs text-blue-950 dark:text-blue-300 flex items-start gap-2.5">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> AdRoll only delivers
                  return once you already have consistent daily storefront sessions. If you have
                  under 1,000 monthly visitors, prioritize organic discovery and top-of-funnel
                  campaigns first.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Stores with warm traffic looking to
                reclaim abandoned carts across social and the wider web.
              </div>
              <a
                href="https://apps.shopify.com/adroll-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View AdRoll on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* PILLAR 2: CONVERT MORE VISITORS */}
          <h2 id="pillar-2-convert">CONVERT MORE VISITORS — Reviews, Popups & Landing Pages</h2>
          <p>
            Once visitors arrive on your site, driving conversions depends on clarity, trust, and
            persuasive offer presentation. These tools capture leads, build social proof, and craft
            compelling visual layouts.
          </p>

          {/* App 3: Privy */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  3
                </span>
                <div>
                  <h3
                    id="app-3-privy"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/privy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Privy
                    </a>{" "}
                    — Popups & List Building
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.5 ★ (4,200+ reviews) · Privy Operations
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-lime-700 dark:text-lime-400 border border-border">
                <Sparkles className="h-3.5 w-3.5" />
                List Growth & CRO
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Builds high-converting exit-intent popups, spin-to-win discount wheels, flyout
                signup bars, and cart-saver prompts to capture shopper emails and phone numbers
                before they bounce. It then automates follow-up welcome emails and abandoned cart
                recovery texts with an intuitive drag-and-drop editor tailored for merchants without
                technical coding skills.
              </p>

              {/* Privy App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/privy-shopify-app.png"
                    alt="Privy Email, SMS and Pop Ups Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Privy: Drag-and-drop popup builder, list building, and post-signup automations.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Pop Ups & Displays: $24/month</strong> — unlimited
                    popups and flyouts, up to 10,000 monthly pageviews
                  </li>
                  <li>
                    <strong className="text-ink">Email: $30/month</strong> — up to 1,500 email
                    contacts, automated campaigns and newsletter sending
                  </li>
                  <li>
                    <strong className="text-ink">Email and SMS: $45/month</strong> — up to 1,500
                    email contacts plus 1,250 SMS credits; optional dedicated strategist support
                    available at $150/month
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> Privy no longer provides
                  a freemium tier. Pricing begins at $24/month regardless of which module you
                  install.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Stores seeking a straightforward,
                non-technical tool dedicated to onsite lead capture and quick coupon popups.
              </div>
              <a
                href="https://apps.shopify.com/privy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Privy on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 4: Judge.me */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  4
                </span>
                <div>
                  <h3
                    id="app-4-judgeme"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/judgeme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Judge.me
                    </a>{" "}
                    — Reviews & Social Proof
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 5.0 ★ (47,000+ reviews) · 2025 Build Award Winner
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-lime-700 dark:text-lime-400 border border-border">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                Verified Social Proof
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Automatically requests and collects unlimited product reviews — including buyer
                photos and videos — triggered immediately after fulfillment or parcel delivery. It
                showcases verified reviews via customizable on-page widgets, carousel banners, and
                floating tabs, synchronizes star ratings to Google Rich Snippets and Meta Shopping,
                and lets you import existing review history from Yotpo, Loox, Amazon, or Etsy with
                zero data loss.
              </p>

              {/* Judge.me App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/judgeme-shopify-app.png"
                    alt="Judge.me Product Reviews Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Judge.me: Over 47,000 five-star reviews on the Shopify App Store.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Forever Free: $0/month</strong> — unlimited review
                    collection, unlimited photo and video reviews, storefront review widgets, SEO
                    rich snippets, and Etsy/Amazon review import
                  </li>
                  <li>
                    <strong className="text-ink">Awesome: $15/month</strong> — unlocks AI
                    auto-replies, review summaries, 130+ tech integrations, coupon rewards, referral
                    widgets, and custom CSS styling (15-day free trial included)
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-lime-500/30 bg-lime-500/10 p-4 text-xs text-lime-900 dark:text-lime-300 flex items-start gap-2.5">
                <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> Judge.me&apos;s free
                  plan is genuinely one of the most generous offerings on the entire Shopify
                  ecosystem. Unlimited reviews at $0 makes it an undisputed no-brainer for every new
                  store.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Any ecommerce merchant wanting
                authentic trust badges and user-generated content without paying software fees.
              </div>
              <a
                href="https://apps.shopify.com/judgeme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Judge.me on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 5: Loox */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  5
                </span>
                <div>
                  <h3
                    id="app-5-loox"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/loox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Loox
                    </a>{" "}
                    — Visual Reviews & UGC
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.9 ★ (9,600+ reviews) · Built for Shopify
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-lime-700 dark:text-lime-400 border border-border">
                <Sparkles className="h-3.5 w-3.5" />
                Photo & Video UGC
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Focuses specifically on visual customer proof: high-resolution photo and video
                reviews collected seamlessly via post-purchase automated emails, package QR codes,
                or discount incentives. Loox renders gallery grids and side-by-side video reels with
                built-in AI models that automatically tag, sort, and spotlight the
                highest-converting customer testimonials across your store and social channels.
              </p>
              <p>
                While Judge.me excels at universal, high-volume review management, Loox is
                constructed from the ground up around high-aesthetic visual storytelling (ideal for
                apparel, beauty, home decor, and luxury goods).
              </p>

              {/* Loox App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/loox-shopify-app.png"
                    alt="Loox Product Reviews Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Loox: Curated visual review galleries and photo review incentives.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Beginner: Free</strong> — up to 500 orders total,
                    automated review requests, 17+ widget styles, Google rich snippets
                  </li>
                  <li>
                    <strong className="text-ink">Convert: $49.99/month</strong> — 300 orders
                    included in base price, then $50 per additional 300 orders, plus AI smart
                    sorting, full video reviews, and on-site referral widgets
                  </li>
                  <li>
                    <strong className="text-ink">Unlimited: $299.99/month</strong> — unlimited
                    orders and complete feature access with dedicated priority support
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> The free tier&apos;s
                  500-order limit is a lifetime cumulative total, not a monthly reset. If your brand
                  already does 200 orders a month, you will reach the paid threshold within 60 to 90
                  days.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Visual, lifestyle, and design-led
                brands where customers buy based on seeing real people using the product.
              </div>
              <a
                href="https://apps.shopify.com/loox"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Loox on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 6: Shogun */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  6
                </span>
                <div>
                  <h3
                    id="app-6-shogun"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/shogun"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Shogun
                    </a>{" "}
                    — Landing & Product Page Builder
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.7 ★ (3,200+ reviews) · Shogun Labs
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-lime-700 dark:text-lime-400 border border-border">
                <Layers className="h-3.5 w-3.5" />
                Drag-and-Drop Page Builder
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                A visual, drag-and-drop page editor for crafting custom high-converting product
                pages, collection templates, campaign landing pages, and content blogs without
                touching theme Liquid code. It offers reusable content blocks, customizable section
                templates, mobile-first responsive breakpoints, and native synchronization with
                modern Online Store 2.0 themes.
              </p>

              {/* Shogun App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/shogun-shopify-app.png"
                    alt="Shogun Landing Page Builder Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Shogun: Visual drag-and-drop page editor, 70+ high-converting templates, and theme
                  synchronization.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Draft Mode: Free</strong> — design, build, and
                    preview layout designs inside the editor, but cannot publish pages live to your
                    store domain
                  </li>
                  <li>
                    <strong className="text-ink">Build: $39/month</strong> — 25 live published
                    pages, advanced drag-and-drop visual builder, page analytics
                  </li>
                  <li>
                    <strong className="text-ink">Grow: $199/month</strong> — unlimited published
                    pages, global media management, content scheduling
                  </li>
                  <li>
                    <strong className="text-ink">Advanced: $499/month</strong> — multi-store content
                    synchronization, custom CMS collections, custom JavaScript and Liquid code
                    blocks (10-day free trial on all paid tiers)
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> The free tier is
                  essentially a sandboxed drafting canvas. You must be prepared to invest in at
                  least the $39/month Build plan to publish pages live to visitors.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Brands running targeted ad campaigns
                requiring dedicated, hyper-optimized landing pages that out-convert standard theme
                templates.
              </div>
              <a
                href="https://apps.shopify.com/shogun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Shogun on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* PILLAR 3: KEEP CUSTOMERS COMING BACK */}
          <h2 id="pillar-3-retention">KEEP CUSTOMERS COMING BACK — Email, SMS, Push & Loyalty</h2>
          <p>
            Customer lifetime value (LTV) separates profitable Shopify stores from those that bleed
            ad budget. These apps establish owned communication loops that re-engage previous buyers
            repeatedly.
          </p>

          {/* App 7: Klaviyo */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-400 font-extrabold text-sm">
                  7
                </span>
                <div>
                  <h3
                    id="app-7-klaviyo"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/klaviyo-email-marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Klaviyo
                    </a>{" "}
                    — Email, SMS & WhatsApp Marketing
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.0 ★ (1,800+ reviews) · Klaviyo Inc.
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 border border-border">
                <Mail className="h-3.5 w-3.5" />
                Advanced Lifecycle Automation
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Synchronizes granular real-time Shopify customer telemetry — pages viewed, carts
                updated, checkout stages reached, order cadence — into AI-assisted automated
                journeys across Email, SMS, WhatsApp, and mobile push. It provides guided onboarding
                flows inside the Shopify admin (welcome series, abandoned cart sequences, win-back
                flows, and VIP reorders) ready to deploy with minimal setup.
              </p>

              {/* Klaviyo App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/klaviyo-shopify-app.png"
                    alt="Klaviyo Email Marketing and SMS Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Klaviyo: Behavioral event triggers, real-time Shopify sync, and omnichannel
                  automated flows.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Free: $0/month</strong> — free forever for up to
                    250 active contacts, with up to 150 monthly SMS/MMS credits
                  </li>
                  <li>
                    <strong className="text-ink">Email: $20/month</strong> — covers 251–500
                    contacts, scaling smoothly as your subscriber database expands
                  </li>
                  <li>
                    <strong className="text-ink">SMS: $15/month</strong> — up to 1,250 SMS/MMS
                    message credits with telecommunication carrier fees included
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 text-xs text-purple-900 dark:text-purple-300 flex items-start gap-2.5">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> Klaviyo bills SMS and
                  Email as modular plans. You can run email alone, SMS alone, or activate both
                  simultaneously as your growth objectives dictate.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Serious DTC brands requiring
                advanced customer segmentation, predictive LTV analytics, and multi-channel drip
                journeys.
              </div>
              <a
                href="https://apps.shopify.com/klaviyo-email-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Klaviyo on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 8: Omnisend */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-400 font-extrabold text-sm">
                  8
                </span>
                <div>
                  <h3
                    id="app-8-omnisend"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/omnisend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Omnisend
                    </a>{" "}
                    — Email & SMS Marketing
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.8 ★ (5,600+ reviews) · Omnisend
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 border border-border">
                <Zap className="h-3.5 w-3.5" />
                Ecommerce Omnichannel
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Combines email marketing, SMS, and web push notifications inside a unified,
                merchant-friendly platform. It includes pre-built email templates, popup forms,
                gamified wheel signups, AI-generated product recommendations, and one-click
                automation presets for abandoned checkout, welcome offers, browse abandonment, and
                post-purchase repeat order nudges.
              </p>

              {/* Omnisend App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/omnisend-shopify-app.png"
                    alt="Omnisend Email Marketing and SMS Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Omnisend: Easy-to-use email and SMS automation with pre-built ecommerce campaigns.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Free: $0/month</strong> — reach up to 250 contacts
                    (unlimited list storage allowed); monthly sending capped at 500 emails and 500
                    web push notifications
                  </li>
                  <li>
                    <strong className="text-ink">Standard: $16/month</strong> — covers up to 500
                    contacts, 6,000 emails/month, unlimited web push alerts (with 30% discount on
                    first 3 months)
                  </li>
                  <li>
                    <strong className="text-ink">Pro: $59/month</strong> — covers up to 2,500
                    contacts, unlimited email sending, advanced analytics, and global SMS from
                    $0.007/message
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-lime-500/30 bg-lime-500/10 p-4 text-xs text-lime-900 dark:text-lime-300 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> Even on Omnisend&apos;s
                  free plan, your total contact database size is never strictly capped — only your
                  monthly email delivery volume is. This makes it exceptionally friendly for
                  bootstrapping merchants.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Ecommerce merchants wanting quick,
                highly effective automated campaigns without Klaviyo&apos;s steeper learning curve.
              </div>
              <a
                href="https://apps.shopify.com/omnisend"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Omnisend on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 9: Yotpo Loyalty */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-400 font-extrabold text-sm">
                  9
                </span>
                <div>
                  <h3
                    id="app-9-yotpo"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/swell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Yotpo Loyalty & Rewards
                    </a>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 4.7 ★ (2,500+ reviews) · Yotpo Official
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 border border-border">
                <HeartHandshake className="h-3.5 w-3.5" />
                VIP Tiers & Referrals
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Empowers you to construct a completely customized, no-code loyalty rewards and
                referral program. Shoppers earn redeemable points for completing orders, following
                brand social media channels, leaving product reviews, and celebrating birthdays.
                Merchants can deploy tiered VIP clubs with exclusive perks, in-cart point
                redemptions, and granular reporting connecting points burned to repeat customer
                revenue.
              </p>

              {/* Yotpo Loyalty App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/yotpo-shopify-app.png"
                    alt="Yotpo Loyalty and Rewards Program Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Yotpo: Loyalty rewards points, VIP member tiers, and customizable customer
                  referral programs.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Free to install:</strong> Available for stores with
                    under 100 monthly orders; includes rewards sticky bar, point earnings, discounts
                    redemption, referral program, analytics, and AI support
                  </li>
                  <li>
                    <strong className="text-ink">Pro: $199/month:</strong> For stores from 500
                    orders/month (plus $0.08–$0.20 per order); adds dedicated rewards landing pages,
                    checkout redemption, webhooks, and integrations with Klaviyo and Recharge
                  </li>
                  <li>
                    <strong className="text-ink">Enterprise (&gt;5,000 orders/month):</strong>{" "}
                    Custom quote directly from Yotpo
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-900 dark:text-amber-300 flex items-start gap-2.5">
                <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> Notice the pricing
                  divide: the free tier is available up to 100 orders/month, whereas Pro starts at
                  500 orders/month ($199/mo). Mid-tier stores processing between 100 and 500 monthly
                  transactions should evaluate pricing directly with Yotpo.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Consumable, lifestyle, and
                subscription brands wanting to turn one-time shoppers into lifelong VIP advocates.
              </div>
              <a
                href="https://apps.shopify.com/swell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Yotpo Loyalty on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 10: Brevo PushOwl */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-400 font-extrabold text-sm">
                  10
                </span>
                <div>
                  <h3
                    id="app-10-brevo-pushowl"
                    className="font-display text-xl font-bold text-ink sm:text-2xl"
                  >
                    <a
                      href="https://apps.shopify.com/pushowl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 transition-colors"
                    >
                      Brevo PushOwl
                    </a>{" "}
                    — Email, Push & SMS
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Shopify App Store Rating: 5.0 ★ (2,800+ reviews) · Brevo
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 border border-border">
                <Bell className="h-3.5 w-3.5" />
                Web Push & Recovery
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">
                What it does end to end:
              </h4>
              <p>
                Blends web browser push notifications, email campaigns, and SMS messaging under one
                consolidated roof. Web push delivers prompt desktop and mobile browser messages
                without requiring shoppers to type an email address. PushOwl includes pre-configured
                automation sequences for abandoned checkout recovery, back-in-stock alerts, price
                drops, and welcome discount notifications.
              </p>
              <p>
                Now fully integrated into Brevo&apos;s global marketing ecosystem, PushOwl pairs
                reliable push deliverability with Brevo&apos;s established email and CRM
                infrastructure.
              </p>

              {/* Brevo PushOwl App Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/shopify-marketing-apps-2026/brevo-pushowl-shopify-app.png"
                    alt="Brevo PushOwl Email, Push, SMS Shopify App Store Listing"
                    width={1024}
                    height={380}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Brevo PushOwl: High-CTR web push notifications, back-in-stock alerts, and
                  automated recovery.
                </figcaption>
              </figure>

              <div className="mt-4 rounded-2xl bg-surface/80 p-4 border border-border/70 space-y-2">
                <h5 className="font-bold text-xs uppercase tracking-wider text-ink">
                  Verified Pricing Tiers:
                </h5>
                <ul className="text-xs space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-ink">Basic Bundle: Free</strong> — 500 web push
                    notifications/month, emails from 500/month, unlimited subscribers, newsletters
                    and pop-ups, back-in-stock reminders
                  </li>
                  <li>
                    <strong className="text-ink">Plus Bundle: $19/month</strong> — 10k–30k web push
                    notifications/month, emails from 1,000/month, adds custom pop-ups and abandoned
                    cart automation
                  </li>
                  <li>
                    <strong className="text-ink">Power Bundle: $79/month</strong> — unlimited web
                    push notifications, full email and SMS suite, flash sale campaigns, dedicated
                    account manager
                  </li>
                </ul>
              </div>

              {/* Worth Knowing Callout */}
              <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 text-xs text-purple-900 dark:text-purple-300 flex items-start gap-2.5">
                <Info className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold">Worth knowing:</strong> Web push notifications
                  do not rely on email inboxes or spam folders. For impulse flash sales and instant
                  back-in-stock alerts, push CTR often beats traditional email by 2x–3x.
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Best for:</strong> Stores seeking high-visibility
                browser notifications to cut through noisy inboxes and instantly alert buyers.
              </div>
              <a
                href="https://apps.shopify.com/pushowl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View Brevo PushOwl on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Comparison Section: Klaviyo vs Omnisend vs Brevo PushOwl */}
          <h2 id="comparison-email-stack">Klaviyo vs. Omnisend vs. Brevo PushOwl — Which One?</h2>
          <p>
            All three apps cover email, SMS, or push in some combination, so it&apos;s worth
            understanding what actually separates them:
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-surface/40 backdrop-blur-xs shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-surface/90">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Platform
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Core Superpower
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Best Suited For
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-700 dark:text-purple-400 font-bold text-xs shrink-0 shadow-xs">
                          <Mail className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-ink">Klaviyo</div>
                          <span className="text-[11px] text-muted-foreground font-normal">
                            Lifecycle Engine
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="text-sm font-semibold text-ink leading-snug">
                        Granular segmentation & predictive analytics
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Real-time Shopify event telemetry with multi-branch logic and WhatsApp
                        support.
                      </p>
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground leading-relaxed align-top">
                      Advanced personalization, predictive RFM segments, and multi-channel journeys
                      (email + SMS + WhatsApp).
                    </td>
                  </tr>

                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-500/15 text-lime-700 dark:text-lime-400 font-bold text-xs shrink-0 shadow-xs">
                          <Zap className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-ink">Omnisend</div>
                          <span className="text-[11px] text-muted-foreground font-normal">
                            Turnkey Automation
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="text-sm font-semibold text-ink leading-snug">
                        Fast setup & unlimited list size
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Pre-built ecommerce automation templates with generous free sending quotas.
                      </p>
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground leading-relaxed align-top">
                      Simpler, ecommerce-focused email/SMS automation with a strong free tier and
                      lower learning curve.
                    </td>
                  </tr>

                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-600/15 text-teal-700 dark:text-teal-400 font-bold text-xs shrink-0 shadow-xs">
                          <Bell className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-ink">Brevo PushOwl</div>
                          <span className="text-[11px] text-muted-foreground font-normal">
                            Web Push & Recovery
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top">
                      <div className="text-sm font-semibold text-ink leading-snug">
                        Instant browser notifications
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Bypasses email spam filters for instant cart reminders and restock alerts.
                      </p>
                    </td>
                    <td className="px-5 py-4 text-xs text-muted-foreground leading-relaxed align-top">
                      Stores that specifically want email + web push + SMS combined, with push
                      notifications as a core strength.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="font-semibold text-ink">
            You generally do not need all three — pick the one that matches the specific
            communication channels you actually want to run.
          </p>

          {/* Decision Matrix */}
          <h2 id="decision-guide">Which App Should You Actually Choose?</h2>
          <p>
            Instead of installing apps based on hype, anchor your selections to your store&apos;s
            current operational stage and bottleneck:
          </p>

          <div className="not-prose my-6 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
              <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-lime-600 dark:text-lime-400" />
                If you&apos;re just starting out and have a small customer base:
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Lean on the genuinely free plans — <strong>Judge.me</strong>,{" "}
                <strong>Omnisend</strong>, <strong>Yotpo</strong> (under 100 orders/month), and{" "}
                <strong>Brevo PushOwl&apos;s</strong> Basic Bundle cover reviews, email, loyalty,
                and push notifications without a monthly subscription fee. <em>Plug in SEO</em> and{" "}
                <em>Privy</em> cost money from day one, so hold off until you have some traffic to
                justify them.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
              <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                If you have steady traffic but low conversion:
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Deploy <strong>Judge.me</strong> or <strong>Loox</strong> for reviews,{" "}
                <strong>Privy</strong> for capturing emails before people bounce, and{" "}
                <strong>Shogun</strong> once you&apos;re ready to test custom product page layouts —
                budget for the $39/month Build plan, since Draft Mode alone cannot publish live
                pages.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
              <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                <Repeat className="h-5 w-5 text-purple-500" />
                If you sell repeat-purchase products (skincare, supplements, food, pet items):
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Implement <strong>Klaviyo</strong> or <strong>Omnisend</strong> for automated
                replenishment flows, and <strong>Yotpo</strong> once your order volume grows past
                the free tier and you want VIP tiers, points, and milestone rewards layered on top.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-xs">
              <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-500" />
                If you&apos;re running paid ads already:
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                <strong>AdRoll</strong> is free to install, but you&apos;ll need at least $5/day in
                ad media budget for it to do anything — factor that advertising budget into your
                financial calculations before adding it.
              </p>
            </div>
          </div>

          {/* Section: You Don't Need All 10 Apps */}
          <h2>You Don&apos;t Need All 10 Apps</h2>
          <p>
            You don&apos;t need to install everything on this list. Start with the problem your
            store is actually facing today.
          </p>
          <p>
            If you&apos;re struggling to get traffic, focus on SEO and advertising. If visitors
            aren&apos;t buying, work on reviews, product pages, and conversion tools. If you&apos;re
            getting sales but few repeat orders, focus on email, SMS, loyalty, and push. Adding
            every app at once usually just means paying for overlapping features and losing track of
            what&apos;s actually working.
          </p>

          {/* Section: Putting It Back Into the Framework */}
          <h2 id="putting-it-together">Putting It Back Into the Framework</h2>

          <div className="not-prose my-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-surface/40 backdrop-blur-xs shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border/80 bg-surface/90">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Growth Pillar
                    </th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Recommended Apps From This Guide
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 shrink-0 shadow-xs">
                          <Target className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-ink">
                            Get found / re-engage
                          </div>
                          <span className="text-[11px] text-muted-foreground font-normal">
                            Attract & Retarget
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="#app-1-plug-in-seo"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Search className="h-3 w-3 text-amber-500" />
                          Plug in SEO
                        </a>
                        <a
                          href="#app-2-adroll"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Target className="h-3 w-3 text-sky-500" />
                          AdRoll
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-500/15 text-lime-700 dark:text-lime-400 shrink-0 shadow-xs">
                          <TrendingUp className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-ink">
                            Convert more visitors
                          </div>
                          <span className="text-[11px] text-muted-foreground font-normal">
                            Social Proof & Pages
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="#app-3-privy"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Sparkles className="h-3 w-3 text-emerald-500" />
                          Privy
                        </a>
                        <a
                          href="#app-4-judgeme"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Star className="h-3 w-3 text-amber-500 fill-amber-500" />
                          Judge.me
                        </a>
                        <a
                          href="#app-5-loox"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <span className="font-bold text-[10px]">LX</span>
                          Loox
                        </a>
                        <a
                          href="#app-6-shogun"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Layers className="h-3 w-3 text-indigo-500" />
                          Shogun
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/60 transition-colors">
                    <td className="px-5 py-4 align-middle">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 shrink-0 shadow-xs">
                          <Repeat className="h-4 w-4" />
                        </span>
                        <div>
                          <div className="font-display font-bold text-ink">
                            Keep customers returning
                          </div>
                          <span className="text-[11px] text-muted-foreground font-normal">
                            Retention & Loyalty
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-middle">
                      <div className="flex flex-wrap gap-2">
                        <a
                          href="#app-7-klaviyo"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Mail className="h-3 w-3 text-purple-500" />
                          Klaviyo
                        </a>
                        <a
                          href="#app-8-omnisend"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Zap className="h-3 w-3 text-lime-500" />
                          Omnisend
                        </a>
                        <a
                          href="#app-9-yotpo"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <HeartHandshake className="h-3 w-3 text-blue-500" />
                          Yotpo Loyalty
                        </a>
                        <a
                          href="#app-10-brevo-pushowl"
                          className="inline-flex items-center gap-1.5 rounded-lg bg-surface px-3 py-1.5 text-xs font-semibold text-ink border border-border/80 hover:border-lime-500 hover:text-lime-600 dark:hover:text-lime-400 transition-colors shadow-xs"
                        >
                          <Bell className="h-3 w-3 text-teal-500" />
                          Brevo PushOwl
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Free Starting Stack Callout Box */}
          <div className="not-prose my-6 rounded-3xl border border-lime-500/40 bg-lime-500/10 p-6 dark:border-lime-500/30 dark:bg-lime-950/20">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="h-6 w-6 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  A 100% Free Starting Stack for Smaller Stores
                </h3>
                <p className="mt-2 text-sm text-ink leading-relaxed">
                  <strong>Judge.me</strong> + <strong>Omnisend&apos;s free tier</strong> +{" "}
                  <strong>Yotpo&apos;s free tier</strong> +{" "}
                  <strong>Brevo PushOwl&apos;s Basic Bundle</strong> can cover customer reviews,
                  email capture, loyalty rewards, and browser push notifications without a monthly
                  app subscription fee.
                </p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  Note: Some specific channels, like optional SMS message fees or ad spend on
                  third-party networks, can still carry usage-based costs even when the app itself
                  is free to install.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <h2 id="faq">Frequently Asked Questions</h2>
          <GuideFaqAccordion>
            {faqs.map((faq) => (
              <GuideFaqItem key={faq.id} value={faq.id} question={faq.question}>
                <p className="whitespace-pre-line text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </GuideFaqItem>
            ))}
          </GuideFaqAccordion>

          {/* Consultation / Audit Banner */}
          <div className="not-prose my-10 rounded-3xl border border-border bg-gradient-to-br from-surface via-card to-surface p-6 sm:p-8 text-center">
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Need Help Choosing &amp; Configuring Your Shopify Apps?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
              Aimbrill helps ambitious D2C brands audit app performance, eliminate bloated script
              tags, and architect high-converting acquisition and retention funnels.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-xs sm:text-sm font-bold text-ink shadow-soft transition hover:scale-105 active:scale-95"
              >
                <span>Book a Free Strategy Call</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs sm:text-sm font-semibold text-ink transition hover:bg-surface"
              >
                <span>Explore All Guides</span>
              </Link>
            </div>
          </div>

          {/* Related Guides Section */}
          <h2 id="related-guides">Related Guides &amp; Further Reading</h2>
          <p>
            Dive deeper into store optimization, conversion tactics, and e-commerce marketing
            automations with our practical Shopify guides:
          </p>

          <div className="not-prose my-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/best-free-shopify-apps"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500/60 hover:shadow-soft"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/10 px-2.5 py-0.5 text-xs font-semibold text-lime-800 dark:text-lime-300 mb-3">
                  <ShoppingBag className="h-3 w-3" />
                  Free App Stack
                </span>
                <h3 className="font-display text-base font-bold text-ink group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  10 Free Shopify Apps Every Brand Should Try in 2026
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Zero-cost tools across social proof reviews, automated SEO, email collection, and
                  AI upselling to bootstrap store growth.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-ink group-hover:text-lime-600 dark:group-hover:text-lime-400">
                <span>Read Guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/top-10-cro-techniques-for-shopify-brands"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500/60 hover:shadow-soft"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/10 px-2.5 py-0.5 text-xs font-semibold text-lime-800 dark:text-lime-300 mb-3">
                  <TrendingUp className="h-3 w-3" />
                  Conversion Optimization
                </span>
                <h3 className="font-display text-base font-bold text-ink group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  Top 10 CRO Techniques for Shopify Brands
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Actionable techniques to convert more traffic into buyers, from sticky add-to-cart
                  buttons to high-converting checkout UX.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-ink group-hover:text-lime-600 dark:group-hover:text-lime-400">
                <span>Read Guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/klaviyo-for-ecommerce"
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-lime-500/60 hover:shadow-soft"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/10 px-2.5 py-0.5 text-xs font-semibold text-lime-800 dark:text-lime-300 mb-3">
                  <Mail className="h-3 w-3" />
                  Email &amp; Retention
                </span>
                <h3 className="font-display text-base font-bold text-ink group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  Klaviyo for E-Commerce: Strategy &amp; Automations
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Step-by-step setup for revenue-generating email &amp; SMS flows, smart list
                  segmentation, and post-purchase retention.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-ink group-hover:text-lime-600 dark:group-hover:text-lime-400">
                <span>Read Guide</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </GuidePageShell>
      </main>

      <Footer />
    </>
  );
}
