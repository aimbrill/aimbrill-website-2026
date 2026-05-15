import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

const brands = [
  {
    name: "Funky Food",
    logo: "/images/shopify/new_brand_logos/Funky_Food.png",
    logoClass: "h-28 w-auto",
    width: 360,
    height: 144,
  },
  {
    name: "Gibson",
    logo: "/images/shopify/new_brand_logos/Gibson.png",
    logoClass: "h-20 w-auto",
    width: 240,
    height: 96,
  },
  {
    name: "Maison Fayard",
    logo: "/images/shopify/new_brand_logos/Maison_Fayard.png",
    logoClass: "h-20 w-auto",
    width: 260,
    height: 96,
  },
  {
    name: "OceanWash",
    logo: "/images/shopify/new_brand_logos/OceanWash.png",
    logoClass: "h-20 w-auto",
    width: 240,
    height: 96,
  },
  {
    name: "PT PRO",
    logo: "/images/shopify/new_brand_logos/PT_PRO.png",
    logoClass: "h-32 w-auto",
    width: 420,
    height: 168,
  },
  {
    name: "Theloffy",
    logo: "/images/shopify/new_brand_logos/Theloffy.png",
    logoClass: "h-20 w-auto",
    width: 220,
    height: 96,
  },
  {
    name: "Reisport",
    logo: "/images/shopify/new_brand_logos/reisport.png",
    logoClass: "h-20 w-auto",
    width: 240,
    height: 96,
  },
  {
    name: "Shilives",
    logo: "/images/shopify/new_brand_logos/shilives.png",
    logoClass: "h-20 w-auto",
    width: 240,
    height: 96,
  },
];

export function Brands() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative py-14 md:py-10">
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
                    <Image
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
