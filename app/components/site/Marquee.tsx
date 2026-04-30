const items = [
  "Shopify App Development",
  "AI Automation",
  "★ 5.0 on Shopify App Store",
  "Custom Storefronts",
  "Subscription Flows",
  "API Integrations",
  "Conversion Optimisation",
  "AI Chatbots",
];

export function Marquee() {
  return (
    <section
      aria-label="What we do"
      className="marquee-pause border-y border-border bg-background py-5"
    >
      <div className="overflow-hidden">
        <div className="ticker flex w-max gap-8 whitespace-nowrap font-display text-lg font-semibold tracking-tight md:text-2xl">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-ink">{t}</span>
              <span className="text-[color:var(--lime)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
