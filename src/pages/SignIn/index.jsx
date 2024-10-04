import { Container, Form, Wrapper} from "./styles"

import logo from "../../assets/logo.svg"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
  return (
    <Container>
      <img src={logo} alt="Logo Food Explorer" />

      <Form>
        <Wrapper>
          <label htmlFor="email">Email</label>
          <Input 
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
        </Wrapper>

        <Wrapper>
          <label htmlFor="password">Senha</label>
          <Input 
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
          />
        </Wrapper>

        <Button 
          bg="TOMATO_100"
          title="Entrar"
        />

        <a href="#">Criar uma conta</a>
      </Form>
    </Container>
  )
}