import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow from any domain
      },
    ],
  },
};

export default nextConfig;
