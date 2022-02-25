import { css } from "@emotion/react";
import "@fontsource/roboto-mono";
import "@fontsource/roboto-mono/500.css";

const typography = css`
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    letter-spacing: 0.8px;
    font-family: "Roboto Mono";
  }

  h1 {
    font-size: 2.4rem;
    word-spacing: -10px;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 2.4rem;

    @media only screen and (min-width: 600px) {
      font-size: 3.2rem;
      word-spacing: -10px;
    }
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    word-spacing: -5px;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;

export default typography;
