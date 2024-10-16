import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  height: 100vh;

  > main {
    flex: 1;

    padding: 1rem 3.5rem 0 3.5rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
      padding: 2rem 7.5rem 0 7.5rem;
    }
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(0.7);
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const DishArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-bottom: 3rem;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    text-align: start;
    > .button-width {
      width: 9rem;
    }
  }

  > h1 {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
      font-size: 2.5rem;
    }
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`;

export const IngredientsArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    justify-content: start;
  }
`;

export const Section = styled.section`
  > img {
    width: 16rem;
    margin-top: 1rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
      width: 28rem;
    }
  }

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`;

export const OrderQuantityArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    font-size: 1.3rem;
  }

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    margin-top: 3rem;

    > .button-width {
      width: 10rem;
      margin-left: 1.5rem;
    }
  }
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1rem;

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP_L}) {
      font-size: 1.8rem;
    }
  }
`;
