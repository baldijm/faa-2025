import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos"
      }
    ],
  },
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.100.29:3000",
    "http://192.168.100.15:3000",]
};

export default nextConfig;
