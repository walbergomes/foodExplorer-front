import { Container } from "./styles";

import { Header } from "../../components/Header"
import { Slogan } from "../../components/Slogan";

export function Home() {
  return (
    <Container>
      <Header />
      <Slogan />
    </Container>
  )
}