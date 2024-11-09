"use client";
import React from "react";
import { MarketsHomePage } from "@orderly.network/markets";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { FooterUrls, MainNavProps } from "@/config";
import { useNav } from "@/hooks/useNav";

export default function MarketsView() {
  const { onRouteChange } = useNav();

  return (
    <div className="orderly-sdk-layout">
      <Scaffold
        classNames={{
          topNavbar: "oui-bg-base-9",
        }}
        leftSidebar={null}
        footerConfig={FooterUrls}
        mainNavProps={{
          ...MainNavProps,
          initialMenu: "/markets",
        }}
        routerAdapter={{
          onRouteChange,
        }}
      >
        <div style={{ paddingBottom: 30 }}>
          <MarketsHomePage />
        </div>
      </Scaffold>
    </div>
  );
}
