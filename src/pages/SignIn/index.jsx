import { Container, Form, Wrapper } from "./styles";

import logoImage from "../../assets/logoImage.svg";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom"

export function SignIn() {
  return (
    <Container>
      <img src={logoImage} alt="logo food explorer" />

      <Form>
        <Wrapper>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="email"
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
        <Button title="Entrar" backgroundColor="TOMATO_100"/> 
      </Form>
      
      <Link to="/register">Criar uma conta</Link>
    </Container>
  );
}
