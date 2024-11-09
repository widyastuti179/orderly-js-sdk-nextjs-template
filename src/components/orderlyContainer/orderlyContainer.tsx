"use client";
import React, { PropsWithChildren } from "react";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { OrderlyApp } from "@orderly.network/react-app";
import { CustomConfigStore } from "./CustomConfigStore";

const OrderlyContainer: React.FC<PropsWithChildren<{}>> = (props) => {
  const networkId = "testnet";

  const configStore = new CustomConfigStore({
    networkId,
    brokerId: "orderly",
    brokerName: "Orderly",
  });

  return (
    <WalletConnectorProvider>
      <OrderlyApp
        // brokerId="orderly"
        // brokerName="Orderly"
        networkId="testnet"
        configStore={configStore}
        appIcons={{
          main: {
            img: "/orderly-logo.svg",
          },
          secondary: {
            img: "/orderly-logo-secondary.svg",
          },
        }}
      >
        {props.children}
      </OrderlyApp>
    </WalletConnectorProvider>
  );
};

export default OrderlyContainer;
