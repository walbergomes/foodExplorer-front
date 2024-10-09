import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;

  &:focus-within {
    outline: 2px solid #66afe9;
    outline-offset: 2px;
  }

  > svg {
    margin-left: 1rem;
  }

  > input {
    height: 48px;
    width: 100%;

    background: none;
    border: none;
    outline: none;

    padding: 0 0.8rem;

    font-family: "Roboto", system-ui;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
