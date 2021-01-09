import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    --container: 1200px;

    --white: #FFFFFF;
    --gray: #F2F2F2;
    --gray-dark: #e1e4e8;
    --gray-light: #f6f8fa;
    --red: #FC0000;
    --blue: #0366d6;
    --yellow: #fff5b1;
  }
`;

export default GlobalStyles;
