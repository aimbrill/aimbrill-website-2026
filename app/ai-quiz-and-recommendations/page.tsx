import type { Metadata } from "next";
import { QuizLanding } from "./components/QuizLanding";

const SHOPIFY_APP_URL = "https://apps.shopify.com/ai-quiz-recommendation";

export const metadata: Metadata = {
  title: "AI Quiz & Product Recommendation | Shopify App",
  description:
    "Help customers find the right products faster with personalized AI-powered product recommendations for your Shopify store.",
  alternates: {
    canonical: "/ai-quiz-and-recommendations",
  },
  openGraph: {
    title: "AI Quiz & Product Recommendation",
    description:
      "Turn your Shopify store into a smarter shopping experience with AI quizzes and personalized product recommendations.",
    url: "/ai-quiz-and-recommendations",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function AiQuizAndRecommendationsPage() {
  return (
    <>
      <QuizLanding />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AI Quiz & Product Recommendation",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Shopify",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            url: SHOPIFY_APP_URL,
          }),
        }}
      />
    </>
  );
}
