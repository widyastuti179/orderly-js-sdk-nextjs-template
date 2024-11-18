import { TradingPageProps } from "@orderly.network/trading";
import { FooterProps, MainNavWidgetProps } from "@orderly.network/ui-scaffold";
import { AppLogos } from "@orderly.network/react-app";

export type OrderlyConfig = {
  orderlyAppProvider: {
    appIcons: AppLogos;
  };
  scaffold: {
    mainNavProps: MainNavWidgetProps;
    footerProps: FooterProps;
  };
  tradingPage: {
    tradingViewConfig: TradingPageProps["tradingViewConfig"];
    sharePnLConfig: TradingPageProps["sharePnLConfig"];
    referral?: any;
  };
};

const config: OrderlyConfig = {
  scaffold: {
    mainNavProps: {
      mainMenus: [
        { name: "Trading", href: "/" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Markets", href: "/markets" },
        // TODO
        { name: "Trading Reward", href: "/tradingReward" },
      ],
      initialMenu: "/",
    },
    footerProps: {
      telegramUrl: "https://orderly.network",
      discordmUrl: "https://discord.com/invite/orderlynetwork",
      twitterUrl: "https://twitter.com/OrderlyNetwork",
    },
  },
  orderlyAppProvider: {
    appIcons: {
      main: {
        img: "/orderly-logo.svg",
      },
      secondary: {
        img: "/orderly-logo-secondary.svg",
      },
    },
  },
  tradingPage: {
    tradingViewConfig: {
      scriptSRC: "/tradingview/charting_library/charting_library.js",
      library_path: "/tradingview/charting_library/",
      customCssUrl: "/tradingview/chart.css",
    },
    sharePnLConfig: {
      backgroundImages: [
        "/pnl/poster_bg_1.png",
        "/pnl/poster_bg_2.png",
        "/pnl/poster_bg_3.png",
        "/pnl/poster_bg_4.png",
        "/pnl/poster_bg_5.png",
      ],
      color: "rgba(255, 255, 255, 0.98)",
      profitColor: "rgba(255,68,124,1)",
      lossColor: "rgba(0,180,158,1)",
      brandColor: "rgba(51,95,252,1)",

      // ref
      refLink: "https://orderly.network",
      refSlogan: "Orderly referral",
    },
  },
};

export default config;
