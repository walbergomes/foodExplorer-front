import { useState } from "react";
import {
  Container,
  BackButton,
  Form,
  Wrapper,
  IngretientsArea,
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

export function NewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <main>
        <BackButton to="/">
          <IoIosArrowBack />
          <span>voltar</span>
        </BackButton>

        <h1>Novo prato</h1>

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
            <label htmlFor="ingredients">Ingredientes</label>
            <IngretientsArea>
              <NewIngredient isNew placeholder="Adicionar" />
              <NewIngredient value="Pão Naan" />
            </IngretientsArea>
          </Wrapper>

          <Wrapper id="price-wrapper">
            <label htmlFor="price">Preço</label>
            <Input id="price" type="text" placeholder="R$ 00,00" />
          </Wrapper>

          <Wrapper id="textarea-wrapper">
            <label htmlFor="description">Descrição</label>
            <TextArea id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
          </Wrapper>

          <Button title="Salvar alterações" bg="TOMATO_400" />
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
