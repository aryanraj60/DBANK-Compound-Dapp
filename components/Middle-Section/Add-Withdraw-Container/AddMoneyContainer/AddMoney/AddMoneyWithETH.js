import React, { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

const AddMoneyWithETH = ({ abi, contractAddress }) => {
  const { isWeb3Enabled } = useMoralis();
  // const chainId = parseInt(chainIdHex);
  // const contractAddress =
  //   chainId in contractAddresses ? contractAddresses[chainId][0] : null;

  // const amount = ethers.utils.parseEther("0.0001");

  const [amount, setAmount] = useState(0);
  const dispatch = useNotification();

  const { runContractFunction: addMoney } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "addMoney",
    params: {},
    msgValue: ethers.utils.parseEther(amount.toString()),
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
    <div className="AddMoneyWithETH d-flex justify-content-between">
      <input
        type="number"
        min="0"
        onChange={(event) => {
          if (event.target.value == "") {
            setAmount(0);
          } else {
            setAmount(event.target.value);
          }
        }}
        placeholder="Amount In ETH"
      ></input>
      <button
        className="btn btn-light"
        onClick={async () => {
          await addMoney({
            onError: handleError,
            onSuccess: handleSuccess,
          });
        }}
        disabled={amount > 0 ? false : true}
      >
        Add Money
      </button>
    </div>
  );
};

export default AddMoneyWithETH;
