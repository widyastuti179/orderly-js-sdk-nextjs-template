import type { NextConfig } from "next";
import { LocaleEnum } from "@orderly.network/i18n";
const nextConfig: NextConfig = {
  output: "standalone",
  webpack: (config) => {
    // fix Module not found: Can't resolve 'pino-pretty' warning https://github.com/pinojs/pino/issues/688
    config.externals = [...config.externals, "pino-pretty"];
    return config;
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: Object.values(LocaleEnum),
    defaultLocale: LocaleEnum.en,
  },
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
