import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  > h2 {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (min-width: ${DEVICES_BREAKPOINTS.TABLET}) {
      font-size: 2rem;
    }
  }
`;
