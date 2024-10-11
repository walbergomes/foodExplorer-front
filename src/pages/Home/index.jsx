import { useState } from "react";
import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Slogan } from "../../components/Slogan";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";

import { SideMenu } from "../../components/SideMenu";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

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
