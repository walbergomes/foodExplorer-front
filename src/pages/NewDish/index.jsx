import { 
  Container, 
  Content, 
  BackButton, 
  Wrapper, 
  FileInput, 
  IngredientsArea
} from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { IngredientCreate } from "../../components/IngredientCreate"
import { TextArea } from "../../components/TextArea"

import { CaretLeft, UploadSimple } from "@phosphor-icons/react";

export function NewDish() {
  return (
    <Container>
      <Header />
      <Content>
        <BackButton>
          <CaretLeft />
          <span>voltar</span>
        </BackButton>

        <h2>Novo prato</h2>

        <Wrapper>
          <label htmlFor="add-dish">Imagem do prato</label>
          <FileInput>
            <UploadSimple />
            Selecione imagem
            <input type="file" id="add-dish" />
          </FileInput>
        </Wrapper>

        <Wrapper>
          <label htmlFor="name">Nome</label>
          <Input type="text" id="name" placeholder="Ex.: Salada Ceasar" />
        </Wrapper>

        <Wrapper>
          <label htmlFor="">Categorias</label>
          <Select />
        </Wrapper>

        <Wrapper>
          <label htmlFor="">Ingredientes</label>
          <IngredientsArea>
            <IngredientCreate isNew placeholder="Adicionar"/>
            <IngredientCreate value="Pão Naan"/>
          </IngredientsArea>
        </Wrapper>

        <Wrapper>
          <label htmlFor="">Preço</label>
          <Input type="number" placeholder="R$ 40,00"/>
        </Wrapper>

        <Wrapper>
          <label htmlFor="">Descrição</label>
          <TextArea placeholder="A Salada César é uma opção refrescante para o verão."/>
        </Wrapper>
      </Content>
    </Container>
  );
}
