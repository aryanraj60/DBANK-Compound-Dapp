This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What is this?

This is a dapp in which user can deposit ether or any erc20 token to earn real interest on that asset.

Steps to Get Started Using The Dapp-

1. Connect to your wallet and switch to Goerli Network
2. Deposit Eth or any erc20 token.(if you are depositing erc20 token make sure to approve the Smart Bank contract before depositing).
3. Keep the asset locked on the contract and it will start increasing with time.
4. Withdraw anytime you want. There are two options for withdraw, you can withdraw it in ETH or any ERC20 token which has liquidity(just paste the address of the token).

Note - This Dapp is currently works only on Goerli Test Network.

## How It Works ?

1.The asset you sent to this contract is further send to the Compound Protocol and locked in the protocol where it grows with time and can only be unlocked when you call withdraw function on the contract.

2.When you send erc20 or withdraw in erc20, the contract call the required functions on uniswap to convert it eth or erc20 token and then sent back to you or to the compound protocol.

Note - The smart contract of this dapp is stored on goerli blockchain. The code is open-source and can be verified on etherscan.
