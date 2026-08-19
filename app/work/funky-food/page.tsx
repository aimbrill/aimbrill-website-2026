import type { Metadata } from "next";
import { GuidePageShell, type GuideTocItem } from "@/components/content/GuidePageShell";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { ChatGptSummaryCard } from "@/components/work/ChatGptSummaryCard";
import { ImageSlot } from "@/components/work/ImageSlot";
import { Footer } from "@/components/site/Footer";

const SITE = "https://aimbrill.com";
const CANONICAL = "/work/funky-food";
const PUBLISHED_ISO = "2026-05-18";
const PUBLISHED_DISPLAY = "May 18, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const PAGE_URL = `${SITE}${CANONICAL}`;
const ARTICLE_TITLE = "How We Automated Funky Food's Meal Subscription on Shopify";
const ARTICLE_LEAD =
  "Funky Food was running ZIP rules, box customisation, and delivery sync by hand. We turned that into one Shopify flow from suburb check to recurring checkout.";

export const metadata: Metadata = {
  title: "Funky Food Case Study: Automated Meal Subscription on Shopify | Aimbrill",
  description:
    "How Aimbrill built a custom Shopify box builder, suburb validation gate, and recurring subscription flow for Funky Food Australia.",
  alternates: { canonical: CANONICAL },
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
    authors: ["Aimbrill"],
    siteName: "Aimbrill",
  },
  twitter: {
    card: "summary_large_image",
    title: ARTICLE_TITLE,
    description: ARTICLE_LEAD,
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description: ARTICLE_LEAD,
  author: { "@type": "Organization", name: "Aimbrill" },
  publisher: {
    "@type": "Organization",
    name: "Aimbrill",
    logo: { "@type": "ImageObject", url: `${SITE}/images/aimbrill-logo.png` },
  },
  datePublished: PUBLISHED_ISO,
  dateModified: PUBLISHED_ISO,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

const TOC: GuideTocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "the-problem", label: "The problem" },
  { id: "functional", label: "Functional solution" },
  { id: "technical", label: "Technical solution" },
  { id: "issue-solution", label: "Issue → solution" },
  { id: "results", label: "Results" },
  { id: "faq", label: "FAQ" },
  { id: "conclusion", label: "Conclusion" },
];

