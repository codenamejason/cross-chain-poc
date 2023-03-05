import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";

const deployAxelarTrustedReceiver: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  // Get the deployed contract
  const AxelarTrustedReceiver = await hre.ethers.getContract("AxelarTrustedReceiver", deployer);
  const Round = await hre.ethers.getContract("Round", deployer);

  await AxelarTrustedReceiver.init(Round.address, ethers.constants.AddressZero);
  await Round.setTrustedReceiver(AxelarTrustedReceiver.address);

};

export default deployAxelarTrustedReceiver;

deployAxelarTrustedReceiver.tags = ["AxelarTrustedReceiver"];
