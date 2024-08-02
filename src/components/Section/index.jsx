import { Container, CardsArea } from "./styles";

export function Section({ children, title }) {
  return (
    <Container>
      <h3>{title}</h3>
      <CardsArea>
        {children}
      </CardsArea>
    </Container>
  );
}
