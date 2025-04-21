import React, { useEffect, useState } from "react";
import {
  getTokenAddress,
  getTokenBalance,
  increaseAllowance,
} from "../utils/context";
import TransactionStatus from "./TransactionStatus";
import toast from "react-hot-toast";
import {
  ClipboardIcon,
  ClipboardCheckIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { ethers } from "ethers";

const SingleCard = ({ index, name, walletAddress }) => {
  const [balance, setBalance] = useState("-");
  const [tokenAddress, setTokenAddress] = useState();
  const [copyIcon, setCopyIcon] = useState({
    icon: ClipboardIcon,
  });
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () =>
    toast.success("Transaction Completed.", { duration: 4000 });

  useEffect(() => {
    if (name && walletAddress) {
      fetchTokenBalance();
      fetchTokenAddress();
    } else setBalance("-");
  }, [name, walletAddress]);

  async function fetchTokenBalance() {
    try {
      const bal = await getTokenBalance(name, walletAddress);
      const fBal = ethers.utils.formatUnits(bal.toString(), 18);
      setBalance(fBal.toString());
    } catch (err) {
      notifyError("Failed to fetch balance");
      setBalance("0");
    }
  }

  async function fetchTokenAddress() {
    try {
      const addr = await getTokenAddress(name, walletAddress);
      setTokenAddress(addr);
    } catch (err) {
      notifyError("Failed to fetch token address");
    }
  }

  return (
    <article className="flex flex-col bg-[#212429]">
      <a rel="noopener noreferrer" href="#" aria-label="">
        <img
          alt=""
          className="object-cover w-full h-62 bg-gray-500"
          src={`img/${index + 1}.png`}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label=""
          className="text-xs uppercase hover:underline text-[#7765f3]"
        >
          {name} 10M Supply
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-5">
          Get {name} token, limited Supply available
        </h3>

        <div className="flex mx-2 pt-[10px]">
          <div className="flex items-center bg-zinc-300 p-2 px-3 rounded-l-lg">
            <p className="text-sm">{name}</p>
            <p className="bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100">
              {balance}
            </p>
          </div>
          <div className="flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg">
            <copyIcon.icon
              className="h-6 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText(tokenAddress);
                setCopyIcon({ icon: ClipboardCheckIcon });
                toast.success("Address copied to clipboard", {
                  duration: 3000,
                });
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCard;
