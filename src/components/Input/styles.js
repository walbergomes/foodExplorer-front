import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: .8rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.5rem;
    margin-left: .875rem;
  }
  
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