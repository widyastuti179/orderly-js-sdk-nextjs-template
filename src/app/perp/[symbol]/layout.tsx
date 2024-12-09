"use client";
import React, { ReactNode } from "react";
import { Scaffold } from "@orderly.network/ui-scaffold";
import { useNav } from "@/hooks/useNav";
import config from "@/config";

export default function MarketsLayout(props: { children: ReactNode }) {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      mainNavProps={config.scaffold.mainNavProps}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
        currentPath: "/",
      }}
    >
      {props.children}
    </Scaffold>
  );
}
