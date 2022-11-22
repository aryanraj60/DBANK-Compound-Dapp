import MiddleSection from "../components/Middle-Section/MiddleSection";
import { useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants/index";

export default function Home() {
  const { isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainID = chainIdHex ? parseInt(chainIdHex).toString() : null;

  const contractAddress =
    chainID in contractAddresses ? contractAddresses[chainID][0] : null;

  return (
    <div className="Home">
      {isWeb3Enabled ? (
        contractAddress ? (
          <>
            <MiddleSection abi={abi} contractAddress={contractAddress} />
          </>
        ) : (
          <div className="display-6 text-light text-center">
            Switch To Goerli Network
          </div>
        )
      ) : (
        <div className="display-6 text-light text-center">
          Connect To Your Wallet
        </div>
      )}
    </div>
  );
}
