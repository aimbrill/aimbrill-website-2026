import type { Metadata } from "next";
import Image from "next/image";
import { GuideFaqAccordion, GuideFaqItem } from "@/components/content/GuideFaqAccordion";
import { GuidePageShell } from "@/components/content/GuidePageShell";
import { Footer } from "@/components/site/Footer";
import { SHOPIFY_AGENTIC_GUIDE_TOC } from "./guide-config";

const SITE = "https://aimbrill.com";
const CANONICAL = "/what-is-shopify-agentic-storefronts";
const PUBLISHED_ISO = "2026-05-13";
const PUBLISHED_DISPLAY = "May 13, 2026";
const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";
const OG_TITLE =
  "Your Shopify Store Is Now Inside ChatGPT, Copilot & Google AI — Here's What Changed";
const OG_DESC =
  "Shopify Agentic Storefronts went live in March 2026. Here's how it works, which brands are already selling inside AI conversations, and what you need to do to show up.";

export const metadata: Metadata = {
  title: "Shopify Agentic Storefronts: AI Commerce Explained | Aimbrill",
  description:
    "Shopify Agentic Storefronts brings your store inside ChatGPT, Copilot, and Google AI. Learn how it works, how to activate it, and why most stores are still invisible.",
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
  description: OG_DESC,
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
        quality={85}
        loading="lazy"
        className="h-auto w-full rounded-lg border border-border"
      />
    </figure>
  );
}

