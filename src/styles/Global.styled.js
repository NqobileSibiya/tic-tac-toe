import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.primary};
  }

  ${(props) => props.theme.media.mobile} {
    * {
      font-size: 11px;
    }
  }
`;

