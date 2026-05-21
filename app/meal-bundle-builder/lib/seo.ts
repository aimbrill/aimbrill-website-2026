import { canonicalUrl } from "./canonical";
import { siteUrl } from "./site";

const base = () => siteUrl.replace(/\/$/, "");

export const organizationId = () => `${base()}/#organization`;
export const websiteId = () => `${base()}/#website`;
export const serviceId = () => `${base()}/#service`;

export const sameAs = [
  "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2",
  "https://www.linkedin.com/company/aimbrill/",
] as const;

/** WebPage + publisher for inner routes (no FAQ unless visible on page). */
export function webPageJsonLd(path: string, name: string, description: string) {
  const url = canonicalUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": websiteId() },
        publisher: { "@id": organizationId() },
        inLanguage: "en-US",
      },
    ],
  };
}

/** Meal Flow landing: Organization + WebSite + WebPage + ProfessionalService. */
export function mealFlowJsonLdGraph() {
  const root = base();
  const pageUrl = canonicalUrl("/meal-bundle-builder");
  const orgId = organizationId();
  const webId = websiteId();
  const svcId = serviceId();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "Aimbrill",
        url: root,
        description:
          "Shopify app development and automation studio for food, meal, and recurring-delivery brands.",
        email: "mailto:admin@aimbrill.com",
        sameAs: [...sameAs],
      },
      {
        "@type": "WebSite",
        "@id": webId,
        url: root,
        name: "Aimbrill",
        description: "Shopify apps and automation for D2C brands.",
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Meal Flow | Meal Subscription Automation for Shopify",
        description:
          "Meal Flow connects delivery dates, subscriptions, and bundles on Shopify for meal and food brands.",
        isPartOf: { "@id": webId },
        about: { "@id": orgId },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": svcId,
        name: "Meal subscription flow automation for Shopify",
        description:
          "ZIP code checks, box building, delivery sync, and subscription logic for meal brands on Shopify.",
        provider: { "@id": orgId },
        serviceType: "Ecommerce automation",
        areaServed: { "@type": "Place", name: "Worldwide" },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Shopify merchants in food, meal, and recurring delivery",
        },
      },
    ],
  };
}
