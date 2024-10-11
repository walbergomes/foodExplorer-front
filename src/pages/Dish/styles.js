import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  height: 100vh;

  > main {
    flex: 1;

    padding: 1rem 3.5rem 0 3.5rem;

    img {
      width: 16rem;
      margin-top: 1rem;
    }
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(0.7);
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const DishArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  margin-bottom: 3rem;

  > h1 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  > p {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const IngredientsArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`