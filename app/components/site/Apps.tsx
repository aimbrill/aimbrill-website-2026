import { SectionHeader } from "./Services";
import { useReveal } from "@/hooks/use-reveal";

export const apps = [
  {
    name: "WeUpsell",
    full: "WeUpsell — AI Popup & Upsell Widgets",
    slug: "weupsell-ai-popup-upsell",
    status: "live" as const,
    statusLabel: "Live on Shopify App Store",
    desc: "AI-powered popups and upsell widgets that show the right offer to the right customer at the right time. No manual rules. Just results.",
    rating: "★★★★★ 5.0 (7 reviews)",
    cta: "Install free on Shopify",
    href: "https://apps.shopify.com/aimbrill-popup-ai-automate-bot",
  },
  {
    name: "AI Quiz",
    full: "AI Quiz & Product Recommendation",
    slug: "ai-quiz-and-recommendations",
    status: "soon" as const,
    statusLabel: "Coming Soon",
    desc: "Help shoppers find exactly what they need with an AI-powered quiz that recommends the perfect product. Built for fashion, beauty, food, and supplement brands.",
    cta: "Join the waitlist",
    href: "#contact",
  },
  {
    name: "Meal Flow",
    full: "Meal Flow Automation",
    slug: "meal-bundle-builder",
    status: "soon" as const,
    statusLabel: "Coming Soon",
    desc: "End-to-end meal subscription automation for Shopify — ZIP code restrictions, box builder, and delivery sync. All in one app.",
    cta: "Join the waitlist",
    href: "#contact",
  },
];

export function Apps() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="apps" ref={ref} className="relative py-12 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal">
          <SectionHeader
            label="Our Apps"
            title={
              <>
                Shopify apps built <br className="hidden md:block" />
                by our team
              </>
            }
            sub="Tools we've built and shipped — available on the Shopify App Store."
          />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <FeaturedApp app={apps[0]} />
          <div className="grid w-full grid-cols-1 gap-5 lg:col-span-5">
            <SmallApp app={apps[1]} />
            <SmallApp app={apps[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status, label }: { status: "live" | "soon"; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
        status === "live"
          ? "border-ink/20 bg-lime text-ink"
          : "border-border bg-surface-2 text-muted-foreground"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${status === "live" ? "bg-ink animate-pulse" : "bg-muted-foreground"}`}
      />
      {label}
    </span>
  );
}

function FeaturedApp({ app }: { app: (typeof apps)[number] }) {
  return (
    <article className="reveal group relative w-full overflow-hidden rounded-3xl border border-border bg-card p-7 md:p-10 lg:col-span-7 grain hover-lift">
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-lime opacity-50 blur-3xl"
      />
      <div className="relative flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <StatusPill status={app.status} label={app.statusLabel} />
          {app.rating && (
            <span className="font-mono text-xs text-muted-foreground">{app.rating}</span>
          )}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Featured
          </p>
          <h3 className="mt-2 font-display text-4xl font-semibold leading-tight md:text-5xl">
            {app.full}
          </h3>
          <p className="mt-4 max-w-xl text-[16px] text-muted-foreground md:text-[16px]">
            {app.desc}
          </p>
        </div>

        <div className="relative mt-2 overflow-hidden rounded-2xl border border-border bg-background p-5 shadow-soft">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            <span className="ml-3 font-mono text-[11px] text-muted-foreground">
              weupsell.app/preview
            </span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Stat title="Visitors" value="12,480" delta="+24%" />
            <Stat title="AOV uplift" value="+38%" delta="last 30d" highlight />
            <Stat title="Conversions" value="1,204" delta="+11%" />
          </div>
        </div>

        <div>
          <a
            href={app.slug ? `/${app.slug}` : app.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="install"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[16px] font-semibold text-background transition hover:scale-[1.03]"
          >
            {app.cta} <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Stat({
  title,
  value,
  delta,
  highlight,
}: {
  title: string;
  value: string;
  delta: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-4 ${highlight ? "border-ink/15 bg-lime" : "border-border bg-surface"}`}
    >
      <div className={`text-xs ${highlight ? "text-ink/80" : "text-muted-foreground"}`}>
        {title}
      </div>
      <div className="mt-1 font-display text-2xl font-semibold">{value}</div>
      <div className={`mt-1 text-xs ${highlight ? "text-ink/70" : "text-ink/60"}`}>
        {delta} {highlight ? "" : "↑"}
      </div>
    </div>
  );
}

function SmallApp({ app }: { app: (typeof apps)[number] }) {
  return (
    <article
      data-cursor="waitlist"
      className="reveal group relative flex w-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 grain hover-lift sm:p-6"
    >
      <div className="flex items-center justify-between">
        <StatusPill status={app.status} label={app.statusLabel} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Waitlist
        </span>
      </div>
      <div className="mt-6">
        <h3 className="font-display text-3xl font-semibold leading-tight sm:text-2xl">
          {app.full}
        </h3>
        <p className="mt-3 text-base text-muted-foreground sm:text-sm">{app.desc}</p>
      </div>
      <a
        href={app.slug ? `/${app.slug}` : app.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 bg-background px-4 py-3 text-[16px] font-semibold transition hover:bg-secondary sm:w-fit sm:justify-start sm:py-2.5"
      >
        {app.cta} <span aria-hidden>→</span>
      </a>
    </article>
  );
}
