import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  width: 100%;
  padding: 0.625rem 3.375rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-weight: 500;
  font-size: 1rem;

  > svg {
    font-size: 1.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;

export const FileInput = styled.label`
  display: flex;
  align-items: center;
  gap: .5rem;

  width: 100%;
  height: 3rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: .875rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.5rem;
    margin-left: .875rem;
  }

  > input {
    display: none;
  }
`;

export const IngredientsArea = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .5rem;
  padding: .5rem;
`