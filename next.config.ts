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
    // Quality values used throughout the site
    qualities: [75, 80, 85, 90, 95],
    // Optimize SVG as well
    disableStaticImages: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/pages/klaviyo-for-ecommerce",
        destination: "/klaviyo-for-ecommerce",
        permanent: true,
      },
      {
        source: "/try-meal-flow",
        destination: "/meal-bundle-builder/try-meal-flow",
        permanent: true,
      },
      {
        source: "/try-meal-flow/:path*",
        destination: "/meal-bundle-builder/try-meal-flow/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
