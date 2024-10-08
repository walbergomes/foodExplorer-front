import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Slogan } from "../../components/Slogan"

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Slogan />
      </main>
      
      <Footer />
    </Container>
  )
}