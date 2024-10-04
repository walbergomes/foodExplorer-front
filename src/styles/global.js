import { createGlobalStyle } from "styled-components";
import { DEVICES_BREAKPOINTS } from "./devicesBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-family: "Poppins", system-ui;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }
`