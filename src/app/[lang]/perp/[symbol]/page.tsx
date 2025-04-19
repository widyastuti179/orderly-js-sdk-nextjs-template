import type { Metadata } from "next";
import { formatSymbol, generatePageTitle } from "@/utils";
import PerpView from "./view";

type PerpPageProps = {
  params: Promise<{ symbol: string }>;
};

export async function generateMetadata({
  params,
}: PerpPageProps): Promise<Metadata> {
  const { symbol } = await params;
  return {
    title: generatePageTitle(formatSymbol(symbol)),
  };
}

export default async function PerpPage(props: PerpPageProps) {
  const { symbol } = await props.params;
  return <PerpView symbol={symbol} />;
}
