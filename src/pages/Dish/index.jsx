import { useState } from "react";
import { Container, BackButton, DishArea, IngredientsArea } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SideMenu } from "../../components/SideMenu";

import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";

import { IoIosArrowBack } from "react-icons/io";

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
        <BackButton>
          <IoIosArrowBack />
          <span>voltar</span>
        </BackButton>

        <img src={dishImg} alt="foto do prato" />

        <DishArea>
          <h1>Salada Ravanello</h1>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <IngredientsArea>
            <Ingredient title="alface"/>
            <Ingredient title="cebola"/>
            <Ingredient title="pão naan"/>
            <Ingredient title="pepino"/>
            <Ingredient title="rabanete"/>
            <Ingredient title="tomate"/>
          </IngredientsArea>
        </DishArea>

        <Button 
          title="Editar prato"
          bg="TOMATO_100"
        />

      </main>

      <Footer />
    </Container>
  );
}
