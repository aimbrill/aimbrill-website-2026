import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Case Studies & Featured Work | Aimbrill",
  description:
    "Explore how Aimbrill engineers custom Shopify applications, flow automations, subscription engines, and AI solutions for leading DTC brands.",
  alternates: { canonical: "/work" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Client Case Studies & Featured Work | Aimbrill",
    description:
      "Explore how Aimbrill engineers custom Shopify applications, flow automations, subscription engines, and AI solutions for leading DTC brands.",
    url: "https://aimbrill.com/work",
    siteName: "Aimbrill",
    type: "website",
  },
};

const brands = [
  {
    slug: "funky-food",
    name: "Funky Food Australia",
    domain: "funkyfood.com.au",
    category: "Rescued Food / Meal Box Subscriptions",
    title: "How We Automated Funky Food's Meal Subscription on Shopify",
    description:
      "Eliminated manual ZIP checking, box customization, and spreadsheet packing lists with a unified custom Shopify flow.",
    tags: ["Custom App", "Subscriptions", "Postcode Gate", "Box Builder"],
    metrics: [
      { label: "Manual ops work", value: "0%" },
      { label: "Order & ZIP errors", value: "↓ Near 0" },
      { label: "Flow", value: "End-to-End" },
    ],
    href: "/work/funky-food",
    featured: true,
  },
  {
    slug: "oceanwash",
    name: "OceanWash",
    category: "Eco-Friendly Laundry DTC",
    title: "Subscription Retention & High-Converting Bundles",
    description:
      "Engineered flexible refill subscription plans and dynamic bundle discounts that lifted recurring customer retention.",
    tags: ["Subscriptions", "Bundle Builder", "Custom Checkout"],
    metrics: [
      { label: "Retention lift", value: "+32%" },
      { label: "Bundle AOV", value: "+28%" },
    ],
    logo: "/images/shopify/new_brand_logos/OceanWash.png",
    featured: false,
  },
  {
    slug: "pt-pro",
    name: "PT PRO",
    category: "Professional Fitness & Physio Equipment",
    title: "High-Volume Catalog Architecture & Custom B2B Flow",
    description:
      "Streamlined B2B quote requests, wholesale pricing tiers, and fast checkout for commercial gym equipment.",
    tags: ["Shopify Plus", "B2B Flow", "Custom Catalog"],
    metrics: [
      { label: "B2B Quote speed", value: "10x faster" },
      { label: "Checkout conversion", value: "+18%" },
    ],
    logo: "/images/shopify/new_brand_logos/PT_PRO.png",
    featured: false,
  },
  {
    slug: "maison-fayard",
    name: "Maison Fayard",
    category: "Luxury Fashion & Accessories",
    title: "Bespoke International Storefront & Multilingual Commerce",
    description:
      "Delivered a localized luxury shopping experience with multi-currency checkout, dynamic sizing, and custom lookbooks.",
    tags: ["Headless UX", "Multi-Currency", "Shopify Markets"],
    metrics: [
      { label: "International sales", value: "+45%" },
      { label: "Mobile speed", value: "98/100" },
    ],
    logo: "/images/shopify/new_brand_logos/Maison_Fayard.png",
    featured: false,
  },
  {
    slug: "gibson",
    name: "Gibson",
    category: "Consumer Goods & Lifestyle",
    title: "Omnichannel Logistics & Custom Order Management",
    description:
      "Connected multi-warehouse inventory, automated fulfillment routing, and bespoke customer notifications.",
    tags: ["ERP Integration", "Automated Routing", "API Sync"],
    metrics: [
      { label: "Dispatch speed", value: "Same-Day" },
      { label: "Stock accuracy", value: "99.9%" },
    ],
    logo: "/images/shopify/new_brand_logos/Gibson.png",
    featured: false,
  },
];

export default function WorkIndexPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-lime selection:text-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-32 pb-14 md:pt-40 md:pb-18">
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
            Explore how we build custom Shopify applications, flow automations, and recurring
            subscription engines that transform e-commerce operations.
          </p>
        </div>

        {/* Featured Case Study: Funky Food */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-lime-400/60 bg-card shadow-soft transition hover:border-lime">
          <div className="grid lg:grid-cols-12">
            <div className="relative lg:col-span-6 flex min-h-[280px] items-center justify-center overflow-hidden border-b border-border bg-surface lg:border-b-0 lg:border-r">
              <div className="absolute top-4 left-4 z-10 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink shadow-sm">
                Featured case study
              </div>
              <Image
                src="/images/work/funky-food/homepage-hero.png"
                alt="Funky Food Shopify homepage with suburb entry and box builder CTA"
                width={800}
                height={450}
                className="h-full w-full object-cover object-left"
                priority
              />
            </div>

            <div className="p-6 sm:p-8 md:p-10 lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <span>Funky Food Australia</span>
                  <span>•</span>
                  <span>Meal Subscription</span>
                </div>

                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-ink leading-tight">
                  How We Automated Funky Food&apos;s Meal Subscription on Shopify
                </h2>

                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Turned a high-friction manual process of ZIP codes, box customizations, and
                  spreadsheet packing lists into a seamless 6-step customer flow from suburb gate to
                  recurring checkout.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-lime-800 dark:text-lime-400">
                      0%
                    </div>
                    <div className="text-[10px] text-muted-foreground">Manual Ops Work</div>
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-blue-600">
                      ↓ Near 0
                    </div>
                    <div className="text-[10px] text-muted-foreground">Order &amp; ZIP Errors</div>
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-bold text-emerald-600">
                      End-to-End
                    </div>
                    <div className="text-[10px] text-muted-foreground">Automated Flow</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/work/funky-food"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="https://chatgpt.com/?q=Summarize%20https%3A%2F%2Faimbrill.com%2Fwork%2Ffunky-food.%20Cover%20problem%2C%20functional%20solution%2C%20technical%20solution%2C%20and%20results."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-surface px-5 py-3 text-xs font-semibold text-muted-foreground hover:text-ink transition"
                >
                  <Sparkles className="h-3.5 w-3.5 text-lime-700 dark:text-lime-400" />
                  <span>Ask ChatGPT for Summary</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Brand Studies Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                More Client Stories
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Explore how we solve complex Shopify architecture challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {brands.slice(1).map((b) => (
              <div
                key={b.slug}
                className="rounded-3xl border border-border bg-card p-6 sm:p-7 shadow-soft flex flex-col justify-between transition hover:border-border/80"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-surface border border-border px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                      {b.category}
                    </span>
                    <span className="font-display text-sm font-bold text-ink">{b.name}</span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-ink leading-snug">
                    {b.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {b.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-border bg-surface px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    {b.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-display font-bold text-ink text-sm">{m.value}</div>
                        <div className="text-[9px] text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-muted-foreground">
                    Article coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
