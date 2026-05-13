import type { GuideTocItem } from "@/components/content/GuidePageShell";

export const SHOPIFY_AGENTIC_GUIDE_TOC: GuideTocItem[] = [
  { id: "introduction", label: "Introduction" },
  {
    id: "the-moment-everything-changed",
    label: "The Moment Everything Changed: March 24, 2026",
  },
  {
    id: "what-is-shopify-agentic-storefronts",
    label: "What Is Shopify Agentic Storefronts?",
  },
  {
    id: "brands-already-selling",
    label: "The Brands Already Selling Inside AI Conversations",
  },
  {
    id: "how-it-works",
    label: "How It Works (Without the Technical Jargon)",
    children: [
      { id: "acp-protocol", label: "ACP — Agentic Commerce Protocol" },
      { id: "ucp-protocol", label: "UCP — Universal Commerce Protocol" },
    ],
  },
  {
    id: "checkout-experience",
    label: "The Checkout Experience Per Channel",
  },
  {
    id: "agentic-dashboard",
    label: "What the Agentic Dashboard Shows You",
  },
  {
    id: "discovery-vs-selling",
    label: "Discovery vs. Selling — The Distinction Most Merchants Miss",
  },
  {
    id: "why-invisible",
    label: "Why Most Shopify Stores Are Still Invisible (And How to Fix That)",
    children: [
      { id: "problem-1-vague-titles", label: "Problem 1 — Vague product titles" },
      { id: "problem-2-marketing-copy", label: "Problem 2 — Marketing copy instead of specifications" },
      { id: "problem-3-variants", label: "Problem 3 — Variants listed as separate products" },
      { id: "problem-4-policies", label: "Problem 4 — Missing or outdated policies" },
      { id: "problem-5-reviews", label: "Problem 5 — Shallow reviews" },
      { id: "problem-6-faq", label: "Problem 6 — No FAQ or Knowledge Base content" },
    ],
  },
  {
    id: "how-to-activate",
    label: "How to Activate Agentic Storefronts: Step by Step",
  },
  {
    id: "bigger-picture",
    label: "The Bigger Picture",
  },
  {
    id: "faqs",
    label: "Frequently asked questions",
  },
  { id: "final-thought", label: "Final Thought" },
];
