import {
  Container,
  Title,
  Price,
  Quantity,
  EditButton,
  PriceArea,
  ButtonQuantity,
} from "./styles";

import dishImg from "../../assets/dish.svg";

import { FaPlus, FaMinus, FaRegHeart } from "react-icons/fa6";
import { TbPencil } from "react-icons/tb";

import { Button } from "../Button";

export function Card() {
  return (
    <Container>
      <img src={dishImg} alt="" />

      {/* <FaRegHeart size={24}/> */}

      <EditButton>
        <TbPencil size={34} />
      </EditButton>

      <Title>Salada Ravanello &gt;</Title>

      <p>Delicioso folheado de pêssego com folhas de hortelã.</p>

      <Price>R$ 49,97</Price>

      <PriceArea>
        <Quantity>
          <ButtonQuantity>
            <FaMinus />
          </ButtonQuantity>
          <span>01</span>
          <ButtonQuantity>
            <FaPlus />
          </ButtonQuantity>
        </Quantity>

        <Button title="incluir" bg="TOMATO_100" />
      </PriceArea>
    </Container>
  );
}
