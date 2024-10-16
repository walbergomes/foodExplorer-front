import { Container, Menu, ButtonArea } from "./styles";

import logo from "../../assets/logo.svg";
import logoadmin from "../../assets/logoadmin.svg";

import { IoMenu } from "react-icons/io5";
import { PiReceiptBold, PiSignOutBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

import { Input } from "../Input"
import { Button } from "../Button"

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <IoMenu />
      </Menu>

      <img src={logo} alt="Logo Food Explorer" />
      {/* <img src={logoadmin} alt="Logo Food Explorer Admin" /> */}

      {/* <Input 
        icon={FaSearch}
        placeholder="Busque por pratos ou ingredientes"
      /> */}

      <ButtonArea>
        <PiReceiptBold size={25} />
        <span>8</span>
      </ButtonArea>

      {/* <Button 
        className="order"
        icon={PiReceiptBold}
        title={`Pedidos (0)`}
        bg="TOMATO_100"
      /> */}

      {/* <ButtonArea >
        <PiSignOutBold size={25} />
      </ButtonArea> */}
    </Container>
  );
}
