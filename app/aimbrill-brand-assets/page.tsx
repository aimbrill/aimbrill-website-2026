import type { Metadata } from "next";
import Image from "next/image";

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
          Internal brand reference page for colors and logos (not linked in site navigation).
        </p>

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
            </article>
            <article className="rounded-2xl border border-border bg-surface p-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Wordmark
              </p>
              <div className="mt-3 flex h-24 items-center justify-center rounded-xl border border-border bg-background">
                <Image
                  src="/images/aimbrill-wordmark-transparent.png"
                  alt="Aimbrill wordmark"
                  width={400}
                  height={100}
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
