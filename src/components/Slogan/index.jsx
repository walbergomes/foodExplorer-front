import { Container, TextArea } from "./styles";

import sloganImage from "../../assets/sloganImage.svg"

export function Slogan() {
  return (
    <Container>
      <img src={sloganImage} alt="" />

      <TextArea>
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </TextArea>
    </Container>
  )
}