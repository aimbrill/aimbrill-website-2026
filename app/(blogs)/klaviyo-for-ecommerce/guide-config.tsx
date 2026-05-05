import type { GuideFlowRow } from "@/components/content/GuideFlowStructure";
import type { GuideTocItem } from "@/components/content/GuidePageShell";

function step(title: string, detail: string): GuideFlowRow["children"] {
  return (
    <>
      <strong>{title}</strong> {detail}
    </>
  );
}

export const KLAVIYO_GUIDE_TOC: GuideTocItem[] = [
  { id: "introduction", label: "Introduction" },
  {
    id: "what-is-klaviyo",
    label: "What is Klaviyo?",
    children: [{ id: "what-klaviyo-is-used-for", label: "What Klaviyo is used for" }],
  },
  {
    id: "why-ecommerce-brands-choose-klaviyo",
    label: "Why e-commerce brands choose Klaviyo",
    children: [
      { id: "connects-to-your-store", label: "1. It connects directly to your store" },
      { id: "revenue-not-just-opens", label: "2. It tracks revenue, not just opens" },
      { id: "advanced-segmentation", label: "3. Advanced segmentation" },
      { id: "scales-with-you", label: "4. It scales with you" },
    ],
  },
  {
    id: "how-klaviyo-flows-work",
    label: "How Klaviyo flows work",
    children: [
      { id: "welcome-series", label: "Welcome series" },
      { id: "abandoned-cart", label: "Abandoned cart" },
      { id: "post-purchase-flow", label: "Post-purchase" },
      { id: "browse-abandonment", label: "Browse abandonment" },
      { id: "win-back", label: "Win-back" },
    ],
  },
  {
    id: "segmentation-growth-lever",
    label: "Segmentation: the growth lever",
    children: [{ id: "core-segments", label: "Core segments" }],
  },
  {
    id: "campaigns-vs-flows",
    label: "Campaigns vs flows",
    children: [{ id: "how-often-should-you-send", label: "How often should you send?" }],
  },
  {
    id: "ab-testing-analytics",
    label: "A/B testing and analytics",
    children: [
      { id: "key-metrics-weekly", label: "The key metrics to track every week" },
      {
        id: "dashboard-weekly-checks",
        label: "What to check on your Klaviyo dashboard weekly",
      },
    ],
  },
  { id: "who-should-use-klaviyo", label: "Who should use Klaviyo?" },
  { id: "faqs", label: "Frequently asked questions" },
  { id: "conclusion", label: "Conclusion" },
];

export const welcomeFlowRows: GuideFlowRow[] = [
  {
    time: "Immediately",
    children: step(
      "Deliver the incentive.",
      "Discount code or lead magnet + warm brand introduction.",
    ),
  },
  {
    time: "Day 2",
    children: step(
      "Build trust.",
      "Bestsellers, reviews, and social proof from existing customers.",
    ),
  },
  {
    time: "Day 4",
    children: step(
      "Tell the story.",
      "What makes your brand different. Address common objections.",
    ),
  },
  {
    time: "Day 7",
    children: step("Create urgency.", "Discount expiry reminder or strongest product CTA."),
  },
];

export const abandonedCartFlowRows: GuideFlowRow[] = [
  {
    time: "1 hour",
    children: step(
      "Reminder.",
      "Friendly nudge. Show the exact product they left behind — name, image, price.",
    ),
  },
  {
    time: "24 hours",
    children: step("Overcome hesitation.", "Product reviews, guarantees, FAQ, trust signals."),
  },
  {
    time: "48–72 hours",
    children: step(
      "Final nudge.",
      "Optionally include a small incentive — discount code or free shipping.",
    ),
  },
];

export const postPurchaseFlowRows: GuideFlowRow[] = [
  {
    time: "Immediately",
    children: step("Order confirmation.", "What happens next, expected delivery, contact info."),
  },
  {
    time: "3–5 days",
    children: step(
      "Product tips.",
      "How to get the most out of what they bought. Builds satisfaction.",
    ),
  },
  {
    time: "7–10 days",
    children: step(
      "Review request.",
      "Timing is critical — early enough that experience is fresh, late enough that they have used it.",
    ),
  },
  {
    time: "30 days",
    children: step(
      "Cross-sell.",
      "Recommend a complementary product based on what they purchased.",
    ),
  },
];

export const browseAbandonmentFlowRows: GuideFlowRow[] = [
  {
    time: "4–6 hours",
    children: <>&quot;Still thinking about it?&quot; — show the specific product they viewed.</>,
  },
  {
    time: "24 hours",
    children: <>Reviews and social proof from customers who bought that exact product.</>,
  },
];

export const winBackFlowRows: GuideFlowRow[] = [
  {
    time: "90 days",
    children: (
      <>
        &quot;We miss you&quot; — remind them of your value. New arrivals or what they loved before.
      </>
    ),
  },
  {
    time: "+7 days",
    children: <>Bestsellers or new products they have not seen.</>,
  },
  {
    time: "+7 days",
    children: <>Final offer — your strongest incentive to bring them back.</>,
  },
];
