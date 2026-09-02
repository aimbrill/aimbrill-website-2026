import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuidePageShell, type GuideTocItem } from "@/components/content/GuidePageShell";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { ChatGptSummaryCard } from "@/components/case-studies/ChatGptSummaryCard";
import { Footer } from "@/components/site/Footer";
import { TrendingUp, ShoppingBag, Eye, Percent, ArrowUpRight, CheckCircle2 } from "lucide-react";

const SITE = "https://aimbrill.com";
const CANONICAL = "/case-studies/rakhi-by-diorin";
const PUBLISHED_ISO = "2026-09-02";
const MODIFIED_ISO = "2026-09-02";
const PUBLISHED_DISPLAY = "September 2, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const PAGE_URL = `${SITE}${CANONICAL}`;
const ARTICLE_TITLE = "How a Shopify Rebrand + AI Upsell Generated ₹12.29L in 2 Months";
const ARTICLE_LEAD =
  "Rakhi By Diorin had the products, customers, and demand. What it didn't have was a Shopify storefront built to scale with them. Here is what a rebrand changed, and what WeUpsell added after launch.";

export const metadata: Metadata = {
  title: "Rakhi By Diorin: Shopify Rebrand & AI Upsell Case Study | Aimbrill",
  description:
    "How Rakhi By Diorin generated ₹12.29L in AI-influenced revenue in 2 months with a Shopify storefront rebrand and WeUpsell AI recommendation widgets.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "Shopify rebrand case study",
    "WeUpsell AI upsell case study",
    "Shopify conversion rate optimization",
    "e-commerce cross-sell AI recommendations",
    "Shopify mega-menu and navigation rebrand",
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
    title: "How a Shopify Rebrand + AI Upsell Generated ₹12.29L in 2 Months",
    description: ARTICLE_LEAD,
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: MODIFIED_ISO,
    authors: ["Aimbrill"],
    siteName: "Aimbrill",
  },
  twitter: {
    card: "summary_large_image",
    title: "How a Shopify Rebrand + AI Upsell Generated ₹12.29L in 2 Months",
    description: ARTICLE_LEAD,
  },
};

