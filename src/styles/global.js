import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    @media (min-width: ${DEVICE_BREAKPOINTS.MOBILE_M}) {
      font-size: 14px;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MOBILE_L}) {
      font-size: 16px;
    } 
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    font-family: "Roboto", sans-serif;
    --webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`
