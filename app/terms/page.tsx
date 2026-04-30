import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Aimbrill",
  description:
    "Read the Terms and Conditions for using Aimbrill's website, Shopify apps, and digital services.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Services",
    content:
      "Aimbrill provides Shopify app development, AI automation, custom store development, and related digital solutions based on agreed project scope.",
  },
  {
    title: "Payments & Refunds",
    content:
      "Refunds are only available within 5 days in cases of verified technical issues directly caused by Aimbrill.",
  },
  {
    title: "Updates",
    content:
      "We may update, modify, or improve our products and services at any time to enhance performance or security.",
  },
  {
    title: "Downtime",
    content:
      "Aimbrill is not responsible for downtime caused by third-party platforms, hosting providers, Shopify, or external integrations.",
  },
  {
    title: "Client Responsibility",
    content:
      "Clients must provide accurate information and use our services lawfully.",
  },
  {
    title: "Our Rights",
    content:
      "We reserve the right to refuse service, modify offerings, or discontinue products at any time.",
  },
  {
    title: "Privacy",
    content: "Your data remains private. We do not sell, rent, or share your information.",
  },
  {
    title: "Governing Law",
    content: "These terms are governed by the laws of Ahmedabad, Gujarat, India.",
  },
  {
    title: "Contact",
    content: "For any questions, contact Aimbrill via email or WhatsApp.",
  },
];

function Section({ title, content }: { title: string; content: string }) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{content}</p>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-background px-4 py-12 text-foreground md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-6 grain md:p-10">
            <h1 className="text-center font-display text-4xl font-semibold leading-tight md:text-6xl">
              Terms and Conditions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
              By accessing or using Aimbrill&apos;s website, Shopify apps, or services, you agree to
              the following terms and conditions.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <Section key={section.title} title={section.title} content={section.content} />
            ))}

            <section className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
              <h2 className="font-display text-2xl font-semibold md:text-3xl">Agreement</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                By using our services, you agree to these terms.
              </p>
              <div className="mt-5 space-y-2 text-sm md:text-base">
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:admin@aimbrill.com" className="underline-grow text-ink">
                    admin@aimbrill.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  WhatsApp:{" "}
                  <a href="https://wa.me/917990488965" className="underline-grow text-ink">
                    +91 79904 88965
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
