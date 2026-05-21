import { Hexagon, Search, Settings, Tag } from "lucide-react";

export const howItWorksSteps = [
  {
    step: "STEP 01",
    title: "Understand Your Setup",
    description:
      "We review your store, apps, and workflows to see where things are not working together.",
    icon: Search,
    color: "bg-[#7A3A25]",
  },
  {
    step: "STEP 02",
    title: "Audit & System Plan",
    description:
      "We create a clear plan for your delivery, subscription, and product logic - based on your business rules.",
    icon: Tag,
    color: "bg-[#8A432A]",
  },
  {
    step: "STEP 03",
    title: "Build the System",
    description: "We connect everything into one system so your store works smoothly.",
    icon: Settings,
    color: "bg-[#A95534]",
  },
  {
    step: "STEP 04",
    title: "Optimize & Automate",
    description: "We remove manual work and make sure everything runs without constant fixes.",
    icon: Hexagon,
    color: "bg-[#B8613C]",
  },
] as const;
