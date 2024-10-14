import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > label {
    display: flex;
    align-items: center;
    gap: .5rem;

    width: 100%;
    height: 48px;

    padding: 0 1rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 8px;
  }
`;
