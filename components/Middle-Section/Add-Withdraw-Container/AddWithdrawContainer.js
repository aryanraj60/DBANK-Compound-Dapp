import React from "react";
import AddMoneyContainer from "./AddMoneyContainer/AddMoneyContainer";
import WithdrawMoneyContainer from "./WithdrawMoneyContainer/WithdrawMoneyContainer";

const AddWithdrawContainer = ({ abi, contractAddress }) => {
  return (
    <>
      <>
        <div className="AddMoneyContainer mb-5">
          <AddMoneyContainer abi={abi} contractAddress={contractAddress} />
        </div>
        <div className="WithdrawMoneyContainer">
          <WithdrawMoneyContainer abi={abi} contractAddress={contractAddress} />
        </div>
      </>
    </>
  );
};

export default AddWithdrawContainer;
