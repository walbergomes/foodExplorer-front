import { useState } from "react";
import {
  Container,
  BackButton,
  DishArea,
  IngredientsArea,
  Section,
  OrderQuantityArea,
  QuantityButton,
} from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";

import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";

import { IoIosArrowBack } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";

import dishImg from "../../assets/dish.svg";

export function Dish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <main>
        <BackButton to="/" >
          <IoIosArrowBack />
          <span>voltar</span>
        </BackButton>

        <Section>
          <img src={dishImg} alt="foto do prato" />

          <DishArea>
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>
            <IngredientsArea>
              <Ingredient title="alface" />
              <Ingredient title="cebola" />
              <Ingredient title="pão naan" />
              <Ingredient title="pepino" />
              <Ingredient title="rabanete" />
              <Ingredient title="tomate" />
            </IngredientsArea>

            <OrderQuantityArea>
              <QuantityButton>
                <FaMinus />
              </QuantityButton>
              <span>01</span>
              <QuantityButton>
                <FaPlus />
              </QuantityButton>

              <Button
                className="button-width"
                title={`incluir R$ 25,00`}
                bg="TOMATO_100"
              />
            </OrderQuantityArea>

            {/* <Button
              className="button-width"
              title="Editar prato"
              bg="TOMATO_100"
            /> */}
          </DishArea>
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
