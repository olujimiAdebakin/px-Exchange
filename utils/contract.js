// import { ethers } from "ethers";
// import CustomDexABI from "../utils/CustomDex.json";
// import CustomTokenABI from "../utils/CustomToken.json";

// export const tokenContract = async (address) => {
//   const { ethereum } = window;

//   if (!ethereum) {
//     alert("Please install MetaMask!");
//     return;
//   }

//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();

//   return new ethers.Contract(address, CustomTokenABI.abi, signer);
// };

// export const contract = async () => {
//   const { ethereum } = window;

//   if (!ethereum) {
//     alert("Please install MetaMask!");
//     return;
//   }

//   const provider = new ethers.providers.Web3Provider(ethereum);
//   const signer = provider.getSigner();

//   return new ethers.Contract(
//     "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3", // CustomDex address
//     CustomDexABI.abi,
//     signer
//   );
// };

import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      address,
      CustomTokenABI.abi,
      signer
    );

    return contractReader;
    }
}

  export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { ethereum } = window;

    if (ethereum) {
      const signer = provider.getSigner();
    

    const contractReader = new ethers.Contract(
      "0xA0760CE96cF48bf206D5dE2beC04083d675de4c3",
      CustomDexABI.abi,
      signer
    );

    return contractReader;
  };
}
