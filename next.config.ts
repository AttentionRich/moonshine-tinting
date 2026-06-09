import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-714a75a88016476c930af6cc982140b7.r2.dev",
        port: "",
        pathname: "/website/**",
      },
    ],
  },
};

export default nextConfig;
