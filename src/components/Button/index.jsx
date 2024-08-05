import { Container } from "./styles";

export function Button({ title, icon: Icon, backgroundColor, ...rest }) {
  return (
    <Container
      $backgroundcolor={backgroundColor}
      {...rest} 
    >
      {Icon && <Icon />}
      { title }
    </Container>
  )
}
