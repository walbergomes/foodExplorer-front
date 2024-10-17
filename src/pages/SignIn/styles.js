import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 3rem;

  gap: 4.5rem;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    flex-direction: row;
    align-items: center;

    padding: 0 6.75rem;
  }

  > img {
    width: 17rem;
    margin: 0 auto;

    @media (max-width: ${DEVICES_BREAKPOINTS.MOBILE_M}) {
      width: 14rem;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    display: none;
  }

  > a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 0.875rem;
  }

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    min-width: 29rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 4rem;
    border-radius: 16px;

    > h1 {
      display: block;
      text-align: center;
      font-weight: 500;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > label {
    font-family: "Roboto", system-ui;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
