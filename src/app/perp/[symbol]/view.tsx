"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@orderly.network/types";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { TradingPage, TradingPageProps } from "@orderly.network/trading";
import {
  FooterUrls,
  MainNavProps,
  SharePnLConfig,
  TradingViewConfig,
} from "@/config";
import { useNav } from "@/hooks/useNav";
import { updateSymbol } from "@/storage";

export type PerpViewProps = Pick<TradingPageProps, "symbol">;

export default function PerpView(props: PerpViewProps) {
  const [symbol, setSymbol] = useState(props.symbol);
  const router = useRouter();
  const { onRouteChange } = useNav();

  useEffect(() => {
    updateSymbol(symbol);
  }, [symbol]);

  const onSymbolChange = useCallback(
    (data: API.Symbol) => {
      const symbol = data.symbol;
      setSymbol(symbol);
      router.push(`/perp/${symbol}`);
    },
    [router]
  );

  return (
    <Scaffold
      leftSidebar={null}
      mainNavProps={MainNavProps}
      footerConfig={FooterUrls}
      classNames={{
        footer: "oui-bg-base-10",
      }}
      routerAdapter={{
        onRouteChange,
        currentPath: "/",
      }}
    >
      <TradingPage
        symbol={symbol}
        tradingViewConfig={TradingViewConfig}
        sharePnLConfig={SharePnLConfig}
        onSymbolChange={onSymbolChange}
      />
    </Scaffold>
  );
}
