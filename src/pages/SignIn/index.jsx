import { Container, Wrapper } from "./styles"

import logoImage from "../../assets/logoImage.svg"

import { Input } from "../../components/Input"

export function SignIn() {
  return ( 
    <Container>
      <img src={logoImage} alt="logo food explorer" />

      <Wrapper>
        <label htmlFor="">Email</label>
        <Input placeholder="Exemplo: exemplo@exemplo.com.br"/>
      </Wrapper>
    </Container>
  )
}