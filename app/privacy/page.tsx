import type { Metadata } from "next";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Aimbrill",
  description:
    "Learn how Aimbrill collects, uses, and protects personal and business information across our website, Shopify apps, and AI automation services.",
  alternates: {
    canonical: "/privacy",
  },
};

const personalInformation = [
  "Full name",
  "Email address",
  "Phone number",
  "WhatsApp contact information",
  "Shopify store URL or business website",
  "Project requirements or inquiry details",
];

const technicalInformation = [
  "IP address",
  "Browser type",
  "Device information",
  "Cookies",
  "Website usage analytics",
];

const howWeUseInformation = [
  "Providing Shopify development and AI automation services",
  "Responding to inquiries and support requests",
  "Managing consultations or bookings",
  "Improving website functionality and user experience",
  "Communicating project updates",
  "Enhancing security and service reliability",
];

const commitments = [
  "Protecting your privacy",
  "Securing your data",
  "Maintaining full confidentiality",
  "Never monetizing your information",
];

const shopifyAppData = [
  "We only access the data required for the app's intended functionality",
  "We do not share merchant or customer data",
  "We do not sell store information",
  "All accessed data is handled securely and privately",
];

const cookieUsage = [
  "Improve website performance",
  "Analyze visitor behavior",
  "Optimize user experience",
];

const securityMeasures = [
  "Unauthorized access",
  "Data loss",
  "Misuse",
  "Alteration",
  "Disclosure",
];

const thirdPartyServices = ["Shopify", "Calendly", "WhatsApp", "Payment providers"];

const retentionReasons = [
  "Deliver services",
  "Maintain communication",
  "Meet legal obligations",
  "Improve customer support",
];

const yourRights = [
  "Access your personal data",
  "Correct inaccurate information",
  "Request deletion of your data",
  "Withdraw consent for communication",
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-background px-4 py-12 text-foreground md:px-8 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-border bg-surface p-6 grain md:p-10">
            <h1 className="text-center font-display text-4xl font-semibold leading-tight md:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-center text-sm text-muted-foreground md:text-base">
              <span className="font-medium text-ink">Effective Date:</span> April 30, 2026
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
              At <span className="font-medium text-ink">Aimbrill</span>, we are committed to
              protecting your privacy and ensuring that your personal and business information
              remains secure.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
              This Privacy Policy outlines how we collect, use, and protect your information when
              you visit our website, contact us, or use our Shopify apps, AI automation solutions,
              or related services.
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
              By accessing or using our services, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <Section title="Information We Collect">
              <h3 className="mt-5 font-display text-xl font-semibold">Personal Information</h3>
              <PolicyList items={personalInformation} />

              <h3 className="mt-7 font-display text-xl font-semibold">Technical Information</h3>
              <PolicyList items={technicalInformation} />
            </Section>

            <Section title="How We Use Your Information">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Your information is used solely for the following purposes:
              </p>
              <PolicyList items={howWeUseInformation} />
            </Section>

            <Section title="Data Privacy Commitment">
              <p className="mt-4 rounded-2xl border border-border bg-surface-2 p-4 text-sm font-medium text-ink md:text-base">
                Aimbrill does not sell, rent, trade, or share your personal or business information
                with any third party.
              </p>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Your information is kept strictly confidential and is only used internally to
                provide and improve our services.
              </p>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We are committed to:
              </p>
              <PolicyList items={commitments} />
            </Section>

            <Section title="Shopify App Data">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                If you install or use any Shopify application developed by Aimbrill:
              </p>
              <PolicyList items={shopifyAppData} />
            </Section>

            <Section title="Cookies and Analytics">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We may use cookies or similar technologies to:
              </p>
              <PolicyList items={cookieUsage} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                These tools are used strictly for operational and analytical purposes.
              </p>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                You may disable cookies through your browser settings.
              </p>
            </Section>

            <Section title="Data Security">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We implement appropriate technical and organizational security measures to protect
                your information against:
              </p>
              <PolicyList items={securityMeasures} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                While no system can guarantee absolute security, we take privacy and protection
                seriously.
              </p>
            </Section>

            <Section title="Third-Party Services">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Our services may integrate with trusted platforms such as:
              </p>
              <PolicyList items={thirdPartyServices} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                These services are used only when necessary for functionality, and Aimbrill itself
                does not share your data beyond essential operational requirements.
              </p>
            </Section>

            <Section title="Data Retention">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                We retain personal information only for as long as necessary to:
              </p>
              <PolicyList items={retentionReasons} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                When data is no longer required, it is securely deleted.
              </p>
            </Section>

            <Section title="Your Rights">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                You may request to:
              </p>
              <PolicyList items={yourRights} />
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                To exercise these rights, please contact us directly.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Our services are not intended for individuals under the age of 13, and we do not
                knowingly collect personal information from children.
              </p>
            </Section>

            <Section title="Changes to This Privacy Policy">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                Aimbrill reserves the right to update this Privacy Policy at any time.
              </p>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Any modifications will be posted on this page with an updated effective date.
              </p>
            </Section>

            <Section title="Contact Us">
              <p className="mt-4 text-sm text-muted-foreground md:text-base">
                If you have any questions regarding this Privacy Policy or your data, please
                contact:
              </p>
              <div className="mt-5 space-y-2 text-sm md:text-base">
                <p className="font-semibold text-ink">Aimbrill</p>
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
            </Section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
