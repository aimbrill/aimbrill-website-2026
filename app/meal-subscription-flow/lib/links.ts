/** Routes and contact URLs for the meal-subscription-flow section. */
export const MEAL_FLOW_BASE = "/meal-subscription-flow";

export const mealFlowLinks = {
  home: MEAL_FLOW_BASE,
  tryMealFlow: `${MEAL_FLOW_BASE}/try-meal-flow`,
  privacy: `${MEAL_FLOW_BASE}/privacy`,
  mealFlowEmbed: `${MEAL_FLOW_BASE}/meal-flow/index.html`,
  whatsapp: "https://wa.me/917990488965",
  shopify: "https://apps.shopify.com/mealflow-box",
  email: "mailto:admin@aimbrill.com",
  instagram: "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2",
  linkedIn: "https://www.linkedin.com/company/aimbrill/",
} as const;
