/**
 * Canonical origin for metadata, sitemap, robots, and JSON-LD.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://www.mealflowbox.com).
 */
export const siteUrl = (
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string" &&
  process.env.NEXT_PUBLIC_SITE_URL.trim().length > 0
    ? process.env.NEXT_PUBLIC_SITE_URL.trim()
    : "https://aimbrill.com"
).replace(/\/$/, "");
