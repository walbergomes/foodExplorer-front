import { Container, ButtonArea } from "./styles";

import logo from "../../assets/logo.svg";

import { IoMenu } from "react-icons/io5";
import { PiReceiptBold } from "react-icons/pi";

export function Header() {
  return (
    <Container>
      <ButtonArea>
        <IoMenu size={25} />
      </ButtonArea>

      <img src={logo} alt="Logo Food Explorer" />

      <ButtonArea>
        <PiReceiptBold size={25} />
        <span>8</span>
      </ButtonArea>
    </Container>
  );
}
