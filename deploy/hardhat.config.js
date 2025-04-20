require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

// Old Mumbai config - deprecated
const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_mumbai";

// New testnet RPC endpoints
const BASE_SEPOLIA_RPC = "https://sepolia.base.org";
const ETHEREUM_SEPOLIA_RPC = "https://rpc.sepolia.org";

// WARNING: You should NEVER expose your private key in production code or public repositories
// This is for demonstration purposes only
const NEXT_PUBLIC_PRIVATE_KEY =
  "94c65a64056955603341584d3f0a6c1c70255ab56435037772b1102f1dbe38b5";
  const ALCHEMY_API_KEY ="zxS6a4YMRkBJ1VYD3r156ZAaqj30f-h1"

  const SEPOLIA_RPC_URL =
    "https://eth-sepolia.g.alchemy.com/v2/zxS6a4YMRkBJ1VYD3r156ZAaqj30f-h1";

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "hardhat", // Changed default to hardhat for safety
  networks: {
    hardhat: {},
    // Deprecated network
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
    // New testnets
    // base_sepolia: {
    //   url: BASE_SEPOLIA_RPC,
    //   accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    //   chainId: 84532,
    //   gasPrice: 1000000000, // 1 gwei
    // },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      // url: SEPOLIA_RPC_URL,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      chainId: 11155111,
      timeout: 60000,
    },
  },
};

// 0xFcd5bC5F8295DA509f36b8C22f70fC4619be86fA
// 0xA0760CE96cF48bf206D5dE2beC04083d675de4c3