"use client";
import dynamic from "next/dynamic";

export const OrderlyContainer = dynamic(() => import("./orderlyContainer"), {
  ssr: false,
});
