import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./try-meal-flow.css";
import JsonLd from "../components/seo/JsonLd";
import { canonicalUrl } from "../lib/canonical";
import { mealFlowLinks } from "../lib/links";
import { webPageJsonLd } from "../lib/seo";

const path = mealFlowLinks.tryMealFlow;

export const metadata: Metadata = {
  title: "Try Meal Flow | Interactive Shopify meal demo",
  description:
    "Hands-on Shopify meal flow: zip or city, delivery window, cart, and summary—for merchants fixing subscription and delivery checkout.",
  alternates: { canonical: canonicalUrl(path) },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    url: canonicalUrl(path),
    title: "Try Meal Flow | Interactive Shopify meal demo",
    description:
      "Interactive demo of delivery scheduling and cart flow for meal brands on Shopify—not a meal kit purchase page.",
  },
};

export default function TryMealFlowLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          path,
          "Try Meal Flow | Interactive Shopify meal demo",
          "Interactive Shopify journey for meal brands: location, delivery, products, and order summary.",
        )}
      />
      {children}
    </>
  );
}
