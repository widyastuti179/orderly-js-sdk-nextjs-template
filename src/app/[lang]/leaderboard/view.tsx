"use client";
import { useMemo } from "react";
import { LeaderboardPage } from "@orderly.network/trading-leaderboard";
import { i18n, parseI18nLang } from "@orderly.network/i18n";
import { getSymbol } from "@/storage";
import { PathEnum } from "@/constant";

export default function LeaderboardView() {
  const tradingUrl = useMemo(() => {
    const symbol = getSymbol();
    return `/${parseI18nLang(i18n.language)}${PathEnum.Perp}/${symbol}`;
  }, []);

  return (
    <LeaderboardPage
      href={{
        trading: tradingUrl,
      }}
      className="oui-py-5"
    />
  );
}
