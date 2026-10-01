import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/culligan",
        destination: "/culligan/proposition.html",
      },
    ];
  },
};

export default nextConfig;
