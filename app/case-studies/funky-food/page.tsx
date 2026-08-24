import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuidePageShell, type GuideTocItem } from "@/components/content/GuidePageShell";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { ChatGptSummaryCard } from "@/components/case-studies/ChatGptSummaryCard";
import { ImageSlot } from "@/components/case-studies/ImageSlot";
import { Footer } from "@/components/site/Footer";

const SITE = "https://aimbrill.com";
const CANONICAL = "/case-studies/funky-food";
const PUBLISHED_ISO = "2026-05-18";
const MODIFIED_ISO = "2026-08-20";
const PUBLISHED_DISPLAY = "May 18, 2026 (Updated Aug 20, 2026)";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const PAGE_URL = `${SITE}${CANONICAL}`;
const ARTICLE_TITLE =
  "Funky Food: How Strategic Flow Automation Unlocked Millions in Subscription Revenue";
const ARTICLE_LEAD =
  "How Aimbrill built a connected subscription flow for Funky Food — automating delivery eligibility, dynamic box building, and native checkout validation end-to-end.";

export const metadata: Metadata = {
  title: "Funky Food: How Strategic Automation Unlocked Millions | Aimbrill Case Study",
  description:
    "How Aimbrill built an automated subscription flow for Funky Food — automating delivery eligibility, box building, and checkout validation to unlock millions in revenue.",
  alternates: { canonical: CANONICAL },
  keywords: [
    "Shopify Plus subscription case study",
    "Shopify checkout extensibility example",
    "meal subscription box builder",
    "custom Shopify subscription app",
    "Shopify box builder development",
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
    title: "Funky Food: How Strategic Automation Unlocked Millions in Revenue",
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
    title: "Funky Food: How Strategic Automation Unlocked Millions in Revenue",
    description: ARTICLE_LEAD,
  },
};

