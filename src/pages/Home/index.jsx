import { Container } from "./styles";

import { Header } from "../../components/Header"
import { Slogan } from "../../components/Slogan";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Header />
      <Slogan />

      <main>
        <Section title="Refeições">
          
        </Section>
      </main>

    </Container>
  )
}