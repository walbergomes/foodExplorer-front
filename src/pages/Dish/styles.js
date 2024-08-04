import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.25rem 3.5rem;

  position: relative;

  > img {
    width: 16.5rem;
    margin-top: 3rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  position: absolute;
  left: 3.5rem;

  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }

  > svg {
    width: 2rem;
    height: 2rem;
  }

  > span {
    font-size: 1.5rem;
  }
`;

export const DetailsDish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  margin: 1rem 0 3rem;

  > h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.68rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
  }
`

export const Ingredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`

export const Ingredient = styled.span`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  font-family: "Poppins", sans-serif;
  font-size: .875rem;

  padding: .25rem .5rem;
  border-radius: .31rem;
`

export const OrdersArea = styled.div`
  display: flex;
  gap: 1rem;
`

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const SelectQuantity = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1.4rem;
`

export const ConfirmOrder = styled.button`
  display: flex;
  align-items: center;
  gap: .375rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: .25rem;

  padding: .75rem 2.9rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 1.4rem;
  }

  > span {
    font-family: "Poppins", sans-serif;
    font-size: .6rem;
  }

`