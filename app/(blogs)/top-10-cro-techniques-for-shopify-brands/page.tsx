import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuidePageShell, type GuideTocItem } from "@/components/content/GuidePageShell";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { Footer } from "@/components/site/Footer";
import { CheckCircle2, Sparkles, Zap, Smartphone, Search, ExternalLink } from "lucide-react";

const SITE = "https://aimbrill.com";
const CANONICAL = "/top-10-cro-techniques-for-shopify-brands";
const PUBLISHED_ISO = "2026-09-03";
const PUBLISHED_DISPLAY = "September 3, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const ARTICLE_TITLE =
  "Top 10 Conversion Rate Optimization (CRO) Techniques for Shopify Brands (2026 Guide)";
const ARTICLE_LEAD =
  "Getting traffic to your Shopify store is only half the battle. If people are visiting your site but not buying, spending more on ads won't fix that — it'll just waste more money. The real fix is Conversion Rate Optimization (CRO): making the visitors you already have more likely to buy.";

export const metadata: Metadata = {
  title: "Top 10 CRO Techniques for Shopify Brands (2026 Guide) | Aimbrill",
  description:
    "Learn the top 10 conversion rate optimization (CRO) techniques for Shopify stores in 2026. Plain language, real examples, PIE framework, benchmarks, and actionable fixes.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "Shopify CRO techniques",
    "conversion rate optimization Shopify",
    "Shopify CRO guide 2026",
    "increase Shopify conversion rate",
    "ecommerce conversion optimization",
    "PIE framework ecommerce",
    "Shopify checkout optimization",
    "Shopify social proof",
    "Shopify mobile CRO",
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
        url: "/images/shopify/blogs/main%20image/top-10-cro.png",
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
    images: ["/images/shopify/blogs/main%20image/top-10-cro.png"],
  },
};

