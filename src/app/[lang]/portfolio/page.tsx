import { Metadata } from "next";
import { generatePageTitle } from "@/utils";
import PortfolioView from "./view";
import { PageTitleMap } from "@/constant";
import { PathEnum } from "@/constant";

export const metadata: Metadata = {
  title: generatePageTitle(PageTitleMap[PathEnum.Portfolio]),
};

export default function PortfolioPage() {
  return <PortfolioView />;
}
