# wagmi starter

A quick template with everything you need to get started with frontend Ethereum projects.

I love using [wagmi](https://github.com/tmm/wagmi) for Ethereum projects, but I got tired of creating repos from scratch over and over.
So I decided to create a starter repo that sets a create-react-app project with some mundane tasks already done such as creating a login modal, setting up a provider and some styles.

## About wagmi

[wagmi](https://github.com/tmm/wagmi) is a React Hooks library for Ethereum, built on ethers.js.
It provides lots of fun hooks that make interacting with the blockchain a breeze.

You can read their full documentation [here](https://wagmi-xyz.vercel.app/)

## Getting started

1. You can clone or fork this repo.
2. Install the dependencies.
```
cd wagmi-starter
yarn
```
3. Add a `.env` file with the following values.
```.env
REACT_APP_ALCHEMY_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_INFURA_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_CHAIN_ID=1
REACT_APP_NETWORK=homestead
```
4. Style your dapp however you want, feel free to delete anything you don't need.

## A quick note on the state of wallectconnect & coinbase wallet and create react app.

Due to these packages relying on nodejs modules which are not supported anymore using webpack 5 (which comes with react-scripts 5)
we have to do some hacky shit to be able to use them right now. 

This starte takes care of all that for you but hopefully this is fixed soon and I can update this repo.

You can read more about the problem and the fix [here](https://github.com/NoahZinsmeister/web3-react/issues/423)

I also want to thank [willisk](https://github.com/willisk) for saving me hours of troubleshooting with this solution.

