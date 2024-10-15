import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent": theme.COLORS.LIGHT_600 };

  border: ${({ theme, $isnew }) => $isnew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 8px;
  
  padding: 0 1rem;

  &:focus-within {
    border: 2px dashed #66afe9;
    outline-offset: 2px;
  }
  
  > input {
    background: transparent;
    border: none;
    outline: none;

    width: 100%;
    height: 2rem;

    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > button {
    border: none;
    background: none;
  }
`