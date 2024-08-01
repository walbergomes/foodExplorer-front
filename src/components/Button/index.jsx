import { Container } from "./styles";

export function Button({ title, backgroundColor, ...rest }) {
  return (
    <Container
      $backgroundcolor={backgroundColor}
      {...rest} 
    >
      { title }
    </Container>
  )
}
