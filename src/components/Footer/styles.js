import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  gap: .5rem;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600 };
  padding: 1.865rem 1.75rem;
  margin-top: 1.56rem;

  > img {
    width: 8.875rem;
  }

  > p {
    font-size: .75rem;
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`