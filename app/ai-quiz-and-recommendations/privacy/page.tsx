import type { Metadata } from "next";
import Link from "next/link";
import { QuizSiteFooter } from "../components/QuizSiteFooter";
import { QuizSiteHeader } from "../components/QuizSiteHeader";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Quiz",
  description:
    "Privacy Policy for AI Quiz by Aimbrill — how we collect, use, and protect merchant and customer data in your Shopify store.",
  alternates: {
    canonical: "/ai-quiz-and-recommendations/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <QuizSiteHeader />
      <main className={styles.page}>
        <div className={`aq-wrap ${styles.inner}`}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lead}>
            This policy explains how AI Quiz by Aimbrill collects, uses, and protects information
            when merchants install and use the App in their Shopify store.
          </p>
          <p className={styles.lead}>
            The App uses AI to generate quiz questions and product recommendations based on customer
            responses, and we apply the same privacy-first standards used across the Aimbrill site.
          </p>
          <Link href="/ai-quiz-and-recommendations" className={styles.back}>
            ← Back to home
          </Link>

          <article className={styles.content}>
            <h2>Information We Collect</h2>

            <h3>Shopify and App Data</h3>
            <ul>
              <li>Store name, store URL, and contact email</li>
              <li>Product and collection data required for app functionality</li>
              <li>Quiz configurations created by the merchant</li>
              <li>Customer quiz responses and selected answers</li>
              <li>Optional customer contact details if the merchant enables them</li>
            </ul>

            <h3>Usage and Device Data</h3>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Cookies and session data</li>
              <li>Interaction data from quiz flows and features</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use collected information only for the following purposes:</p>
            <ul>
              <li>Provide and operate the App</li>
              <li>Generate AI-based quiz questions</li>
              <li>Recommend relevant products</li>
              <li>Improve app functionality and performance</li>
              <li>Enhance user experience</li>
              <li>Provide support to merchants</li>
            </ul>

            <h2>Data Privacy Commitment</h2>
            <p className={styles.commitmentIntro}>
              AI Quiz by Aimbrill does not sell, rent, or trade merchant or customer data.
            </p>
            <p>
              Accessed data is used only to provide the App&apos;s core functionality and improve
              the merchant experience.
            </p>
            <p>We are committed to:</p>
            <ul>
              <li>We do not sell or rent merchant or customer data</li>
              <li>We only access the data required for the app&apos;s intended functionality</li>
              <li>We handle accessed data securely and privately</li>
              <li>We use data only to provide and improve the App</li>
            </ul>

            <h2>Merchant Responsibilities</h2>
            <p>Merchants using the App are responsible for:</p>
            <ul>
              <li>Complying with applicable privacy laws</li>
              <li>Informing customers about data collection</li>
              <li>Managing customer data collected through their store</li>
            </ul>

            <h2>AI-Based Processing</h2>
            <p>
              The App uses AI to generate quiz questions, analyze customer responses, and recommend
              products. This process is automated and intended only to improve user experience.
            </p>
            <p>It does not involve legal or sensitive decision-making.</p>

            <h2>Data Retention</h2>
            <p>We retain data only as long as necessary to:</p>
            <ul>
              <li>Provide the Service</li>
              <li>Improve functionality</li>
              <li>Comply with legal obligations</li>
              <li>Support merchants when needed</li>
            </ul>
            <p>
              When the App is uninstalled, we delete or anonymize data within a reasonable
              timeframe.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Object to processing where applicable</li>
            </ul>
            <p>To exercise these rights, please contact us directly.</p>

            <h2>Contact Information</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p>
              <strong>Aimbrill</strong>
              <br />
              <span>Email: </span>
              <a href="mailto:tech-support@aimbrill.com">tech-support@aimbrill.com</a>
              <br />
              Address: 438, Maruti Plaza Complex, Krishnanagar, Ahmedabad, India.
            </p>
          </article>
        </div>
      </main>
      <QuizSiteFooter />
    </>
  );
}
