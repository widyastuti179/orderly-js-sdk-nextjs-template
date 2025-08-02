import React from "react";
import { Metadata } from "next";
import { generatePageTitle } from "@/utils";
import HistoryView from "./view";
import { PageTitleMap, PathEnum } from "@/constant";

export const metadata: Metadata = {
  title: generatePageTitle(PageTitleMap[PathEnum.History]),
};

export default function HistoryPage() {
  return <HistoryView />;
}
