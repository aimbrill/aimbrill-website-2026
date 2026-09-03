import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

type BlogCard = {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: string;
  author?: string;
  publishedAt?: string;
  coverImage?: string;
};

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
        }

        return {
          slug,
          href: `/${slug}`,
          title,
          description,
          category,
          author,
          publishedAt,
          coverImage,
        } satisfies BlogCard;
      }),
  );

  const validCards = cards.filter((card): card is BlogCard => card !== null);
  return validCards.sort((a, b) => a.slug.localeCompare(b.slug));
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
      <main className="min-h-screen bg-background pb-12 pt-28 text-foreground">
        <section className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="blog-hero rounded-3xl border border-border bg-surface px-6 py-10 md:px-10 md:py-14 flex items-center justify-center text-center">
            <h1 className="mx-auto font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Aimbrill Blog
            </h1>
          </div>

          <div className="mt-6 max-w-2xl mx-auto px-4 md:px-0">
            <form action="/blog" method="get" className="">
              <label htmlFor="q" className="sr-only">
                Search blog
              </label>
              <div className="relative">
                <input
                  id="q"
                  name="q"
                  type="search"
                  placeholder="Search blog posts"
                  className="w-full rounded-full border border-border bg-background/70 py-3 px-4 text-sm text-foreground placeholder:text-muted-foreground shadow-sm backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-lime"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-lime-foreground"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((post) => (
              <Link key={post.slug} href={post.href} className="blog-card group hover-lift">
                <div
                  className={`blog-card-cover ${post.coverImage ? "blog-card-cover--image" : ""}`}
                >
                  {post.coverImage ? (
                    <>
                      <Image
                        src={post.coverImage}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={80}
                        loading="lazy"
                        className="object-cover"
                      />
                      <div className="blog-card-cover-overlay" />
                    </>
                  ) : null}
                </div>
                <div className="p-5">
                  <span className="blog-chip mb-3">{post.category}</span>
                  <h2 className="font-display text-xl font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-lime hover:text-lime">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-4 text-sm text-muted-foreground">
                    {post.author ? (
                      <span className="font-medium text-ink">{post.author}</span>
                    ) : (
                      <span />
                    )}
                    <span className="shrink-0">{post.publishedAt ?? "Read article"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
