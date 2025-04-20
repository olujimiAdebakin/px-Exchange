import React from "react";
import "../styles/globals.css";
import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
// import { Chain } from "wagmi";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from "wagmi";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public"; 

// ✅ Set up chains: Sepolia (Ethereum testnet) and Base Sepolia (Base testnet)
// const { chains, provider } = configureChains(
//   [chain.sepolia],
//   [
//     infuraProvider({
//       apiKey: "25630b18689f49a3b0d9ba7b8aa74091", // Infura for Sepolia
//       priority: 1,
//     }),
//     // publicProvider(), // 👈
//   ]
// );
const baseSepolia = {
  id: 84532,
  name: "Base Sepolia",
  network: "base-sepolia",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
  },
  blockExplorers: {
    default: { name: "Basescan", url: "https://sepolia.basescan.org" },
  },
  testnet: true,
};


const { chains, provider } = configureChains(
  [chain.sepolia, baseSepolia],
  [
    infuraProvider({ apiKey: "25630b18689f49a3b0d9ba7b8aa74091" }),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === 11155111)
          return {
            http: `https://sepolia.infura.io/v3/25630b18689f49a3b0d9ba7b8aa74091`,
          };
        if (chain.id === 84532)
          return {
            http: "https://sepolia.base.org",
          };
        return null;
      },
    }),
  ]
);


// ✅ Default wallet connectors
const { connectors } = getDefaultWallets({
  appName: "PeerX exchange",
  chains,
});

// ✅ Create Wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// ✅  Customize theme (currently not used)
const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#2ecc71", 
    accentColorForeground: "#ffffff",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={myTheme}
      >
       <Component  {...pageProps}/>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
