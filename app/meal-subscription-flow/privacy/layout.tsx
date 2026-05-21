import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "../components/seo/JsonLd";
import { canonicalUrl } from "../lib/canonical";
import { webPageJsonLd } from "../lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How MealFlow Box collects and uses merchant and customer data for Shopify delivery, subscription, and bundle tools—written for store operators.",
  alternates: { canonical: canonicalUrl("/meal-subscription-flow/privacy") },
  robots: { index: true, follow: true },
  openGraph: {
    url: canonicalUrl("/meal-subscription-flow/privacy"),
    title: "Privacy Policy | MealFlow Box",
    description: "Privacy practices for MealFlow Box Shopify merchant services.",
  },
};

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          "/meal-subscription-flow/privacy",
          "Privacy Policy | MealFlow Box",
          "Privacy Policy for MealFlow Box: data use for Shopify merchants using delivery, subscription, and bundle features.",
        )}
      />
      {children}
    </>
  );
}
