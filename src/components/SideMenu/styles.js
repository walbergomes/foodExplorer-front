import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  /* focado no mobile */
  position: absolute;
  z-index: 1;

  > main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    flex-grow: 1;

    padding: 2.25rem 1.75rem .875rem;

    h3 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-size: 1.5rem;
      font-weight: 300;

      &::after {
        display: block;
        content: "";
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
        padding-top: 16px;
      }
    }
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 4rem 1.75rem 2rem;

  > svg {
    font-size: 1.6rem;
  }

  > h2 {
    font-size: 1.375rem;
    font-weight: 400;
  }
`