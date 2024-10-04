import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <h1>Hello, world</h1>
      </main>
      
      <Footer />
    </Container>
  )
}