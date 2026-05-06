import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./styles.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

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
  icons: {
    icon: [
      { url: "/images/Icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/images/Icon.png", sizes: "180x180", type: "image/png" }],
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

const fontVariables = `${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
