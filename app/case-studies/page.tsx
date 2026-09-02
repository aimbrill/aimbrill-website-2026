import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Stories & Shopify Engineering Case Studies | Aimbrill",
  description:
    "Explore how Aimbrill engineers high-converting Shopify storefronts, AI upsell engines, and subscription automations for ambitious e-commerce brands.",
  alternates: { canonical: "/case-studies" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Client Stories & Shopify Engineering Case Studies | Aimbrill",
    description:
      "Explore how Aimbrill engineers high-converting Shopify storefronts, AI upsell engines, and subscription automations for ambitious e-commerce brands.",
    url: "https://aimbrill.com/case-studies",
    siteName: "Aimbrill",
    type: "website",
  },
};

export default function CaseStudiesIndexPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-lime selection:text-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground mb-4">
            <Sparkles className="h-3.5 w-3.5 text-lime-700 dark:text-lime-400" />
            <span>Aimbrill Engineering Case Studies</span>
          </div>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.16]">
            Brands that{" "}
            <span className="font-serif italic underline decoration-lime decoration-4 underline-offset-4">
              dared
            </span>{" "}
            to think bigger.
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
            Explore how we build custom Shopify Plus applications, AI recommendation layers, and
            recurring subscription engines that transform e-commerce revenue and operations.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-12 space-y-8">
          {/* Case Study 1: Rakhi By Diorin */}
          <div className="overflow-hidden rounded-3xl border border-lime-400/60 bg-card shadow-soft transition hover:border-lime">
            <div className="grid lg:grid-cols-12">
              <div className="p-6 sm:p-8 md:p-9 lg:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                    <span>Rakhi By Diorin</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span className="text-muted-foreground">Shopify Rebrand & WeUpsell AI</span>
                  </div>

                  <h2 className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink leading-[1.2]">
                    How a Shopify Rebrand + AI Upsell Generated ₹12.29L in 2 Months
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Rakhi By Diorin had the products and demand, but needed a storefront built to
                    scale. A complete navigation and homepage rebrand paired with WeUpsell&apos;s AI
                    recommendation engine delivered ₹12.29L in AI-influenced revenue across 4,073
                    orders.
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border/60 pt-3.5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        AI Revenue
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        ₹12.29L
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Orders
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        4,073
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Cart CVR
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        11.85%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center">
                  <Link
                    href="/case-studies/rakhi-by-diorin"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative lg:col-span-6 overflow-hidden border-t border-border lg:border-t-0 lg:border-l">
                <Image
                  src="/images/case-studies/rakhi-by-diorin/diorin-rebrand-hero-laptop-mockup.jpg"
                  alt="Rakhi By Diorin Shopify Rebrand and WeUpsell AI Showcase"
                  width={1024}
                  height={819}
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Case Study 2: Funky Food */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:border-lime">
            <div className="grid lg:grid-cols-12">
              <div className="relative lg:col-span-6 overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
                <Image
                  src="/images/case-studies/funky-food/funky-food-flow-overview.jpg"
                  alt="Funky Food 6-step Shopify Plus order flow: Suburb Check, Household Size, Box Customizer, Add-ons, Cart, Checkout"
                  width={1000}
                  height={850}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 md:p-9 lg:p-10 lg:col-span-6 flex flex-col justify-center">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                    <span>Funky Food Australia</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span className="text-muted-foreground">Shopify Plus Meal Subscription</span>
                  </div>

                  <h2 className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink leading-[1.2]">
                    How Strategic Automation Unlocked Millions for Funky Food on Shopify Plus
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Turned a high-friction manual process of ZIP codes, box customizations, and
                    spreadsheet packing lists into a seamless 6-step customer flow from suburb gate
                    to recurring checkout on Shopify Plus.
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <Link
                    href="/case-studies/funky-food"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
