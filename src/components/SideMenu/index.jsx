import { Container, Top, RouteTo } from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";

import { Input } from "../Input";
import { Footer } from "../Footer"

export function SideMenu() {
  return (
    <Container>
      <Top>
        <X />
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
