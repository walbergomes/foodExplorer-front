import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Slogan } from "../../components/Slogan";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card"

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Slogan />
        <Section title="Refeições">
          <Card />
        </Section>
        <Section title="Pratos principais">
          <Card />
        </Section>
        <Section title="Bebidas">
          <Card />
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
