import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider, chain, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { WalletLinkConnector } from "wagmi/connectors/walletLink";
import { providers } from "ethers";

const network = process.env.REACT_APP_NETWORK;
const alchemyId = process.env.REACT_APP_ALCHEMY_ID;
const infuraId = process.env.REACT_APP_INFURA_ID;

const provider = () => new providers.AlchemyProvider(network, alchemyId);

const connectors = ({ chainId }) => {
  const rpcUrl =
    defaultChains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];

  return [
    new InjectedConnector({
      chains: [...defaultChains],
    }),
    new WalletConnectConnector({
      options: {
        infuraId: infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: "Plant Freens",
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ];
};

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider provider={provider} connectors={connectors} autoConnect>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
