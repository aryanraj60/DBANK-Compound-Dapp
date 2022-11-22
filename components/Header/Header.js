import React from "react";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  console.log("Header rendered");
  return (
    <div className="header">
      <Navbar />
    </div>
  );
};

export default Header;
