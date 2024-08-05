import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, $isnew }) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: .5rem;
  
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
  
  > input {
    height: 2rem;
    border: none;
    background: none;

    padding-left: 1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1rem;
  }

  > button {
    border: none;
    background: none;
    padding-right: 1rem;
  }
`