export const site = {
  googleAnalyticsId: "G-LJ0Y9HGV79",
  name: "Aimbrill",
  title: "Aimbrill | AI-Powered Shopify Studio & Apps",
  description:
    "Aimbrill builds AI automation, Shopify apps, and custom commerce solutions for D2C brands, including WeUpsell, AI Quiz, and Meal Flow.",
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
    "WeUpsell",
    "AI Quiz",
    "Meal Flow",
    "Shopify upsell widgets",
    "Shopify quiz recommendation",
    "meal subscription automation",
  ],
  apps: [
    {
      name: "WeUpsell",
      headline: "AI Popup & Upsell Widgets",
      description:
        "AI-powered popups and upsell widgets that show the right offer to the right customer at the right time.",
      pagePath: "/weupsell-ai-popup-upsell",
      shopifyHref: "https://apps.shopify.com/ai-upsell-cross-sell-by-weupsell",
    },
    {
      name: "AI Quiz",
      headline: "AI Quiz & Product Recommendation",
      description:
        "Guided quizzes and AI-driven product recommendations that help shoppers find the right product faster.",
      pagePath: "/ai-quiz-and-recommendations",
      shopifyHref: "https://apps.shopify.com/ai-quiz-recommendation",
    },
    {
      name: "Meal Flow",
      headline: "Meal Flow Automation",
      description:
        "Meal subscription automation for Shopify with ZIP code checks, box building, and delivery sync.",
      pagePath: "/meal-bundle-builder",
      shopifyHref: "https://apps.shopify.com/mealflow-box",
    },
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
      path: "/macola-shopify-integration-pulse-ecommerce",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
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
    { path: "/case-studies", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/case-studies/funky-food", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/case-studies/rakhi-by-diorin", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/seo-dashboard", changeFrequency: "weekly" as const, priority: 0.8 },
    {
      path: "/recomai-ai-chatbot-convert-visitors-to-buyers",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ],
} as const;

export function canonicalUrl(path: string) {
  return new URL(path, site.url).toString();
}
