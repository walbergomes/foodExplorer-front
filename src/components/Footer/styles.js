import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 1.875rem;

  margin-top: 1.5rem;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    font-family: "DM Sans", sans-serif;
    font-size: .75rem;
  }
`