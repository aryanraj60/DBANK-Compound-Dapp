import React from "react";
import AddMoneyContainer from "./AddMoneyContainer/AddMoneyContainer";
import WithdrawMoneyContainer from "./WithdrawMoneyContainer/WithdrawMoneyContainer";
import { useMoralis } from "react-moralis";

const AddWithdrawContainer = ({ abi, contractAddress }) => {
  const { isWeb3Enabled } = useMoralis();
  return (
    <>
      {isWeb3Enabled ? (
        <>
          <div className="AddMoneyContainer mb-5">
            <AddMoneyContainer abi={abi} contractAddress={contractAddress} />
          </div>
          <div className="WithdrawMoneyContainer">
            <WithdrawMoneyContainer
              abi={abi}
              contractAddress={contractAddress}
            />
          </div>
        </>
      ) : (
        <h3 className="display-5 text-center text-light">
          Please Connect To Your Wallet
        </h3>
      )}
    </>
  );
};

export default AddWithdrawContainer;
