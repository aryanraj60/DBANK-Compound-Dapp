import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";

const DisplayBalance = ({ abi, contractAddress }) => {
  const [balance, setBalance] = useState("0");
  const { web3, isWeb3Enabled, account } = useMoralis();
  const [isEventSet, setIsEventSet] = useState(false);
  const [dbank, setDbank] = useState();

  const {
    runContractFunction: getBalance,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "getBalance",
    params: {
      _owner: account,
    },
  });

  async function updateUI() {
    const balanceFromCall = (
      await getBalance({ params: { _owner: account } })
    ).toString();
    setBalance(balanceFromCall);
  }

  const handleUIChange = async () => {
    updateUI();
  };

  // const disableEvent = () => {
  //   eventEmitter = null;
  // }

  useEffect(() => {
    if (isWeb3Enabled) {
      let dbankContract = new ethers.Contract(contractAddress, abi, web3);
      dbankContract.on("MoneyAdded", () => {
        handleUIChange();
      });
      dbankContract.on("MoneyWithdraw", () => {
        handleUIChange();
      });
      setIsEventSet(true);
      setDbank(dbankContract);
      return () => {
        dbankContract.removeAllListeners("MoneyAdded");
        dbankContract.removeAllListeners("MoneyWithdraw");
      };
    }
  }, [web3]);

  useEffect(() => {
    if (isEventSet && isWeb3Enabled) {
      // console.log("Removing Listener.");
      dbank.removeAllListeners("MoneyAdded");
      dbank.removeAllListeners("MoneyWithdraw");
      setIsEventSet(false);
      dbank.on("MoneyAdded", (_sender, amount) => {
        handleUIChange();
      });
      dbank.on("MoneyWithdraw", () => {
        handleUIChange();
      });
      setIsEventSet(true);

      // dbank.removeAllListeners("MoneyAdded");
      // console.log("Listener Removed!");
      // setIsEventSet(false);

      return () => {
        dbank.removeAllListeners("MoneyAdded");
        dbank.removeAllListeners("MoneyWithdraw");
      };
    }
  }, [account]);

  useEffect(() => {
    if (isWeb3Enabled) {
      updateUI();
    }
  }, [account]);
  return (
    <div className="d-flex justify-content-center">
      <h3 className="text-light text-center w-75">
        Current Balance: {ethers.utils.formatUnits(balance, "ether")} ETH
      </h3>
      {/* <button
        onClick={() => {
          updateUI();
        }}
      >
        Update Balance
      </button> */}
    </div>
  );
};

export default DisplayBalance;
