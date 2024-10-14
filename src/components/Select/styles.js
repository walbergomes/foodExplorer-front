import styled from "styled-components";

export const Container = styled.select`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;

  appearance: none;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.454505 0.829505C0.893845 0.390165 1.60616 0.390165 2.0455 0.829505L8 6.78401L13.9545 0.829505C14.3938 0.390165 15.1062 0.390165 15.5455 0.829505C15.9848 1.26884 15.9848 1.98116 15.5455 2.4205L8.7955 9.1705C8.35616 9.60983 7.64384 9.60983 7.2045 9.1705L0.454505 2.4205C0.015165 1.98116 0.015165 1.26884 0.454505 0.829505Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 24px center;

  border: none;
  border-radius: 8px;

  padding: 0 0.8rem;

  font-family: "Roboto", system-ui;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 1rem;

  > option {
    
  }
`;
