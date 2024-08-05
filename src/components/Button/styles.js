import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  background-color: ${({ $backgroundcolor, theme }) => $backgroundcolor ? theme.COLORS[$backgroundcolor] : theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  width: 100%;

  font-size: .875rem;

  border: none;
  border-radius: .3rem;
  height: 3rem;

  > svg {
    font-size: 1.4rem;
  }
`
