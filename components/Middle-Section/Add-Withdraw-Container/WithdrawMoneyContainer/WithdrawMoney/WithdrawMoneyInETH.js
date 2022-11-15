import React from "react";
import { useWeb3Contract } from "react-moralis";
import { useMoralis } from "react-moralis";
import { useNotification } from "web3uikit";

const WithdrawMoney = ({ abi, contractAddress }) => {
  const dispatch = useNotification();

  const { runContractFunction: withdrawMoney } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "withdraw",
    params: {},
  });

  const handleSuccess = async (tx) => {
    await tx.wait(1);
    handleSuccessNotification();
  };

  const handleSuccessNotification = () => {
    dispatch({
      type: "success",
      message: "Transaction Complete!",
      title: "Tx Notification",
      position: "topR",
    });
  };

  const handleError = async (error) => {
    console.log("I'm handling Error");
    console.log("Here is the Error", error);
    handleErrorNotification();
  };

  const handleErrorNotification = () => {
    dispatch({
      type: "error",
      title: "Transaction Failed",
      message: "Something Went Wrong!",
      position: "topR",
    });
  };

  return (
    <div className="WithdrawMoneyInETH d-flex flex-column mb-5 align-items-center">
      <h2 className="text-light text-center mb-3 w-75 display-6">
        Withdraw Money In ETH
      </h2>
      <button
        className="btn btn-light w-50"
        onClick={async () => {
          await withdrawMoney({
            onSuccess: handleSuccess,
            onError: handleError,
          });
        }}
      >
        Withdraw In ETH
      </button>
    </div>
  );
};

export default WithdrawMoney;
