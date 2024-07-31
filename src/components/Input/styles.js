import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;
  
  > input {
    background: none;
    border: none;
    
    height: 3rem;
    width: 100%;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1rem;

    padding: .87rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`