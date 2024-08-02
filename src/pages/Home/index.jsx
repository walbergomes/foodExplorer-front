import { Container } from "./styles";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import { Header } from "../../components/Header";
import { Slogan } from "../../components/Slogan";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <Header />
      <Slogan />

      <main>
        <Section title="Refeições">
          <Card />
          <Card />
          <Card />
          <Card />
        </Section>
      </main>
    </Container>
  );
}
