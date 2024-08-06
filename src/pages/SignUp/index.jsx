import { Container, Form, Wrapper } from "./styles";

import logoImage from "../../assets/logoImage.svg";

import { Link } from "react-router-dom"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <img src={logoImage} alt="logo food explorer" />

      <Form>
        <Wrapper>
          <label htmlFor="name">Seu nome</label>
          <Input
            id="name"
            type="text"
            placeholder="Exemplo: Maria da Silva" 
          />
        </Wrapper>
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
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres" 
          />
        </Wrapper>
        <Button title="Criar conta" backgroundColor="TOMATO_100"/> 
      </Form>
      
      <Link to="/">Já tenho uma conta</Link>
    </Container>
  );
}
