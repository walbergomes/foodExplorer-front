import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;

  > input {
    height: 48px;
    width: 100%;

    background: none;
    border: none;

    padding: 0 .8rem;

    font-family: "Roboto", system-ui;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`