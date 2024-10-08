import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Slogan } from "../../components/Slogan"
import { Section } from "../../components/Section"

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Slogan />
        <Section title="Refeições">
         
        </Section>
      </main>
      
      <Footer />
    </Container>
  )
}