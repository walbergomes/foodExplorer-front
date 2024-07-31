import { createGlobalStyle } from "styled-components"

import { DEVICE_BREAKPOINTS } from "./deviceBreakPoints"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    --webkit-font-smoothing: antialiased;

    @media (min-width: ${DEVICE_BREAKPOINTS.MOBILE_L}) {
      font-size: 1.6rem;
    }
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }
`