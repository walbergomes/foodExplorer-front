import { Container, Form, Wrapper } from "./styles";

import logoImage from "../../assets/logoImage.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <img src={logoImage} alt="logo food explorer" />

      <Form>
        <Wrapper>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br" 
          />
        </Wrapper>

        <Wrapper>
          <label htmlFor="password">Senha</label>
          <Input
            id="password"
            placeholder="No mínimo 6 caracteres" 
          />
        </Wrapper>
        <Button title="Entrar" backgroundColor="TOMATO_100"/> 
      </Form>
      
      <a href="#">Criar uma conta</a>
    </Container>
  );
}
