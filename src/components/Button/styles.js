import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;

  &:hover {
    filter: brightness(.7);
  }

  > button {
    height: 48px;
    width: 100%;

    background-color: ${({ theme, $bg }) => $bg ? theme.COLORS[$bg] : theme.COLORS.LIGHT_300};
    border: none;
    border-radius: 5px;

    font-family: "Poppins", sans-serif;
    font-size: .875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
