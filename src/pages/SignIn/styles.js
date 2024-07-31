import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  margin: 9.8rem 4rem;

  > img {
    width: 17.3rem;
  }
`;

export const Wrapper = styled.div`
  > label {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`