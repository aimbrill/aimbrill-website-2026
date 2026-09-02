import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuidePageShell, type GuideTocItem } from "@/components/content/GuidePageShell";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { ChatGptSummaryCard } from "@/components/case-studies/ChatGptSummaryCard";
import { Footer } from "@/components/site/Footer";
import {
  TrendingUp,
  ShoppingBag,
  Eye,
  Percent,
  ArrowUpRight,
  CheckCircle2,
  Search,
  Zap,
  Repeat,
  Sparkles,
  ShieldCheck,
  BarChart2,
  Layers,
  ArrowRight,
} from "lucide-react";

const SITE = "https://aimbrill.com";
const CANONICAL = "/case-studies/festive-season-ecommerce-strategy-5x-revenue";
const PUBLISHED_ISO = "2026-09-02";
const MODIFIED_ISO = "2026-09-02";
const PUBLISHED_DISPLAY = "September 2, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const PAGE_URL = `${SITE}${CANONICAL}`;
const ARTICLE_TITLE = "Turning Festive Traffic Into ₹50 Lakh: The Rakhi By Diorin Story";
const ARTICLE_LEAD =
  "The store was ready. The traffic was coming in. But the sales weren't. So we stopped guessing, started listening to shoppers, and changed the store one step at a time.";

