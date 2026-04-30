import { useState } from "react";
import { SectionHeader } from "./Services";
import { useReveal } from "@/hooks/use-reveal";
import t1 from "@/assets/testimonial-1.png";
import t2 from "@/assets/testimonial-2.png";

type Testimonial = {
  image: string;
  name: string;
  role: string;
  video: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    image: t1.src,
    name: "Dareen Lee",
    role: "Founder of Capsole Club · 100k+ followers",
    video: "https://vimeo.com/1146543405",
    quote:
      "Aimbrill rebuilt our Shopify experience end-to-end. The team genuinely cared about the outcome, not just shipping the work.",
  },
  {
    image: t2.src,
    name: "Alli Cavasino",
    role: "Co-founder of JoyLet",
    video: "https://vimeo.com/1073196560",
    quote:
      "Working with Aimbrill felt like having an in-house team. They turned a complex automation into something simple and reliable.",
  },
];

export function Testimonials() {
  const ref = useReveal<HTMLElement>();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="reveal">
          <SectionHeader
            label="Client love"
            title={
              <>
                Real founders. <span className="italic">Real results.</span>
              </>
            }
            sub="Hear directly from the brands we've built with."
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="reveal hover-lift group relative overflow-hidden rounded-3xl border border-border bg-card p-5 grain shadow-soft"
            >
              <button
                type="button"
                data-cursor="play"
                onClick={() => setActive(t.video)}
                className="relative block w-full overflow-hidden rounded-2xl border border-border bg-surface-2"
              >
                <img
                  src={t.image}
                  alt={`${t.name} — video testimonial`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <span className="pointer-events-none absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[color:var(--lime)] text-ink shadow-pop transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-ink backdrop-blur">
                  Video review
                </span>
              </button>

              <div className="mt-5 px-1">
                <p className="font-display text-lg leading-snug text-ink">"{t.quote}"</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-display font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    ★ Verified
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[120] grid place-items-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-ink shadow-soft hover:scale-105"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="relative aspect-video">
              <iframe
                src={`https://player.vimeo.com/video/${active.split("/").pop()}?autoplay=1`}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Client testimonial"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
