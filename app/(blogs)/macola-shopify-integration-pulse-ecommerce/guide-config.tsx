import type { GuideTocItem } from "@/components/content/GuidePageShell";

export const MACOLA_PULSE_GUIDE_TOC: GuideTocItem[] = [
  { id: "introduction", label: "Introduction" },
  { id: "what-is-pulse-ecommerce", label: "What Is PULSE eCommerce?" },
  {
    id: "the-problem-it-solves",
    label: "The Problem It Solves: Why Manual Sync Doesn't Work",
  },
  {
    id: "how-the-integration-works",
    label: "How the Integration Works: Step-by-Step Data Flow",
    children: [
      { id: "step-1-shopify-order", label: "Step 1: Customer Places an Order on Shopify" },
      { id: "step-2-pulse-picks-up", label: "Step 2: PULSE eCommerce Picks Up the Order" },
      { id: "step-3-macola-sales-order", label: "Step 3: Order Is Created in Macola ERP" },
      { id: "step-4-inventory-reserved", label: "Step 4: Inventory Is Reserved and Updated" },
      { id: "step-5-fulfillment", label: "Step 5: Order Is Fulfilled in Macola" },
      { id: "step-6-tracking-pushed", label: "Step 6: Tracking Information Is Pushed to Shopify" },
      { id: "step-7-financial-data", label: "Step 7: Financial Data Is Synced" },
    ],
  },
  { id: "what-data-gets-synced", label: "What Data Gets Synced Between Macola and Shopify?" },
  { id: "key-benefits", label: "Key Benefits of Connecting Macola + Shopify via PULSE" },
  { id: "multi-channel-support", label: "Multi-Channel Support: Beyond Just Shopify" },
  { id: "who-is-this-best-for", label: "Who Is This Integration Best For?" },
  { id: "common-challenges", label: "Common Challenges and How to Handle Them" },
  { id: "final-thoughts", label: "Final Thoughts" },
];
