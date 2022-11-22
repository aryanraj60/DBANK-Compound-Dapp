import React from "react";
import AddWithdrawContainer from "./Add-Withdraw-Container/AddWithdrawContainer";

import DisplayBalance from "./Balances/DisplayBalance";

const MiddleSection = ({ abi, contractAddress }) => {
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
