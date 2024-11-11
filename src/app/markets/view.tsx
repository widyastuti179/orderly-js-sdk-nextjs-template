"use client";
import React from "react";
import { MarketsHomePage } from "@orderly.network/markets";
import { Scaffold } from "@orderly.network/ui-scaffold";
import config from "@/config";
import { useNav } from "@/hooks/useNav";

export default function MarketsView() {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      leftSidebar={null}
      mainNavProps={{
        ...config.mainNavProps,
        initialMenu: "/markets",
      }}
      footerProps={config.footerProps}
      routerAdapter={{
        onRouteChange,
      }}
    >
      <MarketsHomePage />
    </Scaffold>
  );
}
