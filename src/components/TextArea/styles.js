import styled from "styled-components";

export const Container = styled.textarea`
  resize: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  height: 10.75rem;

  border: none;
  border-radius: 8px;

  padding: 0.875rem;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &::placeholder {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1rem;
  }

  outline: none;

  &:focus-within {
    outline: 2px solid #66afe9;
  }
`;
