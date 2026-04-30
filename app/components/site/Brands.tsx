import { useReveal } from "@/hooks/use-reveal";

const brands = [
  {
    name: "Vitabowl",
    logo: "/images/shopify/brand-logos/vitabowl-logo.png",
    logoClass: "h-12 w-auto",
    width: 68,
    height: 68,
  },
  {
    name: "Sea Green",
    logo: "/images/shopify/brand-logos/seagreen-logo.png",
    logoClass: "h-10 w-auto",
    width: 120,
    height: 48,
  },
  {
    name: "Olivia",
    logo: "/images/shopify/brand-logos/olivia-logo.png",
    logoClass: "h-8 w-auto",
    width: 104,
    height: 34,
  },
  {
    name: "Avea",
    logo: "/images/shopify/brand-logos/avea-logo.png",
    logoClass: "h-6 w-auto",
    width: 98,
    height: 24,
  },
  {
    name: "Beauty Boost",
    logo: "/images/shopify/brand-logos/beauty-boost-logo.png",
    logoClass: "h-8 w-auto",
    width: 162,
    height: 40,
  },
  {
    name: "Joylet",
    logo: "/images/shopify/brand-logos/joylet-logo.png",
    logoClass: "h-9 w-auto",
    width: 136,
    height: 64,
  },
  {
    name: "Bearmind",
    logo: "/images/shopify/brand-logos/bearmind-logo.png",
    logoClass: "h-9 w-auto",
    width: 68,
    height: 68,
  },
  {
    name: "July",
    logo: "/images/shopify/brand-logos/july-logo.png",
    logoClass: "h-9 w-auto",
    width: 102,
    height: 69,
  },
  {
    name: "CAPSOLE",
    logo: "/images/shopify/brand-logos/capsole-logo.png",
    logoClass: "h-9 w-auto",
    width: 68,
    height: 68,
  },
  {
    name: "Markethill",
    logo: "/images/shopify/brand-logos/markethill-logo.png",
    logoClass: "h-6 w-auto",
    width: 116,
    height: 24,
  },
];

export function Brands() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Heading */}
          <div className="reveal lg:col-span-5">
            <h2 className="font-display text-[40px] font-semibold leading-[1.02] tracking-tight md:text-[56px]">
              <span className="font-serif italic text-ink">Brands</span> that{" "}
              <span className="relative inline-block">
                <span className="relative z-10">dared</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[color:var(--lime)]"
                />
              </span>{" "}
              to think <span className="font-serif italic">bigger.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              When these stores needed advanced Shopify solutions — custom apps, AI flows, complex
              integrations — they trusted us to deliver.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-ink" />
              D2C · Subscriptions · Beauty · Food · Fashion
            </div>
          </div>

          {/* Brand grid — collage style */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
              {brands.map((b, i) => {
                // Variations: some bigger, some lime, some ink
                const variant =
                  i === 0
                    ? "col-span-2 row-span-1 bg-card"
                    : i === 4
                      ? "col-span-2 bg-[color:var(--lime)]/30"
                      : i === 7
                        ? "bg-ink/[0.04]"
                        : "bg-card";
                return (
                  <div
                    key={b.name}
                    data-cursor="brand"
                    className={`reveal hover-lift group relative grid place-items-center overflow-hidden rounded-2xl border border-ink/10 ${variant} aspect-[5/4] p-3 shadow-soft transition-all`}
                    data-delay={`${i * 40}`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-y-full bg-[color:var(--lime)]/40 transition-transform duration-500 group-hover:translate-y-0"
                    />
                    <img
                      src={b.logo}
                      alt={b.name}
                      width={b.width}
                      height={b.height}
                      className={`relative z-10 object-contain ${b.logoClass}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
