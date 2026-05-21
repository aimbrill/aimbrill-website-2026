import type { Metadata } from "next";
import JsonLd from "./components/seo/JsonLd";
import LandingPageClient from "./components/pages/LandingPageClient";
import { canonicalUrl } from "./lib/canonical";
import { mealFlowJsonLdGraph } from "./lib/seo";

const canonical = canonicalUrl("/meal-bundle-builder");

export const metadata: Metadata = {
  title: "Meal Flow | Meal Subscription Automation for Shopify",
  description:
    "Meal Flow connects delivery dates, subscriptions, and bundles on Shopify for meal and food brands. ZIP checks, box building, and delivery sync in one system.",
  alternates: { canonical },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  keywords: [
    "Shopify meal delivery",
    "meal subscription checkout Shopify",
    "food delivery ecommerce Shopify",
    "Shopify delivery date picker",
    "Shopify bundles and subscriptions",
    "meal subscription automation",
  ],
  openGraph: {
    url: canonical,
    title: "Meal Flow | Meal Subscription Automation for Shopify",
    description:
      "Architecture for meal and food brands on Shopify: delivery, subscriptions, and bundles in one connected system.",
  },
  twitter: {
    title: "Meal Flow | Meal Subscription Automation for Shopify",
    description:
      "Architecture for meal and food brands on Shopify: delivery, subscriptions, and bundles in one connected system.",
  },
};

export default function MealSubscriptionFlowPage() {
  return (
    <>
      <JsonLd data={mealFlowJsonLdGraph()} />
      <LandingPageClient />
    </>
  );
}
