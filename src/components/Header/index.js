import React from "react";
import { useConnect, useAccount } from "wagmi";
import styled from "@emotion/styled";
import AccountBadge from "../AccountBadge";
import ConnectButton from "../ConnectButton";
import Container from "../Container";

const Header = () => {
  const [{ data: connectorData, error: ConnectorError }, connect] =
    useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  return (
    <StyckyTop>
      <Container>
        <StyledHeader>
          <h1>wagmi starter</h1>
          <AccountContainer>
            {accountData ? (
              <AccountBadge account={accountData} onDisconnect={disconnect} />
            ) : (
              <ConnectButton
                data={connectorData}
                error={ConnectorError}
                onConnect={connect}
              />
            )}
          </AccountContainer>
        </StyledHeader>
      </Container>
    </StyckyTop>
  );
};

const StyckyTop = styled.div`
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  border-bottom: 2px solid black;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  @media only screen and (min-width: 600px) {
    padding: 1em 2em;
  }
`;

const AccountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
