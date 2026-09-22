import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BlogFeed, type BlogCard } from "./BlogFeed";

const BLOGS_DIR = path.join(process.cwd(), "app", "(blogs)");

function cleanQuoted(input: string | undefined): string | undefined {
  if (!input) return undefined;
  return input.replace(/\\"/g, '"').trim();
}

async function getBlogCards(): Promise<BlogCard[]> {
  const dirs = await fs.readdir(BLOGS_DIR, { withFileTypes: true }).catch(() => []);

  const cards: Array<BlogCard | null> = await Promise.all(
    dirs
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const slug = entry.name;
        const pagePath = path.join(BLOGS_DIR, slug, "page.tsx");
        const source = await fs.readFile(pagePath, "utf8").catch(() => "");
        if (!source) return null;

        const title = cleanQuoted(source.match(/title:\s*"([^"]+)"/)?.[1]) ?? slug;
        const description =
          cleanQuoted(source.match(/description:\s*"([^"]+)"/)?.[1]) ??
          "Read the latest Aimbrill guide.";
        const category = cleanQuoted(source.match(/category="([^"]+)"/)?.[1]) ?? "Guide";
        const author = cleanQuoted(source.match(/author="([^"]+)"/)?.[1]);
        const publishedAt = cleanQuoted(source.match(/const PUBLISHED_DISPLAY = "([^"]+)"/)?.[1]);
        const publishedAtIso = cleanQuoted(source.match(/const PUBLISHED_ISO = "([^"]+)"/)?.[1]);
        let coverImage: string | undefined;

        if (slug === "klaviyo-for-ecommerce") {
          coverImage = "/images/shopify/blogs/main%20image/Klaviyo.png";
        } else if (slug === "what-is-shopify-agentic-storefronts") {
          coverImage = "/images/shopify/blogs/main%20image/storefront.png";
        } else if (slug === "macola-shopify-integration-pulse-ecommerce") {
          coverImage = "/images/shopify/blogs/main%20image/macola.png";
        } else if (slug === "recomai-ai-chatbot-convert-visitors-to-buyers") {
          coverImage = "/images/shopify/blogs/main%20image/Recomi.png";
        } else if (slug === "cro-speed-optimization-shopify") {
          coverImage = "/images/shopify/blogs/main%20image/cro-speed.png";
        } else if (slug === "top-10-cro-techniques-for-shopify-brands") {
          coverImage = "/images/shopify/blogs/main%20image/top-10-cro.png";
        } else if (slug === "best-free-shopify-apps") {
          coverImage = "/images/shopify/blogs/main%20image/shopify-apps.png";
        } else if (slug === "shopify-marketing-apps-2026") {
          coverImage = "/images/shopify/blogs/main%20image/shopify-marketing-apps.png";
        }

        return {
          slug,
          href: `/${slug}`,
          title,
          description,
          category,
          author,
          publishedAt,
          publishedAtIso,
          coverImage,
        } satisfies BlogCard;
      }),
  );

  const validCards = cards.filter((card): card is BlogCard => card !== null);
  return validCards.sort(
    (a, b) =>
      (b.publishedAtIso ?? "").localeCompare(a.publishedAtIso ?? "") ||
      a.slug.localeCompare(b.slug),
  );
}

export const metadata: Metadata = {
  title: "Blog | Aimbrill",
  description: "Explore guides and insights on Shopify growth, Klaviyo, and e-commerce marketing.",
  alternates: { canonical: "/blog" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function BlogIndexPage() {
  const cards = await getBlogCards();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-16 pt-28 text-foreground">
        <section className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="blog-hero rounded-3xl border border-border bg-surface px-6 py-10 md:px-10 md:py-14 flex items-center justify-center text-center">
            <h1 className="mx-auto font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Aimbrill Blog
            </h1>
          </div>

          <BlogFeed cards={cards} />
        </section>
      </main>
      <Footer />
    </>
  );
}
