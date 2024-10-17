import { Container } from "./styles";

export function Input({ icon: Icon, style, ...rest }) {
  return (
    <Container className={style}>
      { Icon && <Icon size={20}/>}
      <input {...rest} />
    </Container>
  );
}
