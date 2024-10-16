import { Container } from "./styles"

export function Button({ icon: Icon, title, bg, className, ...rest}) {
  return (
    <Container 
      $bg={bg}
      className={className}
    >
      { Icon && <Icon size={20} />}
      <button {...rest}>{title}</button>
    </Container>
  )
}