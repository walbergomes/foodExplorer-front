import { Container } from "./styles"

export function Select({ id }) {
  return (
    <Container id={id} name={id}>
      <option value="meal">Refeição</option>
      <option value="main-dishes">Pratos Principais</option>
      <option value="drinks">Bebidas</option>
    </Container>
  )
}