import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  > main {
    flex: 1;

    padding: 0 1rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.TABLET}) {
      padding: 0 7rem;
    }
  }
`