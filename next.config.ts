import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "igarageapp.s3.sa-east-1.amazonaws.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
