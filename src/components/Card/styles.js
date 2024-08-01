import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .75rem;

  width: 13.125rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: .5rem;

  padding: 1.5rem;

  position: relative;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    height: 1.3rem;
    width: 1.5rem;

    position: absolute;
    bottom: 17rem;
    right: 1rem;
  }

  > img {
    width: 5.5rem;
  }

  > h3 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: .875rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
`

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: .875rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1rem;
  }
`

export const QuantityButton = styled.button`
  background: none;
  border: none;

  font-size: 1.5rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`