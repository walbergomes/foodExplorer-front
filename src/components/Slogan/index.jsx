import { Container } from "./styles";

import sloganImg from "../../assets/slogan.svg";

export function Slogan() {
  return (
    <Container>
      <img src={sloganImg} alt="#" />

      <section>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </section>
    </Container>
  );
}
