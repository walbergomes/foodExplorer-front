import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  /* focado no mobile */
  position: absolute;
  z-index: 1;

  > main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    flex-grow: 1;

    padding: 2.25rem 1.75rem 0.875rem;
  }

  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  @media (max-width: 428px) {

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 4rem 1.75rem 2rem;

  > h2 {
    font-size: 1.375rem;
    font-weight: 400;
  }
`;

export const ButtonX = styled.button`
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > svg {
    font-size: 1.7rem;
    margin-top: .3rem;
  }
`;

export const RouteTo = styled(Link)`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 300;

  &::after {
    display: block;
    content: "";
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    padding-top: 16px;
  }
`;
