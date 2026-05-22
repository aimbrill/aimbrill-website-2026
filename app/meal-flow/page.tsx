import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Meal Flow Automation | Aimbrill",
  description:
    "Meal Flow automates meal subscription ops for Shopify with ZIP code checks, box building, and delivery sync.",
  alternates: {
    canonical: "/meal-flow",
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

const useCases = [
  {
    title: "ZIP code restrictions",
    text: "Only show plans and delivery zones that can actually be fulfilled for each customer location.",
  },
  {
    title: "Box builder flows",
    text: "Let customers build their weekly box with a cleaner subscription experience on Shopify.",
  },
  {
    title: "Delivery sync",
    text: "Keep meal subscriptions aligned with dispatch windows and fulfillment schedules automatically.",
  },
];

export default function MealFlowPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.2rem] border border-border bg-surface p-6 grain shadow-soft md:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                Live on Shopify App Store
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
                meal-flow
              </span>
            </div>

            <div className="mt-10 max-w-4xl">
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-[56px]">
                Meal Flow Automation
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
                End-to-end meal subscription automation for Shopify — ZIP code restrictions, box
                builder, and delivery sync. All in one app.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://apps.shopify.com/mealflow-box"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 bg-background px-6 py-3 text-lg font-semibold text-ink transition hover:bg-surface-2"
              >
                View on Shopify App Store <span aria-hidden>↗</span>
              </a>
              <Link
                href="/meal-bundle-builder"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-lg font-semibold text-background transition hover:scale-[1.03]"
              >
                Explore product story <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {useCases.map((item) => (
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
              Built for meal & delivery brands on Shopify
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Meal Flow connects delivery dates, subscriptions, and bundles so your checkout stays
              accurate without weekly manual fixes. Try the interactive demo or install from the
              Shopify App Store.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/meal-bundle-builder/try-meal-flow"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[16px] font-semibold text-background transition hover:scale-[1.03]"
              >
                Try interactive demo <span aria-hidden>→</span>
              </Link>
              <a
                href="mailto:admin@aimbrill.com?subject=Meal%20Flow%20Demo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-[16px] font-semibold text-ink transition hover:bg-surface-2"
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
