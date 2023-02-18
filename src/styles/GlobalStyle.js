import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  :root {
    --color-mainBlack: #333;
    --color-background-lightgray: #e9e9e9;
    --color-border-container: #cdcdcd;
    --color-text-default: #111;
  }
  html {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 62.5%; // 10px
  }
  body {
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer
  }
  input {
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

export default GlobalStyle;
