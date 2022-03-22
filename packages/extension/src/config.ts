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
    chainId: "astra-devnet-001",
    chainName: "Astra",
    stakeCurrency: {
      coinDenom: "ASTRA",
      coinMinimalDenom: "astra",
      coinDecimals: 6,
      coinGeckoId: "astra",
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
    bech32Config: Bech32Address.defaultBech32Config("astra"),
    currencies: [
      {
        coinDenom: "ASTRA",
        coinMinimalDenom: "astra",
        coinDecimals: 6,
        coinGeckoId: "astra",
      },
    ],
    feeCurrencies: [
      {
        coinDenom: "ASTRA",
        coinMinimalDenom: "astra",
        coinDecimals: 6,
        coinGeckoId: "astra",
      },
    ],
    coinType: 118,
    features: ["stargate", "ibc-transfer", "no-legacy-stdTx", "ibc-go"],
    gasPriceStep: { low: 0.1, average: 0.5, high: 0.8 },
  },
];

// The origins that are able to pass any permission that external webpages can have.
export const PrivilegedOrigins: string[] = PRIVILEGED_ORIGINS;
