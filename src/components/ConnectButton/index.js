import React, { useState } from "react";
import styled from "@emotion/styled";
import Modal from "react-modal";
import WagmiButton from "../WagmiButton";

const ModalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    zIndex: 200,
  },
  content: {
    position: "absolute",
    border: "4px solid black",
    top: "40%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
    padding: "4em 3em",
    width: "90%",
    maxWidth: "600px",
    boxShadow: "4px 4px 0px 0px #000000",
  },
};

const WalletColors = ["#f6851b", "#3b99fc", "#1552f0"];

const ConnectButton = ({ data, error, onConnect }) => {
  const [showConnectors, setShowConnectors] = useState(false);

  return (
    <>
      <WagmiButton color="#7cd0ff" onClick={() => setShowConnectors(true)}>
        Connect
      </WagmiButton>
      <Modal
        isOpen={showConnectors}
        onRequestClose={() => setShowConnectors(false)}
        contentLabel="Wallet Connectors Modal"
        style={ModalStyles}
        ariaHideApp={false}
      >
        <InnerModal>
          {data.connectors.map((connector, i) => (
            <WagmiButton
              disabled={!connector.ready}
              key={connector.id}
              onClick={() => onConnect(connector)}
              color={WalletColors[i]}
            >
              {connector.name}
            </WagmiButton>
          ))}
          {error && (
            <ErrorText>{error?.message ?? "Failed to connect"}</ErrorText>
          )}
        </InnerModal>
      </Modal>
    </>
  );
};

const InnerModal = styled.div`
  display: grid;
  grid-gap: 2rem;
`;

const ErrorText = styled.p`
  color: #ff929b;
  font-size: 1.6rem;
  margin-left: 1rem;
`;

export default ConnectButton;
