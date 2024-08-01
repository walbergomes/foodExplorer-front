import { Container, QuantitySelector, QuantityButton } from "./styles";

import { Heart, Minus, Plus } from "@phosphor-icons/react"
import { Button } from "../Button"

import dishTest from "../../assets/dishTest.svg"

export function Card() {
  return (
    <Container>
      <Heart />

      <img src={dishTest} alt="#" />
      <h3>Salada Ravanello &gt;</h3>
      <p>R$ 49,97</p>

      <QuantitySelector>
        <QuantityButton>
          <Minus />
        </QuantityButton>
        <span>01</span>
        <QuantityButton>
          <Plus />
        </QuantityButton>
      </QuantitySelector>

      <Button title="incluir" backgroundColor="TOMATO_100"/>
    </Container>
  )
}