import { Global, css } from "@emotion/react";
import layout from "./layout";
import reset from "./reset";
import typography from "./typography";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${reset}
        ${layout}
        ${typography}
      `}
    />
  );
};

export default GlobalStyles;
