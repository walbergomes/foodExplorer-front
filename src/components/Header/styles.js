import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  padding: 3.5rem 1.75rem 1.5rem;

  position: relative;

  > img {
    width: 9rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`

export const Menu = styled.button`
  background: none;
  border: none;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`

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
    bottom: .75rem;
    left: 1rem;

    width: 1.25rem;
    height: 1.25rem;

    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;
  }
`