import React from "react";
import { ConnectButton } from "web3uikit";
import { useMoralis } from "react-moralis";

const Navbar = () => {
  console.log("nav rendered");
  return (
    <div className="navbar">
      <div>
        <h1 className="text-light">Smart Decentralized Bank</h1>
      </div>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Navbar;
