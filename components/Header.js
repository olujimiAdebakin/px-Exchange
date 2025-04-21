// import React, { useEffect, useState } from "react";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { useAccount } from "wagmi";
// import toast, { Toaster } from "react-hot-toast"


// // INTERNAL
// imp  ort { Menu, Logo, TokenBalance } from "./index"
// expor  t default function Header() {
//   const [tokenBalComp, setTokenBalComp] = useState();
//   const { address } = useAccount();

//   const notifyConnectWallet = () => {
//     toast.success("Wallet connected successfully!");
//     toast.error("Connect wallet.", { duration: 2000 });
//   };

//   useEffect(() => {
//     setTokenBalComp(
//       <>
//         <TokenBalance address={address} />

//         <ConnectButton onConnect={notifyConnectWallet} />
//       </>
//     );
//     if (!address) notifyConnectWallet();
//   }, [address]);

//   return (
//     <>
//       <header className="p-4 text-gray-100">
//         <div className="container flex justify-around h-16 mx-auto">
//           <div className="flex">
//             <a
//               rel="noopener noreferrer"
//               href="#"
//               aria-label="Back to homepage"
//               className="flex items-center p-2"
//             >
//               <Logo />
//             </a>
//             <ul>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/"
//                   className="flex items-center px-4 -mb-1 dark:border-transparent text-[#7765f3] border-[#7765f3]"
//                 >
//                   Swap
//                 </a>
//               </li>

//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/tokens"
//                   className="flex items-center px-4 -mb-1 dark:border-transparent "
//                 >
//                   Tokens
//                 </a>
//               </li>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="#"
//                   className="flex items-center px-4 -mb-1 dark:border-transparen"
//                 >
//                   NFTs
//                 </a>
//               </li>
//               <li className="flex">
//                 <a
//                   rel="noopener noreferrer"
//                   href="/"
//                   className="flex items-center px-4 -mb-1 dark:border-transparent"
//                 >
//                   Pool
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="items-center flex-shrink-0 hidden lg:flex">
//             <TokenBalance name={"PASER"} walletAddress={address} />
//             <TokenBalance name={"PX"} walletAddress={address} />
//             <ConnectButton/>
//           </div>
//           <button className="p-4 lg:hidden">
//             <Menu/>
//           </button>
//         </div>
//         <Toaster/>
//       </header>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import toast, { Toaster } from "react-hot-toast";


// INTERNAL
import { Menu, Logo, TokenBalance } from "./index";

// const tokens = ["PASER", "PX"];
// Add more tokens here if needed

const tokens = ["PAX Coin", "PASER", "PX"];


export default function Header() {
  const { address, isConnected } = useAccount();

  const notifyConnectWallet = () => {
    toast.error("Please connect your wallet.", { duration: 2000 });
  }

  useEffect(() => {
    if (!address) notifyConnectWallet();
  }, [address]);

  return (
    <>
      <header className="p-4 text-gray-100">
        <div className="container flex justify-around h-16 mx-auto">
          <div className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <Logo />
            </a>

            <ul className="flex items-center">
              <li>
                <a href="/" className="flex items-center px-4 text-[#7765f3]">
                  Swap
                </a>
              </li>
              <li>
                <a href="/tokens" className="flex items-center px-4">
                  Tokens
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center px-4">
                  NFTs
                </a>
              </li>
              <li>
                <a href="/" className="flex items-center px-4">
                  Pool
                </a>
              </li>
            </ul>
          </div>

          {/* Token balances and wallet button */}
          <div className="items-center gap-4 flex-shrink-0 hidden lg:flex">
            {isConnected && 
              tokens.map((token, i) => (
                <TokenBalance key={i} name={token} walletAddress={address} />
              ))}
            <ConnectButton />
          </div>

          {/* Mobile Menu */}
          <button className="p-4 lg:hidden">
            <Menu />
          </button>
        </div>
        <Toaster />
      </header>
    </>
  );
}
