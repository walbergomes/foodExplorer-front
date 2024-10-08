import styled from "styled-components";

export const Container = styled.div`
  height: 7.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 3px;

  margin: 2.75rem 0 3rem 1rem;
  
  position: relative;

  > img {
    position: absolute;
    bottom: .01rem;
    left: -1.5rem;
  }

  > section {
    width: 13.5rem;
    position: absolute;
    right: 0;
    bottom: 1.3rem;

    h1 {
      font-size: 1.125rem;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-size: .75rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }
`