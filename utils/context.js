// import { BigNumber, ethers } from "ethers";
// import { contract, tokenContract } from "./contract";
// import { toEth } from "./utils";

// export async function swapEthToToken(tokenName, amount) {
//     try {
//         let tx = { value: toWei(amount) };
//         const contractObj = await contract();
//         const data = await contractObj.swapEthToToken(tokenName, tx);

//         const receipt = await data.wait();
//         return receipt;
//     } catch (e) {
//         return parseErrorMsg(e);
//     }
// };

// export async function hasValidAllowance(owner, tokenName, amount) {
//     try {
//         const contractObj = await contract();
//         const address = await contractObj.getTokenAddress(tokenName);

//         const tokenContractObj = await tokenContract(address);
//         const data = await tokenContractObj.allowance(
//             owner,
//             "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3"
//         );

//         const result = BigNumber.from(data.toString()).gte(
//             BigNumber.from(toWei(amount))
//         );

//         return result;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// };

// export async function swapTokenToEth(tokenName, amount) {
//     try {
//         const contractObj = await contract();
//         const data = await contractObj.swapTokenToEth(tokenName,toWei(amount));

//         const receipt = await data.wait();
//         return receipt;
//     } catch (e) {
//         return parseErrorMsg(e);
//     };
// }

// export async function swapTokenToToken(srcToken, destToken, amount){
//     try{
//         const contractObj = await contract();
//         const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));

//         const receipt = await data.wait();
//         return receipt;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// }

// export async function getTokenBalance(tokenName, address){
//     const contractObj = await contract();
//     const balance = contractObj.getBalance(tokenName, address);
//     return balance;
// }

// export async function getTokenAddress(tokenName){
//     try {
//         const contractObj = await contract();
//         const address = await contractObj.getTokenAddress(tokenName);
        
//         return address;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// }

// export async function increaseAllowance(tokenName, amount){
//     try {
//         const contractObj = await contract();
//         const address = await contractObj.getTokenAddress(tokenName);

//         const tokenContractObj = await tokenContract(address);
//         const data = await tokenContractObj.approve(
//             "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3"
//             toWei(amount)
//         );

//         const receipt = await data.wait();
//         return receipt;
//     } catch (e){
//         return parseErrorMsg(e);
//     }
// }

// export async function getAllHistory(){
//     try {
//         const contractObj = await contract();
//         const getAllHistory = await contractObj.getAllHistory();

//         const historyTransaction = gtAllHistory.map((history, i)=>{
//             historyId: historyId.toNumber(),
//             tokenA: history.tokenA,
//             tokenB: history.tokenB,
//             inputValue: toEth(history?.inputValue),
//             outputValue: toEth(history?.outputValue),
//         });
//         return historyTransaction;
//     } catch (e) {
//         return parseErrorMsg(e);
//     }
// }


// export async function toWei(amount){
//     const toWei = ethers.utils.parseUnits(amount.toString());
//     return towei.toString();
// }

// export async function parseErrorMsg(e){
//     const json = JSON.parse(JSON.stringify(e));
//     return json?.reason || json.error?.message;
// }

import { BigNumber, ethers } from "ethers";
import { contract, tokenContract } from "./contract";
import { toEth } from "./utils";

// Convert amount to Wei
export function toWei(amount) {
  return ethers.utils.parseUnits(amount.toString()).toString();
}

// Parse Error Messages
export function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json.error?.message || "Unknown error occurred";
}

// Swap ETH to Token
export async function swapEthToToken(tokenName, amount) {
  try {
    const tx = { value: toWei(amount) };
    const contractObj = await contract();
    const data = await contractObj.swapEthToToken(tokenName, tx);
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Check Allowance
export async function hasValidAllowance(owner, tokenName, amount) {
  try {
    const contractObj = await contract();
    const tokenAddress = await contractObj.getTokenAddress(tokenName);

    const tokenContractObj = await tokenContract(tokenAddress);
    const allowance = await tokenContractObj.allowance(
      owner,
      "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3" // DEX contract address
    );

    return BigNumber.from(allowance.toString()).gte(BigNumber.from(toWei(amount)));
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Swap Token to ETH
export async function swapTokenToEth(tokenName, amount) {
  try {
    const contractObj = await contract();
    const data = await contractObj.swapTokenToEth(tokenName, toWei(amount));
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Swap Token to Token
export async function swapTokenToToken(srcToken, destToken, amount) {
  try {
    const contractObj = await contract();
    const data = await contractObj.swapTokenToToken(srcToken, destToken, toWei(amount));
    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Get Token Balance
export async function getTokenBalance(tokenName, address) {
  try {
    const contractObj = await contract();
    const balance = await contractObj.getBalance(tokenName, address);
    return balance;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Get Token Address
export async function getTokenAddress(tokenName) {
  try {
    const contractObj = await contract();
    const address = await contractObj.getTokenAddress(tokenName);
    return address;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Increase Allowance
export async function increaseAllowance(tokenName, amount) {
  try {
    const contractObj = await contract();
    const tokenAddress = await contractObj.getTokenAddress(tokenName);
    const tokenContractObj = await tokenContract(tokenAddress);

    const tx = await tokenContractObj.approve(
      "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3", // DEX contract address
      toWei(amount)
    );

    const receipt = await tx.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

// Get All Transaction History
export async function getAllHistory() {
  try {
    const contractObj = await contract();
    const allHistory = await contractObj.getAllHistory();

    const historyTransaction = allHistory.map((history) => ({
      historyId: history.historyId.toNumber(),
      tokenA: history.tokenA,
      tokenB: history.tokenB,
      inputValue: toEth(history?.inputValue),
      outputValue: toEth(history?.outputValue),
    }));

    return historyTransaction;
  } catch (e) {
    return parseErrorMsg(e);
  }
}
