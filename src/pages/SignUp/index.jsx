import { useEffect, useState } from "react";
import { Container, Form, Wrapper } from "./styles";

import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints";

import logoImage from "../../assets/logoImage.svg";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= parseInt(DEVICE_BREAKPOINTS.LAPTOP)
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(
        window.innerWidth >= parseInt(DEVICE_BREAKPOINTS.LAPTOP)
      );
    };

    window.addEventListener("resize", handleResize);

    // Limpa o event listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <img src={logoImage} alt="logo food explorer" />

      <Form>
        {isLargeScreen && <h1>Crie sua conta</h1>}
        <Wrapper>
          <label htmlFor="name">Seu nome</label>
          <Input id="name" type="text" placeholder="Exemplo: Maria da Silva" />
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
        <Button title="Criar conta" backgroundColor="TOMATO_100" />
        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
