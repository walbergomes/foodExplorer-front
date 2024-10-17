import { Container, Form, Wrapper } from "./styles";

import logo from "../../assets/logo.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <img src={logo} alt="Logo Food Explorer" />

      <Form>
        <h1>Crie sua conta</h1>

        <Wrapper>
          <label htmlFor="name">Nome</label>
          <Input
            type="name"
            id="name"
            placeholder="Exemplo: Maria Da Silva"
          />
        </Wrapper>

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

        <Button bg="TOMATO_100" title="Criar conta" />

        <a href="#">Já tenho uma conta</a>
      </Form>
    </Container>
  );
}
