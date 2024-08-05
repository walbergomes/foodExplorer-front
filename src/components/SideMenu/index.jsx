import { Container, Top } from "./styles";

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
        {/* <h3>Novo prato</h3> */}
        <h3>Sair</h3>
      </main>
      <Footer />
    </Container>
  );
}
