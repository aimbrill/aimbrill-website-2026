import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Meal Flow | Meal Subscription Automation",
  description:
    "Meal Flow automates meal subscription ops for Shopify with ZIP code checks, box building, and delivery sync.",
  alternates: {
    canonical: "/meal-subscription-flow",
  },
};

const benefits = [
  {
    title: "ZIP code restrictions",
    text: "Only show plans and delivery zones that can actually be fulfilled.",
  },
  {
    title: "Box builder flows",
    text: "Let customers build their weekly box with a cleaner subscription experience.",
  },
  {
    title: "Delivery sync",
    text: "Keep meal subscriptions aligned with dispatch windows and fulfillment schedules.",
  },
];

export default function MealSubscriptionFlowPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.2rem] border border-border bg-surface p-6 grain shadow-soft md:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                Coming Soon
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
                meal-subscription-flow
              </span>
            </div>

            <div className="mt-10 max-w-4xl">
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-[56px]">
                Meal Flow Automation
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
                Build a cleaner meal subscription journey for Shopify with the operational logic
                meal brands need: service area checks, box building, and delivery coordination.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 bg-background px-6 py-3 text-lg font-semibold text-ink transition hover:bg-surface-2"
              >
                Join the waitlist <span aria-hidden>→</span>
              </Link>
              <a
                href="mailto:admin@aimbrill.com?subject=Meal%20Flow%20Waitlist"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-lg font-semibold text-background transition hover:scale-[1.03]"
              >
                Email us <span aria-hidden>→</span>
              </a>
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