export const metadata: Metadata = {
  title: "Turning Festive Traffic Into ₹50 Lakh: The Rakhi By Diorin Story | Aimbrill",
  description:
    "The store was ready. The traffic was coming in. But the sales weren't. How Rakhi By Diorin scaled to ₹50 Lakh in festive sales in 3 weeks using a 3-cycle research loop.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "Shopify festive case study",
    "Rakhi By Diorin case study",
    "Shopify conversion optimization",
    "WeUpsell AI case study",
    "Microsoft Clarity e-commerce research",
    "Shopify ad testing loop",
    "festive e-commerce scaling",
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
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: MODIFIED_ISO,
    authors: ["Aimbrill"],
    siteName: "Aimbrill",
    images: [
      {
        url: "/images/case-studies/rakhi-by-diorin/diorin-rebrand-hero-laptop-mockup.jpg",
        width: 1024,
        height: 819,
        alt: ARTICLE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: ARTICLE_LEAD,
    images: ["/images/case-studies/rakhi-by-diorin/diorin-rebrand-hero-laptop-mockup.jpg"],
  },
};

const faqs = [
  {
    question: "What did the team notice early on with the Rakhi By Diorin store?",
    answer:
      "Products weren't converting into cart adds despite traffic arriving, and there was no clear data showing which products or which stage of the journey needed attention.",
  },
  {
    question: "How was this figured out?",
    answer:
      "Through a 3-day ad-driven research phase in each cycle, tracked with Microsoft Clarity and Google Analytics, to see exactly which products got added to cart and where visitors dropped off.",
  },
  {
    question: "How many times was this process repeated?",
    answer:
      "Three complete cycles — research, analyze, plan, relaunch, track — across the 3-week campaign window.",
  },
  {
    question: "What tools were used, and for what?",
    answer:
      "Microsoft Clarity and Google Analytics for behavioral analysis, WeUpsell for AI-driven upsell and cross-sell offers, Shiprocket to simplify checkout, and Judge.me for customer reviews.",
  },
  {
    question: "What was the outcome?",
    answer: "₹50 Lakh in overall revenue generated over a 3-week campaign window.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: ARTICLE_LEAD,
  author: {
    "@type": "Organization",
    name: "Aimbrill",
    url: SITE,
  },
  publisher: {
    "@type": "Organization",
    name: "Aimbrill",
    logo: { "@type": "ImageObject", url: `${SITE}/images/aimbrill-logo.png` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: MODIFIED_ISO,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
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
  { id: "about-the-brand", label: "About the Brand" },
  { id: "what-we-noticed", label: "What We Noticed" },
  {
    id: "the-research-process",
    label: "What We Did: The Research Process",
    children: [
      { id: "step-1", label: "Step 1: Look at the Whole Store" },
      { id: "step-2", label: "Step 2: 3-Day Ad Learning Sprint" },
      { id: "step-3", label: "Step 3: Track Clarity & GA Data" },
      { id: "step-4", label: "Step 4: Product & Pricing Plan" },
      { id: "step-5", label: "Step 5: Relaunch & Re-track" },
      { id: "step-6", label: "Step 6: Repeat the Whole Loop" },
      { id: "how-each-round-improved", label: "How Each Round Improved" },
    ],
  },
  { id: "tools-we-used", label: "Tools We Used" },
  { id: "the-results", label: "The Results" },
  { id: "takeaways", label: "Takeaways" },
  { id: "faq", label: "FAQ" },
];

function CaseStudyImage({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="not-prose my-6 sm:my-8 mx-auto w-full max-w-[480px] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="relative w-full overflow-hidden bg-surface/30">
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={1024}
          sizes="(max-width: 768px) 100vw, 480px"
          quality={90}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className="h-auto w-full object-contain"
        />
      </div>
      <figcaption className="border-t border-border/60 bg-surface/30 px-4 py-2.5 text-center text-xs font-medium text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function RakhiByDiorinCaseStudyPage() {
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
          category="Client Story"
          secondaryTag="Shopify · Growth Engineering · CRO"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          readingMinutes={9}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Want a research-driven launch and AI optimization process for your Shopify store?",
            href: CALENDLY_URL,
            label: "Book a Strategy Call →",
            external: true,
          }}
        >
          {/* Client Overview Table */}
          <div className="not-prose my-6 hidden overflow-hidden rounded-2xl border border-border bg-card sm:block">
            <div className="border-b border-border bg-surface px-5 py-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Campaign Overview
              </span>
            </div>
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody>
                <tr className="border-b border-border/50 px-5 py-3">
                  <td className="py-2.5 pl-5 pr-4 font-semibold text-muted-foreground">Client</td>
                  <td className="py-2.5 text-ink font-medium">Rakhi By Diorin</td>
                </tr>
                <tr className="border-b border-border/50 px-5 py-3">
                  <td className="py-2.5 pl-5 pr-4 font-semibold text-muted-foreground">Store</td>
                  <td className="py-2.5">
                    <a
                      href="https://rakhibydiorin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-lime-700 hover:underline dark:text-lime-400"
                    >
                      <span>rakhibydiorin.com</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/50 px-5 py-3">
                  <td className="py-2.5 pl-5 pr-4 font-semibold text-muted-foreground">Timeline</td>
                  <td className="py-2.5 text-ink">3 Weeks (Raksha Bandhan Campaign)</td>
                </tr>
                <tr className="border-b border-border/50 px-5 py-3">
                  <td className="py-2.5 pl-5 pr-4 font-semibold text-muted-foreground">Strategy</td>
                  <td className="py-2.5 text-ink">3-Cycle Behavioral Research & Rapid CRO</td>
                </tr>
                <tr className="px-5 py-3">
                  <td className="py-2.5 pl-5 pr-4 font-semibold text-muted-foreground">Revenue</td>
                  <td className="py-2.5 font-bold text-ink">₹50 Lakh Generated</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ChatGptSummaryCard pageUrl={PAGE_URL} title={ARTICLE_TITLE} />

          {/* Key Metrics Highlight Grid */}
          <div className="not-prose my-3.5 grid grid-cols-2 gap-2 sm:my-8 sm:grid-cols-4 sm:gap-3">
            <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-2.5 shadow-sm sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
                <TrendingUp className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="truncate">Overall Revenue</span>
              </div>
              <div className="mt-1 font-display text-base font-extrabold text-ink sm:mt-2 sm:text-2xl">
                ₹50 Lakh
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-[11px]">
                Generated in 3 weeks
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-2.5 shadow-sm sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
                <Repeat className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="truncate">Research Cycles</span>
              </div>
              <div className="mt-1 font-display text-base font-extrabold text-ink sm:mt-2 sm:text-2xl">
                3 Cycles
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-[11px]">
                Continuous test & learn
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-2.5 shadow-sm sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
                <Zap className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="truncate">Ad Sprint Window</span>
              </div>
              <div className="mt-1 font-display text-base font-extrabold text-ink sm:mt-2 sm:text-2xl">
                3 Days
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-[11px]">
                Per research phase
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-2.5 shadow-sm sm:rounded-2xl sm:p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground sm:text-xs">
                <ShieldCheck className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
                <span className="truncate">Connected Stack</span>
              </div>
              <div className="mt-1 font-display text-base font-extrabold text-ink sm:mt-2 sm:text-2xl">
                4 Tools
              </div>
              <div className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-[11px]">
                Full funnel synergy
              </div>
            </div>
          </div>

          <h2 id="about-the-brand">About the Brand</h2>
          <p>
            Diorin already had a well-known jewellery business with loyal customers. When Raksha
            Bandhan season came close, the team wanted to make the most of it. So they built a
            brand-new store — just for rakhis and festive gifting — separate from the main jewellery
            catalogue. They called it <strong>Rakhi By Diorin</strong>.
          </p>
          <p>The plan going in was simple:</p>
          <ul>
            <li>Set up a clean Shopify store</li>
            <li>
              Make sure the journey from landing page → product page → cart → checkout felt smooth
            </li>
            <li>Add analytics so they could actually see how visitors were behaving</li>
            <li>Use Microsoft Clarity to watch real-time visitor activity</li>
            <li>
              Once the store was ready, start driving traffic through Instagram and Meta ads with
              strong festive creatives — since the festive window was short and time was tight
            </li>
          </ul>
          <p>
            This gave them a solid store. But having a good-looking store isn&apos;t the same as
            having a store that sells.
          </p>

          <CaseStudyImage
            src="/images/case-studies/rakhi-by-diorin/festive-presence-ecosystem.jpg"
            alt="Rakhi By Diorin festive presence ecosystem: Instagram engagement, Shopify storefront, and festive product range"
            caption="The Festive Presence Ecosystem: Connecting social ad engagement, curated rakhi collections, and a seamless Shopify storefront experience."
          />

          <h2 id="what-we-noticed">What We Noticed</h2>
          <p>
            Once traffic started coming in, a pattern showed up quickly:{" "}
            <strong>people were visiting the store, but very few were buying.</strong>
          </p>
          <p>A few things stood out immediately:</p>
          <ul>
            <li>
              <strong>Low add-to-cart ratio:</strong> Visitors were browsing multiple pages but not
              adding products to their cart — the ratio was far too low.
            </li>
            <li>
              <strong>High checkout abandonment:</strong> Even the people who did add something to
              their cart were leaving before completing checkout.
            </li>
            <li>
              <strong>Lack of product-level visibility:</strong> There was no clear visibility into
              which rakhi products people actually liked, which ones they skipped, or exactly where
              in the journey they were dropping off.
            </li>
            <li>
              <strong>Untested assumptions:</strong> Product selection, pricing, and offers had all
              been set up early on, but none of it had been tested with real shopper behavior — so
              any change made without evidence would be a blind guess.
            </li>
          </ul>

          <blockquote className="not-prose my-6 rounded-2xl border-l-4 border-amber-500 bg-surface p-5 text-sm italic leading-relaxed text-ink">
            Guessing during a festive season that lasts only a few weeks is expensive. Get it wrong,
            and there&apos;s no time left to recover before the season ends.
          </blockquote>

          <h2 id="the-research-process">What We Did: The Research Process</h2>
          <p>
            Instead of redesigning the store based on assumptions, the team built a short,
            repeatable research process — and ran it three full times across the campaign.
          </p>

          {/* Step by Step Breakdown Cards */}
          <div className="not-prose my-8 space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-bold text-sm">
                  1
                </div>
                <h3 id="step-1" className="font-display text-base font-bold text-ink">
                  Look at the Whole Store First
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Before changing anything, the team studied the store as it stood — the site itself,
                existing analytics, and past order data. This gave a real starting point, not an
                assumed one.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-bold text-sm">
                  2
                </div>
                <h3 id="step-2" className="font-display text-base font-bold text-ink">
                  Run Ads for 3 Days — Just to Learn
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Instead of running ads purely to sell, the first move in each cycle was a focused
                <strong> 3-day ad push</strong>. The goal wasn&apos;t sales yet — it was to bring in
                enough genuine traffic to observe how real shoppers behaved.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-bold text-sm">
                  3
                </div>
                <h3 id="step-3" className="font-display text-base font-bold text-ink">
                  Track Everything with Microsoft Clarity and Google Analytics
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                During those three days, both tools tracked:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  Which specific rakhi products people were adding to cart, and which they were
                  ignoring
                </li>
                <li>Where exactly in the shopping journey people were dropping off</li>
                <li>Overall traffic and engagement patterns</li>
              </ul>
              <p className="mt-2 text-sm text-muted-foreground">
                This is where the real answers came from — not opinions about which design
                &ldquo;should&rdquo; sell, but actual proof of what was working.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-bold text-sm">
                  4
                </div>
                <h3 id="step-4" className="font-display text-base font-bold text-ink">
                  Build a Plan for Products, Pricing, and Offers
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Using that data, the team built a clear plan covering:
              </p>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>
                  Which products deserved more attention, based on what people were actually
                  engaging with
                </li>
                <li>What pricing made sense for those products</li>
                <li>
                  What specific offers or discounts could nudge interested visitors who hadn&apos;t
                  bought yet
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-bold text-sm">
                  5
                </div>
                <h3 id="step-5" className="font-display text-base font-bold text-ink">
                  Relaunch Ads and Track Again
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                With updated products, pricing, and offers in place, ads were run again — and the
                same tracking process repeated, to check whether the changes actually made a
                difference.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-bold text-sm">
                  6
                </div>
                <h3 id="step-6" className="font-display text-base font-bold text-ink">
                  Repeat the Whole Loop
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                This cycle — research, analyze, plan, relaunch, track — was run{" "}
                <strong>three separate times</strong> across the campaign, instead of making one
                round of decisions and hoping it held up for the whole season. Each cycle&apos;s
                data directly shaped the next round of changes.
              </p>
            </div>
          </div>

          <h3 id="how-each-round-improved">How Each Round Improved on the Last</h3>
          <div className="not-prose my-6 space-y-4">
            <div className="rounded-2xl border border-border bg-surface/50 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                Round 1
              </div>
              <p className="mt-1 text-sm text-ink font-medium">
                <strong>What we saw:</strong> Visitors were browsing but not buying (very low
                add-to-cart ratio).
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What we did:</strong> Ran ads again for 3 days to gather fresh behavioral
                data and adjust product placement and promotional offers accordingly.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/50 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                Round 2
              </div>
              <p className="mt-1 text-sm text-ink font-medium">
                <strong>What we saw:</strong> People were adding products to cart but abandoning
                checkout.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What we did:</strong> Introduced a simpler, one-click checkout offer via
                Shiprocket integration to eliminate multi-step friction.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface/50 p-5">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                Round 3
              </div>
              <p className="mt-1 text-sm text-ink font-medium">
                <strong>What we saw:</strong> Cart abandonment was still present, though improving
                substantially.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                <strong>What we did:</strong> Refined the one-click checkout offer further and
                re-tested with another 3-day ad push, locking in conversion gains.
              </p>
            </div>
          </div>

          <p>
            This manual process worked, but it took a lot of time and effort to analyze every cycle
            by hand. That&apos;s what led the team to explore a more automated approach — a central
            AI-based tool that could pull together data from Google Analytics, Microsoft Clarity,
            and Shopify&apos;s own store and event data, along with other connected apps like cart
            upsell tools, checkout flows, Shopify Flow automation, and WhatsApp automation — so
            future cycles could run faster and with less manual effort.
          </p>

          <h2 id="tools-we-used">Tools We Used</h2>
          <p>Each tool in this project had one clear, specific job:</p>

          {/* Mobile Tool Cards (Visible on Mobile) */}
          <div className="not-prose my-6 space-y-3 sm:hidden">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                Analytics & Research
              </div>
              <div className="mt-1 font-display text-base font-bold text-ink">
                <a
                  href="https://clarity.microsoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-ink"
                >
                  <span>Microsoft Clarity</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>{" "}
                +{" "}
                <a
                  href="https://marketingplatform.google.com/about/analytics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-ink"
                >
                  <span>Google Analytics</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                The backbone of the entire research process — tracked session-level behavior,
                drop-off points, and overall traffic. Every planning decision came from what these
                tools showed.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                AI Upsells & Order Value
              </div>
              <div className="mt-1 font-display text-base font-bold text-ink">
                <a
                  href="https://apps.shopify.com/ai-upsell-cross-sell-by-weupsell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-ink"
                >
                  <span>WeUpsell</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Used AI-powered recommendations to increase order value, showing the right
                cross-sell and upsell offers at the right moment in the shopping journey.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                1-Click Checkout
              </div>
              <div className="mt-1 font-display text-base font-bold text-ink">
                <a
                  href="https://apps.shopify.com/shiprocket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-ink"
                >
                  <span>Shiprocket</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Simplified the checkout process by reducing the number of steps between cart and
                completed order.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                Social Proof & Trust
              </div>
              <div className="mt-1 font-display text-base font-bold text-ink">
                <a
                  href="https://apps.shopify.com/judgeme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:underline text-ink"
                >
                  <span>Judge.me</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                </a>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Collected and displayed customer reviews to build trust with new visitors who had no
                prior experience with the store.
              </p>
            </div>
          </div>

          {/* Desktop & Tablet Table */}
          <div className="not-prose my-6 hidden overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:block">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-surface text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-3.5 w-1/3">Tool</th>
                  <th className="px-5 py-3.5">What It Did</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-5 py-4 font-semibold text-ink whitespace-nowrap">
                    <a
                      href="https://clarity.microsoft.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline text-ink"
                    >
                      <span>Microsoft Clarity</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>{" "}
                    +{" "}
                    <a
                      href="https://marketingplatform.google.com/about/analytics/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline text-ink"
                    >
                      <span>Google Analytics</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground leading-relaxed">
                    The backbone of the entire research process — tracked session-level behavior,
                    drop-off points, and overall traffic. Every planning decision came from what
                    these tools showed.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-ink whitespace-nowrap">
                    <a
                      href="https://apps.shopify.com/ai-upsell-cross-sell-by-weupsell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline text-ink"
                    >
                      <span>WeUpsell</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground leading-relaxed">
                    Used AI-powered recommendations to increase order value, showing the right
                    cross-sell and upsell offers at the right moment in the shopping journey.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-ink whitespace-nowrap">
                    <a
                      href="https://apps.shopify.com/shiprocket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline text-ink"
                    >
                      <span>Shiprocket</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground leading-relaxed">
                    Simplified the checkout process by reducing the number of steps between cart and
                    completed order.
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-ink whitespace-nowrap">
                    <a
                      href="https://apps.shopify.com/judgeme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline text-ink"
                    >
                      <span>Judge.me</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </a>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground leading-relaxed">
                    Collected and displayed customer reviews to build trust with new visitors who
                    had no prior experience with the store.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="the-results">The Results</h2>
          <p>Across a 3-week campaign window, this process delivered:</p>
          <div className="not-prose my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">₹50 Lakh in Overall Revenue:</strong> Generated over a
                focused 3-week festive campaign.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Three Complete Research-to-Relaunch Cycles:</strong>{" "}
                Each one shaped by real behavioral data from the cycle before it.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Validated Product & Pricing Strategy:</strong> Built
                from actual shopper interactions rather than assumptions.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Fully Connected Growth Stack:</strong> Analysis
                (Clarity, GA), conversion (WeUpsell), checkout (Shiprocket), and trust (Judge.me)
                all working together seamlessly.
              </div>
            </div>
          </div>

          <h2 id="takeaways">Takeaways for Shopify Stores</h2>
          <div className="not-prose my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink font-bold text-xs">
                1
              </div>
              <div className="text-sm">
                <strong className="text-ink">
                  Don&apos;t guess your way through a launch — measure it:
                </strong>{" "}
                The store&apos;s real patterns weren&apos;t visible until Clarity and Analytics were
                actually tracking live behavior.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink font-bold text-xs">
                2
              </div>
              <div className="text-sm">
                <strong className="text-ink">Separate research traffic from sales traffic:</strong>{" "}
                The first 3 days of ads in each cycle weren&apos;t about selling — they were about
                learning. That distinction is what made the plan that followed actually accurate.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink font-bold text-xs">
                3
              </div>
              <div className="text-sm">
                <strong className="text-ink">
                  One round of fixes isn&apos;t enough for a live season:
                </strong>{" "}
                Running the loop three times, not once, let the store course-correct while the
                campaign was still running — instead of only learning lessons for next year.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink font-bold text-xs">
                4
              </div>
              <div className="text-sm">
                <strong className="text-ink">
                  Treat conversion, order value, checkout, and trust as four separate areas:
                </strong>{" "}
                Clarity and GA solved visibility, WeUpsell solved order value, Shiprocket solved
                checkout friction, and Judge.me solved trust — no single tool could have covered all
                four.
              </div>
            </div>
          </div>

          <h2 id="faq">FAQ</h2>
          <GuideFaqAccordion>
            {faqs.map((faq, index) => (
              <GuideFaqItem key={faq.question} value={`faq-${index}`} question={faq.question}>
                <p>{faq.answer}</p>
              </GuideFaqItem>
            ))}
          </GuideFaqAccordion>

          {/* CTA Box */}
          <div className="not-prose my-10 overflow-hidden rounded-3xl border border-lime-400/60 bg-card p-8 sm:p-10 shadow-soft">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-surface px-3 py-1 text-xs font-semibold text-lime-700 dark:text-lime-400 mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Shopify Festive Growth Architecture</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Want a research-driven launch process like this one for your store?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                See how a repeatable test-and-adjust loop, paired with the right upsell, checkout,
                and trust tools, can turn a slow launch into real revenue.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                >
                  <span>Book a Strategy Call →</span>
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-surface-2"
                >
                  <span>View All Client Stories</span>
                </Link>
              </div>
            </div>
          </div>
        </GuidePageShell>
      </main>
      <Footer />
    </>
  );
}
