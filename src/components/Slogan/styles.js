import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 7.5rem;
  background: ${({ theme }) => theme.COLORS.DARK_GRADIENT_200};
  border-radius: 3px;

  margin: 2.75rem 0 3rem 1rem;

  @media (min-width: ${DEVICES_BREAKPOINTS.TABLET}) {
    height: 16rem;

    margin: 10.25rem 0 3rem 1rem;
  }

  > img {
    margin: 0 0 2rem -2rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.TABLET}) {
      width: 35.5rem;
      height: 23rem;

      margin: 0 0 7rem -3rem;
    }
  }

  > section {
    h1 {
      font-size: 1.125rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      @media (min-width: ${DEVICES_BREAKPOINTS.TABLET}) {
        font-size: 2.5rem;
        font-weight: 500;
      }
    }

    p {
      font-size: 0.75rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      @media (min-width: ${DEVICES_BREAKPOINTS.TABLET}) {
        font-size: 1rem;
      }
    }
  }
`;
