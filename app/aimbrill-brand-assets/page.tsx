import type { Metadata } from "next";
import Image from "next/image";
import { BrandAssetGenerator } from "@/components/site/BrandAssetGenerator";

export const metadata: Metadata = {
  title: "Aimbrill Brand Assets",
  robots: {
    index: false,
    follow: false,
  },
};

const palette = [
  { name: "Background", value: "oklch(0.985 0.008 95)" },
  { name: "Foreground / Ink", value: "oklch(0.16 0.005 270)" },
  { name: "Surface", value: "oklch(0.965 0.01 95)" },
  { name: "Surface 2", value: "oklch(0.945 0.012 95)" },
  { name: "Primary", value: "oklch(0.16 0.005 270)" },
  { name: "Primary Foreground", value: "oklch(0.985 0.008 95)" },
  { name: "Accent Lime", value: "oklch(0.88 0.21 120)" },
  { name: "Accent Lime Foreground", value: "oklch(0.13 0.005 270)" },
  { name: "Muted Foreground", value: "oklch(0.42 0.012 270)" },
  { name: "Border", value: "oklch(0.16 0.005 270 / 12%)" },
  { name: "Input", value: "oklch(0.16 0.005 270 / 16%)" },
  { name: "Destructive", value: "oklch(0.58 0.22 27)" },
];

export default function HiddenBrandAssetsPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground md:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-3xl font-semibold md:text-5xl">Aimbrill Brand Assets</h1>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Internal brand reference page for typography, colors, and logos (not linked in site
          navigation).
        </p>

        {/* AI Brand Asset Generator */}
        <div className="mt-12">
          <BrandAssetGenerator />
        </div>

        {/* Static Brand Reference Sections */}
        <div className="mt-12">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Brand Reference</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Below are Aimbrill&apos;s official brand guidelines and assets.
          </p>
        </div>

        <section className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
          <h2 className="font-display text-xl font-semibold md:text-2xl">Typography</h2>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Fonts are loaded with <span className="font-mono text-xs text-ink">next/font</span>.
            Headings use the semantic token{" "}
            <span className="font-mono text-xs text-ink">--font-display</span> (Space Grotesk); body
            copy uses <span className="font-mono text-xs text-ink">--font-sans</span> (DM Sans);
            labels and code use <span className="font-mono text-xs text-ink">--font-mono</span>{" "}
            (JetBrains Mono).
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Headings
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                CSS: <span className="text-ink">--font-space-grotesk</span> →{" "}
                <span className="text-ink">--font-display</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Class: <span className="text-ink">font-display</span>
              </p>
              <p className="font-display mt-4 text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
                Space Grotesk
              </p>
              <p className="font-display mt-2 text-sm font-medium text-muted-foreground">
                We build Shopify apps &amp; AI tools for serious brands.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Body text
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                CSS: <span className="text-ink">--font-dm-sans</span> →{" "}
                <span className="text-ink">--font-sans</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Class: <span className="text-ink">font-sans</span>
              </p>
              <p className="font-sans mt-4 text-base leading-relaxed text-ink">
                DM Sans — readable paragraphs, UI copy, and long-form content. From custom Shopify
                apps to AI integrations, we help growing brands run smarter.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Monospace / code
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                CSS: <span className="text-ink">--font-jetbrains-mono</span> →{" "}
                <span className="text-ink">--font-mono</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                Class: <span className="text-ink">font-mono</span>
              </p>
              <pre className="font-mono mt-4 whitespace-pre-wrap rounded-lg border border-border bg-background p-3 text-[11px] leading-relaxed text-ink md:text-xs">
                {`npm run dev
SHOPIFY_STORE=aimbrill.myshopify.com
const apiVersion = "2025-01";`}
              </pre>
            </article>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
          <h2 className="font-display text-xl font-semibold md:text-2xl">Logos</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Main Logo
              </p>
              <div className="mt-3 flex h-24 items-center justify-center rounded-xl border border-border bg-background">
                <Image
                  src="/images/aimbrill-logo.png"
                  alt="Aimbrill logo"
                  width={320}
                  height={120}
                  className="h-14 w-auto object-contain"
                />
              </div>
              <p className="font-display mt-2 text-sm font-medium text-muted-foreground">
                We build Shopify apps &amp; AI tools for fast-growing brands.
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-4">
                Wordmark
              </p>
              <div className="mt-3 flex h-24 items-center justify-center rounded-xl border border-border bg-background">
                <Image
                  src="/images/aimbrill-wordmark-transparent.png"
                  alt="Aimbrill wordmark"
                  width={320}
                  height={120}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </article>
          </div>
        </section>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {palette.map((color) => (
            <article
              key={color.name}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="h-28 w-full" style={{ backgroundColor: color.value }} />
              <div className="space-y-1 p-4">
                <p className="font-display text-base font-semibold">{color.name}</p>
                <p className="font-mono text-xs text-muted-foreground">{color.value}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
