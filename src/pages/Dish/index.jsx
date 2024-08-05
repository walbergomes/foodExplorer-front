import {
  Container,
  Content,
  BackButton,
  DetailsDish,
  Ingredients,
  Ingredient,
  OrdersArea,
  QuantitySelector,
  SelectQuantity,
  ConfirmOrder,
} from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react";
import DishTest from "../../assets/dishTest.svg";

export function Dish() {
  return (
    <Container>
      <Header />

      <Content>
        <BackButton>
          <CaretLeft />
          <span>voltar</span>
        </BackButton>

        <img src={DishTest} alt="Salada Ravanello" />

        <DetailsDish>
          <h3>Salada Ravanello</h3>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Ingredients>
            <Ingredient>alface</Ingredient>
            <Ingredient>cebola</Ingredient>
            <Ingredient>pão naan</Ingredient>
            <Ingredient>pepino</Ingredient>
            <Ingredient>rabanete</Ingredient>
            <Ingredient>tomate</Ingredient>
          </Ingredients>
        </DetailsDish>

        <OrdersArea>
          <QuantitySelector>
            <SelectQuantity>
              <Minus />
            </SelectQuantity>
            <span>01</span>
            <SelectQuantity>
              <Plus />
            </SelectQuantity>
          </QuantitySelector>

          <Button
            backgroundColor="TOMATO_100"
            title={`pedir ${String.fromCharCode(8226)} R$ 25,00`}
            icon={Receipt}
          />
        </OrdersArea>
      </Content>

      <Footer />
    </Container>
  );
}
