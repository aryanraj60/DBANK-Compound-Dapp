import React from "react";
import AddMoneyWithERC20 from "./AddMoney/AddMoneyWithERC20";
import AddMoneyWithETH from "./AddMoney/AddMoneyWithETH";

const AddMoneyContainer = ({ abi, contractAddress }) => {
  return (
    <>
      <AddMoneyWithETH abi={abi} contractAddress={contractAddress} />
      <AddMoneyWithERC20 abi={abi} contractAddress={contractAddress} />
    </>
  );
};

export default AddMoneyContainer;
