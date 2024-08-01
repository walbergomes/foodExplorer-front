import { Container } from "./styles";

export function Section({ children, title }) {
  return (
    <Container>
      <h3>{title}</h3>
      {children}
    </Container>
  )
}