const faqs = [
  {
    question: "What results did this Shopify rebrand and WeUpsell rollout deliver?",
    answer:
      "₹12.29L in AI-influenced revenue — revenue attributed to shopper interactions with WeUpsell's recommendation widgets — recorded across 4,073 orders during the Jul 1–Aug 27, 2026 analysis period, at a 6.69% conversion rate on those interactions.",
  },
  {
    question: "What did this rebrand involve?",
    answer:
      "A full rebrand of the storefront's navigation and homepage structure, followed by an AI recommendation layer added on top.",
  },
  {
    question: "What should other growing Shopify stores take from this?",
    answer:
      "Fix your catalogue structure first. Then add AI recommendations that can actually learn from it. Doing the second without the first limits how well it performs.",
  },
  {
    question: "Where is the biggest opportunity left on the table?",
    answer:
      "Post-purchase and thank-you page recommendations. Both are live but barely used, despite being the highest-intent moment in the funnel.",
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
  { id: "the-challenge", label: "The Challenge" },
  { id: "what-we-rebranded", label: "What We Rebranded on Shopify" },
  { id: "catalogue-navigation", label: "Catalogue and Navigation" },
  { id: "adding-weupsell", label: "Adding WeUpsell" },
  { id: "results-after-launch", label: "Results After Launch" },
  { id: "takeaways", label: "Takeaways for Shopify Stores" },
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
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="not-prose my-6">
      <div className="overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm transition hover:shadow-md">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={675}
          sizes="(max-width: 768px) 100vw, 840px"
          quality={90}
          priority={priority}
          className="h-auto w-full object-contain"
        />
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
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
          category="Case Study"
          secondaryTag="Shopify Rebrand · WeUpsell AI · E-Commerce Growth"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill Engineering Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          readingMinutes={8}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Ready to scale your Shopify revenue with a high-converting storefront and AI upsell?",
            href: CALENDLY_URL,
            label: "Book a Demo →",
            external: true,
          }}
        >
          {/* Client Overview Table */}
          <div className="guide-table-wrap not-prose mb-8">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="border-b border-border/60">
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground w-1/3">Client</th>
                  <td className="py-2.5 text-ink font-medium">
                    <a
                      href="https://rakhibydiorin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-border hover:decoration-ink"
                    >
                      Rakhi By Diorin / Sanskriti By Diorin (rakhibydiorin.com)
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground">Industry</th>
                  <td className="py-2.5 text-ink">Handcrafted Rakhis, Festive & Gifting Hampers</td>
                </tr>
                <tr className="border-b border-border/60">
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground">Platform</th>
                  <td className="py-2.5 text-ink">
                    <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Shopify
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground">Engagement</th>
                  <td className="py-2.5 text-ink">
                    Store Rebrand (Navigation, Mega-Menu, Intent-Driven Homepage) + WeUpsell AI
                    Recommendations across 6 placements
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ChatGptSummaryCard pageUrl={PAGE_URL} title={ARTICLE_TITLE} />

          {/* Key Metrics Highlight Grid */}
          <div className="not-prose my-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-2xl border border-lime-400/60 bg-card p-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-lime-700 dark:text-lime-400">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>AI Revenue</span>
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-ink">₹12.29L</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">Jul 1 – Aug 27, 2026</div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Total Orders</span>
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-ink">4,073</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">Recorded in period</div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <Percent className="h-3.5 w-3.5" />
                <span>Conversion Rate</span>
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-ink">6.69%</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">On widget interactions</div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <TrendingUp className="h-3.5 w-3.5" />
                <span>Avg Revenue / Order</span>
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-ink">₹301.77</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">AI-influenced value</div>
            </div>

            <div className="col-span-2 sm:col-span-1 rounded-2xl border border-border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                <Eye className="h-3.5 w-3.5" />
                <span>Widget Views</span>
              </div>
              <div className="mt-2 font-display text-2xl font-extrabold text-ink">12.85L</div>
              <div className="mt-0.5 text-[11px] text-muted-foreground">1,285,002 impressions</div>
            </div>
          </div>

          <p>
            This case study covers <strong>Rakhi By Diorin</strong>, a Shopify store selling
            handcrafted rakhis, that needed more than a new coat of paint. The products and the
            customer base were both strong. The store structure was not built for what the brand was
            becoming.
          </p>
          <p>
            We rebranded the store&apos;s navigation and homepage, then added WeUpsell&apos;s AI
            recommendations across key conversion points. Over the following two months, the store
            recorded <strong>₹12.29L in AI-influenced revenue</strong> — revenue attributed to
            shopper interactions with WeUpsell&apos;s recommendation widgets during that period, on
            top of whatever the store earned outside those interactions.
          </p>

          <h2 id="the-challenge">The Challenge</h2>
          <p>
            Rakhi By Diorin sold rakhis to a base of <strong>15,000+ customers</strong>, across its
            own site and through Flipkart, Amazon, and Myntra. But the brand was expanding — from
            rakhis alone into a wider festive and gifting range, including a Ganesh Chaturthi
            collection and gifting hampers. As the store moves into other festive seasons, it also
            appears on-site as <strong>Sanskriti By Diorin</strong>, reflecting that broader range
            beyond Raksha Bandhan.
          </p>
          <p>The old store structure could not carry that expansion:</p>
          <ul>
            <li>
              <strong>Flat category lists fail at scale.</strong> A flat category list works for one
              occasion. It breaks down once a store spans multiple festivals, gift types, and price
              points at the same time.
            </li>
            <li>
              <strong>Missed cross-sell opportunities.</strong> Customers were checking out with a
              single rakhi, missing the combo, gift add-on, or sweets that usually complete a Raksha
              Bandhan order.
            </li>
            <li>
              <strong>Structural friction over superficial aesthetics.</strong> A store redesign
              only pays off if it fixes that gap. A new look on the same weak structure would not
              have solved it.
            </li>
          </ul>

          <h2 id="what-we-rebranded">What We Rebranded on Shopify</h2>
          <p>The scope was a full navigation and homepage rebrand, not a light refresh:</p>
          <ul>
            <li>
              <strong>Mega-menu navigation</strong> grouped by recipient, product type, and occasion
            </li>
            <li>
              <strong>Homepage sequence</strong> redesigned around shopper intent, not just
              merchandising
            </li>
            <li>
              <strong>Shoppable video</strong> added to the homepage for product context
            </li>
            <li>
              <strong>Clean data structure</strong> clean enough for an AI recommendation engine to
              learn from
            </li>
          </ul>

          {/* Before / After Table */}
          <div className="guide-table-wrap my-6">
            <table>
              <thead>
                <tr>
                  <th className="w-1/2">Before</th>
                  <th className="w-1/2 text-lime-700 dark:text-lime-400">After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flat category navigation</td>
                  <td>
                    <strong>Mega-menu</strong> grouped by recipient, type, and occasion
                  </td>
                </tr>
                <tr>
                  <td>Single-purpose homepage</td>
                  <td>
                    <strong>Homepage sequenced by shopper intent</strong> (festival → gifting →
                    bestsellers → trust signals)
                  </td>
                </tr>
                <tr>
                  <td>Static product photography only</td>
                  <td>
                    <strong>Shoppable video</strong> added for product context
                  </td>
                </tr>
                <tr>
                  <td>No systematic cross-sell</td>
                  <td>
                    <strong>AI recommendations</strong> across 6 placements
                  </td>
                </tr>
                <tr>
                  <td>Single-item checkouts</td>
                  <td>
                    <strong>Combo, gifting, and add-on visibility</strong> at the point of decision
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Image 1: Before / After Storefront Rebrand */}
          <CaseStudyImage
            src="/images/case-studies/rakhi-by-diorin/diorin-before-after-rebrand.png"
            alt="Before and After comparison of Rakhi By Diorin / Sanskriti By Diorin storefront rebrand"
            caption="Before & After: Transitioning from an outdated, cluttered category list to a modern, intent-driven storefront experience."
            priority
          />

          <h2 id="catalogue-navigation">Catalogue and Navigation</h2>
          <p>The mega-menu now groups products three ways at once:</p>
          <ul>
            <li>
              <strong>By recipient:</strong> Brother, Sister, Bhai-Bhabhi
            </li>
            <li>
              <strong>By type:</strong> Silver, Combo, Kids, Bracelet
            </li>
            <li>
              <strong>By occasion:</strong> Ganesh Chaturthi, Gifting Hampers
            </li>
          </ul>
          <p>
            A shopper can enter the catalogue from whichever angle matches their intent, instead of
            searching through one flat list.
          </p>
          <p>
            The homepage follows the same logic. It moves from the current festival push, into
            gifting, into bestsellers, into a trust-signal section (15,000+ customers, handcrafted
            quality, fast shipping, easy returns). Each section does a different job in the
            decision, rather than repeating the same product grid.
          </p>

          <h2 id="adding-weupsell">Adding WeUpsell</h2>
          <p>
            A well-organized store gets the right shopper to the right first product. It does not
            automatically turn that visit into a bigger order. That is the gap WeUpsell was brought
            in to close.
          </p>
          <p>
            WeUpsell&apos;s AI recommendation engine was added across the{" "}
            <strong>
              product page, cart drawer, order status page, post-purchase, popup, and thank-you page
            </strong>
            . It learns from actual purchase behavior, so a shopper browsing Ganesh Chaturthi items
            sees different recommendations than one browsing Silver Rakhis, without anyone building
            that logic by hand.
          </p>

          {/* Image 2: Cart Drawer AI Upsell Widget */}
          <CaseStudyImage
            src="/images/case-studies/rakhi-by-diorin/diorin-cart-drawer-upsell.png"
            alt="WeUpsell cart drawer AI recommendation widget in action on Rakhi By Diorin store"
            caption="WeUpsell Slide-Out Cart Drawer: Personalized AI recommendations, dynamic discount progress tier, and 1-click add-on items converting at 11.85%."
          />

          <h2 id="results-after-launch">Results After Launch</h2>
          <p>
            Across the two months following the rebrand (<strong>Jul 1 – Aug 27, 2026</strong>):
          </p>

          <div className="not-prose my-6 rounded-2xl border border-lime-400/60 bg-card p-6 shadow-soft">
            <h3 className="font-display text-lg font-bold text-ink mb-4">
              Placement Performance Breakdown (₹12.18L Accounted)
            </h3>
            <div className="space-y-4">
              <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-ink">1. Product Page Upsell</div>
                  <div className="font-mono text-sm font-bold text-lime-700 dark:text-lime-400">
                    ₹4,84,257 (39.4%)
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Driven by the highest traffic volume of any placement across product detail pages.
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-ink">2. Cart Drawer Upsell</div>
                  <div className="font-mono text-sm font-bold text-lime-700 dark:text-lime-400">
                    ₹4,77,260 (38.8%)
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  The most efficient placement at an exceptional{" "}
                  <strong>11.85% conversion rate</strong>.
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-ink">3. Recommendation Popup</div>
                  <div className="font-mono text-sm font-bold text-lime-700 dark:text-lime-400">
                    ₹2,53,790 (20.6%)
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Delivered high-value conversions from a targeted, high-intent shopper audience.
                </p>
              </div>

              <div className="rounded-xl border border-border/70 bg-surface/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="font-display font-semibold text-ink">4. Order Status Offer</div>
                  <div className="font-mono text-sm font-bold text-muted-foreground">
                    ₹3,132 (0.3%)
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Converting at 1.65% — capturing additional post-checkout momentum.
                </p>
              </div>
            </div>
          </div>

          <p>
            Four placements accounted for approximately <strong>₹12.18L</strong> of the total. The
            remaining roughly ₹10.7K in the account total is not broken out by these four placements
            in the dashboard summary and is not attributed further here.
          </p>
          <div className="not-prose my-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-5">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
              Future Growth Opportunity
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Post-Purchase and Thank You Page offers generated close to nothing this cycle. That is
              the clearest untapped opportunity for next festive season.
            </p>
          </div>

          <h2 id="takeaways">Takeaways for Shopify Stores</h2>
          <p>If you run a Shopify store with a growing catalogue:</p>
          <div className="not-prose my-6 space-y-3">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Fix structure before adding upsell tools.</strong> A
                messy catalogue limits what an AI engine can learn and recommend effectively.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">
                  Design navigation around intent, not just category.
                </strong>{" "}
                Let shoppers enter by recipient, product type, or occasion.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Match your upsell placement to shopper intent.</strong>{" "}
                Product page for browsing, cart drawer for committed buyers ready to check out.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Treat post-purchase as unfinished business.</strong> It
                is usually the easiest, most overlooked win for increasing lifetime value.
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-lime-700 dark:text-lime-400 mt-0.5" />
              <div className="text-sm">
                <strong className="text-ink">Measure by placement, not just total revenue.</strong>{" "}
                Conversion rate and traffic tell different stories across the funnel.
              </div>
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <GuideFaqAccordion>
            {faqs.map((faq, idx) => (
              <GuideFaqItem key={idx} value={`faq-${idx + 1}`} question={faq.question}>
                <p>{faq.answer}</p>
              </GuideFaqItem>
            ))}
          </GuideFaqAccordion>

          {/* CTA Banner */}
          <div className="not-prose my-10 overflow-hidden rounded-3xl border border-lime-400/60 bg-card p-8 sm:p-10 shadow-soft">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Is your Shopify store ready to convert more of the traffic you&apos;re already
                getting?
              </h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                See how a better storefront structure and AI-powered recommendations can work
                together to increase product discovery, upsells, and revenue.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                >
                  <span>Book a Demo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <Link
                  href="/weupsell-ai-popup-upsell"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-surface-2"
                >
                  <span>Explore WeUpsell</span>
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
