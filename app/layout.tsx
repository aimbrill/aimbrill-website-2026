import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aimbrill.com"),
  title: "Aimbrill - Shopify App Development & AI Automation Studio",
  description:
    "We build custom Shopify apps, AI automation tools, and e-commerce solutions for growing brands. Book a free call today.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Shopify app development",
    "AI automation",
    "Shopify agency",
    "custom Shopify storefront",
    "e-commerce automation",
  ],
  authors: [{ name: "Aimbrill" }],
  openGraph: {
    title: "Aimbrill - Shopify App Development & AI Automation Studio",
    description:
      "Custom Shopify apps, AI automation, and conversion-optimised stores for growing e-commerce brands.",
    url: "https://aimbrill.com",
    siteName: "Aimbrill",
    type: "website",
    images: [
      {
        url: "/images/aimbrill-logo.png",
        width: 1200,
        height: 630,
        alt: "Aimbrill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aimbrill - Shopify App Development & AI Automation Studio",
    description:
      "Custom Shopify apps, AI automation, and conversion-optimised stores for growing e-commerce brands.",
    images: ["/images/aimbrill-logo.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Aimbrill",
      url: "https://aimbrill.com",
      logo: "https://aimbrill.com/images/aimbrill-logo.png",
      sameAs: [
        "https://www.instagram.com/aimbrill?igsh=NTBrOXNmdXZjYWx2",
        "https://www.linkedin.com/company/aimbrill/",
        "https://wa.me/917990488965",
      ],
    },
    {
      "@type": "WebSite",
      name: "Aimbrill",
      url: "https://aimbrill.com",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://aimbrill.com/?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
