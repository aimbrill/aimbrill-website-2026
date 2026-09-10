import type { Metadata } from "next";
import { TryDemoFlow } from "./components/TryDemoFlow";

export const metadata: Metadata = {
  title: "Interactive Demo | AI Quiz & Product Recommendations",
  description:
    "Try the interactive demo of AI Quiz & Product Recommendations for Shopify stores by Aimbrill.",
  alternates: {
    canonical: "/ai-quiz-and-recommendations/try-demo",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TryDemoPage() {
  return <TryDemoFlow />;
}
