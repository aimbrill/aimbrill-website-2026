import type { ReactNode } from "react";
import Image from "next/image";
import aiImg from "@/assets/ai-automation.jpg";
import shopifyAppImg from "@/assets/service-shopify-app.jpg";
import storeImg from "@/assets/service-store.jpg";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    title: "Shopify App Development",
    desc: "Custom Shopify apps — upsell tools, subscription flows, automation widgets, and anything your store needs that doesn't exist yet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v6M14 17h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
    tag: "Build",
    image: shopifyAppImg.src,
  },
  {
    title: "AI Automation & Integrations",
    desc: "AI chatbots, flow automation, and API integrations — connect your tools and eliminate the manual work holding your brand back.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
    tag: "Automate",
    image: aiImg.src,
  },
  {
    title: "Custom Shopify Store Development",
    desc: "Got a Figma design or a vision? We turn it into a fast, conversion-optimised Shopify store built to grow with your brand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 8l2-4h14l2 4M3 8v12h18V8M3 8h18M9 14h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    ),
    tag: "Launch",
    image: storeImg.src,
  },
];

export function Services() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative py-12 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal">
          <SectionHeader
            label="What we do"
            title={
              <>
                Build, automate, and <br className="hidden md:block" />
                scale your Shopify brand.
              </>
            }
          />
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              data-cursor="explore"
              className="reveal hover-lift group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-7 grain"
              style={{ minHeight: 360 }}
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color:var(--lime)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
              />
              <div className="relative flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface-2 text-ink">
                  {s.icon}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
              </div>

              {s.image && (
                <div className="relative mt-5 overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={s.image}
                    alt=""
                    width={1024}
                    height={1024}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={80}
                    loading="lazy"
                    className="h-32 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              )}

              <div className="relative mt-5">
                <h3 className="font-display text-2xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink opacity-0 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100">
                  Learn more <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  label,
  title,
  sub,
}: {
  label: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-ink" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink">{label}</span>
      </div>
      <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </h2>
      {sub && <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}
