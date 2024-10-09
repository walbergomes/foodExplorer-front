import { Container, Menu, ButtonArea } from "./styles";

import logo from "../../assets/logo.svg";
import logoadmin from "../../assets/logoadmin.svg";

import { IoMenu } from "react-icons/io5";
import { PiReceiptBold } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <Menu>
        <IoMenu />
      </Menu>

      <img src={logo} alt="Logo Food Explorer" />
      {/* <img src={logoadmin} alt="Logo Food Explorer Admin" /> */}

      <ButtonArea>
        <PiReceiptBold size={25} />
        <span>8</span>
      </ButtonArea>
    </Container>
  );
}
