import { Container, Orders, Menu } from "./styles";

import { List, Receipt } from "@phosphor-icons/react";
import logoImage from "../../assets/logoImage.svg";

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={ onOpenMenu }>
        <List />
      </Menu>
      <img src={logoImage} alt="logo food explorer" />

      <Orders>
        <Receipt />
        <span>0</span>
      </Orders>
    </Container>
  );
}
