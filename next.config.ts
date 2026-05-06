import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    // Enable modern formats (WebP, AVIF)
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Optimize SVG as well
    disableStaticImages: false,
    // Remote image domains (add if needed)
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/pages/klaviyo-for-ecommerce",
        destination: "/klaviyo-for-ecommerce",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
