import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  position: relative;

  > p {
    font-size: .875rem;
    text-align: center;
  }

  > img {
    width: 5.5rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP_L}) {
      width: 11rem;
    }
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 0.875rem;
  font-weight: 500;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP_L}) {
    font-size: 1.5rem;
  }
`;

export const Price = styled.span`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.CAKE_100};

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP_L}) {
    font-size: 2rem;
    padding: 1rem 0;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP_L}) {
    font-size: 1.5rem;
  }
  }

  > span {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;

export const EditButton = styled.button`
  background: none;
  border: none;

  position: absolute;
  top: 1rem;
  right: 1rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP_L}) {
    flex-direction: row;
  }
`