export default function ShopifyAgenticStorefrontsPage() {
  const introSummary =
    "Everything you need to know about Shopify Agentic Storefronts — from how it works to why most stores are still invisible, " +
    "and the exact steps to activate it and start selling inside ChatGPT, Copilot, and Google AI.";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <main className="min-h-screen bg-background pb-8 text-foreground md:pb-12">
        <GuidePageShell
          category="Shopify Updates"
          title="Your Shopify store is now inside ChatGPT, Copilot & Google AI — here's what changed"
          author="Aimbrill Team"
          publishedAt={PUBLISHED_DISPLAY}
          publishedAtIso={PUBLISHED_ISO}
          toc={SHOPIFY_AGENTIC_GUIDE_TOC}
          articleClassName="guide-prose-editorial"
        >
          <h2 id="introduction">Introduction</h2>
          <div className="intro-pull">
            <p>
              On <strong>March 24, 2026</strong>, Shopify flipped a single switch — and overnight,
              products from over <strong>5.6 million merchants</strong> became discoverable inside
              ChatGPT conversations. No app install. No integration. No ad spend.
            </p>
          </div>
          <p>
            This is not a future prediction. This is what is live, right now, inside your Shopify
            admin.
          </p>

          <h2 id="the-moment-everything-changed">The Moment Everything Changed: March 24, 2026</h2>
          <p>
            On March 24, 2026, Shopify flipped a single switch — and overnight, the products of over
            5.6 million merchants became discoverable inside ChatGPT conversations. No app install.
            No integration. No ad spend.
          </p>
          <p>
            That same week, OpenAI upgraded ChatGPT&apos;s shopping experience for all users — free,
            Plus, and Pro — with faster results, visual browsing, and side-by-side product
            comparisons. The supply side (merchants) and the demand side (shoppers) both scaled at
            the exact same moment.
          </p>
          <p>
            Shopify President Harley Finkelstein called it{" "}
            <em>&quot;the transformation of a lifetime.&quot;</em>
          </p>
          <p>
            This is not a future prediction. This is what is live, right now, inside your Shopify
            admin.
          </p>

          <h2 id="what-is-shopify-agentic-storefronts">What Is Shopify Agentic Storefronts?</h2>
          <p>
            Agentic Storefronts is a native Shopify sales channel — sitting inside your admin under
            Sales Channels — that connects your product catalog to the world&apos;s biggest AI
            platforms simultaneously:
          </p>
          <ul>
            <li>
              <strong>ChatGPT</strong>
            </li>
            <li>
              <strong>Microsoft Copilot</strong> — embedded in Windows, Edge, and Bing
            </li>
            <li>
              <strong>Google AI Mode in Search</strong> — rolling out across Google Search
            </li>
            <li>
              <strong>Google Gemini app</strong> — available to select brands, broader rollout
              underway
            </li>
            <li>
              <strong>Perplexity AI</strong> — coming soon
            </li>
          </ul>
          <p>
            When someone asks any of these AI assistants for a product recommendation,
            Shopify&apos;s Catalog feeds your listings directly into the response — your product
            title, price, images, and a purchase link. One setup in your admin. All channels
            covered. No custom integrations. No extra transaction fees beyond your standard Shopify
            processing rates.
          </p>
          <div className="guide-callout guide-callout-highlight">
            <p>
              <em>&quot;We&apos;re making every Shopify store agent-ready by default.&quot;</em>
            </p>
            <p className="text-sm text-muted-foreground">— Tobi Lütke, CEO, Shopify</p>
          </div>

          <h2 id="brands-already-selling">The Brands Already Selling Inside AI Conversations</h2>
          <p>
            This isn&apos;t theoretical. Some of the biggest DTC names on Shopify were already live
            before the full rollout:
          </p>
          <p>
            <strong>Glossier, SKIMS, Spanx, Vuori, Away, Stanley 1913, and Steve Madden</strong>{" "}
            were among the initial brand partners when OpenAI and Shopify announced their
            partnership in September 2025.
          </p>
          <p>
            <strong>KEEN Footwear</strong> was one of the first brands to go live with Copilot
            Checkout — Microsoft&apos;s in-conversation purchase experience. Sam Buckingham,
            Director of Global Digital Product at KEEN, said:
          </p>
          <div className="guide-callout guide-callout-quote">
            <p>
              &quot;We&apos;re excited to partner with Shopify as innovators in AI-driven commerce,
              which we believe represents the future of how people shop. As one of the first Shopify
              brands to use Copilot Checkout, we&apos;re proud to help lead the industry in defining
              this new sales channel.&quot;
            </p>
          </div>
          <p>
            <strong>Pura Vida</strong> is also live on Copilot Checkout, reaching customers directly
            inside Microsoft&apos;s AI ecosystem.
          </p>
          <p>
            <strong>Monos, Gymshark, and Everlane</strong> are preparing to sell inside Google AI
            Mode in Search and the Gemini app. Victor Tam, CEO and Co-Founder of Monos, described
            it:
          </p>
          <div className="guide-callout guide-callout-quote">
            <p>
              &quot;At Monos, we&apos;re excited about agentic shopping because it enables us to
              meet customers where they already are. It&apos;s a new way for our story and product
              details to show up at the exact moment someone is asking real questions with real
              intent, in a format that feels helpful, not intrusive.&quot;
            </p>
          </div>
          <p>
            As of the full March 2026 rollout, over <strong>one million Shopify merchants</strong>{" "}
            have access to Agentic Storefronts — and the number grows daily.
          </p>

          <h2 id="how-it-works">How It Works (Without the Technical Jargon)</h2>
          <p>
            Agentic Storefronts runs on two protocols that Shopify handles entirely in the
            background. You never touch them directly.
          </p>

          <GuideFigure
            src="/images/shopify/blogs/storefront5.png"
            alt="ACP and UCP protocols diagram"
            width={1200}
            height={680}
          />

          <h3 id="acp-protocol">ACP — Agentic Commerce Protocol</h3>
          <p>
            ACP, co-developed by OpenAI and Stripe, powers the ChatGPT integration. A customer asks
            ChatGPT for a product, your listing surfaces, they click through, and complete the
            purchase on your Shopify store via an in-app browser. Payment processes via Stripe — the
            AI agent never sees the customer&apos;s card details.
          </p>

          <h3 id="ucp-protocol">UCP — Universal Commerce Protocol</h3>
          <p>
            UCP, co-developed by Google and Shopify and backed by Visa, Mastercard, Stripe, Walmart,
            Target, and 20+ other partners, powers the Copilot and Google AI Mode integrations.
            Unlike ACP, UCP supports direct checkout inside the AI conversation — customers complete
            the full purchase without ever leaving the chat.
          </p>
          <p>
            You toggle channels on or off in your Shopify Admin. Shopify handles both protocols
            automatically. You remain the merchant of record on every order, across every channel.
          </p>

          <h2 id="checkout-experience">The Checkout Experience Per Channel</h2>
          <div className="guide-table-wrap">
            <table>
              <thead>
                <tr>
                  <th scope="col">AI Platform</th>
                  <th scope="col">How Checkout Works</th>
                  <th scope="col">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ChatGPT</td>
                  <td>Redirects to your Shopify store via in-app browser</td>
                  <td>4% on completed sales (30-day free trial)</td>
                </tr>
                <tr>
                  <td>Microsoft Copilot</td>
                  <td>Buy directly inside Copilot (Copilot Checkout)</td>
                  <td>0% additional</td>
                </tr>
                <tr>
                  <td>Google AI Mode</td>
                  <td>Buy directly inside Google Search</td>
                  <td>0% additional</td>
                </tr>
                <tr>
                  <td>Google Gemini</td>
                  <td>Direct purchase in app</td>
                  <td>0% additional</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="guide-callout guide-callout-warn">
            <p>
              <strong>Note on the ChatGPT 4% fee:</strong> On a typical Stripe setup, this brings
              your all-in processing cost to roughly 6.7% versus the usual ~3% direct rate. Worth
              calculating for low-margin products before enabling Instant Checkout across
              everything.
            </p>
          </div>

          <h2 id="agentic-dashboard">What the Agentic Dashboard Shows You</h2>
          <p>
            If you open Shopify Admin and go to Sales Channels → Agentic, here is what each section
            means:
          </p>
          <ul>
            <li>
              <strong>&quot;Agentic Storefronts are active&quot;</strong> — Your products are live
              and being syndicated. The green dot matters.
            </li>
            <li>
              <strong>Traffic counter</strong> — How many customers AI agents sent your way in the
              last 30 days. Even if none have converted yet, this traffic is real and growing.
            </li>
            <li>
              <strong>Channel breakdown (ChatGPT / Microsoft Copilot / Shop Channel)</strong> —
              Separate revenue and visit attribution per AI platform so you know exactly which
              channel is working.
            </li>
            <li>
              <strong>&quot;Your products are synced&quot;</strong> — Confirms how many of your SKUs
              are live inside Shopify Catalog and available to AI channels.
            </li>
            <li>
              <strong>&quot;Your policies are up-to-date&quot;</strong> — AI channels check your
              return, shipping, and privacy policies. Incomplete or non-compliant policies mean your
              products get deprioritised or excluded entirely.
            </li>
            <li>
              <strong>&quot;Allow Shopify to manage for me&quot; toggle</strong> — One switch.
              Shopify auto-optimises your presence across all current and future AI channels as they
              launch.
            </li>
            <li>
              <strong>Shopify Knowledge Base</strong> — Optional but important. Gives AI assistants
              your brand story, use cases, and FAQs so they can answer shopper questions accurately
              during the conversation — not just show a product card.
            </li>
            <li>
              <strong>&quot;Recent searches where your products appeared&quot;</strong> — The most
              underrated section in the entire dashboard. Shows the exact natural language queries
              real AI users typed that surfaced your products. Free keyword intelligence for your
              entire catalog.
            </li>
          </ul>

          <GuideFigure
            src="/images/shopify/blogs/storefront1.png"
            alt="Shopify Agentic Dashboard interface"
            width={1200}
            height={680}
          />

          <h2 id="discovery-vs-selling">
            Discovery vs. Selling — The Distinction Most Merchants Miss
          </h2>
          <p>
            Your products can appear in AI recommendations even without Agentic Storefronts enabled
            — AI tools can still find them through web crawling and indexing.
          </p>
          <p>But there is a critical difference between being mentioned and being shoppable.</p>
          <ul>
            <li>
              <strong>Discovery</strong> = your product appears in an AI conversation
            </li>
            <li>
              <strong>Native selling</strong> = the customer can actually buy inside that
              conversation
            </li>
          </ul>
          <p>
            Native selling requires Agentic Storefronts to be active and the relevant channels
            toggled on. Make sure the switch is on.
          </p>

          <h2 id="why-invisible">
            Why Most Shopify Stores Are Still Invisible (And How to Fix That)
          </h2>
          <p>
            Most stores that are live on Agentic Storefronts still don&apos;t show up in AI searches
            — because their product data is not good enough for AI to confidently recommend them.
            Here is why and what to do about it.
          </p>

          <h3 id="problem-1-vague-titles">Problem 1 — Vague product titles</h3>
          <p>
            AI tools match your products to shopper queries based on title specificity. A vague
            title tells an AI almost nothing.
          </p>
          <ul>
            <li>
              ❌ <em>&quot;Premium Foot Trainer&quot;</em>
            </li>
            <li>
              ✅{" "}
              <em>
                &quot;PT Pro Ultra Foot Trainer 5-in-1 — Plantar Fasciitis, Arch Support &amp; Ankle
                Stability&quot;
              </em>
            </li>
          </ul>

          <h3 id="problem-2-marketing-copy">
            Problem 2 — Marketing copy instead of specifications
          </h3>
          <p>
            AI agents extract structured facts and match them against queries. Hype words mean
            nothing to them. Precise specifications mean everything.
          </p>
          <ul>
            <li>
              ❌ <em>&quot;Luxuriously soft premium cotton&quot;</em>
            </li>
            <li>
              ✅{" "}
              <em>
                &quot;100% GOTS certified organic cotton, 200 GSM, pre-washed for softness, machine
                washable&quot;
              </em>
            </li>
          </ul>

          <h3 id="problem-3-variants">Problem 3 — Variants listed as separate products</h3>
          <p>
            If the same shirt in five colours appears as five separate SKUs, an AI may not realise
            they are variants of one product. This creates duplicate noise and reduces
            recommendation confidence.
          </p>

          <h3 id="problem-4-policies">Problem 4 — Missing or outdated policies</h3>
          <p>
            ChatGPT and Copilot both check your return, shipping, and privacy policies before
            recommending your products. Incomplete policies mean reduced discoverability.
          </p>

          <h3 id="problem-5-reviews">Problem 5 — Shallow reviews</h3>
          <p>
            AI assistants evaluate review content, not just star ratings. Detailed reviews
            describing real use cases and results carry far more weight than a high average made up
            of one-word responses.
          </p>

          <h3 id="problem-6-faq">Problem 6 — No FAQ or Knowledge Base content</h3>
          <p>
            AI channels pull from your FAQs and Knowledge Base to answer follow-up questions during
            the conversation. No content means the AI cannot answer shopper questions — and a
            shopper who cannot get answers does not buy.
          </p>

          <h2 id="how-to-activate">How to Activate Agentic Storefronts: Step by Step</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Step 1</strong> — Shopify Admin → Sales Channels → Agentic (left sidebar). If
              it&apos;s not there yet: Settings → Sales Channels → Add Agentic Storefronts.
            </li>
            <li>
              <strong>Step 2</strong> — Toggle on each AI platform individually: ChatGPT, Microsoft
              Copilot, Google AI Mode.
            </li>
            <li>
              <strong>Step 3</strong> — Enable &quot;Allow Shopify to manage for me&quot; so new
              channels are added automatically as they launch.
            </li>
            <li>
              <strong>Step 4</strong> — Go to Sources → Shopify Knowledge Base → Install. Fill in
              your brand story, key use cases, differentiators, and top FAQs.
            </li>
            <li>
              <strong>Step 5</strong> — Audit your top 20 products. For each one: Is the title
              specific and factual? Does the description contain real specs? Are variants properly
              grouped? Are there enough detailed reviews?
            </li>
            <li>
              <strong>Step 6</strong> — Check your policies — returns, shipping, privacy — and make
              sure they are current and Shopify-compliant.
            </li>
            <li>
              <strong>Step 7</strong> — Check &quot;Recent searches where your products
              appeared&quot; every week. Use this data to rewrite underperforming product titles and
              descriptions to match the natural language patterns real shoppers are using.
            </li>
          </ol>

          <h2 id="bigger-picture">The Bigger Picture</h2>
          <p>
            The traditional ecommerce path — ad → storefront → browse → cart → purchase — is being
            joined by a completely different journey:
          </p>
          <p>
            <strong>Customer asks AI → AI recommends → Customer buys in-chat → Done</strong>
          </p>
          <p>
            Your homepage was never part of that second journey. Neither was your hero image, your
            lifestyle photography, or your brand aesthetic. What the AI surfaces is your product
            data quality, your policy compliance, your review depth, and your catalog structure.
          </p>
          <p>
            Brands that have invested in beautiful stores but neglected product data are going to
            find this channel humbling. Brands with clean, specific, factual product data are going
            to find it extremely valuable.
          </p>

          <GuideFigure
            src="/images/shopify/blogs/storefront4.png"
            alt="AI shopping journey visualization"
            width={1200}
            height={680}
          />

          <h2 id="faqs">Frequently asked questions</h2>
          <GuideFaqAccordion>
            <GuideFaqItem
              value="faq-what"
              question="What is Shopify Agentic Storefronts and what is it used for?"
            >
              <p>
                Shopify Agentic Storefronts is a native sales channel that connects your product
                catalog to AI platforms — ChatGPT, Microsoft Copilot, Google AI Mode, and Google
                Gemini. When shoppers ask these AI assistants for product recommendations, your
                products surface directly in the conversation, and customers can purchase either by
                redirecting to your store (ChatGPT) or buying directly in-chat (Copilot, Google AI,
                Gemini).
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-free" question="Is Agentic Storefronts free to use?">
              <p>
                Activation and basic setup are free. ChatGPT charges 4% on completed sales (with a
                30-day free trial). Microsoft Copilot, Google AI Mode, and Google Gemini charge no
                additional fee beyond your standard Shopify processing rates.
              </p>
            </GuideFaqItem>
            <GuideFaqItem
              value="faq-channels"
              question="Can I choose which AI platforms my store appears on?"
            >
              <p>
                Yes. In your Shopify Admin, you can toggle each channel on or off individually.
                Enable &quot;Allow Shopify to manage for me&quot; to automatically add new channels
                as they launch.
              </p>
            </GuideFaqItem>
            <GuideFaqItem
              value="faq-product-data"
              question="Why isn't my store showing up in AI searches even though I activated Agentic Storefronts?"
            >
              <p>
                AI tools match products based on data quality. Check six things: specific product
                titles, real specifications (not marketing hype), grouped variants, up-to-date
                policies, detailed reviews, and Knowledge Base content.
              </p>
            </GuideFaqItem>
            <GuideFaqItem
              value="faq-merchant-record"
              question="Do I remain the merchant of record on Agentic Storefront sales?"
            >
              <p>
                Yes. You remain the merchant of record on every order, across every AI channel. You
                manage fulfillment, returns, and customer service as you would on any other sales
                channel.
              </p>
            </GuideFaqItem>
            <GuideFaqItem
              value="faq-knowledge-base"
              question="What goes into the Shopify Knowledge Base?"
            >
              <p>
                Your brand story, key use cases, differentiators, frequently asked questions, and
                product care instructions. This helps AI assistants answer shopper questions during
                conversations and improves recommendation accuracy.
              </p>
            </GuideFaqItem>
            <GuideFaqItem value="faq-timeline" question="How long does setup take?">
              <p>
                Basic activation takes 15 minutes. Auditing product data, setting up your Knowledge
                Base, and optimizing for AI recommendations typically takes a few days to a week.
              </p>
            </GuideFaqItem>
          </GuideFaqAccordion>

          <h2 id="final-thought">Final Thought</h2>
          <p>
            Agentic Storefronts is live. KEEN, Pura Vida, SKIMS, Monos, and Gymshark are already
            there. The channel is growing faster than any sales surface Shopify has ever launched.
          </p>
          <p>
            The question is not whether this will matter. It already does. The question is whether
            your store shows up — or stays invisible.
          </p>
          <p>
            Clean your catalog. Activate your channels. Install the Knowledge Base. Check your
            Recent Searches every Monday.
          </p>
        </GuidePageShell>
      </main>
      <Footer />
    </>
  );
}
