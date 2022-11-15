import React from "react";
import Navbar from "./Navbar/Navbar";
import { useMoralis } from "react-moralis";

const Header = () => {
  console.log("Header rendered");
  return (
    <div className="header">
      <Navbar />
    </div>
  );
};

export default Header;
