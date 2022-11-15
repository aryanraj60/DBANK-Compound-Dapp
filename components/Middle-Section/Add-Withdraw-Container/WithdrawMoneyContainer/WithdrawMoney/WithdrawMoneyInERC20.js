import React, { useState } from "react";
import { useWeb3Contract } from "react-moralis";

const WithdrawMoneyInERC20 = ({ abi, contractAddress }) => {
  const [tokenAddress, setTokenAddress] = useState("");

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
          await withdrawMoneyInErc20();
        }}
        disabled={isFetching || isLoading || !tokenAddress}
      >
        Withdraw In ERC20
      </button>
    </div>
  );
};

export default WithdrawMoneyInERC20;