const faqs = [
  {
    id: "good-conversion-rate",
    question: "What is a good conversion rate for a Shopify store?",
    answer:
      "It depends on your industry — anywhere from under 1% (luxury/jewelry) to 5–6% (food & beverage) can be considered healthy. Compare yourself to your category, not to a random number online.",
  },
  {
    id: "results-timeline",
    question: "How long does it take to see results from CRO?",
    answer:
      "Small fixes (like checkout friction or page speed) can show results within weeks. Bigger changes, like personalization or ongoing A/B testing, take longer to fully pay off — usually a few months of consistent effort.",
  },
  {
    id: "small-stores-benefit",
    question: "Do small Shopify stores really benefit from CRO?",
    answer:
      "Yes — arguably more than large stores, since small stores often can't afford to keep spending more on ads. Improving conversion rate is usually the cheapest way to grow revenue.",
  },
  {
    id: "one-time-project",
    question: "Is CRO a one-time project?",
    answer:
      "No. Customer behavior, trends, and your product catalog keep changing, so CRO works best as an ongoing habit — test, learn, improve, repeat.",
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
  image: `${SITE}/images/shopify/blogs/main%20image/top-10-cro.png`,
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
  { id: "what-is-cro", label: "What Is CRO, Really?" },
  { id: "step-1-know-your-rate", label: "Step 1: Know Your Current Rate" },
  { id: "step-2-pie-framework", label: "Step 2: The PIE Framework" },
  {
    id: "top-10-techniques",
    label: "Top 10 CRO Techniques",
    children: [
      { id: "tech-1-product-pages", label: "1. Clear Product Pages" },
      { id: "tech-2-checkout-friction", label: "2. Shopify Checkout Friction" },
      { id: "tech-3-social-proof", label: "3. Social Proof" },
      { id: "tech-4-popups", label: "4. Popups Done Right" },
      { id: "tech-5-site-speed", label: "5. Fast Site Speed" },
      { id: "tech-6-personalization", label: "6. Personalization" },
      { id: "tech-7-mobile-first", label: "7. Mobile-First Design" },
      { id: "tech-8-announcement-bar", label: "8. Honest Announcement Bar" },
      { id: "tech-9-simplify-ctas", label: "9. Simplify CTAs & A/B Test" },
      { id: "tech-10-easy-discovery", label: "10. Seamless Product Discovery" },
    ],
  },
  { id: "tools-overview", label: "Quick Note on CRO Tools" },
  { id: "cro-and-seo", label: "CRO & SEO Work Together" },
  { id: "final-thoughts", label: "Final Thoughts & Quick Recap" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function Top10CroTechniquesPage() {
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
          category="Shopify CRO"
          secondaryTag="Conversion Optimization · E-Commerce Growth"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          readingMinutes={11}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Want an expert CRO audit & automated AI upsell strategy tailored to your Shopify store?",
            href: CALENDLY_URL,
            label: "Book a Strategy Call →",
            external: true,
          }}
        >
          <h2 id="what-is-cro">What Is CRO, Really?</h2>
          <p>
            In simple words: <strong>CRO</strong> means making more of your visitors do what you
            want them to do — usually, complete a purchase.
          </p>
          <p>
            It&apos;s not about changing the color of your &ldquo;Buy Now&rdquo; button and hoping
            for magic. Real CRO looks at the entire journey a customer takes — from landing on your
            homepage to clicking &ldquo;Place Order&rdquo; — and removes anything that slows them
            down, confuses them, or makes them doubt their decision.
          </p>

          <div className="not-prose my-6 rounded-2xl border border-border bg-surface p-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-lime-600 dark:text-lime-400" />A Few Myths to Clear
              Up First
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-500 shrink-0">✕</span>
                <span>
                  <strong>CRO is not just A/B testing:</strong> Testing two versions of a page is
                  one tool inside CRO — not the whole strategy.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-500 shrink-0">✕</span>
                <span>
                  <strong>CRO is not only about checkout:</strong> Your product pages, search bar,
                  navigation, and even your blog content all affect whether someone buys.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-500 shrink-0">✕</span>
                <span>
                  <strong>CRO is not about tricking people:</strong> Fake countdown timers or hidden
                  fees might boost sales for a week, but they destroy trust — and trust is what
                  brings customers back.
                </span>
              </li>
            </ul>
          </div>

          <h2 id="step-1-know-your-rate">Step 1: Know Your Current Conversion Rate</h2>
          <p>
            You can&apos;t improve something you&apos;re not measuring. Here&apos;s the formula:
          </p>

          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-5 text-center shadow-sm">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Core Calculation
            </div>
            <div className="mt-2 font-mono text-base sm:text-xl font-bold text-ink">
              Conversion Rate (%) = (Total Orders ÷ Total Website Visits) × 100
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              <strong>Example:</strong> If your store got 2,000 visitors last month and 40 of them
              placed an order, your conversion rate is: (40 ÷ 2,000) × 100 = <strong>2.0%</strong>.
            </p>
          </div>

          <h3>What counts as a &ldquo;good&rdquo; rate?</h3>
          <p>
            It depends on what you sell — comparing a jewelry store to a snack brand doesn&apos;t
            make sense. Rough benchmarks:
          </p>

          {/* Industry Benchmarks Table */}
          <div className="not-prose my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-surface text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-3.5">Industry</th>
                  <th className="px-5 py-3.5">Typical Conversion Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-5 py-3 font-semibold text-ink">Food & beverage</td>
                  <td className="px-5 py-3 font-medium text-lime-700 dark:text-lime-400">5–6%</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-ink">Beauty & personal care</td>
                  <td className="px-5 py-3 font-medium text-lime-700 dark:text-lime-400">~4%</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-ink">Fashion & apparel</td>
                  <td className="px-5 py-3 font-medium text-lime-700 dark:text-lime-400">2.5–3%</td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-ink">Home & furniture</td>
                  <td className="px-5 py-3 font-medium text-amber-600 dark:text-amber-400">
                    1–1.5%
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 font-semibold text-ink">Luxury & jewellery</td>
                  <td className="px-5 py-3 font-medium text-muted-foreground">Under 1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            If you&apos;re above your category&apos;s average, you&apos;re doing well. If
            you&apos;re below it, that&apos;s exactly where fixing things will pay off fastest.
          </p>

          <h2 id="step-2-pie-framework">Step 2: Decide What to Fix First (The PIE Framework)</h2>
          <p>
            Every team has opinions about what should change first. Instead of going with whoever
            argues the loudest, score each idea from 1–10 on three things:
          </p>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-display text-base font-bold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  P
                </span>
                Potential
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                How much room for improvement is there here?
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-display text-base font-bold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  I
                </span>
                Importance
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                How much traffic or revenue actually passes through this page?
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 font-display text-base font-bold text-ink">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime/20 text-lime-800 dark:text-lime-300 font-extrabold text-sm">
                  E
                </span>
                Ease
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                How quickly and cheaply can you actually build and test this fix?
              </p>
            </div>
          </div>

          <p>
            Average the three scores and tackle the highest-scoring ideas first. A small fix on your
            checkout page (which every buyer sees) will usually beat a full homepage redesign in
            terms of results per hour spent.
          </p>

          <h2 id="top-10-techniques">The Top 10 CRO Techniques for Shopify Stores</h2>

          {/* Technique 1 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-1-product-pages"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                1
              </span>
              Make Your Product Pages Impossible to Misunderstand
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Your product page is where the buying decision actually happens. If a visitor has to
              guess anything — the size, the price, whether it&apos;s good quality — they&apos;ll
              leave instead of asking.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to fix:
              </h4>
              <ul className="space-y-2 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Photos:</strong> Show multiple angles, allow zoom, and mix clean studio
                    shots with real &ldquo;in-use&rdquo; lifestyle photos.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Descriptions:</strong> Write about what the product does for the
                    customer, not just its specs. Instead of &ldquo;100% cotton, 180 GSM,&rdquo; try
                    &ldquo;Soft, breathable cotton that feels great even in summer heat.&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pricing:</strong> Show the original price and discounted price clearly —
                    don&apos;t make people do math.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Trust badges:</strong> Put &ldquo;secure checkout,&rdquo; &ldquo;easy
                    7-day returns,&rdquo; or &ldquo;1-year warranty&rdquo; near the Buy button, not
                    buried in the footer.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Size charts:</strong> If sizing confusion exists, add a clear chart so
                    people don&apos;t abandon the page out of doubt.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-ink">Example:</strong> A clothing brand that added a size
              chart with body measurements (not just S/M/L) saw fewer returns and more first-time
              buyers, because customers stopped guessing. You can set this up in minutes without any
              coding using an app like{" "}
              <a
                href="https://apps.shopify.com/kiwi-sizing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Kiwi Size Chart & Recommender
                <ExternalLink className="h-3 w-3 inline" />
              </a>
              , which builds clean, customizable size charts with automatic unit conversion.
            </div>

            {/* Visual Example: Confusing vs Clear Product Page */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/product-page-before-after.png"
                  alt="Before and After product page comparison: Confusing vs Clear & Focused CRO layout"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Before vs. After: Removing visual clutter, elevating social proof, and clarifying
                CTA placement increases product page conversion rates.
              </figcaption>
            </figure>
          </div>

          {/* Technique 2 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-2-checkout-friction"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                2
              </span>
              Use Shopify Checkout to Remove Every Bit of Friction
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Most cart abandonment happens because checkout feels slow or confusing right at the
              moment someone was ready to pay — the longer they linger, the more likely they are to
              have second thoughts.
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              <a
                href="https://www.shopify.com/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400 inline-flex items-center gap-0.5"
              >
                Shopify Checkout
                <ExternalLink className="h-3 w-3 inline" />
              </a>{" "}
              is already built to reduce this friction:
            </p>

            <ul className="mt-3 space-y-2 text-sm text-ink font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Custom branding:</strong> Match the checkout&apos;s look to your store, so
                  it never feels like a redirect.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Multiple payment methods:</strong> Cards, gift cards, local options, and
                  installments in eligible markets.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>One-click checkout:</strong> Once a customer has used Shop Pay before,
                  their address and card details are remembered and autofilled automatically — no
                  retyping needed. For Indian D2C brands specifically, apps like{" "}
                  <a
                    href="https://apps.shopify.com/kwikcheckout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400 inline-flex items-center gap-0.5"
                  >
                    GoKwik (Kwik COD & Checkout)
                    <ExternalLink className="h-3 w-3 inline" />
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://apps.shopify.com/shiprocket-smart-address"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400 inline-flex items-center gap-0.5"
                  >
                    Shiprocket Address Prefill
                    <ExternalLink className="h-3 w-3 inline" />
                  </a>{" "}
                  offer similar OTP-based one-click checkout with address autofill, and{" "}
                  <a
                    href="https://ai.weupsell.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400 inline-flex items-center gap-0.5"
                  >
                    WeUpsell
                    <ExternalLink className="h-3 w-3 inline" />
                  </a>{" "}
                  also provides one-click checkout while layering relevant upsells right at that
                  same fast-checkout moment.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Flexible fulfillment:</strong> Delivery, shipping, or pickup, based on
                  what suits the buyer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Abandoned checkout tracking:</strong> See exactly where people drop off
                  and follow up with recovery emails.
                </span>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                A few extra fixes that help too:
              </h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 dark:text-lime-400 font-bold">•</span>
                  <span>
                    Remove unnecessary form fields (does anyone really need &ldquo;Company
                    Name&rdquo;?).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 dark:text-lime-400 font-bold">•</span>
                  <span>Show a simple progress indicator like &ldquo;Step 2 of 3.&rdquo;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-lime-600 dark:text-lime-400 font-bold">•</span>
                  <span>
                    Display shipping costs early instead of surprising people at the last step.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-ink">Example:</strong>{" "}
              <a
                href="https://kotn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400 inline-flex items-center gap-0.5"
              >
                Kotn
                <ExternalLink className="h-3 w-3 inline" />
              </a>{" "}
              found that most customers were discovering products on mobile — and a long checkout
              form meant lost sales. Turning on Shop Pay made checkout a one-tap experience even for
              first-time buyers, since autofill removed the need to type in an address at all.
            </div>

            {/* Visual Example: Friction-Filled vs Frictionless Checkout */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/checkout-before-after.png"
                  alt="Before and After checkout comparison: Friction-filled vs Frictionless checkout with 1-tap payment and upfront shipping"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Before vs. After Checkout: 1-tap express buttons (Shop Pay, Apple Pay), fewer form
                fields, clear step progress, and upfront shipping eliminate drop-offs.
              </figcaption>
            </figure>
          </div>

          {/* Technique 3 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-3-social-proof"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                3
              </span>
              Let Other Customers Do the Convincing (Social Proof)
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              People trust other buyers more than they trust your marketing copy. This matters even
              more for beauty, skincare, fashion, and wellness products, where shoppers actively
              look for proof before buying.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to add:
              </h4>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    Star ratings near the Buy button — not just on a separate reviews tab.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    Photos and videos from real customers (UGC) — these feel far more authentic than
                    studio shots.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    Real-time activity notices, like &ldquo;12 people bought this in the last 24
                    hours&rdquo; — but only if it&apos;s true.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>Press or influencer mentions, if you have them.</span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed space-y-1.5">
              <p>
                <strong className="text-ink">Example:</strong> A skincare brand that added real
                customer photos next to written reviews saw people scroll longer and add to cart
                more often — seeing someone else&apos;s skin results built more confidence than any
                product description could.
              </p>
              <p>
                Apps like{" "}
                <a
                  href="https://apps.shopify.com/judgeme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Judge.me
                </a>{" "}
                and{" "}
                <a
                  href="https://apps.shopify.com/loox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Loox
                </a>{" "}
                make it easy to collect and display unlimited photo and video reviews right on your
                product page, while{" "}
                <a
                  href="https://apps.shopify.com/yotpo-social-reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Yotpo
                </a>{" "}
                adds loyalty and referral tools on top of reviews, and{" "}
                <a
                  href="https://apps.shopify.com/notify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Fomo
                </a>{" "}
                shows real-time purchase notifications like &ldquo;Someone in Mumbai just bought
                this&rdquo; for a gentle sense of urgency alongside the proof.
              </p>
            </div>

            {/* Visual Example: Social Proof & Validation */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/social-proof-elements.png"
                  alt="High-converting social proof on a Shopify product page: star ratings, real-time activity notifications, user reviews, and media trust badges"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Social Proof in Action: Star ratings near CTA, real-time order notifications,
                customer photo reviews, and press endorsements build instant buyer confidence.
              </figcaption>
            </figure>
          </div>

          {/* Technique 4 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-4-popups"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                4
              </span>
              Use Popups the Right Way
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              A popup is a small box that appears on top of your page to grab a visitor&apos;s
              attention — usually to highlight a discount code, a giveaway, or something
              time-sensitive. Used well, popups can turn a browsing visitor into a buyer or at least
              capture their email so you can follow up later. Used badly, they just feel annoying
              and push people away.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                How to do it right:
              </h4>
              <ul className="space-y-2 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Trigger on behavior:</strong> Don&apos;t fire it the instant the page
                    loads. Trigger it based on real visitor behavior — for example, after
                    they&apos;ve scrolled a bit, spent some time on the page, or show signs of
                    leaving — not the moment they arrive.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Offer something valuable:</strong> A discount code, free shipping, or
                    entry into a giveaway — not just &ldquo;Wait! Don&apos;t leave!&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Make it easy to close on mobile:</strong> Include a large, obvious
                    &ldquo;X&rdquo; button so it doesn&apos;t feel like a trap.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Use it to build your list:</strong> A popup offering a discount in
                    exchange for an email address is one of the simplest ways to build your
                    marketing audience.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed space-y-1.5">
              <p>
                <strong className="text-ink">Example:</strong> Instead of a generic
                &ldquo;Don&apos;t go!&rdquo; message, a store offering &ldquo;Get 10% off if you
                complete your order in the next 10 minutes&rdquo; converts far more visitors,
                because it gives them a real reason to act rather than just guilt-tripping them into
                staying.
              </p>
              <p>
                Apps like{" "}
                <a
                  href="https://apps.shopify.com/privy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Privy
                </a>{" "}
                and{" "}
                <a
                  href="https://apps.shopify.com/powr-popup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  POWR Popup
                </a>{" "}
                make it simple to build these kinds of offer-based, easy-to-close popups, and{" "}
                <a
                  href="https://www.weupsell.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400 inline-flex items-center gap-0.5"
                >
                  WeUpsell
                  <ExternalLink className="h-3 w-3 inline" />
                </a>{" "}
                takes it a step further by pairing the popup or cart-drawer offer with a smart
                upsell, so the discount you show at the right moment also nudges the customer toward
                a bigger order.
              </p>
            </div>

            {/* Visual Example: Timed Value-First Exit-Intent Popup */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/exit-intent-popup.jpg"
                  alt="High-converting exit-intent popup mockup offering an instant discount code with clear dismiss option"
                  width={1024}
                  height={768}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Exit-Intent Optimization: Triggering a high-value discount or free shipping offer
                when a shopper moves to exit recovers abandoned sessions.
              </figcaption>
            </figure>
          </div>

          {/* Technique 5 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-5-site-speed"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                5
              </span>
              Speed Up Your Site
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Every extra second your site takes to load quietly chips away at your conversion rate.
              A slow site feels untrustworthy, even if the products are great.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to fix:
              </h4>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Compress images:</strong> Use WebP or AVIF formats instead of large PNGs
                    or JPEGs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Remove unused apps:</strong> Old Shopify apps you&apos;re not using can
                    still be loading scripts in the background, slowing everything down.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Turn on lazy loading:</strong> Images and videos below the fold should
                    only load once someone scrolls to them.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-ink">Example:</strong> A store that compressed its homepage
              banner images from 4MB to under 300KB saw noticeably faster load times and fewer
              people bouncing before the page even finished loading. Free tools like{" "}
              <a
                href="https://developers.google.com/speed/pagespeed/insights/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Google PageSpeed Insights
              </a>{" "}
              and{" "}
              <a
                href="https://developer.chrome.com/docs/lighthouse/overview/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Google Lighthouse
              </a>{" "}
              (built into Chrome DevTools) will score your page speed and tell you exactly
              what&apos;s slowing things down.
            </div>

            {/* Visual Example: Speed Optimization */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/site-speed-optimization.png"
                  alt="Shopify site speed optimization illustration showing fast page load times and performance gains"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Speed Optimization: Faster server response, compressed media, and clean theme
                scripts prevent bounce rates and preserve buyer momentum.
              </figcaption>
            </figure>
          </div>

          {/* Technique 6 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-6-personalization"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                6
              </span>
              Personalize the Shopping Experience
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              A store that feels the same to every visitor converts worse than one that adapts based
              on who&apos;s browsing.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to add:
              </h4>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    &ldquo;Frequently bought together&rdquo; suggestions on product and cart pages.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    Different content for returning visitors, like showing their recently viewed
                    items.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    Local currency and pricing for international shoppers, so they don&apos;t have
                    to convert prices in their head.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed space-y-1.5">
              <p>
                <strong className="text-ink">Example:</strong> A store showing &ldquo;Customers who
                bought this also bought...&rdquo; on the cart page increased average order value,
                because it suggested relevant add-ons at exactly the right moment.
              </p>
              <p>
                An app like{" "}
                <a
                  href="https://apps.shopify.com/reconvert-upsell-cross-sell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  ReConvert Upsell & Cross Sell
                </a>{" "}
                can show these personalized upsells on the cart, checkout, and thank-you pages
                automatically, while{" "}
                <a
                  href="https://apps.shopify.com/klaviyo-email-marketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Klaviyo
                </a>{" "}
                lets you send personalized emails and SMS based on what a customer browsed or
                bought, including recently-viewed and abandoned-cart follow-ups.
              </p>
            </div>

            {/* Visual Example: Personalized E-Commerce Experience */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/personalized-experience.png"
                  alt="Personalized mobile e-commerce interface with AI recommendations, personalized greeting, and local currency pricing"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Personalization in Action: AI recommendations, customized returning-customer
                greetings, and localized currency convert browse intent into sales.
              </figcaption>
            </figure>
          </div>

          {/* Technique 7 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-7-mobile-first"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                7
              </span>
              Design Mobile-First, Not Just Mobile-Friendly
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              More than 62% of global web traffic now comes from smartphones and tablets, which
              means a mobile-friendly website isn&apos;t a nice-to-have anymore — it&apos;s a must.
              For most Shopify stores, mobile traffic is even higher than that. This means mobile
              shouldn&apos;t be an afterthought — it should be the main design you build for, with
              the desktop version treated as the secondary layout.
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              The good news: every Shopify theme is automatically optimized for display on any
              device, so you&apos;re starting from a solid base. But there&apos;s still more you can
              do:
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to fix:
              </h4>
              <ul className="space-y-2 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bigger buttons:</strong> Make sure buttons, filters, and quantity
                    selectors are large enough to tap comfortably with a thumb — no need to zoom in
                    or miss-tap.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Sticky &ldquo;Add to Cart&rdquo; bar:</strong> Keep the buy button
                    visible at the bottom of the screen while people scroll through reviews and
                    details.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Simplify navigation:</strong> Try simplifying your site navigation,
                    making buttons larger and easier to press, and reducing the amount of text on
                    each page to avoid overwhelming small screens.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Check your actual load speed and responsiveness:</strong> Use
                    Google&apos;s Lighthouse, an automated tool for improving web page quality, and
                    Google&apos;s PageSpeed Insights for a detailed page-speed report. Slow,
                    unresponsive pages drive mobile shoppers away faster than almost anything else —
                    and page speed is also one of the factors Google uses when ranking sites.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed space-y-1">
              <p>
                <strong className="text-ink">Example:</strong> A brand that added a sticky
                &ldquo;Add to Cart&rdquo; bar on mobile saw more people convert directly from the
                product page, since they no longer had to scroll all the way back up to buy.
              </p>
              <p className="text-[11px] text-muted-foreground">
                (This section draws on{" "}
                <a
                  href="https://www.shopify.com/in/blog/120261189-conversion-rate-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                >
                  Shopify&apos;s own CRO guide
                </a>
                , which confirms mobile traffic and page speed are two of the biggest conversion
                levers today.)
              </p>
            </div>

            {/* Visual Example: Mobile-First CRO Design */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/mobile-first-cro.png"
                  alt="Mobile-first CRO comparison: Cluttered layout vs Clean mobile-first design with larger tap areas, faster loading, simpler navigation, and sticky Add to Cart bar"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Mobile-First Design in Action: Bigger tap targets, streamlined navigation, and a
                sticky Add to Cart bar capture over 62% of mobile shoppers.
              </figcaption>
            </figure>
          </div>

          {/* Technique 8 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-8-announcement-bar"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                8
              </span>
              Use an Announcement Bar (Honest Urgency & Scarcity)
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              An announcement bar — sometimes also called a &ldquo;hello bar&rdquo; or
              &ldquo;welcome bar&rdquo; — is that thin strip that sits at the very top of a website.
              Unlike a popup, it doesn&apos;t cover the page and can&apos;t be dismissed, so
              it&apos;s a fast, non-intrusive way to tell every visitor something important the
              moment they land on your site: a sale, a free-shipping threshold, a new launch, or a
              genuine deadline.
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Urgency can genuinely push people to act — but only if it&apos;s real. Fake countdown
              timers that reset when you refresh the page destroy trust fast, and savvy shoppers
              notice.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to put in it (only when true):
              </h4>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Real stock levels:</strong> &ldquo;Only 3 left in stock&rdquo; — when
                    that&apos;s actually accurate.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Real order deadlines:</strong> &ldquo;Order in the next 2 hours for
                    same-day dispatch.&rdquo;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Real sale end dates:</strong> A discount that actually ends when it says
                    it will.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Free shipping thresholds:</strong> &ldquo;Free shipping on orders over
                    ₹999&rdquo; is one of the most effective, always-honest things to put in an
                    announcement bar.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-ink">Example:</strong> A store that showed genuine low-stock
              warnings (pulled directly from actual inventory data) saw people convert faster on
              those products — because shoppers trusted the message was real. An app like{" "}
              <a
                href="https://apps.shopify.com/promo-bar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Zotabox Promo Bar
              </a>{" "}
              makes it easy to add a simple, non-intrusive announcement bar to share sales,
              deadlines, or shipping offers at the top of every page.
            </div>

            {/* Visual Example: Announcement Bar */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/announcement-bar-cro.png"
                  alt="Shopify store top announcement bar displaying social proof and trust messaging"
                  width={1024}
                  height={280}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Announcement Bar Optimization: Delivering immediate social proof, genuine deadlines,
                and shipping thresholds at the top of the viewport.
              </figcaption>
            </figure>
          </div>

          {/* Technique 9 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-9-simplify-ctas"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                9
              </span>
              Simplify Your CTA Buttons and Test Continuously (A/B Testing)
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Your call-to-action (CTA) is the button or link that tells a visitor exactly what to
              do next — &ldquo;Add to Cart,&rdquo; &ldquo;Buy Now,&rdquo; &ldquo;Get Yours
              Now.&rdquo; It takes a visitor only a fraction of a second to form a first impression
              of your page, so your CTA needs to be simple, obvious, and placed where people will
              actually see it — ideally without needing to scroll.
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              But you shouldn&apos;t just guess at what works best. CRO is an ongoing, iterative
              habit: you form a hypothesis, test it against the original with real traffic, and let
              the data — not opinions — decide the winner. This is called A/B testing.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to test:
              </h4>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Button text:</strong> &ldquo;Add to Bag&rdquo; vs. &ldquo;Get Yours
                    Now&rdquo; — small wording changes can shift click rates.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Button placement:</strong> Above the fold vs. further down the page.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Pricing display:</strong> Bundle discounts vs. showing savings per unit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Give it enough time:</strong> Don&apos;t declare a &ldquo;winner&rdquo;
                    after just a day or two — wait until you have enough orders for the result to be
                    statistically meaningful, not just random luck.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-ink">Example:</strong> Changing a single button from
              &ldquo;Add to Cart&rdquo; to &ldquo;Add to Bag — Free Shipping&rdquo; might sound
              small, but testing it properly (with real traffic and enough time) is how you find out
              if it actually moves the needle for your specific customers. An app like{" "}
              <a
                href="https://apps.shopify.com/intelligems"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Intelligems
              </a>{" "}
              lets you A/B test CTAs, prices, discounts, and page content, and shows you which
              version actually drives more profit, not just more clicks.
            </div>

            {/* Visual Example: CTA A/B Testing */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/cta-ab-testing-cro.png"
                  alt="A/B testing CTA comparison: Add to Cart vs Add to Bag with Free Shipping driving a +33% increase in conversion rate"
                  width={1024}
                  height={512}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                A/B Testing in Action: Small changes like testing &ldquo;Add to Bag — Free
                Shipping&rdquo; against generic copy can drive double-digit conversion lift.
              </figcaption>
            </figure>
          </div>

          {/* Technique 10 */}
          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3
              id="tech-10-easy-discovery"
              className="font-display text-lg font-bold text-ink flex items-center gap-2"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime text-ink font-extrabold text-sm">
                10
              </span>
              Make Products Easy to Find
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              If a visitor can&apos;t quickly find what they&apos;re looking for, they&apos;ll leave
              — even if you have exactly what they want somewhere on your site.
            </p>

            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-2">
                What to fix:
              </h4>
              <ul className="space-y-1.5 text-sm text-ink font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Smart search:</strong> Show product thumbnails and prices directly
                    inside the search bar as people type.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Useful filters:</strong> Let people filter by price, size, color,
                    rating, and in-stock status.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-600 dark:text-lime-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Clear breadcrumbs:</strong> Let shoppers easily go back to a category
                    page without hitting the browser&apos;s back button.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-border/80 bg-surface/60 p-3.5 text-xs text-muted-foreground leading-relaxed">
              <strong className="text-ink">Example:</strong> A store that upgraded its search bar to
              show live product suggestions (instead of just a plain text box) saw shoppers find and
              buy relevant products faster, especially on mobile where scrolling through categories
              is slower.{" "}
              <a
                href="https://apps.shopify.com/search-and-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
              >
                Shopify Search & Discovery
              </a>
              , built and maintained directly by Shopify, adds this kind of typo-tolerant,
              predictive search along with custom filtering for your collection pages.
            </div>

            {/* Visual Example: Seamless Product Discovery */}
            <figure className="mt-5 overflow-hidden rounded-xl border border-border/80 bg-surface/30">
              <div className="relative w-full overflow-hidden p-2 sm:p-3 flex items-center justify-center">
                <Image
                  src="/images/shopify/blogs/top-10-cro/product-discovery-cro.png"
                  alt="Smart search and collection discovery: Live search bar with thumbnail previews, intuitive filter facets, and clear breadcrumb navigation"
                  width={1024}
                  height={682}
                  sizes="(max-width: 768px) 100vw, 760px"
                  quality={95}
                  loading="lazy"
                  className="h-auto w-full rounded-lg object-contain"
                />
              </div>
              <figcaption className="border-t border-border/60 bg-surface/50 px-4 py-2 text-center text-xs font-medium text-muted-foreground">
                Frictionless Product Discovery: Predictive visual search, multi-faceted filtering,
                and clear breadcrumbs guide shoppers directly to checkout.
              </figcaption>
            </figure>
          </div>

          <h2 id="tools-overview">A Quick Note on CRO Tools</h2>
          <p>
            You don&apos;t need a huge budget to start. Pick one solid tool per category instead of
            overloading your store with competing apps:
          </p>

          {/* Tools Table */}
          <div className="not-prose my-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border bg-surface text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-3.5">Focus Area</th>
                  <th className="px-5 py-3.5">Tools to Consider</th>
                  <th className="px-5 py-3.5">What It Does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-ink">Analytics & Heatmaps</td>
                  <td className="px-5 py-3.5 text-muted-foreground font-medium">
                    Shopify Analytics, Hotjar, Microsoft Clarity
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    Shows where visitors drop off and how they scroll
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-ink">Reviews & Social Proof</td>
                  <td className="px-5 py-3.5 text-muted-foreground font-medium">
                    Judge.me, Yotpo, Loox
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    Collects and displays photo reviews and ratings
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-ink">Upsells & Recommendations</td>
                  <td className="px-5 py-3.5 text-muted-foreground font-medium">
                    <a
                      href="https://www.weupsell.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                    >
                      WeUpsell
                    </a>
                    ,{" "}
                    <a
                      href="https://apps.shopify.com/reconvert-upsell-cross-sell"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-ink underline decoration-lime-500/60 hover:text-lime-600 dark:hover:text-lime-400"
                    >
                      ReConvert
                    </a>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    Suggests relevant add-ons and bundles
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-ink">Cart Recovery</td>
                  <td className="px-5 py-3.5 text-muted-foreground font-medium">
                    Klaviyo, Omnisend
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    Sends automated emails/SMS to recover abandoned carts
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3.5 font-semibold text-ink">Search & Filtering</td>
                  <td className="px-5 py-3.5 text-muted-foreground font-medium">
                    Shopify Search & Discovery
                  </td>
                  <td className="px-5 py-3.5 text-xs text-muted-foreground">
                    Adds typo-tolerant instant search and filters
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="cro-and-seo">CRO and SEO Work Together</h2>
          <p>
            It&apos;s easy to think of &ldquo;getting traffic&rdquo; (SEO) and &ldquo;converting
            traffic&rdquo; (CRO) as separate jobs. They&apos;re actually connected:
          </p>

          <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-4">
              <div className="font-display text-sm font-bold text-ink flex items-center gap-2">
                <Zap className="h-4 w-4 text-lime-600 dark:text-lime-400" />
                Speed helps both
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                A faster site ranks better on Google and keeps shoppers from leaving out of
                impatience.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-4">
              <div className="font-display text-sm font-bold text-ink flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-lime-600 dark:text-lime-400" />
                Mobile helps both
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Google ranks mobile-friendly sites higher, and a smooth mobile checkout means more
                of that traffic actually converts.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-4">
              <div className="font-display text-sm font-bold text-ink flex items-center gap-2">
                <Search className="h-4 w-4 text-lime-600 dark:text-lime-400" />
                Clear content helps both
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                A product page that clearly answers buyer questions satisfies search engines and
                shoppers at the same time.
              </p>
            </div>
          </div>

          <h2 id="final-thoughts">Final Thoughts</h2>
          <p>
            CRO isn&apos;t about one big, risky redesign. It&apos;s about steadily removing friction
            and building genuine trust at every step of the customer&apos;s journey — one small,
            tested improvement at a time.
          </p>

          <div className="not-prose my-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-base font-bold text-ink mb-3">
              Quick Recap: The 10 Techniques
            </h3>
            <ol className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">1.</span> Make product pages crystal clear
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">2.</span> Use Shopify Checkout to remove
                friction (one-click, autofill)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">3.</span> Let social proof do the convincing
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">4.</span> Use popups the right way
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">5.</span> Speed up your site
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">6.</span> Personalize the shopping experience
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">7.</span> Design mobile-first, not
                mobile-friendly
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">8.</span> Use an honest announcement bar
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">9.</span> Simplify your CTAs and test
                continuously
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold text-ink">10.</span> Make discovery and navigation
                seamless
              </li>
            </ol>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <GuideFaqAccordion>
            {faqs.map((faq) => (
              <GuideFaqItem key={faq.id} value={faq.id} question={faq.question}>
                <p>{faq.answer}</p>
              </GuideFaqItem>
            ))}
          </GuideFaqAccordion>
        </GuidePageShell>
      </main>

      <Footer />
    </>
  );
}
