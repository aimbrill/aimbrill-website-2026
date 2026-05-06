import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "AI Quiz by Aimbrill Privacy Policy | Aimbrill",
  description:
    "Privacy Policy for AI Quiz by Aimbrill, including data collection, usage, retention, and merchant responsibilities.",
  alternates: {
    canonical: "/ai-quiz-and-recommendations/privacy",
  },
};

const personalInformation = [
  "Store name, store URL, and contact email",
  "Product and collection data required for app functionality",
  "Quiz configurations created by the merchant",
  "Customer quiz responses and selected answers",
  "Optional customer contact details if the merchant enables them",
];

const technicalInformation = [
  "IP address",
  "Browser type",
  "Device information",
  "Cookies and session data",
  "Interaction data from quiz flows and features",
];

const howWeUseInformation = [
  "Provide and operate the App",
  "Generate AI-based quiz questions",
  "Recommend relevant products",
  "Improve app functionality and performance",
  "Enhance user experience",
  "Provide support to merchants",
];

const commitments = [
  "We do not sell or rent merchant or customer data",
  "We only access the data required for the app's intended functionality",
  "We handle accessed data securely and privately",
  "We use data only to provide and improve the App",
];

const merchantResponsibilities = [
  "Complying with applicable privacy laws",
  "Informing customers about data collection",
  "Managing customer data collected through their store",
];

const retentionReasons = [
  "Provide the Service",
  "Improve functionality",
  "Comply with legal obligations",
  "Support merchants when needed",
];

const yourRights = [
  "Access your data",
  "Request correction or deletion",
  "Object to processing where applicable",
];

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

const PrivacyPolicy = () => {
  return (
    <>
      <main className="min-h-screen bg-background px-4 py-12 text-foreground md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-6 grain md:p-10">
            <h1 className="text-center font-display text-4xl font-semibold leading-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
              This policy explains how AI Quiz by Aimbrill collects, uses, and protects information
              when merchants install and use the App in their Shopify store.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
              The App uses AI to generate quiz questions and product recommendations based on
              customer responses, and we apply the same privacy-first standards used across the
              Aimbrill site.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <Section title="Information We Collect">
              <h3 className="mt-5 font-display text-xl font-semibold">Shopify and App Data</h3>
              <PolicyList items={personalInformation} />

              <h3 className="mt-7 font-display text-xl font-semibold">Usage and Device Data</h3>
              <PolicyList items={technicalInformation} />
            </Section>

            <Section title="How We Use Your Information">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We use collected information only for the following purposes:
              </p>
              <PolicyList items={howWeUseInformation} />
            </Section>

            <Section title="Data Privacy Commitment">
              <p className="mt-4 rounded-2xl border border-border bg-surface-2 p-4 text-sm font-medium text-ink md:text-base">
                AI Quiz by Aimbrill does not sell, rent, or trade merchant or customer data.
              </p>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Accessed data is used only to provide the App&apos;s core functionality and improve
                the merchant experience.
              </p>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We are committed to:
              </p>
              <PolicyList items={commitments} />
            </Section>

            <Section title="Merchant Responsibilities">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Merchants using the App are responsible for:
              </p>
              <PolicyList items={merchantResponsibilities} />
            </Section>

            <Section title="AI-Based Processing">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                The App uses AI to generate quiz questions, analyze customer responses, and
                recommend products. This process is automated and intended only to improve user
                experience.
              </p>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                It does not involve legal or sensitive decision-making.
              </p>
            </Section>

            <Section title="Data Retention">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We retain data only as long as necessary to:
              </p>
              <PolicyList items={retentionReasons} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                When the App is uninstalled, we delete or anonymize data within a reasonable
                timeframe.
              </p>
            </Section>

            <Section title="Your Rights">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Depending on your location, you may have the right to:
              </p>
              <PolicyList items={yourRights} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                To exercise these rights, please contact us directly.
              </p>
            </Section>

            <Section title="Contact Information">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-5 space-y-2 text-sm md:text-base">
                <p className="font-semibold text-ink">Aimbrill</p>
                <p className="text-muted-foreground">
                  Email:{" "}
                  <a href="mailto:tech-support@aimbrill.com" className="underline-grow text-ink">
                    tech-support@aimbrill.com
                  </a>
                </p>
                <p className="text-muted-foreground">
                  Address: 438, Maruti Plaza Complex, Krishnanagar, Ahmedabad, India
                </p>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
