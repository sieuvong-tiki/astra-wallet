import { Bech32Address } from "@keplr-wallet/cosmos";
import { ChainInfo } from "@keplr-wallet/types";

import {
  ASTRA_REST_CONFIG,
  ASTRA_REST_ENDPOINT,
  ASTRA_RPC_CONFIG,
  ASTRA_RPC_ENDPOINT,
  PRIVILEGED_ORIGINS,
} from "./config.var";

export const EmbedChainInfos: ChainInfo[] = [
  {
    rpc: ASTRA_RPC_ENDPOINT,
    rpcConfig: ASTRA_RPC_CONFIG,
    rest: ASTRA_REST_ENDPOINT,
    restConfig: ASTRA_REST_CONFIG,
    chainId: "dev-sentry-1",
    chainName: "Astra",
    stakeCurrency: {
      coinDenom: "STAKE",
      coinMinimalDenom: "stake",
      coinDecimals: 6,
      coinGeckoId: "stake",
    },
    walletUrl:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#/cosmoshub/stake"
        : "http://localhost:8080/#/cosmoshub/stake",
    walletUrlForStaking:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#/cosmoshub/stake"
        : "http://localhost:8080/#/cosmoshub/stake",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cosmos"),
    currencies: [
      {
        coinDenom: "STAKE",
        coinMinimalDenom: "stake",
        coinDecimals: 8,
        coinGeckoId: "stake",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "STAKE",
        coinMinimalDenom: "stake",
        coinDecimals: 8,
        coinGeckoId: "stake",
      },
    ],
    coinType: 118,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    gasPriceStep: { low: 0.1, average: 0.5, high: 0.8 },
  },
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = PRIVILEGED_ORIGINS;
