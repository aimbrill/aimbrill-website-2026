import { mealFlowLinks } from "../../../lib/links";

export type IndustryCard = {
  title: string;
  emoji: string;
  tags: string[];
  usedBy: string;
  desc: string;
  image: string;
  demoHref: string;
  watchHref?: string;
};

export const industryCards: IndustryCard[] = [
  {
    title: "MEALS & BAKED GOODS",
    emoji: "🍱",
    tags: ["MEAL DELIVERY", "SUBSCRIPTIONS", "PERISHABLES"],
    usedBy: "",
    desc: "Customers want flexibility. You need automation.\nLet them choose delivery dates, pick meals, and manage plans easily.\nYour system handles orders, schedules, and subscriptions — automatically. No manual work. No confusion.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    demoHref: mealFlowLinks.tryMealFlow,
    watchHref: "/meal-bundle-builder/Meal.mp4",
  },
  {
    title: "FOOD & BEVERAGE BRANDS",
    emoji: "🥤",
    tags: ["BEVERAGES", "D2C", "LOGISTICS CONTROL"],
    usedBy: "",
    desc: "Customers want clear options. You need accuracy.\nLet them see available products based on location, choose delivery dates, and order easily.\nYour system manages availability, delivery schedules, and subscriptions — automatically.\nNo manual work. No confusion.",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    demoHref: mealFlowLinks.tryMealFlow,
    watchHref: "/meal-bundle-builder/Food.mp4",
  },
];
