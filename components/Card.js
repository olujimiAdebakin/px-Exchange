import React, {useEffect, useState, useRef} from "react";
import {useAccount} from "wagmi"
import {ethers} from "ethers";
import toast, {Toaster} from "react-hot-toast";
import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";

import {SingleCard, transactionStatus } from "./index";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import { tokenMap } from "../utils/saleToken"; 

export default function Card(){
  const {address} = useAccount();
  return (
    <>
      <div className="py-6 sm:py-12 bg-[#1a1a1a] text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">All Listed Tokens For sale</h1>
            <p className="font-serif text-sm text-gray-400"></p>
          </div>
          {/* <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
            <SingleCard index={1} name={"PAX_COIN"} walletAddress={ address} />
        </div> */}
          <div className="grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(tokenMap).map(([key, name], index) => (
              <SingleCard
                key={key}
                index={index + 1}
                name={key}
                 displayName={name} 
                walletAddress={address}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
