import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  margin: 9.8rem 4rem;

  > img {
    width: 17.3rem;
    margin-bottom: 4.5rem;
  }

  a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: .875rem;
    text-align: center;
    margin-top: 2rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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