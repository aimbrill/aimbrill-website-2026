import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Funky Food Shopify Plus Case Study | Aimbrill Client Stories",
  description:
    "Explore how Aimbrill engineered a unified Shopify Plus meal subscription flow, postcode gate, dynamic box builder, and checkout extensibility for Funky Food Australia.",
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
    title: "Funky Food Shopify Plus Case Study | Aimbrill Client Stories",
    description:
      "Explore how Aimbrill engineered a unified Shopify Plus meal subscription flow, postcode gate, dynamic box builder, and checkout extensibility for Funky Food Australia.",
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
            <span>Aimbrill Engineering Case Study</span>
          </div>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl leading-[1.16]">
            Brands that{" "}
            <span className="font-serif italic underline decoration-lime decoration-4 underline-offset-4">
              dared
            </span>{" "}
            to think bigger.
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
            Explore how we build custom Shopify applications, flow automations, and recurring
            subscription engines that transform e-commerce operations.
          </p>
        </div>

        {/* Featured Case Study: Funky Food */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-lime-400/60 bg-card shadow-soft transition hover:border-lime">
          <div className="grid lg:grid-cols-12">
            <div className="relative lg:col-span-6 overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
              <Image
                src="/images/case-studies/funky-food/funky-food-flow-overview.jpg"
                alt="Funky Food 5-step Shopify order flow: ZIP Check, Build Box, Subscribe, Checkout, Order Confirmed"
                width={1000}
                height={850}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>

            <div className="p-8 sm:p-10 md:p-12 lg:p-14 lg:col-span-6 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                  <span>Funky Food Australia</span>
                  <span className="text-muted-foreground/60">•</span>
                  <span className="text-muted-foreground">Shopify Plus Meal Subscription</span>
                </div>

                <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink leading-[1.2]">
                  How We Automated Funky Food&apos;s Meal Subscription on Shopify
                </h2>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Turned a high-friction manual process of ZIP codes, box customizations, and
                  spreadsheet packing lists into a seamless 6-step customer flow from suburb gate to
                  recurring checkout.
                </p>
              </div>

              <div className="mt-8 flex items-center">
                <Link
                  href="/case-studies/funky-food"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
