import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [68, 70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
};

export default nextConfig;
