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

const clientBrands = [
  {
    name: "Funky Food",
    slug: "funky-food",
    logo: "/images/shopify/new_brand_logos/Funky_Food.png",
    width: 360,
    height: 144,
    className: "h-16 sm:h-20 md:h-24 w-auto",
    href: "/case-studies/funky-food",
  },
  {
    name: "Gibson",
    slug: "gibson",
    logo: "/images/shopify/new_brand_logos/Gibson.png",
    width: 260,
    height: 104,
    className: "h-11 sm:h-14 md:h-16 w-auto",
    href: "/case-studies",
  },
  {
    name: "Maison Fayard",
    slug: "maison-fayard",
    logo: "/images/shopify/new_brand_logos/Maison_Fayard.png",
    width: 260,
    height: 104,
    className: "h-11 sm:h-14 md:h-16 w-auto",
    href: "/case-studies",
  },
  {
    name: "OceanWash",
    slug: "oceanwash",
    logo: "/images/shopify/new_brand_logos/OceanWash.png",
    width: 260,
    height: 104,
    className: "h-11 sm:h-14 md:h-16 w-auto",
    href: "/case-studies",
  },
  {
    name: "PT PRO",
    slug: "pt-pro",
    logo: "/images/shopify/new_brand_logos/PT_PRO.png",
    width: 380,
    height: 152,
    className: "h-16 sm:h-20 md:h-24 w-auto",
    href: "/case-studies",
  },
  {
    name: "Rage Fitness",
    slug: "rage-fitness",
    logo: "/images/shopify/new_brand_logos/Rage_Fitness.png",
    width: 360,
    height: 144,
    className: "h-14 sm:h-18 md:h-20 w-auto",
    href: "/case-studies",
  },
  {
    name: "Theloffy",
    slug: "theloffy",
    logo: "/images/shopify/new_brand_logos/Theloffy.png",
    width: 240,
    height: 104,
    className: "h-11 sm:h-14 md:h-16 w-auto",
    href: "/case-studies",
  },
  {
    name: "Reisport",
    slug: "reisport",
    logo: "/images/shopify/new_brand_logos/reisport.png",
    width: 260,
    height: 104,
    className: "h-11 sm:h-14 md:h-16 w-auto",
    href: "/case-studies",
  },
  {
    name: "Shilives",
    slug: "shilives",
    logo: "/images/shopify/new_brand_logos/shilives.png",
    width: 260,
    height: 104,
    className: "h-11 sm:h-14 md:h-16 w-auto",
    href: "/case-studies",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-lime selection:text-ink">
      <Navbar />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-4 pt-24 pb-12 md:pt-28 md:pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground mb-4">
            <Sparkles className="h-3.5 w-3.5 text-lime-700 dark:text-lime-400" />
            <span>Aimbrill Engineering Case Studies</span>
          </div>

          <h1 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-[44px] leading-[1.2]">
            Brands that{" "}
            <span className="font-serif italic underline decoration-lime decoration-4 underline-offset-4">
              dared
            </span>{" "}
            to think bigger.
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground">
            Explore how we build custom Shopify Plus applications, AI recommendation layers, and
            recurring subscription engines that transform e-commerce revenue and operations.
          </p>
        </div>

        {/* Brand Logo Scrollbar / Marquee */}
        <div className="marquee-pause relative mt-8 sm:mt-10 overflow-hidden py-3">
          {/* Edge gradient fade masks */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent"
          />

          <div className="ticker flex w-max items-center gap-10 sm:gap-14 md:gap-16">
            {[...clientBrands, ...clientBrands].map((b, i) => (
              <Link
                key={`${b.name}-${i}`}
                href={b.href}
                className="group flex shrink-0 items-center justify-center transition-transform hover:scale-105"
                title={b.name}
              >
                <Image
                  src={b.logo}
                  alt={b.name}
                  width={b.width}
                  height={b.height}
                  className={`object-contain transition-opacity duration-200 group-hover:opacity-80 ${b.className}`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-10 sm:mt-12 space-y-8">
          {/* Case Study 1: Rakhi By Diorin */}
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:border-lime">
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="p-6 sm:p-8 md:p-9 lg:p-10 lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                    <span>Rakhi By Diorin</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span className="text-muted-foreground">Festive Growth & CRO Research</span>
                  </div>

                  <h2 className="mt-3 font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-ink leading-[1.2]">
                    Turning Festive Traffic Into ₹50 Lakh: The Rakhi By Diorin Story
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    The store was ready. The traffic was coming in. But the sales weren&apos;t. So
                    we stopped guessing, started listening to shoppers, and changed the store one
                    step at a time.
                  </p>

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border/60 pt-3.5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Total Revenue
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        ₹50 Lakh
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Research
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        3 Cycles
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Timeframe
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        3 Weeks
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center lg:justify-start">
                  <Link
                    href="/case-studies/festive-season-ecommerce-strategy-5x-revenue"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:scale-105 active:scale-95"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative lg:col-span-6 overflow-hidden border-t border-border lg:border-t-0 lg:border-l min-h-[280px] sm:min-h-[340px] lg:min-h-[420px]">
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
            <div className="grid lg:grid-cols-12 items-stretch">
              <div className="relative lg:col-span-6 overflow-hidden border-b border-border lg:border-b-0 lg:border-r min-h-[280px] sm:min-h-[340px] lg:min-h-[420px]">
                <Image
                  src="/images/case-studies/funky-food/funky-food-flow-overview.jpg"
                  alt="Funky Food 6-step Shopify Plus order flow: Suburb Check, Household Size, Box Customizer, Add-ons, Cart, Checkout"
                  width={1000}
                  height={850}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 md:p-9 lg:p-10 lg:col-span-6 flex flex-col justify-between">
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

                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border/60 pt-3.5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Customer Flow
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        6 Steps
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Architecture
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        1 Custom App
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        Platform
                      </div>
                      <div className="mt-0.5 font-display text-base sm:text-lg font-bold text-ink">
                        Shopify Plus
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center lg:justify-start">
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
