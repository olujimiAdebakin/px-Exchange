
const hre = require("hardhat");

async function main() {
  const CustomDex = await hre.ethers.getContractFactory("CustomDex");
  const dex = await CustomDex.deploy();
  await dex.deployed();

  console.log(`CustomDex deployed at: ${dex.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
