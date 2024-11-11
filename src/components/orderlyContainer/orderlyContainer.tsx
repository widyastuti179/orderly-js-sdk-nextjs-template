"use client";
import React, { PropsWithChildren } from "react";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { OrderlyAppProvider } from "@orderly.network/react-app";
import config from "@/config";

const OrderlyContainer: React.FC<PropsWithChildren<{}>> = (props) => {
  return (
    <WalletConnectorProvider>
      <OrderlyAppProvider
        brokerId="orderly"
        brokerName="Orderly"
        networkId="testnet"
        appIcons={config.appIcons}
      >
        {props.children}
      </OrderlyAppProvider>
    </WalletConnectorProvider>
  );
};

export default OrderlyContainer;
