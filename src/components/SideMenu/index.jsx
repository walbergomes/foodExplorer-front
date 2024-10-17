import { Container, CloseMenu, SignOut } from "./styles";

import { FaX } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi"

import { Footer } from "../Footer";
import { Input } from "../Input"

import { Link } from "react-router-dom";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen} >
      <header>
        <CloseMenu onClick={onCloseMenu}>
          <FaX />
        </CloseMenu>
        <p>Menu</p>
      </header>

      <main>
        <Input 
          icon={FiSearch}
          placeholder="Busque por pratos ou igredientes"
        />

        <Link to="/new">
          Novo prato
        </Link>

        <SignOut>
          Sair
        </SignOut>
      </main>

      <Footer />
    </Container>
  );
}
