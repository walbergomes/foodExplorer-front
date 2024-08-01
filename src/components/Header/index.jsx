import { Container, Orders } from "./styles";

import { List, Receipt } from "@phosphor-icons/react";
import logoImage from "../../assets/logoImage.svg";

export function Header() {
  return (
    <Container>
      <List />
      <img src={logoImage} alt="logo food explorer" />

      <Orders>
        <Receipt />
        <span>0</span>
      </Orders>
    </Container>
  );
}
