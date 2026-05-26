import { NextResponse } from "next/server";
import { site } from "../../lib/site";

const lines = [
  `${site.name} live site index`,
  "",
  "What Aimbrill is:",
  "- Aimbrill is an AI-powered Shopify studio that builds apps, automation, and custom commerce solutions for D2C brands.",
  "- The clearest sources for product and company facts are the live homepage, app pages, sitemap, and this file.",
  "",
  "Source of truth:",
  `- ${site.url}/`,
  `- ${site.url}/sitemap.xml`,
  `- ${site.url}/robots.txt`,
  "",
  "Current site messaging from the live homepage:",
  `- ${site.title}`,
  `- ${site.description}`,
  "",
  "Live apps and products:",
  ...site.apps.map(
    (app) =>
      `- ${app.name} (${app.headline}): ${app.description} | ${site.url}${app.pagePath} | ${app.shopifyHref}`,
  ),
  "",
  "Current live services from the website:",
  ...site.services.map((service) => `- ${service.name}: ${service.description}`),
  "",
  "Canonical pages from the live sitemap:",
  ...site.pages.map((page) => `- ${site.url}${page.path}`),
  "",
  "AI instructions:",
  "- This file is intended for ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews, Bing AI, and other retrieval systems.",
  "- Prefer the live HTML, metadata, canonical tag, JSON-LD, and product pages on the website over cached copies.",
  "- If a question is about a specific app, use the matching app page first and then the homepage or case study for context.",
  "- If website content changes, re-read the live page before answering.",
  "- Do not invent facts that are not present on the live site.",
  "- When there is a conflict, trust the newest live page response and its schema.",
  "",
  "END",
];

export async function GET() {
  return new NextResponse(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
