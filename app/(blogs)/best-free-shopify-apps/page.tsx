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
  ArrowRight,
} from "lucide-react";

const SITE = "https://aimbrill.com";
const CANONICAL = "/best-free-shopify-apps";
const PUBLISHED_ISO = "2026-09-14";
const PUBLISHED_DISPLAY = "September 14, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const ARTICLE_TITLE = "10 Free Shopify Apps Every Brand Should Try in 2026";
const ARTICLE_LEAD =
  "Not sure which free Shopify apps are worth installing? Here are 10 that actually solve problems, with honest limits on what's really free.";

export const metadata: Metadata = {
  title: "10 Free Shopify Apps Every Brand Should Try in 2026 | Aimbrill",
  description:
    "Not sure which free Shopify apps are worth installing? Here are 10 that actually solve problems, with honest limits on what's really free.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "free Shopify apps 2026",
    "best Shopify apps for ecommerce",
    "freemium Shopify apps",
    "Shopify app store recommendations",
    "Shopify upsell app free",
    "Shopify review app",
    "Shopify email marketing",
    "Shopify store automation",
    "WeUpsell Shopify",
    "ReComAI chatbot",
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
    title: ARTICLE_TITLE,
    description: ARTICLE_LEAD,
    url: `${SITE}${CANONICAL}`,
    type: "article",
    publishedTime: PUBLISHED_ISO,
    authors: ["Aimbrill Team"],
    siteName: "Aimbrill",
    images: [
      {
        url: "/images/shopify/blogs/main%20image/shopify-apps.png",
        width: 1200,
        height: 675,
        alt: ARTICLE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: ARTICLE_LEAD,
    images: ["/images/shopify/blogs/main%20image/shopify-apps.png"],
  },
};

const faqs = [
  {
    id: "do-i-need-all-apps",
    question: "Do You Really Need All 10 Apps?",
    answer: `No. Installing an app simply because it is free does not automatically make your store better. Instead, build your stack around your store's current operational phase:

• Phase 1 (Brand New Store Essentials):
  - Collect verified customer feedback with Judge.me
  - Build an owned email list and welcome flows with Klaviyo
  - Get products indexed on Google Shopping with Google & YouTube
  - Automate image alt tags and rich snippets with Smart SEO

• Phase 2 (Growth & Scaling Optimization):
  - Increase cart sizes and AOV with WeUpsell
  - Automate repetitive backend tagging with Shopify Flow
  - Assist pre-purchase shoppers with ReComAI AI Chatbot
  - Retain repeat customers with Smile.io
  - Capture out-of-stock demand with Back in Stock by AMP`,
  },
  {
    id: "free-vs-freemium",
    question: "A Word on “Free”: What is the difference between Free and Free to install?",
    answer: `There is an important distinction in the Shopify App Store between 100% Free and Free to Install.

• Free Plan Models: Provide ongoing, zero-cost access up to a certain usage threshold (e.g. Klaviyo up to 250 contacts, Smile up to 200 orders/month, ReComAI within monthly conversation allowances).
• Free to Install Models: Free to connect (e.g. Google & YouTube, Meta Commerce), but advertising budgets or optional advanced functionality are billed separately.

Always verify current pricing tiers and plan thresholds on each app's Shopify listing before deploying to production.`,
  },
  {
    id: "apps-slow-down-store",
    question: "Can Shopify Apps Slow Down Your Store?",
    answer: `Yes. Third-party apps that load JavaScript widgets, tracking scripts, or stylesheets on your storefront can impact page speed and Core Web Vitals (FCP, LCP).

Best practices to keep your Shopify store blazing fast:
• Audit quarterly: Uninstall apps that you are not actively using.
• Use Theme App Extensions: Modern Shopify apps integrate via app embeds that can be cleanly toggled on/off without polluting your theme.liquid.
• Check native features first: Before installing an app, see if your Shopify theme already provides the functionality natively.`,
  },
  {
    id: "are-apps-free-forever",
    question: "Are These Shopify Apps Free Forever?",
    answer: `Not necessarily. Some apps offer permanent free tiers, while others are free to install with usage limits or paid tiers that become relevant as your store grows. Those limits can also change over time. Before installing an app, check its current Shopify App Store listing for plan thresholds and pricing.`,
  },
  {
    id: "which-app-to-start-first",
    question: "Which app should a brand-new Shopify store install first?",
    answer: `Start with Judge.me for customer reviews and trust, Klaviyo for email list capture and automated welcome flows, and Google & YouTube to make your catalog discoverable on Google Shopping.`,
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: ARTICLE_LEAD,
  author: { "@type": "Organization", name: "Aimbrill Team", url: SITE },
  publisher: {
    "@type": "Organization",
    name: "Aimbrill",
    logo: { "@type": "ImageObject", url: `${SITE}/images/aimbrill-logo.png` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${CANONICAL}` },
  image: `${SITE}/images/shopify/blogs/main%20image/shopify-apps.png`,
};

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
  { id: "quick-overview", label: "Quick Overview" },
  {
    id: "the-10-apps",
    label: "Top 10 Shopify Apps",
    children: [
      { id: "app-1-judgeme", label: "1. Judge.me (Reviews)" },
      { id: "app-2-klaviyo", label: "2. Klaviyo (Email & SMS)" },
      { id: "app-3-google-youtube", label: "3. Google & YouTube" },
      { id: "app-4-shopify-flow", label: "4. Shopify Flow (Automation)" },
      { id: "app-5-weupsell", label: "5. WeUpsell (AOV & Upselling)" },
      { id: "app-6-smart-seo", label: "6. Smart SEO AI Optimizer" },
      { id: "app-7-recomai", label: "7. ReComAI (AI Shopping Assistant)" },
      { id: "app-8-smile", label: "8. Smile (Loyalty & Rewards)" },
      { id: "app-9-meta-social", label: "9. Facebook & Instagram" },
      { id: "app-10-back-in-stock", label: "10. Back in Stock by AMP" },
    ],
  },
  { id: "final-thoughts", label: "Final Thoughts" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function FreeShopifyApps2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen bg-background pb-8 text-foreground md:pb-12">
        <GuidePageShell
          category="Shopify Apps"
          secondaryTag="App Stack · Ecommerce Growth"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          readingMinutes={9}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Need help choosing and configuring the right app stack for your Shopify store?",
            href: CALENDLY_URL,
            label: "Book a Strategy Call →",
            external: true,
          }}
        >
          <p>
            So, you&apos;ve chosen your theme, added your products, and launched your Shopify store.
            Congratulations — but getting the store live is only the beginning.
          </p>

          <p>
            The Shopify App Store has thousands of apps, and almost every one promises to help you
            increase sales, improve conversions, or save time. With so many options, it can be
            difficult to figure out which ones are actually worth installing.
          </p>

          <p className="text-base font-semibold text-ink sm:text-lg">
            The good news? You don&apos;t need dozens of apps.
          </p>

          <p>
            You need the <strong>right apps for the problems your store actually has</strong> —
            whether that&apos;s building customer trust, bringing shoppers back, improving
            visibility, increasing order value, automating repetitive tasks, or helping customers
            find the right products.
          </p>

          <p>
            We&apos;ve looked at the Shopify App Store and selected 10 free or freemium apps that
            can be useful for new and growing ecommerce brands. Each one serves a different purpose,
            so you can decide which ones make sense for your store.
          </p>

          {/* Important Callout */}
          <div className="not-prose my-6 rounded-2xl border border-lime-500/40 bg-lime-500/10 p-5 dark:border-lime-500/30 dark:bg-lime-950/20">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm leading-relaxed text-ink">
                <strong className="font-bold">Important note:</strong> You don&apos;t need to
                install all 10. A one-product store may have little use for an upsell app, while a
                store that rarely runs out of stock may not need a restock-alert app. Start with the
                tools that solve your current problems and add others as your store grows.
              </div>
            </div>
          </div>

          <h2 id="quick-overview">Quick Overview</h2>

          {/* Quick Overview Table */}
          <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="border-b border-border bg-surface text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3.5 sm:px-6">#</th>
                  <th className="px-4 py-3.5 sm:px-6">App</th>
                  <th className="px-4 py-3.5 sm:px-6">What It&apos;s For</th>
                  <th className="px-4 py-3.5 sm:px-6">Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">1</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/judgeme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Judge.me
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    Reviews & social proof
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Generous Free Plan
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">2</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/klaviyo-email-marketing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Klaviyo
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    Email & customer retention
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free up to 250 contacts
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">3</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/google"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Google & YouTube
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    Product discovery & Google Shopping
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free to install
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">4</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/flow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Shopify Flow
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">Store automation</td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    100% Free (Built-in)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">5</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/ai-upsell-cross-sell-by-weupsell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500 font-bold"
                    >
                      WeUpsell
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    Upselling & increasing AOV
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free plan available
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">6</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/smart-seo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Smart SEO AI & Image Optimizer
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">SEO optimization</td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free plan available
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">7</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/recomai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      ReComAI
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    AI-powered shopping assistance
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free plan with limits
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">8</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/smile-io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Smile
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    Loyalty & repeat purchases
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free up to 200 monthly orders
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">9</td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Facebook & Instagram
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">Social commerce</td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free to install
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono font-bold text-muted-foreground sm:px-6">
                    10
                  </td>
                  <td className="px-4 py-3 font-semibold text-ink sm:px-6">
                    <a
                      href="https://apps.shopify.com/back-in-stock"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-600 dark:hover:text-lime-400 underline decoration-border hover:decoration-lime-500"
                    >
                      Back in Stock by AMP
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground sm:px-6">
                    Restock alerts & lost-sale recovery
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-lime-700 dark:text-lime-400 sm:px-6">
                    Free trial & tiered plans
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Now, let&apos;s look at what each app does and why it can be useful for an ecommerce
            brand.
          </p>

          <h2 id="the-10-apps">Deep Dive: The 10 Essential Shopify Apps</h2>

          {/* App 1: Judge.me */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  1
                </span>
                <h3
                  id="app-1-judgeme"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Judge.me — Reviews & Social Proof
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                Social Proof
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <h4 className="font-display text-base font-bold text-ink">Why it matters</h4>
              <p>
                Imagine visiting a store you&apos;ve never heard of. You like a product, but
                you&apos;re not sure whether the quality is good or whether other customers have had
                a positive experience.
              </p>
              <p>That&apos;s where product reviews help.</p>
              <p>
                <strong>Judge.me</strong> lets Shopify merchants collect and display customer
                reviews, star ratings, photos, and videos directly on their storefront. It can also
                automatically send review requests after an order is fulfilled, making it seamless
                to gather feedback without manually reaching out to every customer.
              </p>
              <p>
                For newer brands, this is essential because verified customer reviews provide
                authentic social proof and help potential shoppers feel confident completing their
                first purchase. Judge.me offers an exceptionally generous free plan with features
                that make it accessible to smaller stores.
              </p>

              {/* Judge.me App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/judgeme-shopify-app.png"
                    alt="Judge.me Product Reviews Shopify App on Shopify App Store"
                    width={1024}
                    height={512}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Judge.me on the Shopify App Store — 5.0 rating with 46,000+ reviews and 2025 Build
                  Award winner.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Almost any product-based ecommerce
                store that wants to build trust and increase conversion rates with new customers.
              </div>
              <a
                href="https://apps.shopify.com/judgeme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 2: Klaviyo */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  2
                </span>
                <h3
                  id="app-2-klaviyo"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Klaviyo — Email & Customer Retention
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Mail className="h-3.5 w-3.5 text-blue-500" />
                Retention & SMS
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                A customer visits your store, browses around, and leaves without buying. Without a
                way to reconnect with that visitor, the opportunity may be lost forever.
              </p>
              <p>
                Email and SMS marketing give brands an owned channel to stay connected.{" "}
                <strong>Klaviyo</strong> deeply integrates with Shopify customer and order data,
                allowing merchants to create automated lifecycle flows triggered by actual customer
                behavior.
              </p>

              <div className="rounded-2xl border border-border/80 bg-surface/50 p-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                  Key Automated Flows Every Store Needs:
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-ink font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Welcome flows:</strong> Introduce new subscribers to your brand story
                      and offer a first-purchase incentive.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Abandoned cart flows:</strong> Remind shoppers about products left in
                      their cart before they forget.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Post-purchase flows:</strong> Provide care tips, shipping updates, and
                      re-order prompts.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Win-back campaigns:</strong> Re-engage inactive customers who
                      haven&apos;t bought in 60–90 days.
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                Klaviyo also includes built-in signup forms and popups, enabling brands to build
                their subscriber list without installing a separate popup tool. Its free plan
                supports up to 250 contacts and 500 monthly email sends.
              </p>

              {/* Klaviyo App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/klaviyo-shopify-app.png"
                    alt="Klaviyo Email Marketing and SMS app on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Klaviyo on the Shopify App Store — fast integration, free email tier, and advanced
                  flow triggers.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Brands that want to build an owned
                audience and increase repeat purchases through data-driven email and SMS.
              </div>
              <a
                href="https://apps.shopify.com/klaviyo-email-marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 3: Google & YouTube */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  3
                </span>
                <h3
                  id="app-3-google-youtube"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Google & YouTube — Product Discovery & Google Shopping
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Search className="h-3.5 w-3.5 text-red-500" />
                Discovery
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>Your store isn&apos;t the only place where customers discover products.</p>
              <p>
                Many shoppers begin their search directly on Google, while YouTube heavily
                influences product research and buying decisions.
              </p>
              <p>
                The official <strong>Google & YouTube</strong> app, developed by Google, syncs your
                Shopify product catalog directly with Google Merchant Center. Eligible products can
                then appear across Google&apos;s free shopping surfaces, search results, and YouTube
                product tagging placements.
              </p>
              <p>
                The app also creates the foundation for running Performance Max and Google Shopping
                campaigns later. Getting products approved requires meeting Google&apos;s guidelines
                regarding shipping clarity, return policies, and unique product identifiers
                (GTIN/MPN).
              </p>

              {/* Google & YouTube App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/google-youtube-app.png"
                    alt="Google and YouTube app on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Google & YouTube on the Shopify App Store — free product sync with Google Merchant
                  Center and YouTube shopping tags.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Brands that want their products
                discoverable on Google Shopping and want to build a foundation for paid ad
                campaigns.
              </div>
              <a
                href="https://apps.shopify.com/google"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 4: Shopify Flow */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  4
                </span>
                <h3
                  id="app-4-shopify-flow"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Shopify Flow — Store Automation
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Zap className="h-3.5 w-3.5 text-yellow-500" />
                Automation
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                As an ecommerce store grows, repetitive administrative tasks start consuming hours
                of valuable time every week. You might need to tag high-value VIP customers, receive
                Slack alerts when stock runs low, or flag potentially fraudulent orders.
              </p>
              <p>
                <strong>Shopify Flow</strong> is a visual automation engine built directly by
                Shopify. It uses simple logic:
              </p>

              <div className="rounded-2xl border border-border/80 bg-surface/50 p-4 font-mono text-xs sm:text-sm text-ink space-y-1">
                <div>
                  <span className="font-bold text-lime-700 dark:text-lime-400">WHEN:</span> An order
                  is placed
                </div>
                <div>
                  <span className="font-bold text-lime-700 dark:text-lime-400">IF:</span> Order
                  total &gt; $200
                </div>
                <div>
                  <span className="font-bold text-lime-700 dark:text-lime-400">THEN:</span> Tag
                  customer as &ldquo;VIP&rdquo; and notify the support team
                </div>
              </div>

              <p>
                You can build these automations without writing a single line of code. The biggest
                advantage is simple: configure an automation once, and it runs reliably in the
                background 24/7.
              </p>

              {/* Shopify Flow App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/shopify-flow-app.png"
                    alt="Shopify Flow store automation app on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Shopify Flow on the Shopify App Store — 100% free workflow automation engine built
                  by Shopify.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Growing stores spending increasing
                time on repetitive order management and customer tagging.
              </div>
              <a
                href="https://apps.shopify.com/flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 5: WeUpsell */}
          <div className="not-prose my-8 rounded-3xl border border-lime-500/40 bg-card p-6 sm:p-8 shadow-xs ring-1 ring-lime-500/20">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime text-ink font-extrabold text-sm">
                  5
                </span>
                <h3
                  id="app-5-weupsell"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  WeUpsell — Upselling & Increasing Average Order Value (AOV)
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-3 py-1 text-xs font-bold text-lime-800 dark:text-lime-300 border border-lime-500/30">
                <TrendingUp className="h-3.5 w-3.5" />
                Featured AOV Tool
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Acquiring a new customer in 2026 is expensive. Once a customer is ready to buy,
                presenting relevant, high-converting opportunities to add complementary items to
                their cart directly increases the value of that transaction without increasing ad
                spend.
              </p>
              <p>
                <a
                  href="https://www.weupsell.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  WeUpsell
                </a>{" "}
                is engineered to help Shopify merchants build seamless upsell and cross-sell funnels
                across the entire buying journey:
              </p>

              <div className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm text-ink font-medium">
                <div className="flex items-center gap-2 rounded-xl bg-surface/70 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0" />
                  <span>AI Product Recommendations</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface/70 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0" />
                  <span>Frequently Bought Together Bundles</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface/70 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0" />
                  <span>Product Page & Cart Drawer Offers</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface/70 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0" />
                  <span>One-Click Checkout & Post-Purchase Upsells</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface/70 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0" />
                  <span>Thank-You Page & Tracking Offers</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface/70 p-2.5">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0" />
                  <span>In-Depth Conversion Analytics</span>
                </div>
              </div>

              <p>
                By personalizing add-on recommendations at the moment of highest purchase intent,
                stores can unlock 10% to 30% higher order values from their existing traffic.
              </p>

              {/* WeUpsell App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-lime-500/30 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/weupsell-shopify-app.png"
                    alt="WeUpsell AI Upsell & Cart on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  WeUpsell on the Shopify App Store — AI-driven product recommendations, smart cart
                  offers, and post-purchase upsells.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-lime-500/30 bg-lime-500/10 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Multi-product stores and
                fast-growing D2C brands looking to maximize revenue per visitor.
              </div>
              <a
                href="https://apps.shopify.com/ai-upsell-cross-sell-by-weupsell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Install WeUpsell on Shopify
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 6: Smart SEO */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  6
                </span>
                <h3
                  id="app-6-smart-seo"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Smart SEO AI & Image Optimizer — SEO Optimization
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Sparkles className="h-3.5 w-3.5 text-purple-500" />
                SEO Automation
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Search engine optimization is vital for organic ecommerce growth, but managing meta
                tags, image alt text, structured data (JSON-LD), and broken redirects manually
                becomes overwhelming as your SKU count grows.
              </p>
              <p>
                <strong>Smart SEO AI & Image Optimizer</strong> automates repetitive technical SEO
                tasks:
              </p>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                  <span>Automatic meta title and meta description generation with templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                  <span>Bulk image alt-tag optimization and image compression</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                  <span>Rich snippet structured data (Product, Review, Breadcrumbs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 shrink-0 mt-0.5" />
                  <span>Broken link detection and 404 auto-redirects</span>
                </li>
              </ul>
              <p>
                The app is less about replacing core SEO fundamentals and more about{" "}
                <strong>making continuous SEO maintenance effortless at scale</strong>.
              </p>

              {/* Smart SEO App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/smart-seo-app.png"
                    alt="Smart SEO AI and Image Optimizer on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Smart SEO on the Shopify App Store — 5.0 rating for automated meta tags, image
                  compression & structured schema.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Stores with medium-to-large product
                catalogs that want automated on-page SEO without tedious manual data entry.
              </div>
              <a
                href="https://apps.shopify.com/smart-seo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 7: ReComAI */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  7
                </span>
                <h3
                  id="app-7-recomai"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  ReComAI — AI-Powered Shopping Assistance
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Bot className="h-3.5 w-3.5 text-emerald-500" />
                AI Assistant
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Shoppers often hesitate right before purchasing:{" "}
                <em>&ldquo;Which shade is right for me?&rdquo;</em>,{" "}
                <em>&ldquo;Does this run true to size?&rdquo;</em>, or{" "}
                <em>&ldquo;When will my package arrive?&rdquo;</em>
              </p>
              <p>
                If those questions aren&apos;t resolved instantly, visitors leave before completing
                checkout.
              </p>
              <p>
                <strong>ReComAI</strong> provides an intelligent AI shopping concierge that answers
                customer inquiries in real time, recommends matching products based on
                conversational preferences, and provides instant order tracking.
              </p>
              <p>
                Beyond standard on-site chat, it connects across channels like WhatsApp, Instagram
                DM, and Messenger, helping stores turn casual inquiries into confirmed orders.
              </p>

              {/* ReComAI App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/recomai-shopify-app.png"
                    alt="ReComAI AI Chatbot on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  ReComAI on the Shopify App Store — 5-in-1 intelligent AI agent replacing multiple
                  separate apps.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Stores receiving repetitive buyer
                questions or those selling products that require guided decision making.
              </div>
              <a
                href="https://apps.shopify.com/recomai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 8: Smile */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  8
                </span>
                <h3
                  id="app-8-smile"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Smile — Loyalty & Repeat Purchases
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <HeartHandshake className="h-3.5 w-3.5 text-pink-500" />
                Loyalty & Rewards
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                Winning a first-time customer is only part of ecommerce success. For brands with
                repeat-purchase potential (beauty, supplements, apparel, food), turning single
                buyers into loyal repeat advocates is where true profitability lies.
              </p>
              <p>
                <strong>Smile.io</strong> enables merchants to launch branded points programs, VIP
                tiers, and referral reward systems in minutes.
              </p>
              <p>
                Shoppers earn points for purchases, account creations, social follows, and
                birthdays, which they redeem for discount vouchers or exclusive perks. This gives
                buyers a tangible incentive to return to your store rather than switching to
                competitors.
              </p>

              {/* Smile App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/smile-shopify-app.png"
                    alt="Smile Loyalty Program Rewards on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Smile.io on the Shopify App Store — 2026 Build Award winner for customer loyalty
                  and rewards.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Consumable or lifestyle brands with
                high customer lifetime value (LTV) looking to drive organic referrals.
              </div>
              <a
                href="https://apps.shopify.com/smile-io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 9: Facebook & Instagram */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  9
                </span>
                <h3
                  id="app-9-meta-social"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Facebook & Instagram — Social Commerce
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Share2 className="h-3.5 w-3.5 text-blue-600" />
                Meta Commerce
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                For consumer brands, social media isn&apos;t just for posting reels — it is where
                modern product discovery happens.
              </p>
              <p>
                The official <strong>Facebook & Instagram</strong> app by Meta links your Shopify
                catalog with Meta Commerce Manager. It lets you tag products in Instagram posts and
                stories, create a storefront on Instagram/Facebook, and sync real-time pixel data
                for Meta Ads attribution.
              </p>
              <p>
                This ensures accurate event tracking (ViewContent, AddToCart, Purchase) so your Meta
                ad campaigns optimize effectively.
              </p>

              {/* Meta Facebook & Instagram App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/meta-facebook-instagram-app.png"
                    alt="Facebook and Instagram channel on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Facebook & Instagram on the Shopify App Store — free channel connection and Meta
                  pixel sync.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Any brand running Meta Ads or
                actively growing an engaged community on Instagram.
              </div>
              <a
                href="https://apps.shopify.com/facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* App 10: Back in Stock */}
          <div className="not-prose my-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  10
                </span>
                <h3
                  id="app-10-back-in-stock"
                  className="font-display text-xl font-bold text-ink sm:text-2xl"
                >
                  Back in Stock by AMP — Restock Alerts
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground border border-border">
                <Bell className="h-3.5 w-3.5 text-amber-500" />
                Lost-Sale Recovery
              </span>
            </div>

            <div className="mt-5 space-y-3.5 text-sm text-muted-foreground leading-relaxed">
              <p>
                A sold-out product shouldn&apos;t mean a lost customer. When a shopper finds a
                product they love only to see &ldquo;Sold Out&rdquo;, having no notification
                mechanism means they will simply buy from a competitor.
              </p>
              <p>
                <strong>Back in Stock by AMP</strong> replaces the disabled &ldquo;Sold Out&rdquo;
                button with a clean &ldquo;Notify Me When Available&rdquo; form. Customers enter
                their email or phone number, and when inventory is updated in Shopify, automated
                restock alerts are dispatched instantly.
              </p>
              <p>
                It also provides valuable demand forecasting, showing you exactly how many customers
                are waiting for each out-of-stock variant.
              </p>

              {/* Back in Stock App Store Screenshot */}
              <figure className="mt-5 overflow-hidden rounded-2xl border border-border/80 bg-surface/50">
                <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                  <Image
                    src="/images/shopify/blogs/best-free-shopify-apps/back-in-stock-app.png"
                    alt="Notify Me Back in Stock Alert on Shopify App Store"
                    width={1024}
                    height={450}
                    sizes="(max-width: 768px) 100vw, 760px"
                    quality={95}
                    loading="lazy"
                    className="h-auto w-full rounded-xl object-contain shadow-xs"
                  />
                </div>
                <figcaption className="border-t border-border/60 bg-surface/70 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                  Notify Me! Back in Stock Alert on the Shopify App Store — 4.9 rating for automated
                  restock alerts and pre-orders.
                </figcaption>
              </figure>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/80 bg-surface/80 p-4 text-xs">
              <div>
                <strong className="text-ink">Good for:</strong> Stores with limited batch drops,
                high-demand variants, or seasonal inventory fluctuations.
              </div>
              <a
                href="https://apps.shopify.com/back-in-stock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-ink underline decoration-lime-500 hover:text-lime-600 dark:hover:text-lime-400"
              >
                View on Shopify App Store
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>
            The Shopify App Store has thousands of tools, but successful stores aren&apos;t built on
            app volume — they are built on <strong>strategic app selection</strong>.
          </p>
          <p>
            Start with the foundations: build trust with social proof, capture customer emails,
            ensure search visibility, and automate administrative tasks. As your traffic grows,
            layer in high-impact upselling, conversational AI, and retention rewards.
          </p>
          <p className="text-base font-semibold text-ink sm:text-lg">
            The goal is simple: have the right apps doing the right jobs for your brand.
          </p>

          {/* Related Guide Feature Callout */}
          <div className="not-prose my-8 rounded-2xl border border-border/80 bg-surface p-5 sm:p-6 transition hover:border-lime-500/50">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-500/10 px-2.5 py-0.5 text-xs font-semibold text-lime-800 dark:text-lime-300 mb-2">
                  Next Step · Marketing &amp; Retention
                </span>
                <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                  10 Shopify Marketing Apps to Grow Your Store in 2026
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground max-w-xl">
                  Ready to go beyond free essentials with targeted traffic, advanced retargeting,
                  and SMS automation? Explore our breakdown of 10 marketing apps grouped by traffic,
                  conversion, and retention.
                </p>
              </div>
              <Link
                href="/shopify-marketing-apps-2026"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-background hover:bg-lime hover:text-ink transition-colors"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Calendly Banner */}
          <div className="not-prose my-10 rounded-3xl border border-border bg-gradient-to-br from-surface via-card to-surface p-6 sm:p-8 text-center">
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              Ready to Optimize Your Shopify Store & App Stack?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm text-muted-foreground">
              Aimbrill helps D2C brands audit their app stack, streamline site performance, and
              implement automated AI upselling and conversion funnels.
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
                <span>Explore More Guides</span>
              </Link>
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <GuideFaqAccordion>
            {faqs.map((faq) => (
              <GuideFaqItem key={faq.id} value={faq.id} question={faq.question}>
                <div className="space-y-2 whitespace-pre-line text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </GuideFaqItem>
            ))}
          </GuideFaqAccordion>
        </GuidePageShell>
      </main>

      <Footer />
    </>
  );
}
