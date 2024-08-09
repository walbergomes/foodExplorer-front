import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints.js"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  margin: 9.8rem 4rem;

  > img {
    width: 17.3rem;
    margin-bottom: 4.5rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LAPTOP}) {
   flex-direction: row;
   align-items: center;
   justify-content: space-around;

   margin: 0 7rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: .875rem;
    text-align: center;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LAPTOP}) {
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 4rem;
    border-radius: 1rem;
    min-width: 29rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  > label {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`