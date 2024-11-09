import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/perp/PERP_ETH_USDC",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
