import React from "react";
import { SiTwitter, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div class="mt-5 text-center text-white">
        <div class="container p-3">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/aryanraj_60"
              src="../../assests/twitter.png"
            >
              <SiTwitter />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              src="../../assests/linkedin.png"
              href="https://www.linkedin.com/in/aryan-rajput-3a0760204/"
            >
              <SiLinkedin />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://goerli.etherscan.io/address/0xaA39B066CcCfbEc7296148e801a0eE549042B293#code"
              role="button"
            >
              <span>EtherScan</span>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
