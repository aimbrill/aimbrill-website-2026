import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./styles.css";
import { buildSiteJsonLdGraph } from "../lib/seo";
import { site } from "../lib/site";

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
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  keywords: [...site.keywords],
  authors: [{ name: site.author }],
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
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
    title: site.title,
    description: site.description,
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

const structuredData = buildSiteJsonLdGraph();

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
        <Script
          id="chatbot-key"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `CHATBOT_KEY = "2a9b6dd53b5d0fd1f37afb847c2ee920eca0b340d1f291edf3c2fb1cc57b70fc";`,
          }}
        />
        <Script
          src="https://ai-chatbot-preview.s3.ap-south-1.amazonaws.com/destinova-aibot.js"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
