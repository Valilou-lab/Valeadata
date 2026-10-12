import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/chatbot",
        destination: "/",
        permanent: true,
      },
    ];
  },
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
