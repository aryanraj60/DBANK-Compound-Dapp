import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";

const DisplayBalance = ({ abi, contractAddress }) => {
  const [balance, setBalance] = useState("0");
  const { web3, isWeb3Enabled, account } = useMoralis();
  console.log("Connected Account: ", account);
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
    console.log("I'm updateUI");
    console.log("Getting balance for account", account);
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
    console.log("I'm useffect inside balance comp");
    if (isWeb3Enabled) {
      console.log("Initialzing The MoneyAdded Event");
      let dbankContract = new ethers.Contract(contractAddress, abi, web3);
      dbankContract.on("MoneyAdded", () => {
        console.log("MoneyAdded Event Emitted");
        console.log("Updating UI of Balances Component");
        handleUIChange();
      });
      console.log("Initializing The Money Withdraw Event.");
      dbankContract.on("MoneyWithdraw", () => {
        console.log("MoneyWithdraw Event Emitted");
        console.log(
          "Updating UI of Balance Component(By Withdraw event callback)"
        );
        handleUIChange();
      });
      setIsEventSet(true);
      setDbank(dbankContract);
      return () => {
        console.log("Removing listener when component unmounts");
        dbankContract.removeAllListeners("MoneyAdded");
        dbankContract.removeAllListeners("MoneyWithdraw");
      };
    }
  }, [web3]);

  useEffect(() => {
    console.log("I'm useffect which remove listener");
    if (isEventSet && isWeb3Enabled) {
      // console.log("Removing Listener.");
      dbank.removeAllListeners("MoneyAdded");
      dbank.removeAllListeners("MoneyWithdraw");
      setIsEventSet(false);
      console.log("Money Added and Withdraw Money Listeners Removed");
      console.log("Setting Both New Listeners");
      dbank.on("MoneyAdded", (_sender, amount) => {
        console.log("Event Emitted");
        console.log("Updating UI of Balances Component");
        handleUIChange();
      });
      dbank.on("MoneyWithdraw", () => {
        console.log("MoneyWithdraw Event Emitted");
        console.log(
          "Updating UI of Balance Component(By Withdraw event callback)"
        );
        handleUIChange();
      });
      setIsEventSet(true);
      console.log("New Listener Set");
      // dbank.removeAllListeners("MoneyAdded");
      // console.log("Listener Removed!");
      // setIsEventSet(false);

      return () => {
        console.log("Removing listener when component unmounts");
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
  console.log("display balance rendered");
  console.log(dbank);
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
