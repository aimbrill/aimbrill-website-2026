import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/aimbrill-brand-assets"],
      },
    ],
    sitemap: "https://aimbrill.com/sitemap.xml",
    host: "https://aimbrill.com",
  };
}