export default function FunkyFoodCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-background pb-8 text-foreground md:pb-12">
        <GuidePageShell
          category="Case Study"
          secondaryTag="Shopify · Subscriptions"
          title={ARTICLE_TITLE}
          lead={ARTICLE_LEAD}
          author="Aimbrill"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          toc={TOC}
          articleClassName="guide-prose-editorial"
          sidebarCta={{
            body: "Need a custom subscription flow, box builder, or delivery logic for your Shopify brand?",
            href: CALENDLY_URL,
            label: "Book a technical call →",
            external: true,
          }}
        >
          <h2 id="introduction">Introduction</h2>
          <p>
            Funky Food Australia (funkyfood.com.au) delivers weekly rescued fruit and vegetable
            boxes to households. The brand was growing, but the Shopify store behind it was still
            running delivery rules, box customisation, and packing lists by hand.
          </p>
          <p>
            This case study splits the work into two parts: the <strong>functional</strong> journey
            customers and ops now use, and the <strong>technical</strong> Shopify system that makes
            that journey hold together.
          </p>

          <ChatGptSummaryCard pageUrl={PAGE_URL} title={ARTICLE_TITLE} />

          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Industry</th>
                  <th>What we built</th>
                  <th>Stack</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Funky Food Australia</td>
                  <td>Rescued food / weekly meal box</td>
                  <td>Custom box builder + delivery gate</td>
                  <td>Shopify, selling plans, custom app, checkout extensions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ImageSlot
            size="hero"
            label="Homepage screenshot"
            hint="Rescue Food From Waste, suburb input, Build my box."
          />

          <h2 id="the-problem">The problem</h2>
          <p>Demand was fine. Operations were not. Four things kept breaking the week:</p>
          <ul>
            <li>
              <strong>Postcode rules were manual.</strong> Customers could order from suburbs Funky
              Food did not deliver to. The team then cancelled, refunded, and explained the
              restriction after payment.
            </li>
            <li>
              <strong>Box size was a guess.</strong> Shoppers did not know if they needed XSmall or
              Big. Weekly swaps and exclusions lived in support tickets and spreadsheets.
            </li>
            <li>
              <strong>Add-ons fought the subscription.</strong> Off-the-shelf apps could not keep a
              weekly box and one-time rescued pantry items in one cart without breaking checkout.
            </li>
            <li>
              <strong>Packing did not match the order.</strong> Warehouse lists were not tied to
              what the customer actually chose. Staff fixed boxes after the order was already paid.
            </li>
          </ul>
          <p>
            The store needed one flow: check the suburb first, then size the box, then customise it,
            then add extras, then check out on a weekly plan — with the same rules applied again
            before the order is created.
          </p>

          <h2 id="functional">Functional solution</h2>
          <p>
            Functional means what the customer and the packing team actually do. The live journey is
            six steps. Each step has an empty image slot so you can drop the screenshot in later.
          </p>

          <h3 id="functional-suburb">1. Suburb / postcode gate</h3>
          <p>
            The customer enters a suburb before building a box. If the area is not on a courier
            route, they never reach checkout. Invalid orders stop here instead of becoming refunds.
          </p>
          <ImageSlot
            label="Step 1 — suburb check"
            hint="Enter suburb + Get started / Build my box."
          />

          <h3 id="functional-household">2. Household size</h3>
          <p>
            Adults and children counters recommend a box size (XSmall, Small, Medium, or Big). The
            shopper does not pick a SKU by guesswork. Support stops answering “which box is right
            for two people?”
          </p>
          <ImageSlot
            label="Step 2 — household size"
            hint="How many people are you feeding? Adults / Children counters."
          />

          <h3 id="functional-box">3. Weekly box + swaps</h3>
          <p>
            The customer sees next week’s produce list, changes size, swaps items, and sets
            exclusions. The box is no longer a mystery bag — they know what arrives.
          </p>
          <ImageSlot
            size="wide"
            label="Step 3 — box customiser"
            hint="Weekly order + Customise drawer: What’s included, Swap, Exclusions."
          />

          <h3 id="functional-addons">4. Rescued add-ons</h3>
          <p>
            After the box is set, they can add rescued juice, pantry, fruit, and veg. Each product
            shows a Rescued badge and a save-vs-supermarket percentage. Add-ons sit in the same cart
            as the weekly box.
          </p>
          <ImageSlot
            size="wide"
            label="Step 4 — shop add-ons"
            hint="Shop Now grid: category pills, Rescued / Save % badges."
          />

          <h3 id="functional-cart">5. Cart: delivery, frequency, savings</h3>
          <p>
            The cart re-checks postcode, shows weekly frequency, free-delivery progress, and
            supermarket savings. Discount codes still work. Ops no longer reconcile ZIP in a
            spreadsheet after payment.
          </p>
          <ImageSlot
            size="wide"
            label="Step 5 — cart"
            hint="Slide-out cart: suburb, weekly frequency, box line, savings, checkout."
          />

          <h3 id="functional-checkout">6. Recurring checkout</h3>
          <p>
            Checkout shows Shop Pay, PayPal, and Google Pay, a review block, Channel 7 proof, the
            exact produce list, and “$X every week”. The customer can see this is a subscription
            before they pay.
          </p>
          <ImageSlot
            size="wide"
            label="Step 6 — checkout"
            hint="Express pay, reviews, box contents, recurring subtotal."
          />

          <h2 id="technical">Technical solution</h2>
          <p>
            Technical means what Shopify is doing underneath those six steps. We did not stack five
            apps that each owned ZIP, subscriptions, or bundles. One custom flow owns eligibility,
            box configuration, selling plans, and the last checkout check.
          </p>
          <ImageSlot
            size="wide"
            label="Technical diagram"
            hint="Optional: flow diagram or selling-plan setup. No private admin URLs."
          />

          <h3 id="technical-app">One custom Shopify app</h3>
          <p>
            ZIP validation, box configuration, and recurring orders run in one app instead of
            competing storefront scripts. The same rules apply at the start of the journey and again
            before the order is created.
          </p>

          <h3 id="technical-line-items">Line-item properties</h3>
          <p>
            Size, swaps, and exclusions store on the line item. Packing lists can read what the
            customer chose without a side spreadsheet.
          </p>

          <h3 id="technical-selling-plans">Native selling plans</h3>
          <p>
            The weekly box uses Shopify selling plans so checkout can show a recurring subtotal, and
            the customer can skip or pause later in the customer portal.
          </p>

          <h3 id="technical-checkout">Pre-checkout validation</h3>
          <p>
            Checkout extensions re-check postcode and box contents before the order exists. A bad
            ZIP or an empty box cannot sneak through at the last step.
          </p>

          <h2 id="issue-solution">Issue → solution</h2>
          <p>Each operational issue mapped to one rule in the flow:</p>
          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Issue</th>
                  <th>What we solved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Orders in non-delivery suburbs</td>
                  <td>Suburb / ZIP check at step 1, then again in cart and checkout</td>
                </tr>
                <tr>
                  <td>Guessing box size</td>
                  <td>Household step suggests XSmall → Big from adults and children</td>
                </tr>
                <tr>
                  <td>Nobody knew what was in the box</td>
                  <td>Weekly “what’s included” list with swap and exclude</td>
                </tr>
                <tr>
                  <td>Add-ons broke the subscription cart</td>
                  <td>One cart: weekly box + rescued add-ons</td>
                </tr>
                <tr>
                  <td>Staff fixing orders after payment</td>
                  <td>Rules run in the app before the order exists</td>
                </tr>
                <tr>
                  <td>Checkout felt risky for a weekly plan</td>
                  <td>Reviews, express pay, and recurring total shown on checkout</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="results">Results</h2>
          <p>
            The store now runs suburb → box → add-ons → checkout as one flow. Manual ZIP and swap
            work dropped off the packing list.
          </p>
          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>After the build</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Manual ops</td>
                  <td>0% — no spreadsheet ZIP / swap fixes</td>
                </tr>
                <tr>
                  <td>Order errors</td>
                  <td>Near 0 — out-of-zone and incomplete boxes blocked early</td>
                </tr>
                <tr>
                  <td>Flow</td>
                  <td>End-to-end — suburb check through to weekly delivery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="faq">FAQ</h2>
          <GuideFaqAccordion>
            <GuideFaqItem value="faq-1" question="What was broken before this build?">
              <p>
                ZIP rules, box swaps, and delivery sync were manual. Customers could order outside
                delivery areas, and packing did not always match the box they thought they bought.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-2" question="What does the customer do now?">
              <p>
                They enter a suburb, set household size, customise the weekly box, add rescued
                extras, then check out on a weekly selling plan.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-3" question="Is this a public app or a custom build?">
              <p>
                Custom Shopify app plus checkout extensions, built around Funky Food’s delivery and
                box rules. The same pattern powers Aimbrill’s Meal Flow product for other meal
                brands.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-4" question="Can another meal brand use this?">
              <p>
                Yes. If you have ZIP rules, a configurable box, and a weekly subscription, the same
                functional and technical split applies.
              </p>
            </GuideFaqItem>
          </GuideFaqAccordion>

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Funky Food did not need another disconnected Shopify app. They needed one flow that
            matched how a rescued-food box actually sells: check the area, size the household, show
            next week’s produce, allow swaps, add extras, then charge on a weekly plan.
          </p>
          <p>
            Functional work is the six-step journey. Technical work is the custom app, line items,
            selling plans, and checkout checks that keep that journey honest.
          </p>
          <p>
            If you have a similar subscription or box-builder problem,{" "}
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
              book a technical call
            </a>{" "}
            or browse <a href="/work">other Aimbrill case studies</a>.
          </p>
        </GuidePageShell>
      </main>
      <Footer />
    </>
  );
}
