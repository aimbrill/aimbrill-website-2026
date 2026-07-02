import {
  ExternalLink,
  MapPin,
  MessageCircleQuestion,
  Package,
  RefreshCw,
  ShoppingCart,
  Smile,
  Target,
  TrendingUp,
  Truck,
  Users,
} from "lucide-react";
import { SectionHeader } from "./Services";
import { useReveal } from "@/hooks/use-reveal";

type AppTheme = "green" | "blue" | "purple";

type AppStat = {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
};

type AppFeature = {
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

type AppConfig = {
  name: string;
  headline: string;
  theme: AppTheme;
  status: "live" | "soon";
  statusLabel: string;
  reviewCount?: number;
  desc: string;
  cta: string;
  /** Internal product page (header nav, learn more). */
  pagePath: string;
  /** Shopify App Store URL for install CTA on cards. */
  shopifyHref: string;
  /** Short copy for header mega-menu. */
  menuDesc: string;
  /** Optional second link shown in header apps menu. */
  secondaryMenuLink?: { label: string; href: string };
  panel: "stats" | "features";
  stats?: AppStat[];
  features?: AppFeature[];
};

export const themeStyles: Record<
  AppTheme,
  {
    dot: string;
    pill: string;
    name: string;
    iconBg: string;
    iconFg: string;
    panel: string;
    star: string;
    statHighlight: string;
    statSub: string;
  }
> = {
  green: {
    dot: "bg-lime-500",
    pill: "border-lime-200 bg-lime-50 text-ink",
    name: "text-lime-600",
    iconBg: "bg-lime-400",
    iconFg: "text-ink",
    panel: "border-lime-100 bg-lime-50/80",
    star: "text-lime-500",
    statHighlight: "text-lime-600",
    statSub: "text-lime-600/80",
  },
  blue: {
    dot: "bg-sky-500",
    pill: "border-sky-200 bg-sky-50 text-ink",
    name: "text-sky-600",
    iconBg: "bg-sky-500",
    iconFg: "text-white",
    panel: "border-sky-100 bg-sky-50/80",
    star: "text-sky-500",
    statHighlight: "text-sky-600",
    statSub: "text-sky-600/80",
  },
  purple: {
    dot: "bg-violet-500",
    pill: "border-violet-200 bg-violet-50 text-ink",
    name: "text-violet-600",
    iconBg: "bg-violet-500",
    iconFg: "text-white",
    panel: "border-violet-100 bg-violet-50/80",
    star: "text-violet-500",
    statHighlight: "text-violet-600",
    statSub: "text-violet-600/80",
  },
};

export const apps: AppConfig[] = [
  {
    name: "WeUpsell",
    headline: "AI Popup & Upsell Widgets",
    theme: "green",
    status: "live",
    statusLabel: "Live on Shopify App Store",
    reviewCount: 7,
    desc: "AI-powered popups and upsell widgets that show the right offer to the right customer at the right time. No manual rules. Just results.",
    cta: "View on Shopify App Store",
    pagePath: "https://www.weupsell.com/",
    shopifyHref: "https://apps.shopify.com/ai-upsell-cross-sell-by-weupsell",
    menuDesc: "AI-powered popups and upsell widgets that show the right offer at the right time.",
    panel: "stats",
    stats: [
      { label: "Visitors", value: "12,480", sub: "+24% ↑", highlight: true },
      { label: "AOV uplift", value: "+38%", sub: "last 30d" },
      { label: "Conversions", value: "1,204", sub: "+11% ↑", highlight: true },
    ],
  },
  {
    name: "AI Quiz",
    headline: "AI Quiz & Product Recommendation",
    theme: "blue",
    status: "live",
    statusLabel: "New Launch",
    desc: "Help shoppers find exactly what they need with an AI-powered quiz that recommends the perfect product. Built for fashion, beauty, food, and supplement brands.",
    cta: "View on Shopify App Store",
    pagePath: "/ai-quiz-and-recommendations",
    shopifyHref: "https://apps.shopify.com/ai-quiz-recommendation",
    menuDesc: "Guided quizzes and AI recommendations so shoppers find the right product faster.",
    panel: "features",
    features: [
      { label: "Smarter Recommendations", icon: Target },
      { label: "Higher Conversions", icon: TrendingUp },
      { label: "Better Customer Experience", icon: Smile },
    ],
  },
  {
    name: "Meal Flow",
    headline: "Meal Flow Automation",
    theme: "purple",
    status: "live",
    statusLabel: "New Launch",
    desc: "End-to-end meal subscription automation for Shopify — ZIP code restrictions, box builder, and delivery sync. All in one app.",
    cta: "View on Shopify App Store",
    pagePath: "/meal-bundle-builder",
    shopifyHref: "https://apps.shopify.com/mealflow-box",
    menuDesc: "Meal subscription automation with ZIP rules, box builder, and delivery sync.",
    panel: "features",
    features: [
      { label: "ZIP Code Restrictions", icon: MapPin },
      { label: "Box Builder", icon: Package },
      { label: "Delivery Sync", icon: Truck },
    ],
  },
];

export function AppIcon({ app, size = "md" }: { app: AppConfig; size?: "sm" | "md" }) {
  const t = themeStyles[app.theme];
  const Icon =
    app.theme === "green" ? RefreshCw : app.theme === "blue" ? MessageCircleQuestion : Package;
  const box = size === "sm" ? "h-9 w-9 rounded-xl" : "h-14 w-14 rounded-2xl";
  const icon = size === "sm" ? "h-4.5 w-4.5" : "h-7 w-7";

  return (
    <div
      className={`flex shrink-0 items-center justify-center shadow-sm ${box} ${t.iconBg}`}
      aria-hidden
    >
      <Icon className={`${icon} ${t.iconFg}`} strokeWidth={2.25} />
    </div>
  );
}

function StarRating({ theme, count }: { theme: AppTheme; count: number }) {
  const t = themeStyles[theme];
  return (
    <div className="flex flex-col items-end gap-0.5">
      <div className={`flex gap-0.5 text-sm leading-none ${t.star}`} aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <span className="text-[11px] font-medium text-muted-foreground">5.0 ({count} reviews)</span>
    </div>
  );
}

function StatsPanel({ app }: { app: AppConfig }) {
  const t = themeStyles[app.theme];
  if (!app.stats) return null;

  return (
    <div className={`grid grid-cols-3 gap-2 rounded-2xl border p-4 ${t.panel}`}>
      {app.stats.map((stat) => (
        <div key={stat.label} className="min-w-0 text-center sm:text-left">
          <div className="mb-2 flex justify-center sm:justify-start">
            {stat.label === "Visitors" && <Users className="h-4 w-4 text-muted-foreground" />}
            {stat.label === "AOV uplift" && (
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            )}
            {stat.label === "Conversions" && (
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
          <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            {stat.label}
          </div>
          <div className="mt-0.5 font-display text-xl font-semibold text-ink">{stat.value}</div>
          <div
            className={`mt-0.5 text-[11px] font-medium ${stat.highlight ? t.statHighlight : "text-muted-foreground"}`}
          >
            {stat.sub}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesPanel({ app }: { app: AppConfig }) {
  const t = themeStyles[app.theme];
  if (!app.features) return null;

  return (
    <div className={`grid grid-cols-3 gap-3 rounded-2xl border p-4 ${t.panel}`}>
      {app.features.map(({ label, icon: Icon }) => (
        <div key={label} className="flex flex-col items-center gap-2 text-center">
          <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.75} />
          <span className="text-[11px] font-semibold leading-snug text-ink">{label}</span>
        </div>
      ))}
    </div>
  );
}

function AppCard({ app }: { app: AppConfig }) {
  const t = themeStyles[app.theme];

  return (
    <article className="reveal flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft grain hover-lift md:p-7">
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold ${t.pill}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
          {app.statusLabel}
        </span>
        {app.reviewCount != null && <StarRating theme={app.theme} count={app.reviewCount} />}
      </div>

      <div className="mt-5 flex gap-4">
        <AppIcon app={app} />
        <div className="min-w-0 flex-1">
          <p className={`text-sm font-bold ${t.name}`}>{app.name}</p>
          <h3 className="mt-1 font-display text-2xl font-semibold leading-tight text-ink md:text-[1.65rem]">
            {app.headline}
          </h3>
        </div>
      </div>

      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">{app.desc}</p>

      <div className="mt-5">
        {app.panel === "stats" ? <StatsPanel app={app} /> : <FeaturesPanel app={app} />}
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <a
          href={app.shopifyHref}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="install"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-[15px] font-semibold text-background transition hover:scale-[1.02] hover:bg-ink/90"
        >
          {app.cta}
          <ExternalLink className="h-4 w-4" strokeWidth={2.25} aria-hidden />
        </a>
        <a
          href={app.pagePath}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-[14px] font-semibold text-ink transition hover:bg-surface-2"
        >
          Learn more <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

export function Apps() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="apps" ref={ref} className="relative py-12 md:py-16">
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
