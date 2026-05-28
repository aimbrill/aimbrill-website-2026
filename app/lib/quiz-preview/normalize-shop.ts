/** Normalize a store URL or hostname for the quiz preview API (e.g. www.gharsoaps.shop). */
export function normalizeShopUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return "";

  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const { hostname } = new URL(withProtocol);
    const host = hostname.toLowerCase();
    if (host) return host;
  } catch {
    /* fall through to legacy parsing */
  }

  const stripped = trimmed
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .replace(/\/$/, "")
    .toLowerCase();

  if (!stripped) return "";
  return stripped.includes(".") ? stripped : `${stripped}.myshopify.com`;
}
