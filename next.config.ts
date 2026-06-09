import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

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
