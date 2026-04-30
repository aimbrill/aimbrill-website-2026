import { SectionHeader } from "./Services";
import mealImg from "@/assets/case-study-meal.jpg";
import { useReveal } from "@/hooks/use-reveal";

const CALENDLY_URL = "https://calendly.com/weupsell-experts/ai-campaign-popup";

const tags = [
  "Shopify App Development",
  "Flow Automation",
  "Subscription Integration",
  "API Development",
];

export function CaseStudy() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="work" ref={ref} className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal">
          <SectionHeader
            label="Featured Work"
            title={<>How we helped a meal subscription brand automate their entire Shopify flow</>}
          />
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-3xl border border-border bg-card grain shadow-soft">
          <div className="grid lg:grid-cols-12">
            {/* Image side */}
            <div className="relative lg:col-span-5 border-b border-border lg:border-b-0 lg:border-r">
              <img
                src={mealImg.src}
                alt="Funky Food meal subscription"
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 backdrop-blur shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-ink text-xl font-bold text-background">
                  F
                </span>
                <div>
                  <div className="font-display text-lg font-semibold">Funky Food Australia</div>
                  <div className="text-xs text-muted-foreground">
                    Meal subscription · Food delivery
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 lg:col-span-7">
              <div className="grid grid-cols-3 gap-4 border-b border-border pb-6">
                <Stat k="Manual ops" v="0%" />
                <Stat k="Order errors" v="↓ near 0" />
                <Stat k="Flow" v="End-to-end" />
              </div>

              <div className="mt-2">
                <Block n="01" title="The problem">
                  Funky Food were managing their meal subscription flow manually — ZIP code
                  restrictions, box customisation, and delivery sync all required constant manual
                  work. It was slowing down their operations and creating errors in orders.
                </Block>
                <Block n="02" title="What we built">
                  We built a custom Shopify flow automation app that handled everything end-to-end:
                  ZIP code validation at checkout, a drag-and-drop box builder for customers, and
                  direct sync with their subscription and delivery systems.
                </Block>
                <Block n="03" title="The result">
                  A fully automated meal subscription flow — zero manual intervention, fewer order
                  errors, and a smoother experience for their customers from cart to doorstep.
                </Block>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-background hover:scale-[1.03] transition"
              >
                Have a similar challenge? Let's talk. <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {k}
      </div>
      <div className="mt-1 font-display text-xl font-semibold md:text-2xl">{v}</div>
    </div>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border py-6 last:border-b-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-muted-foreground">{n}</span>
        <h4 className="font-display text-xl font-semibold">{title}</h4>
      </div>
      <p className="mt-3 pl-10 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </p>
    </div>
  );
}
