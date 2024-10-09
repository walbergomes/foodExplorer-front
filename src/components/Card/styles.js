import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;

  padding: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};

  > img {
    width: 5.5rem;
  }
`

export const Title = styled.p`
  font-size: .875rem;
  font-weight: 500;
`

export const Price = styled.p`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.CAKE_100};
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: .875rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    font-size: 1rem;
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`