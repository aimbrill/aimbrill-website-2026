import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "AI Quiz & Product Recommendation | Aimbrill",
  description:
    "AI Quiz & Product Recommendation by Aimbrill helps shoppers discover the right products faster through guided quizzes and AI-driven recommendations.",
  alternates: {
    canonical: "/ai-quiz-and-recommendations",
  },
};

const useCases = [
  {
    title: "Guided Product Discovery",
    text: "Turn uncertain visitors into confident buyers with quiz paths designed around real buying intent.",
  },
  {
    title: "Personalized Recommendations",
    text: "Match each response to relevant products so customers see what fits them best, not a generic catalog.",
  },
  {
    title: "Smarter Zero-Party Data",
    text: "Capture preference data from quiz answers to improve campaigns, segmentation, and future conversions.",
  },
];

export default function AiQuizAndRecommendationsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section className="px-4 pb-12 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2.2rem] border border-border bg-surface p-6 grain shadow-soft md:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
                Coming Soon
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.32em] text-muted-foreground">
                Waitlist
              </span>
            </div>

            <div className="mt-10 max-w-4xl">
              <h1 className="font-display text-4xl font-semibold leading-tight text-ink md:text-[56px]">
                AI Quiz & Product Recommendation
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-2xl md:leading-relaxed">
                Help shoppers find exactly what they need with an AI-powered quiz that recommends
                the perfect product. Built for fashion, beauty, food, and supplement brands.
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-ink/20 bg-background px-6 py-3 text-lg font-semibold text-ink transition hover:bg-surface-2"
              >
                Join the waitlist <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <h2 className="font-display text-xl font-semibold text-ink">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Built for conversion-first Shopify teams
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              We are designing AI Quiz to reduce decision fatigue, improve product fit confidence,
              and turn quiz interactions into measurable revenue lift. Want early access or a custom
              setup for your brand? Reach out and we will add you to the launch waitlist.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:admin@aimbrill.com?subject=AI%20Quiz%20Waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[16px] font-semibold text-background transition hover:scale-[1.03]"
              >
                Email us <span aria-hidden>→</span>
              </a>
              <a
                href="https://wa.me/917990488965"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-[16px] font-semibold text-ink transition hover:bg-surface-2"
              >
                WhatsApp <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="sr-only" />
      <Footer privacyHref="/ai-quiz-and-recommendations/privacy" />
    </main>
  );
}
