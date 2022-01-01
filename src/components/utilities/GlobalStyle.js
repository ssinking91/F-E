import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // style-reset 패키지
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Nanum Gothic:400,700,900", "sans-serif"],
  },
});

const GlobalStyles = createGlobalStyle` 
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        font-family: "Nanum Gothic", sans-serif;
    }
    body {
        font-family: "Nanum Gothic", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        // background-color: rgba(var(--b3f,250,250,250),1);
        background-color: #fff;
        color: #000;
    }
`;

export default GlobalStyles;
