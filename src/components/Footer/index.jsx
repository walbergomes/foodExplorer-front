import { Container } from "./styles"

import logoFooter from "../../assets/logofooter.svg"

export function Footer() {
  return (
    <Container>
      <img src={logoFooter} alt="Logo Food Explorer" />
      <p>&copy; 2024 - Todos os direitos reservados.</p>
    </Container>
  )
}