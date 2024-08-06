import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 4rem 1.75rem 1.75rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > svg {
    height: 1.9rem;
    width: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > img {
    width: 10rem;
    margin: 0 auto;
  }
`;

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    height: 1.9rem;
    width: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

export const Orders = styled.div`
  > svg {
    height: 1.9rem;
    width: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    position: relative;
  }

  > span {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: 1.3rem;
    top: 3.7rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: .875rem;
    font-weight: 500;

    width: 1.35rem;
    height: 1.35rem;

    border-radius: 50%;
  }
`;
