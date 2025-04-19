"use client";
import React, { FC, ReactNode } from "react";
import { WalletConnectorProvider } from "@orderly.network/wallet-connector";
import { OrderlyAppProvider } from "@orderly.network/react-app";
import { useOrderlyConfig } from "@/hooks/useOrderlyConfig";

const OrderlyProvider: FC<{ children: ReactNode }> = (props) => {
  const config = useOrderlyConfig();

  return (
    <WalletConnectorProvider>
      <OrderlyAppProvider
        brokerId="orderly"
        brokerName="Orderly"
        networkId="testnet"
        appIcons={config.orderlyAppProvider.appIcons}
      >
        {props.children}
      </OrderlyAppProvider>
    </WalletConnectorProvider>
  );
};

export default OrderlyProvider;
