import { Container } from "./styles"

export function Button({ icon: Icon, title, bg, ...rest}) {
  return (
    <Container 
      $bg={bg}
    >
      { Icon && <Icon size={20} />}
      <button {...rest}>{title}</button>
    </Container>
  )
}