const faqs = [
  {
    question: "Is Funky Food's flow a public app or a custom build?",
    answer:
      "It is a custom-engineered app built on Shopify Plus, integrated directly with native checkout extensibility and selling plan APIs, tailored specifically to Funky Food's delivery zones, produce box rules, and warehouse workflows.",
  },
  {
    question: "What was actually broken before this build?",
    answer:
      "Manual ZIP code checks, guesswork on box sizing, add-ons that conflicted with the subscription cart, and packing lists that didn't reliably match what customers ordered — all handled through spreadsheets and support tickets rather than the storefront itself.",
  },
  {
    question: "What does the customer experience now, compared to before?",
    answer:
      "A guided six-step flow: upfront suburb check, household-size box recommendation, a customisable weekly box with swaps and exclusions, rescued add-ons in the same cart, and a checkout that clearly displays the recurring weekly total before payment.",
  },
  {
    question: "Can another subscription or meal-box brand use a similar system?",
    answer:
      "Yes. Aimbrill architects custom subscription engines, box builders, and delivery gates tailored to the unique product configurations and operational logistics of subscription & DTC brands.",
  },
  {
    question: "Is Funky Food on Shopify Plus?",
    answer:
      "Yes — Funky Food runs on Shopify Plus, and the checkout-level validation uses Shopify's native checkout extensibility to enforce postcode and box-content rules inside checkout before an order is placed.",
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
  { id: "about-funky-food", label: "About Funky Food" },
  { id: "the-problem", label: "The Problem" },
  { id: "customer-journey", label: "Customer Journey (6 Steps)" },
  { id: "the-build", label: "The Build Behind the Flow" },
  { id: "design-decisions", label: "Why the Flow Converts" },
  { id: "issue-solution", label: "Issue → Solution" },
  { id: "results", label: "Results" },
  { id: "is-this-relevant", label: "Is This Relevant to You?" },
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

export default function FunkyFoodCaseStudyPage() {
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
          secondaryTag="Shopify Plus · Subscriptions · Custom App"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill Engineering Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Need a custom subscription flow, box builder, or delivery logic for your Shopify Plus brand?",
            href: CALENDLY_URL,
            label: "Book a technical call →",
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
                      href="https://funkyfood.com.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-border hover:decoration-ink"
                    >
                      Funky Food Australia (funkyfood.com.au)
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-border/60">
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground">Industry</th>
                  <td className="py-2.5 text-ink">Rescued food / weekly meal box subscription</td>
                </tr>
                <tr className="border-b border-border/60">
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground">Platform</th>
                  <td className="py-2.5 text-ink">
                    <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Shopify Plus
                    </span>
                  </td>
                </tr>
                <tr>
                  <th className="py-2.5 pr-4 font-semibold text-muted-foreground">Engagement</th>
                  <td className="py-2.5 text-ink">
                    Custom development — box builder, delivery eligibility logic, subscription flow
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <ChatGptSummaryCard pageUrl={PAGE_URL} title={ARTICLE_TITLE} />

          <h2 id="about-funky-food">About Funky Food: The Brand & Mission</h2>
          <p>
            <strong>Funky Food</strong> is an Australian sustainable produce and weekly meal
            subscription brand operating on Shopify Plus. Every week, millions of kilograms of
            perfectly delicious, farm-fresh fruits and vegetables are discarded or rejected by major
            supermarkets simply because they don&apos;t meet rigid cosmetic standards for size,
            shape, or appearance.
          </p>
          <p>
            Funky Food partners directly with local Australian farmers and growers to rescue this
            surplus and &ldquo;quirky&rdquo; produce, packing it into customizable weekly fresh
            boxes (from XSmall to Big) alongside rescued pantry essentials and cold-pressed juices.
            By delivering farm-to-door directly to households, Funky Food helps families save up to{" "}
            <strong>40% compared to supermarket prices</strong> while preventing food waste at the
            source.
          </p>
          <p>
            As order volume grew, managing postcode delivery zones, box customizations, and
            recurring subscriptions manually was creating operational bottlenecks. Aimbrill stepped
            in to automate their entire customer journey into one seamless, connected flow.
          </p>

          {/* Image 1: Homepage hero */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/homepage-hero.png"
            alt="Funky Food homepage with suburb entry and box builder CTA"
            caption="Funky Food homepage featuring upfront suburb eligibility entry and box builder CTA."
            priority
          />

          <h2 id="the-problem">The Problem: A Growing Brand Outrunning Its Manual Operations</h2>
          <p>
            Demand was not the issue — operations were. Four specific things were breaking every
            week:
          </p>
          <ul>
            <li>
              <strong>Postcode rules were manual.</strong> Customers could order from suburbs
              outside the delivery zone. The team found out after payment, then cancelled, refunded,
              and explained the restriction to an already-frustrated customer.
            </li>
            <li>
              <strong>Box size was a guess.</strong> Shoppers did not know if they needed an XSmall
              or a Big box. Size questions, swaps, and exclusions were handled through support
              tickets, not the storefront.
            </li>
            <li>
              <strong>Add-ons broke the subscription cart.</strong> Off-the-shelf apps could not
              keep a recurring weekly box and one-time rescued pantry items in the same cart without
              checkout errors.
            </li>
            <li>
              <strong>Packing did not match the order.</strong> Warehouse staff worked from lists
              that were not reliably tied to what the customer actually selected, so boxes were
              corrected after the order was already paid for.
            </li>
          </ul>
          <p>
            The brief was not &ldquo;add a subscription app.&rdquo; It was to build one flow where
            eligibility, box building, and delivery logic all agree with each other automatically,
            before an order is ever created.
          </p>

          <h2 id="customer-journey">The Customer Journey: Six Steps From Suburb to Subscription</h2>
          <p>
            This is the customer-facing flow Aimbrill designed and built, in the order a shopper
            moves through it:
          </p>

          <h3 id="step-1-suburb">1. Suburb / postcode gate</h3>
          <p>
            The customer enters their suburb before they can build a box. If the area is not on a
            courier route, they never reach checkout at all — invalid orders are stopped at the
            first screen instead of becoming a refund three days later.
          </p>
          {/* Image 2: Suburb check */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/suburb-gate.png"
            alt="Funky Food suburb eligibility check before checkout"
            caption="Step 1: Upfront suburb & postcode autocomplete check that halts out-of-zone orders before customisation."
          />

          <h3 id="step-2-household">2. Household size</h3>
          <p>
            Adult and children counters recommend a box size (XSmall, Small, Medium, or Big) instead
            of asking the shopper to guess a SKU. This single step removed &ldquo;which box is right
            for two people?&rdquo; from the support queue entirely.
          </p>
          {/* Image 4: Household size */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/household-size.png"
            alt="Funky Food household size selector for box recommendation"
            caption="Step 2: Interactive household counters (Adults & Children) recommending the ideal box size."
          />

          <h3 id="step-3-box">3. Weekly box + swaps</h3>
          <p>
            The customer sees next week&apos;s actual produce list and can change size, swap
            individual items, or set exclusions. The box stops being a mystery bag — they know
            exactly what&apos;s arriving before they pay.
          </p>
          {/* Image 5: Weekly order box size */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/weekly-order-box.png"
            alt="Funky Food weekly box size selector with savings badge"
            caption="Step 3: Weekly produce overview with box size toggles (XSmall, Small, Medium, Big) and dynamic supermarket savings badge."
          />
          {/* Image 6: Weekly box customiser drawer */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/box-customiser-drawer.png"
            alt="Funky Food weekly box customiser with swap and exclusion options"
            caption="Step 3 (Customiser Drawer): Interactive item swapping and exclusion controls for upcoming weekly produce."
          />

          <h3 id="step-4-addons">4. Rescued add-ons</h3>
          <p>
            Once the weekly box is set, the customer can add rescued juice, pantry items, fruit, or
            veg — each tagged with a &ldquo;Rescued&rdquo; badge and a savings percentage versus
            supermarket pricing. These sit in the same cart as the recurring box, not a separate
            order.
          </p>
          {/* Image 7: Rescued add-ons grid */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/rescued-addons.png"
            alt="Funky Food rescued add-ons with savings badges"
            caption="Step 4: Rescued add-ons shop grid with category filters, 'Rescued' badges, and comparison savings percentages."
          />

          <h3 id="step-5-cart">5. Cart: delivery, frequency, savings</h3>
          <p>
            The cart re-checks the postcode, shows delivery frequency, a free-delivery progress bar,
            and total savings versus supermarket prices — all before checkout, so nothing is a
            surprise at the final step.
          </p>
          {/* Image 8: Cart drawer */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/cart-drawer.png"
            alt="Funky Food cart showing delivery frequency and savings progress"
            caption="Step 5: Unified slide-out cart showing suburb validation, delivery schedule, free-delivery progress bar, and calculated supermarket savings."
          />

          <h3 id="step-6-checkout">6. Recurring checkout</h3>
          <p>
            Checkout shows express payment options (Shop Pay, PayPal, Google Pay), customer reviews,
            the exact produce list for the upcoming box, and a clear &ldquo;$X every week&rdquo;
            line — so the customer can see this is a subscription, not a one-off purchase, before
            they commit.
          </p>
          {/* Image 9: Checkout flow */}
          <CaseStudyImage
            src="/images/case-studies/funky-food/checkout-flow.png"
            alt="Funky Food checkout with delivery details and box contents"
            caption="Step 6: Native checkout displaying clear recurring subscription subtotal, itemized box contents, Channel 7 badge, and Trustpilot reviews."
          />

          <div className="not-prose my-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
              Operational Outcome
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Support stopped fielding &ldquo;which size do I need,&rdquo; staff stopped fixing
              orders after the fact, and ZIP-related refunds dropped to effectively zero — without
              adding headcount.
            </p>
          </div>

          <h2 id="the-build">The Build Behind the Flow</h2>
          <p>
            Rather than stacking multiple apps that each partially own ZIP rules, subscriptions, or
            bundling — a common failure pattern that causes checkout conflicts — Aimbrill built one
            custom system that owns the entire flow end-to-end.
          </p>

          <CaseStudyImage
            src="/images/case-studies/funky-food/architecture-diagram.png"
            alt="Aimbrill Custom App architecture diagram for Funky Food"
            caption="System Architecture: One connected system uniting ZIP Validation, Box Builder, Subscriptions, Selling Plans API, and Checkout Extensibility in real-time."
          />

          <h3 id="build-app">One custom app</h3>
          <p>
            ZIP validation, box configuration, and recurring order logic all run inside a single
            custom app instead of competing storefront scripts. The same rule set is applied twice —
            once when the customer starts the journey, and again immediately before the order is
            actually created at native checkout — so nothing valid at step 1 can become invalid by
            checkout.
          </p>

          <h3 id="build-line-items">Line-item properties</h3>
          <p>
            Box size, item swaps, and exclusions are stored directly on the line item. The warehouse
            packing list can read exactly what a customer chose without needing a side spreadsheet —
            closing the gap between what was ordered and what got packed.
          </p>

          <h3 id="build-selling-plans">Native selling plans</h3>
          <p>
            The weekly box runs on Shopify&apos;s native selling plan infrastructure rather than a
            bolted-on third-party subscription widget. Checkout natively displays a recurring
            subtotal, and customers can skip or pause deliveries later through Shopify&apos;s
            standard customer portal — no complex custom account system required.
          </p>

          <h3 id="build-checkout-extensibility">Checkout extensibility</h3>
          <p>
            Postcode and box contents are re-verified inside Shopify&apos;s native checkout
            extension framework immediately before the order is created. This enforces custom
            business rules inside checkout itself, not just in the front-end UI, so an out-of-zone
            suburb or an incomplete box cannot reach payment.
          </p>

          <blockquote>
            <p>
              <strong>Why this matters for a brand evaluating an agency:</strong> this is the
              difference between installing separate apps and building a cohesive system. Apps that
              do not share data create exactly the kind of conflict Funky Food had before — a
              subscription app that does not know about a bundling app&apos;s rules. A custom build
              means every rule is enforced consistently, at every stage, by one source of truth.
            </p>
          </blockquote>

          <h2 id="design-decisions">Why the Flow Converts: The Design Decisions Behind It</h2>
          <p>
            Beyond the mechanics, several choices in this flow were made specifically to reduce
            hesitation at a point where subscription commitments typically cause drop-off:
          </p>
          <ul>
            <li>
              <strong>Eligibility is checked first, not last.</strong> Asking for a suburb before
              anything else means a shopper who cannot be served finds out in five seconds, not
              after filling in an entire order.
            </li>
            <li>
              <strong>Guesswork is replaced with guided input.</strong> Household-size counters turn
              an ambiguous decision into a simple, low-friction question, reducing cognitive load
              for a first-time buyer.
            </li>
            <li>
              <strong>Transparency before commitment.</strong> Showing the exact produce list, swap
              options, and savings percentage before checkout addresses the biggest hesitation point
              in food-box subscriptions: not knowing what you are actually going to receive.
            </li>
            <li>
              <strong>Progress and reward framing in cart.</strong> A free-delivery progress bar and
              running savings total reframe the cart from &ldquo;here&apos;s what you are
              spending&rdquo; to &ldquo;here&apos;s what you are saving&rdquo; — a well-established
              pattern for reducing cart abandonment.
            </li>
            <li>
              <strong>Subscription clarity at the exact moment of payment.</strong> Rather than
              burying the recurring nature of the purchase in fine print, checkout explicitly shows
              &ldquo;$X every week&rdquo; alongside reviews and press mentions, building confidence
              right when commitment-anxiety is highest.
            </li>
          </ul>
          <p>
            None of these are visual polish — each maps directly to a specific point in the funnel
            where a hesitant shopper would otherwise drop off.
          </p>

          <h2 id="issue-solution">Issue → Solution at a Glance</h2>
          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Issue</th>
                  <th>What Was Solved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Orders placed in non-delivery suburbs</td>
                  <td>Suburb/ZIP check at step 1, then re-verified in cart and checkout</td>
                </tr>
                <tr>
                  <td>Shoppers guessing their box size</td>
                  <td>Household step recommends XSmall → Big based on adults and children</td>
                </tr>
                <tr>
                  <td>No visibility into box contents before purchase</td>
                  <td>
                    Weekly &ldquo;what&apos;s included&rdquo; list with swap and exclude options
                  </td>
                </tr>
                <tr>
                  <td>Add-ons breaking the subscription cart</td>
                  <td>One unified cart for the weekly box and rescued add-ons</td>
                </tr>
                <tr>
                  <td>Staff fixing orders after payment</td>
                  <td>Validation rules run inside the app before the order is ever created</td>
                </tr>
                <tr>
                  <td>Checkout feeling risky for a recurring commitment</td>
                  <td>Reviews, express pay, and the recurring total shown clearly on checkout</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="results">The Results</h2>
          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Before</th>
                  <th>After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manual ZIP/swap corrections</td>
                  <td>Handled via spreadsheet, ongoing weekly work</td>
                  <td>
                    <strong>0%</strong> — fully automated
                  </td>
                </tr>
                <tr>
                  <td>Order errors (out-of-zone / incomplete boxes)</td>
                  <td>Recurring issue, caught after payment</td>
                  <td>
                    <strong>Near 0</strong> — blocked before the order exists
                  </td>
                </tr>
                <tr>
                  <td>End-to-end flow</td>
                  <td>Fragmented across manual steps and multiple tools</td>
                  <td>
                    <strong>One connected system</strong>, suburb check through delivery
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="is-this-relevant">Is This Relevant to Your Brand?</h2>
          <p>
            This project is a useful reference point because it was not a simple storefront build —
            it required eligibility logic, dynamic product configuration, native subscription
            billing, and checkout-level validation to all work together without conflicting. If your
            brand has:
          </p>
          <ul>
            <li>A subscription or recurring-order model</li>
            <li>Delivery zones, eligibility rules, or geographic restrictions</li>
            <li>
              A product that needs to be configured or customised before purchase (box builders,
              bundles, quizzes)
            </li>
            <li>Operational work currently happening in spreadsheets instead of your storefront</li>
          </ul>
          <p>
            ...this is the type of system Aimbrill builds — one flow that owns the logic end-to-end,
            rather than several apps loosely stitched together.
          </p>
          <p>
            Explore our related solution, the{" "}
            <Link href="/meal-bundle-builder" className="font-semibold text-ink underline">
              Meal Bundle Builder
            </Link>
            , or{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline"
            >
              schedule a technical consultation with our engineering team
            </a>
            .
          </p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <GuideFaqAccordion>
            {faqs.map((faq, idx) => (
              <GuideFaqItem key={idx} value={`faq-${idx + 1}`} question={faq.question}>
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
