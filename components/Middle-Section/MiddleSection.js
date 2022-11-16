import React from "react";
import AddWithdrawContainer from "./Add-Withdraw-Container/AddWithdrawContainer";
import { useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../../constants/index";
import DisplayBalance from "./Balances/DisplayBalance";

const MiddleSection = () => {
  const { isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);

  const contractAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  return (
    <div className="middleSection">
      <div className=" mt-3 mb-5 mx-auto w-50 Balance">
        <DisplayBalance abi={abi} contractAddress={contractAddress} />
      </div>
      <div className=" mx-auto w-50 AddWithdraw">
        <AddWithdrawContainer abi={abi} contractAddress={contractAddress} />
      </div>
    </div>
  );
};

export default MiddleSection;
