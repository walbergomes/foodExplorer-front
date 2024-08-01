import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 7.5rem;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  border-radius: 3px;

  margin: 2.75rem 1rem 3.8rem 2rem;

  position: relative;

  > img {
    width: 12rem;
    position: absolute;
    top: -1.86rem;
    left: -1.7rem;
  }

`

export const TextArea = styled.div`
    padding-left: 10rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.125rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: .75rem;
    font-family: "Poppins", sans-serif;
  }
`