import React, { useState } from "react";
import { useWeb3Contract } from "react-moralis";
import { useNotification } from "web3uikit";

const AddMoneyWithERC20 = ({ abi, contractAddress }) => {
  const [tokenAddress, setTokenAddress] = useState("");

  const dispatch = useNotification();

  const {
    runContractFunction: addMoneyWithErc20,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addMoneyErc20Token",
    params: {
      erc20TokenAddress: tokenAddress,
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

  const handleError = async (e) => {
    console.log("Error:", e);
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
    <div className="AddMoneyWithERC20 d-flex justify-content-between">
      <input
        type="text"
        placeholder="Token Address"
        onChange={(e) => {
          setTokenAddress(e.target.value);
        }}
      />

      <button
        className="btn btn-light"
        disabled={isFetching || isLoading || !tokenAddress}
        onClick={async () => {
          await addMoneyWithErc20({
            onSuccess: handleSuccess,
            onError: handleError,
          });
        }}
      >
        {isFetching || isLoading ? (
          <div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <>AddMoneyWithERC20</>
        )}
      </button>
    </div>
  );
};

export default AddMoneyWithERC20;
