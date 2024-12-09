"use client";
import React, { ReactNode } from "react";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { useNav } from "@/hooks/useNav";
import config from "@/config";

export default function MarketsLayout(props: { children: ReactNode }) {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/markets",
      }}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
      }}
    >
      {props.children}
    </Scaffold>
  );
}
