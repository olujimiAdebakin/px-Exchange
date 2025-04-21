import React, { useEffect, useState, useRef } from "react";
import {
  hasValidAllowance,
  increaseAllowance,
  swapEthToToken,
  swapTokenToEth,
  swapTokenToToken
} from "../utils/context"

import { CogIcon, ArrowSmDownIcon } from "@heroicons/react/outline";
import SwapField from "./SwapField";
import TransactionStatus from "./TransactionStatus";
import toast, { Toaster } from "react-hot-toast";
import { DEFAULT_VALUE, ETH } from "../utils/saleToken";
import { toEth, toWei } from "../utils/utils";
import { useAccount } from "wagmi";
export default function SwapComponent() {
  const [srcToken, setSrcToken] = useState(ETH);
  const [destToken, setDestToken] = useState(DEFAULT_VALUE);

  const [inputValue, setInputValue] = useState();
  const [outPutValue, setOutputValue] = useState();

  const inputValueRef = useRef();
  const outPutValueRef = useRef();

  const isReversed = useRef(false);

  const INCREASE_ALLOWANCE = "Increase Allowance";
  const ENTER_AMOUNT = "Enter an Amount";
  const CONNECT_WALLET = "Connect Wallet";
  const SWAP = "Swap";

  const srcTokenObj = {
    id: "srcToken",
    value: inputValue,
    setValue: setInputValue,
    defaultValue: srcToken,
    ignoreValue: destToken,
    setToken: setSrcToken,
  };

  const destTokenObj = {
    id: "srcToken",
    value: outPutValue,
    setValue: setOutputValue,
    defaultValue: destToken,
    ignoreValue: srcToken,
    setToken: setDestToken,
  };

  const [srcTokenComp, setSrcTokenComp] = useState();
  const [destTokenComp, setDestTokenComp] = useState();

  const [swapBtnText, setSwapBtnText] = useState(ENTER_AMOUNT);
  const [txPending, setTxPending] = useState(false);

  const notifyError = (msg) => toast.error(msg, { duration: 6000 });
  const notifySuccess = () => toast.success("Transaction Completed.");

  const { address } = useAccount();

  useEffect(() => {
    // Handling the text of the submit button

    if (!address) setSwapBtnText(CONNECT_WALLET);
    else if (!inputValue || !outPutValue) setSwapBtnText(ENTER_AMOUNT);
    else setSwapBtnText(SWAP);
  }, [inputValue, outPutValue, address]);

  useEffect(() => {
    if (
      document.activeElement !== outPutValueRef.current &&
      document.activeElement.ariaLabel !== "srcToken" &&
      !isReversed.current
    )
      populateOutputValue(inputValue);

    setSrcTokenComp(<SwapField obj={srcTokenObj} ref={inputValueRef} />);

    if (inputValue?.length === 0) setOutputValue("");
  }, [inputValue, destToken]);

  useEffect(() => {
    if (
      document.activeElement !== inputValueRef.current &&
      document.activeElement.ariaLabel !== "destToken" &&
      isReversed.current
    )
      populateInputValue(outPutValue);
    setDestTokenComp(<SwapField obj={destTokenObj} ref={outPutValueRef} />);

    if (inputValue?.length === 0) setOutputValue("");

    // Reseting the isReversed value if its set
    if (isReversed.current) isReversed.current = false;
  }, [outPutValue, srcToken]);
  return (
    <>
      
      <div className="border-[1px] rounded-l border-[#7765F3] bg-[#7765F3] w-[100%] p-4 px-6 rounded-xl">
        <div className="flex items-center justify-between py-4 px-1">
          <p>Swap your tokens below:</p>
          <CogIcon className="h-6" />
        </div>
        <div className="relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600">
          {srcTokenComp}
          <ArrowSmDownIcon
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110"
            onClick={handleReverseExchange}
          />
        </div>
        <div className="bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600">
          {destTokenComp}
        </div>
        <button
          className={getSwapBtnClassName()}
          onClick={() => {
            if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();
            else if (swapBtnText === SWAP) handleSwap();
          }}
        >
          {swapBtnText}
        </button>

        {txPending && <TransactionStatus />}
        <Toaster />
      </div>
    </>
  );

  async function handleSwap() {
    if (srcToken === ETH && destToken !== ETH) {
      performSwap();
    } else {
      // check whether there is allowance when the swap deals with tokenToEth/tokenToToken
      setTxPending(true);
      const result = await hasValidAllowance(address, srcToken, inputValue);
      setTxPending(false);

      if (result) performSwap();
      else handleInsufficientAllowance();
    }
  }

  async function handleIncreaseAllowance() {
    // increase the allowance
    setTxPending(true);
    await increaseAllowance(srcToken, inputValue);
    setTxPending(false);

    // set the swapBtn to "Swap" again
    setSwapBtnText(SWAP);
  }

  function handleReverseExchange() {
    // setting the isReversed value to prevent the input.output values
    // being calculated in their respective side - efforts
    isReversed.current = true;

    // 1. Swap tokens (srcToken <--> destToken)
    // 2. Swap values (inputValue <--> outputValue)

    setInputValue(outPutValue);
    setOutputValue(inputValue);

    setSrcToken(destToken);
    setDestToken(srcToken);
  }

  // function getSwapBtnClassName() {
  //   let className = "p-4 w-full my-2 rounded-xl";
  //   className += swapBtnText == ENTER_AMOUNT || swapBtnText == CONNECT_WALLET
  //     ? " text-zinc-400 bg-zinc-800 pointer-events-none"
  //     : "bg-blue-700";
  //   className += swapBtnText === INCREASE_ALLOWANCE ? "bg-yellow-600" : "";
  //   return className;
  // }

  function getSwapBtnClassName() {
    let className = "p-4 w-full my-2 rounded-xl ";

    if (swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET) {
      className += "text-zinc-400 bg-zinc-800 pointer-events-none ";
    } else if (swapBtnText === INCREASE_ALLOWANCE) {
      className += "bg-yellow-600 ";
    } else {
      className += "bg-blue-700 ";
    }

    return className;
  }


  function populateOutputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !inputValue
    )
      return;

    try {
      if (srcToken !== ETH && destToken !== ETH) setOutputValue(inputValue);
      else if (srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(inputValue), 14);
        setOutputValue(outValue);
      } else if (srcToken !== ETH && destToken == ETH) {
        const outValue = toEth(toWei(inputValue, 14));
        setOutputValue(outValue);
      }
    } catch (error) {
      setOutputValue("0");
    }
  }

  function populateInputValue() {
    if (
      destToken === DEFAULT_VALUE ||
      srcToken === DEFAULT_VALUE ||
      !inputValue
    )
      return;

    try {
      if (srcToken !== ETH && destToken !== ETH) setInputValue(outPutValue);
      else if (srcToken === ETH && destToken !== ETH) {
        const outValue = toEth(toWei(outPutValue), 14);
        setInputValue(outValue);
      } else if (srcToken !== ETH && destToken == ETH) {
        const outValue = toEth(toWei(inputValue, 14));
        setInputValue(outValue);
      }
    } catch (error) {
      setOutputValue("0");
    }
  }
  async function performSwap() {
    setTxPending(true);
    let receipt;

    if (srcToken === ETH && destToken !== ETH) {
      receipt = await swapEthToToken(destToken, inputValue);
    } else if (srcToken !== ETH && destToken === ETH) {
      receipt = await swapTokenToEth(srcToken, inputValue);
    } else {
      receipt = await swapTokenToToken(srcToken, destToken, inputValue);
    }

    setTxPending(false);

    if (receipt && !receipt.hasOwnProperty("transactions")) {
      notifyError(receipt);
    } else {
      notifySuccess();
    }
  }

  function handleInsufficientAllowance() {
    notifyError(
      "Insufficient allowance. Click 'Increase allowance' to increase it."
    );
    setSwapBtnText(INCREASE_ALLOWANCE);
  }
}