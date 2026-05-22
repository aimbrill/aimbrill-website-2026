import type { MetadataRoute } from "next";
import { canonicalUrl, site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return site.pages.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
