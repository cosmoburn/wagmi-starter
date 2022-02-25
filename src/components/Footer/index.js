import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import osIcon from "../../assets/opensea.svg";
import Container from "../Container";

const Footer = () => (
  <Wrapper>
    <Container>
      <StyledFooter>
        <h1>wagmi starter</h1>
        <Icons>
          <a
            href="https://twitter.com/cosmoburn"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://discord.gg/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} size="2x" />
          </a>
          <a href="https://opensea.io/" target="_blank" rel="noreferrer">
            <img src={osIcon} alt="Opensea" />
          </a>
        </Icons>
      </StyledFooter>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  background: black;
  color: white;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;

  @media only screen and (min-width: 600px) {
    padding: 2em;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: inherit;
    margin-right: 2em;
    height: 32px;
    width: 32px;
  }
`;

export default Footer;
