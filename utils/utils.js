import { ethers } from 'ethers';

// function to convert to WEI
export function toWei(amount, decimals = 18){
    const toWei = ethers.utils.parseUnits(amount, decimals)
    return toWei.tostring()
}

// function to convert to ETH
export function toEth(amount, decimals = 18){
    const toEth = ethers.utils.formatUnits(amount, decimals)
    return toEth.toString()
}