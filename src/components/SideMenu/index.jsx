import { Container, Top, RouteTo, ButtonX } from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";

import { Input } from "../Input";
import { Footer } from "../Footer";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Top>
        <ButtonX onClick={onCloseMenu}>
          <X />
        </ButtonX>
        <h2>Menu</h2>
      </Top>

      <main>
        <Input
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
        />
        <RouteTo to="/newdish">Novo prato</RouteTo>
        <RouteTo to="/">Sair</RouteTo>
      </main>
      <Footer />
    </Container>
  );
}
