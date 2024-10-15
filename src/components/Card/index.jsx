import { Container, Title, Price, Quantity, EditButton } from "./styles";

import dishImg from "../../assets/dish.svg"

import { FaPlus, FaMinus, FaRegHeart } from "react-icons/fa6";
import { TbPencil } from "react-icons/tb";


import { Button } from "../Button"


export function Card() {
  return (
    <Container>
      <img src={dishImg} alt="" />

      {/* <FaRegHeart size={24}/> */}

      <EditButton>
        <TbPencil size={34}/>
      </EditButton>

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
