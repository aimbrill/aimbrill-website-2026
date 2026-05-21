import type { LucideIcon } from "lucide-react";
import { CalendarDays, MapPin, Search, Settings, Zap } from "lucide-react";

export type ProblemCard = {
  title: string;
  problem: string;
  fix: string;
  icon: LucideIcon;
};

export const problemCards: ProblemCard[] = [
  {
    title: "Delivery Issues",
    problem:
      "Orders go through even when delivery isn't actually available. Your team fixes them manually every day.",
    fix: "We set clear delivery rules based on area, date, and time — so only valid orders go through.",
    icon: CalendarDays,
  },
  {
    title: "Subscriptions Don't Work Smoothly",
    problem:
      "Subscription and one-time orders don't work well together. This breaks checkout and confuses customers.",
    fix: "We connect both flows so everything works together in one smooth checkout.",
    icon: Zap,
  },
  {
    title: "Location Rules Are Messy",
    problem: "Different apps handle zipcodes, products, and cart rules — and they don't match.",
    fix: "We bring all rules into one system so everything follows the same logic.",
    icon: MapPin,
  },
  {
    title: "Orders Need Manual Fixing",
    problem: "Your team keeps fixing wrong or incomplete orders again and again.",
    fix: "We validate everything before checkout — so bad orders never happen.",
    icon: Settings,
  },
  {
    title: "Too Many Apps",
    problem: "You're using multiple apps that don't connect with each other.",
    fix: "We replace the patchwork with one connected system that just works.",
    icon: Search,
  },
];
