import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "WeUpsell | AI Popup & Upsell Widgets",
  description:
    "WeUpsell helps Shopify brands show the right popup or upsell at the right moment with AI-driven offers.",
  alternates: {
    canonical: "/weupsell-ai-popup-upsell",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const benefits = [
  {
    title: "Smarter offer timing",
    text: "Trigger popups and upsells when shoppers are most likely to convert instead of relying on static rules.",
  },
  {
    title: "Higher order value",
    text: "Surface the most relevant add-on, bundle, or upsell to lift AOV without adding extra friction.",
  },
  {
    title: "Fast Shopify setup",
    text: "Install the app, connect your offers, and start testing within a few minutes.",
  },
];

export default function WeUpsellAppPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.2rem] border border-border bg-surface p-6 grain shadow-soft md:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-lime" />
                Live on Shopify App Store
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
                weupsell-ai-popup-upsell
              </span>
            </div>

            <div className="mt-10 max-w-4xl">
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-[56px]">
                WeUpsell — AI Popup & Upsell Widgets
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
                Show the right popup or upsell to the right shopper at the right time. WeUpsell is
                built for Shopify brands that want more conversions and higher AOV without manual
                rule complexity.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://apps.shopify.com/aimbrill-popup-ai-automate-bot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 bg-background px-6 py-3 text-lg font-semibold text-ink transition hover:bg-surface-2"
              >
                View on Shopify App Store <span aria-hidden>↗</span>
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-lg font-semibold text-background transition hover:scale-[1.03]"
              >
                Talk to the team <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <h2 className="font-display text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Built for conversion-first Shopify teams
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              WeUpsell uses AI to surface the right popup or upsell at the right moment—so you lift
              AOV and conversions without maintaining complex manual rules.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:admin@aimbrill.com?subject=WeUpsell%20Support"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[16px] font-semibold text-background transition hover:scale-[1.03]"
              >
                Email us <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/917990488965"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-[16px] font-semibold text-ink transition hover:bg-surface-2"
              >
                WhatsApp <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
