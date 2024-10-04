import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 3rem;

  gap: 4.5rem;

  > img {
    width: 17rem;
    margin: 0 auto;

    @media (max-width: ${DEVICES_BREAKPOINTS.MOBILE_M}) {
      width: 14rem;
    }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  > a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: .875rem;

  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`