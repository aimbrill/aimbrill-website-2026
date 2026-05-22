/** Routes and contact URLs for the meal-bundle-builder section. */
export const MEAL_FLOW_BASE = "/meal-bundle-builder";

export const mealFlowLinks = {
  home: MEAL_FLOW_BASE,
  tryMealFlow: `${MEAL_FLOW_BASE}/try-meal-flow`,
  mealDelivery: `${MEAL_FLOW_BASE}/meal-delivery`,
  privacy: `${MEAL_FLOW_BASE}/privacy`,
  mealFlowEmbed: `${MEAL_FLOW_BASE}/meal-flow/index.html`,
  whatsapp: "https://wa.me/917990488965",
  shopify: "https://apps.shopify.com/mealflow-box",
  email: "mailto:admin@aimbrill.com",
  instagram: "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2",
  linkedIn: "https://www.linkedin.com/company/aimbrill/",
} as const;
