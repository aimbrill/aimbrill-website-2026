import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "../components/seo/JsonLd";
import { canonicalUrl } from "../lib/canonical";
import { webPageJsonLd } from "../lib/seo";

export const metadata: Metadata = {
  title: "Meal delivery Shopify demo | MealFlow Box",
  description:
    "See a Shopify-style meal flow: pincode, delivery date, box builder, and subscription plans—for merchants evaluating connected checkout.",
  alternates: { canonical: canonicalUrl("/meal-bundle-builder/meal-delivery") },
  robots: { index: true, follow: true },
  openGraph: {
    url: canonicalUrl("/meal-bundle-builder/meal-delivery"),
    title: "Meal delivery Shopify demo | MealFlow Box",
    description:
      "Illustrative meal subscription and delivery journey for food brands on Shopify—not a consumer meal service.",
  },
};

export default function MealDeliveryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={webPageJsonLd(
          "/meal-bundle-builder/meal-delivery",
          "Meal delivery Shopify demo | MealFlow Box",
          "Demo flow for Shopify merchants: delivery area, dates, meal box, and subscription plans for food brands.",
        )}
      />
      {children}
    </>
  );
}
