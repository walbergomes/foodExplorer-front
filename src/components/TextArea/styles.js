import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 16px;

  font-family: "Roboto", sans-serif;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }
`