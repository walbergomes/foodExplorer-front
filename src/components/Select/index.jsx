import { Container } from "./styles";

export function Select() {
  return (
    <Container>
      <option value="refeicoes">Refeições</option>
      <option value="pratos-principais">Pratos principais</option>
      <option value="bebidas">Bebidas</option>
    </Container>
  )
}