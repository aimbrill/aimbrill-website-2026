import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
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
