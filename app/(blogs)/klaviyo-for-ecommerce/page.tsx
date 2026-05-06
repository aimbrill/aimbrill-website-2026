import type { Metadata } from "next";
import Image from "next/image";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { GuideFlowStructure } from "@/components/content/GuideFlowStructure";
import { GuidePageShell } from "@/components/content/GuidePageShell";
import { Footer } from "@/components/site/Footer";
import {
  abandonedCartFlowRows,
  browseAbandonmentFlowRows,
  KLAVIYO_GUIDE_TOC,
  postPurchaseFlowRows,
  welcomeFlowRows,
  winBackFlowRows,
} from "./guide-config";

const SITE = "https://aimbrill.com";
const CANONICAL = "/klaviyo-for-ecommerce";
const PUBLISHED_ISO = "2026-05-04";
const PUBLISHED_DISPLAY = "May 4, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const OG_TITLE =
  "Klaviyo for E-commerce: How It Works, Why Brands Use It, and How It Drives Revenue";
const OG_DESC =
  "Flows, segmentation, campaigns, and revenue attribution—what Klaviyo does for Shopify and DTC brands, and how to prioritize setup.";

export const metadata: Metadata = {
  title: "Klaviyo for E-commerce: How It Works, Why Brands Use It | Aimbrill",
  description:
    "How Klaviyo works for e-commerce: flows, segmentation, campaigns, A/B testing, and pricing—plus how to turn email and SMS into a predictable revenue channel.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: OG_TITLE,
    description: OG_DESC,
    url: `${SITE}${CANONICAL}`,
    type: "article",
    publishedTime: PUBLISHED_ISO,
    authors: ["Aimbrill Team"],
    siteName: "Aimbrill",
    images: [{ url: "/images/aimbrill-logo.png", width: 1200, height: 630, alt: "Aimbrill" }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESC,
    images: ["/images/aimbrill-logo.png"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: OG_TITLE,
  description:
    "A practical overview of Klaviyo for e-commerce: behavioral automation, segmentation, campaigns, testing, and pricing context.",
  author: { "@type": "Organization", name: "Aimbrill Team" },
  publisher: {
    "@type": "Organization",
    name: "Aimbrill",
    logo: { "@type": "ImageObject", url: `${SITE}/images/aimbrill-logo.png` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${CANONICAL}` },
};

function GuideFigure({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 768px) 100vw, 720px"
        className="h-auto w-full rounded-lg border border-border"
      />
    </figure>
  );
}

export default function KlaviyoForEcommercePage() {
  const introSummary =
    "Everything you need to know about Klaviyo for e-commerce — from flows and segmentation to A/B testing — " +
    "and how to turn email into a consistent revenue channel for your store.";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-background pb-8 text-foreground md:pb-12">
        <GuidePageShell
          category="Marketing"
          title="Klaviyo for e-commerce: how it works, why brands use it, and how it drives revenue"
          author="Aimbrill Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          toc={KLAVIYO_GUIDE_TOC}
          articleClassName="guide-prose-editorial"
        >
          <h2 id="introduction">Introduction</h2>
          <div className="intro-pull">
            <p>
              Email marketing returns <strong>$42 for every $1 spent</strong> — one of the highest
              ROI channels in digital. Most brands still focus on paid ads and ignore retention.
              That&apos;s where the real money is, and that&apos;s exactly what Klaviyo is built
              for.
            </p>
          </div>
          <p>{introSummary}</p>

          <h2 id="what-is-klaviyo">What is Klaviyo?</h2>
          <p>
            Klaviyo is an email and SMS marketing platform built for e-commerce. The differentiator
            is behavioral data: product views, cart events, orders, and inactivity all feed
            targeting and automation.
          </p>
          <ul>
            <li>Viewed a product → message can follow</li>
            <li>Added to cart → reminder or nudge</li>
            <li>Purchased → post-purchase series</li>
            <li>No activity → win-back path</li>
          </ul>
          <p>
            Instead of one-size-fits-all newsletters, Klaviyo is designed so the right message
            reaches the right person at the right time, largely on autopilot once flows are
            configured.
          </p>

          <h3 id="what-klaviyo-is-used-for">What Klaviyo is used for</h3>
          <ul>
            <li>Automated email flows (welcome, abandoned cart, post-purchase)</li>
            <li>Targeted campaigns using behavior and purchase history</li>
            <li>SMS alongside email where compliance and consent allow</li>
            <li>List growth via forms and popups</li>
            <li>Revenue attribution per message and per flow</li>
          </ul>

          <h2 id="why-ecommerce-brands-choose-klaviyo">Why e-commerce brands choose Klaviyo</h2>

          <h3 id="connects-to-your-store">1. It connects directly to your store</h3>
          <p>
            Shopify and other storefront integrations sync customer actions in near real time, so
            segments and triggers reflect what shoppers actually did—not a weekly CSV export.
          </p>

          <h3 id="revenue-not-just-opens">2. It tracks revenue, not just opens</h3>
          <p>
            Opens and clicks matter, but revenue per recipient and attributed revenue from flows
            tell you whether the program is working. Klaviyo is built around commerce outcomes, not
            vanity metrics.
          </p>

          <h3 id="advanced-segmentation">3. Advanced segmentation</h3>
          <p>
            Hyper-targeted sends typically convert better than batch blasts. Klaviyo&apos;s segment
            builder combines catalog, order, and engagement signals in one place.
          </p>

          <h3 id="scales-with-you">4. It scales with you</h3>
          <p>
            The same concepts apply from thousands of profiles to millions: lists, consent, flows,
            and reporting grow with the brand without swapping platforms at each milestone.
          </p>

          <h2 id="how-klaviyo-flows-work">How Klaviyo flows work</h2>
          <p>
            Flows are automated sequences triggered by behavior or properties. In practice, flows
            produce steady revenue; campaigns produce spikes. Many healthy stores see on the order
            of <strong>30–50% of email revenue from flows</strong>, which is why operators
            prioritize flows before polishing one-off sends.
          </p>
          <div className="guide-callout guide-callout-tip">
            <p>
              Flows generate consistent revenue. Campaigns create spikes. Build flows first, then
              layer campaigns for launches and promotions.
            </p>
          </div>

          <GuideFigure
            src="/images/shopify/brand-logos/blogs/Flows.png"
            alt="Klaviyo flow builder showing automation branches"
            width={1200}
            height={680}
          />

          <h3 id="welcome-series">Welcome series</h3>
          <p>
            Onboards new subscribers and moves them from interest to first purchase. Well-built
            welcomes often see strong engagement; many brands see roughly 40–60% open rates on early
            messages when value is clear and frequency is respectful.
          </p>
          <div className="guide-benchmark">
            <span className="guide-bm-label">Benchmark open rate</span>
            <span className="guide-bm-value">40–60%</span>
            <span className="guide-bm-note">when the first send delivers clear value</span>
          </div>
          <GuideFlowStructure
            title="Welcome series — recommended structure"
            badge="4 emails"
            rows={welcomeFlowRows}
          />

          <h3 id="abandoned-cart">Abandoned cart</h3>
          <p>
            Recovers intent when carts are left behind—still the norm for most stores, with a large
            share of sessions never completing checkout. Timing, tone, and incentive strategy should
            match margin and brand, not copy a generic template.
          </p>
          <GuideFlowStructure
            title="Abandoned cart — recommended structure"
            badge="3 emails"
            rows={abandonedCartFlowRows}
          />

          <h3 id="post-purchase-flow">Post-purchase</h3>
          <p>
            Drives repeat orders, reviews, and education after the sale. This is where retention
            economics improve without increasing ad spend.
          </p>
          <GuideFlowStructure
            title="Post-purchase — recommended structure"
            badge="4 emails"
            rows={postPurchaseFlowRows}
          />

          <h3 id="browse-abandonment">Browse abandonment</h3>
          <p>
            Re-engages people who viewed a product but did not add to cart—lighter touch than
            abandoned cart, with proof-led follow-ups.
          </p>
          <GuideFlowStructure
            title="Browse abandonment — recommended structure"
            badge="2 emails"
            rows={browseAbandonmentFlowRows}
          />

          <h3 id="win-back">Win-back</h3>
          <p>
            Brings back lapsed buyers with clear offers or content based on purchase history—often
            cheaper than acquiring a new customer.
          </p>
          <GuideFlowStructure
            title="Win-back — recommended structure"
            badge="3 emails"
            rows={winBackFlowRows}
          />

          <h2 id="segmentation-growth-lever">Segmentation: the growth lever</h2>
          <p>
            Segmentation means sending relevant messages to defined groups—not blasting the full
            list. Brands that segment deliberately often see roughly{" "}
            <strong>20–40% higher open</strong> rates versus generic sends, alongside lower
            unsubscribe pressure and stronger revenue per recipient.
          </p>

          <GuideFigure
            src="/images/shopify/brand-logos/blogs/segments.png"
            alt="Klaviyo Lists and Segments dashboard"
            width={1200}
            height={680}
          />

          <h3 id="core-segments">Core segments</h3>
          <div className="seg-grid">
            <div className="seg-card">
              <div className="seg-name">VIP customers</div>
              <div className="seg-desc">Top spenders (top 10–15% of buyers by spend).</div>
            </div>
            <div className="seg-card">
              <div className="seg-name">Active subscribers</div>
              <div className="seg-desc">Opened or clicked in the last 90 days.</div>
            </div>
            <div className="seg-card">
              <div className="seg-name">At-risk customers</div>
              <div className="seg-desc">Used to buy regularly but have gone quiet.</div>
            </div>
            <div className="seg-card">
              <div className="seg-name">New non-purchasers</div>
              <div className="seg-desc">Subscribed but never purchased yet.</div>
            </div>
          </div>
          <div className="guide-callout guide-callout-tip">
            <p>
              A common pattern: the top 10–15% of customers contribute an outsized share of
              revenue—often roughly half or more. Segments should reflect that reality.
            </p>
          </div>

          <h2 id="campaigns-vs-flows">Campaigns vs flows</h2>
          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">Flows</th>
                  <th scope="col">Campaigns</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Automated</td>
                  <td>Manual, scheduled sends</td>
                </tr>
                <tr>
                  <td className="guide-td-strong">Steady, compounding revenue</td>
                  <td>Revenue spikes around launches and sales</td>
                </tr>
                <tr>
                  <td>Triggered by behavior or lifecycle events</td>
                  <td>Planned around calendar and inventory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            You need both. Flows build consistent passive revenue. Campaigns create spikes around
            promotions, product launches, and seasonal moments.
          </p>
          <GuideFigure
            src="/images/shopify/brand-logos/blogs/Campaigns.png"
            alt="Klaviyo Campaigns view with campaign list, filters, open and click rates, and revenue attribution"
            width={1797}
            height={875}
          />
          <ul>
            <li>
              <strong>Promotional campaigns</strong> — sales, discount codes, limited-time offers.
              Drive short-term spikes but use strategically; over-discounting trains shoppers to
              wait for sales.
            </li>
            <li>
              <strong>Product launch campaigns</strong> — new arrivals, restocks, seasonal
              collections. Send to VIPs and repeat buyers first as early access, then broaden.
            </li>
            <li>
              <strong>Value and newsletter campaigns</strong> — tips, how-tos, brand stories.
              Promotions-only lists go cold; value keeps engagement.
            </li>
            <li>
              <strong>Holiday and seasonal campaigns</strong> — plan list warming several weeks
              ahead of peak periods.
            </li>
          </ul>
          <h3 id="how-often-should-you-send">How often should you send?</h3>
          <ul>
            <li>
              <strong>Warm, engaged list:</strong> 2–4 campaigns per week is often sustainable.
            </li>
            <li>
              <strong>Mixed engagement:</strong> 1–2 per week.
            </li>
            <li>
              <strong>Cold or unengaged list:</strong> at most about one per week until
              re-engagement improves.
            </li>
          </ul>
          <div className="guide-callout guide-callout-warn">
            <p>
              <strong>Common mistake:</strong> blasting the whole list too often. One highly
              relevant send per week usually beats a daily message nobody opens.
            </p>
          </div>

          <h2 id="ab-testing-analytics">A/B testing and analytics</h2>
          <p>
            Klaviyo&apos;s built-in testing and analytics tools are what separate brands that grow
            email revenue systematically from brands that guess and hope. Here&apos;s what to test
            and what to track.
          </p>

          <p>
            Klaviyo&apos;s analytics dashboard — see revenue, engagement, and performance across all
            flows and campaigns.
          </p>

          <h3>What to test</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Subject lines — start here.</strong> Subject lines have the biggest impact on
              open rates and are the fastest to test. Things to test: question vs statement, with
              emoji vs without, short vs long, personalised (first name) vs generic, urgency vs
              curiosity.
            </li>
            <li>
              <strong>Send time.</strong> Klaviyo&apos;s Smart Send Time feature analyses your
              audience&apos;s behaviour to find the best delivery window. You can also test manually
              — morning vs evening, weekday vs weekend. Results vary significantly by brand and
              audience.
            </li>
            <li>
              <strong>Email content.</strong> Long vs short emails, image-heavy vs text-based,
              single CTA vs multiple, product-focused vs story-led.
            </li>
            <li>
              <strong>Preview text.</strong> The line of text after your subject line in the inbox
              preview. Most brands ignore it — it&apos;s free open-rate real estate.
            </li>
          </ul>

          <h3 id="key-metrics-weekly">The key metrics to track every week</h3>
          <div className="metrics-grid">
            <div className="metric">
              <div className="metric-label">Open rate</div>
              <div className="metric-num">25–35%</div>
              <div className="metric-desc">
                E-commerce benchmark. Below 20% = subject lines or deliverability issue. Above 40% =
                excellent.
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">Click rate</div>
              <div className="metric-num">2–5%</div>
              <div className="metric-desc">
                For campaigns. Flows benchmark 3–8%. Low click rate = your content or CTA isn&apos;t
                compelling enough.
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">Revenue per recipient</div>
              <div className="metric-num">RPR</div>
              <div className="metric-desc">
                The most important metric most brands ignore. Total email revenue ÷ total recipients
                sent. Compare campaigns on equal footing.
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">Unsubscribe rate</div>
              <div className="metric-num">&lt; 0.2%</div>
              <div className="metric-desc">
                Per send. Higher than this = wrong audience, too frequent, or irrelevant content.
              </div>
            </div>
          </div>

          <p>
            Keep these metrics in your dashboard weekly reviews — open and click tell you how
            messages perform, RPR shows commercial impact, and unsubscribe rate signals list health.
          </p>

          <h3 id="dashboard-weekly-checks" className="mt-6">
            What to check on your Klaviyo dashboard weekly
          </h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Flow revenue</strong> — growing month over month? If not, a flow needs
              updating
            </li>
            <li>
              <strong>Campaign revenue per recipient</strong> — which sends drove the most real
              value?
            </li>
            <li>
              <strong>List growth rate</strong> — adding subscribers faster than you&apos;re losing
              them?
            </li>
            <li>
              <strong>Active segment size</strong> — is your engaged audience growing or shrinking?
            </li>
          </ol>

          <div className="dashboard-image my-6">
            <Image
              src="/images/shopify/brand-logos/blogs/dashboard.png"
              alt="Klaviyo dashboard showing business performance metrics"
              width={1200}
              height={680}
              className="w-full rounded-md border"
            />
          </div>

          <h2 id="who-should-use-klaviyo">Who Should Use Klaviyo?</h2>
          <div className="who-grid">
            <div className="who-card who-good">
              <div className="who-head">KLAVIYO IS A GREAT FIT IF…</div>
              <ul className="who-list">
                <li>You run an e-commerce store (Shopify, WooCommerce, etc.)</li>
                <li>Email is — or you want it to be — a significant revenue channel</li>
                <li>You have more than 500 subscribers and are growing</li>
                <li>You want behaviour-based automation, not just blasts</li>
                <li>You want to know exactly how much revenue email generates</li>
              </ul>
            </div>
            <div className="who-card who-bad">
              <div className="who-head">IT&apos;S PROBABLY NOT RIGHT IF…</div>
              <ul className="who-list">
                <li>You&apos;re a service business or B2B company with no online store</li>
                <li>You need a very simple tool with minimal learning curve</li>
                <li>Your list is under 250 and you&apos;re in very early stages</li>
                <li>Budget is extremely tight at startup stage</li>
                <li>You won&apos;t invest time in proper setup and strategy</li>
              </ul>
            </div>
          </div>

          <div className="guide-callout guide-callout-tip">
            <p>
              <strong>The honest truth:</strong> Klaviyo is only as good as the strategy and setup
              behind it. A Klaviyo account with no flows and no segmentation will underperform a
              well-configured basic tool. The platform is the infrastructure — the strategy is what
              generates the results.
            </p>
          </div>

          <h2 id="faqs">Frequently asked questions</h2>
          <GuideFaqAccordion>
            <GuideFaqItem value="faq-what" question="What is Klaviyo and what is it used for?">
              <p>
                Klaviyo is an email and SMS marketing platform built for e-commerce. It connects to
                your store to send automated flows (welcome, abandoned cart, post-purchase) and
                targeted campaigns based on customer behaviour.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-free" question="Is Klaviyo free to use?">
              <p>
                There is a free tier for small contact counts and limited monthly sends. Paid plans
                scale with list size; SMS is billed per message.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-revenue" question="How much revenue should Klaviyo generate?">
              <p>
                A strong program often lands around <strong>20–30% of total revenue</strong> for
                many stores. If you are materially below that, flows, segmentation, and send
                strategy are the usual levers.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-flows-order" question="Which flows should you set up first?">
              <p>Start with the highest-intent automations, then expand:</p>
              <ul>
                <li>Abandoned cart</li>
                <li>Welcome series</li>
              </ul>
              <p>Then add post-purchase, browse abandonment, and win-back as you scale.</p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-timeline" question="How long does a proper setup take?">
              <p>
                A basic store connection plus core flows can ship in a few days. A full segmentation
                and testing program typically unfolds over a few weeks as you learn from data.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-sms" question="Does Klaviyo support email and SMS together?">
              <p>
                Yes. You can combine email and SMS in the same flows where compliance and consent
                allow, which often improves recovery on high-intent journeys like abandoned cart.
              </p>
            </GuideFaqItem>
          </GuideFaqAccordion>

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Klaviyo is powerful—but it&apos;s not the tool alone that drives results. What really
            makes the difference is how you use it.
          </p>
          <p>
            Brands that see consistent growth don&apos;t rely on random campaigns or one-off emails.
            They build strong foundations with flows, segmentation, and continuous testing. Flows
            create predictable revenue, segmentation improves relevance, and campaigns amplify
            results at the right moments.
          </p>
          <p>
            If your email channel isn&apos;t generating at least 20–30% of your total revenue,
            there&apos;s likely untapped potential. In most cases, the gap comes down to missing
            flows, weak segmentation, or inconsistent strategy—not the platform itself.
          </p>
          <p>
            <strong>The opportunity is simple:</strong> Set up the right systems, focus on customer
            behavior, and let automation do the heavy lifting.
          </p>
          <p>
            If you want to identify exactly where your Klaviyo setup can improve,{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
              we can help
            </a>
            . From building high-converting flows to refining segmentation and tracking real revenue
            impact—we focus on what actually moves the needle.
          </p>
        </GuidePageShell>
      </main>
      <Footer />
    </>
  );
}
