import styled from "styled-components";
import { DEVICES_BREAKPOINTS } from "../../styles/devicesBreakpoints"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  > main {
    flex: 1;

    padding: 0.625rem 2rem 0 2rem;

    h1 {
      font-weight: 500;
      margin: 2rem 0 1.5rem;
    }

    @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
      padding: 2.5rem 7.6rem 0 7.6rem;
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
    font-size: 1.5rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;

  @media (min-width: ${DEVICES_BREAKPOINTS.LAPTOP}) {
    grid-template-areas: 
      "file name name category"
      "ingredients ingredients ingredients price"
      "textarea textarea textarea textarea"
    ;

    > #file {
      grid-area: file;
    }

    > #name-wrapper {
      grid-area: name;
    }

    > #category-wrapper {
      grid-area: category;
    }

    > #ingredients-wrapper {
      grid-area: ingredients;
    }

    > #price-wrapper {
      grid-area: price;
    }

    > #textarea-wrapper {
      grid-area: textarea;
    }
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

export const TextArea = styled.textarea`
  resize: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  height: 10.75rem;

  border: none;
  border-radius: 8px;

  padding: 0.875rem;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &::placeholder {
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1rem;
  }
`;

export const IngretientsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  width: 100%;
  padding: 8px;
  padding: .5rem 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 8px;
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 2rem;
`