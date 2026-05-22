export const site = {
  name: "Aimbrill",
  title: "Aimbrill | AI-Powered Shopify Studio",
  description: "We build AI automation, smart apps & solutions for D2C brands.",
  url: "https://aimbrill.com",
  logoUrl: "https://aimbrill.com/images/aimbrill-logo.png",
  author: "Aimbrill",
  locale: "en_US",
  sameAs: [
    "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2",
    "https://www.linkedin.com/company/aimbrill/",
    "https://wa.me/917990488965",
  ],
  keywords: [
    "AI-Powered Shopify Studio",
    "Shopify app development",
    "AI automation",
    "custom Shopify store development",
    "Shopify upsell widgets",
    "Shopify quiz recommendation",
    "meal subscription automation",
  ],
  services: [
    {
      name: "Shopify App Development",
      description:
        "Custom Shopify apps — upsell tools, subscription flows, automation widgets, and anything your store needs that doesn't exist yet.",
    },
    {
      name: "AI Automation & Integrations",
      description:
        "AI chatbots, flow automation, and API integrations — connect your tools and eliminate the manual work holding your brand back.",
    },
    {
      name: "Custom Shopify Store Development",
      description:
        "Got a Figma design or a vision? We turn it into a fast, conversion-optimised Shopify store built to grow with your brand.",
    },
  ],
  pages: [
    { path: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.5 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.5 },
    { path: "/aimbrill-brand-assets", changeFrequency: "yearly" as const, priority: 0.4 },
    { path: "/ai-quiz-and-recommendations", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/weupsell-ai-popup-upsell", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/meal-bundle-builder", changeFrequency: "monthly" as const, priority: 0.7 },
    {
      path: "/meal-bundle-builder/meal-delivery",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/meal-bundle-builder/try-meal-flow",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/klaviyo-for-ecommerce", changeFrequency: "monthly" as const, priority: 0.7 },
    {
      path: "/what-is-shopify-agentic-storefronts",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ],
} as const;

export function canonicalUrl(path: string) {
  return new URL(path, site.url).toString();
}
