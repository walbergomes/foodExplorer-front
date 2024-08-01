import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({ $backgroundcolor, theme }) => $backgroundcolor ? theme.COLORS[$backgroundcolor] : theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  width: 100%;

  font-size: .875rem;

  border: none;
  border-radius: .3rem;
  height: 3rem;
`
