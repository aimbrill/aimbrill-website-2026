import { canonicalUrl, site } from "./site";

export const organizationId = () => `${site.url}/#organization`;
export const websiteId = () => `${site.url}/#website`;

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(),
    name: site.name,
    url: site.url,
    logo: site.logoUrl,
    sameAs: [...site.sameAs],
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: site.name,
    url: site.url,
    inLanguage: "en-US",
    publisher: { "@id": organizationId() },
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildWebPageJsonLd(path: string, name: string, description: string) {
  const url = canonicalUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: site.locale.replace("_", "-"),
    isPartOf: { "@id": websiteId() },
    publisher: { "@id": organizationId() },
  };
}

export function buildServiceJsonLd(name: string, description: string, path: string) {
  const url = canonicalUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@id": organizationId() },
    areaServed: { "@type": "Place", name: "Worldwide" },
    url,
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function buildSiteJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationJsonLd(),
      buildWebSiteJsonLd(),
      ...site.services.map((service) => buildServiceJsonLd(service.name, service.description, "/")),
    ],
  };
}
