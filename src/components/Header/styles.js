import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 3.5rem 1.75rem 1.5rem;

  position: relative;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    padding: 1.75rem 7rem;
  }

  > img {
    width: 9rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
      width: 12rem;
    }
  }

  > .order {
    width: 30rem;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const ButtonArea = styled.button`
  height: 25px;
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  position: relative;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.75rem;
    left: 1rem;

    width: 1.25rem;
    height: 1.25rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;
  }
`;
