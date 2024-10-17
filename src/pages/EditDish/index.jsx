import { useState } from "react";
import {
  Container,
  BackButton,
  Form,
  Wrapper,
  IngretientsArea,
  ButtonsArea,
} from "./styles";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { InputFile } from "../../components/InputFile";
import { Select } from "../../components/Select";
import { NewIngredient } from "../../components/NewIngredient";
import { TextArea } from "../../components/TextArea";

import { IoIosArrowBack } from "react-icons/io";

export function EditDish() {
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

        <h1>Editar prato</h1>

        <Form>
          <InputFile id="file" />

          <Wrapper id="name-wrapper">
            <label htmlFor="name">Nome</label>
            <Input id="name" type="text" placeholder="Ex:. Salada Ceasar" />
          </Wrapper>

          <Wrapper id="category-wrapper">
            <label htmlFor="category">Categoria</label>
            <Select id="category" />
          </Wrapper>

          <Wrapper id="ingredients-wrapper">
            <label htmlFor="ingrefients">Ingredientes</label>
            <IngretientsArea>
              <NewIngredient value="Pão Naan" />
              <NewIngredient isNew placeholder="Adicionar" />
            </IngretientsArea>
          </Wrapper>

          <Wrapper id="price-wrapper">
            <label htmlFor="price">Preço</label>
            <Input id="price" type="text" placeholder="R$ 00,00" />
          </Wrapper>

          <Wrapper id="textarea-wrapper">
            <label htmlFor="description">Descrição</label>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </Wrapper>

          <ButtonsArea>
            <Button title="Exclui prato" bg="DARK_800" />
            <Button title="Salvar alterações" bg="TOMATO_400" />
          </ButtonsArea>
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
