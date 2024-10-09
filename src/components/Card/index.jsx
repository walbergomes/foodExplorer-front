import { Container, Title, Price, Quantity } from "./styles";

import dishImg from "../../assets/dish.svg"

import { FaPlus, FaMinus } from "react-icons/fa6";

import { Button } from "../Button"


export function Card() {
  return (
    <Container>
      <img src={dishImg} alt="" />

      <Title>Salada Ravanello &gt;</Title>
      <Price>R$ 49,97</Price>

      <Quantity>
        <FaMinus size={20}/>
        <span>01</span>
        <FaPlus size={20}/>
      </Quantity>

      <Button title="incluir" bg="TOMATO_100"/>

    </Container>
  )
}
