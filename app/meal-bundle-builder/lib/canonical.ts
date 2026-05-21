import { siteUrl } from "./site";

/** Absolute canonical URL for a path (e.g. `/privacy`). */
export function canonicalUrl(path: string): string {
  const base = siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
