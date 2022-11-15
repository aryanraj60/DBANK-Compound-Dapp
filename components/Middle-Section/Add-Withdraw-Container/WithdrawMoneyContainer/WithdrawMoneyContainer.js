import React from "react";
import WithdrawMoneyInERC20 from "./WithdrawMoney/WithdrawMoneyInERC20";
import WithdrawMoneyInETH from "./WithdrawMoney/WithdrawMoneyInETH";

const WithdrawMoneyContainer = ({ abi, contractAddress }) => {
  return (
    <>
      <WithdrawMoneyInETH abi={abi} contractAddress={contractAddress} />
      <WithdrawMoneyInERC20 abi={abi} contractAddress={contractAddress} />
    </>
  );
};

export default WithdrawMoneyContainer;
