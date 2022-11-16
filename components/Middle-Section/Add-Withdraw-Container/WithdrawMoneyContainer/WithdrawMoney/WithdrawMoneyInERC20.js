import React, { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { useNotification } from "web3uikit";

const WithdrawMoneyInERC20 = ({ abi, contractAddress }) => {
  const [tokenAddress, setTokenAddress] = useState("");

  const dispatch = useNotification();

  const {
    runContractFunction: withdrawMoneyInErc20,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "withdrawInErc20",
    params: {
      tokenAddress: tokenAddress,
    },
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
    <div className="WithdrawMoneyInERC20 d-flex flex-column align-items-center">
      <h3 className="mb-2 text-center text-light w-75 display-6">
        Withdraw Money In ERC20
      </h3>
      <input
        className="mb-2 w-50"
        type="text"
        onChange={(e) => {
          setTokenAddress(e.target.value);
        }}
        placeholder="Token Address"
      ></input>
      <button
        className="btn btn-light w-50"
        onClick={async () => {
          await withdrawMoneyInErc20({
            onSuccess: handleSuccess,
            onError: handleError,
          });
        }}
        disabled={isFetching || isLoading || !tokenAddress}
      >
        {isFetching || isLoading ? (
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>Withdraw Money In ERC20</>
        )}
      </button>
    </div>
  );
};

export default WithdrawMoneyInERC20;
