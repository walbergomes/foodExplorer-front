import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.aside`
  height: 100vh;
  width: 100%;

  display: none;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  @media (max-width: ${DEVICES_BREAKPOINTS.MOBILE_L}) {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }

  > header {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 3.5rem 1.75rem 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      font-weight: 400;
    }
  }

  > main {
    flex: 1;
    padding: 2.25rem 1.75rem 0;
  }
`;

export const CloseMenu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const SignOut = styled.button`
  width: 100%;

  background: none;
  border: none;

  text-align: start;

  font-size: 1.5rem;
  font-weight: 300;
  font-family: "Poppins", sans-serif;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin: 10px 0;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;

    margin-top: 10px;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;
