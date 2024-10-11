import { Container, BackButton, Form, Wrapper, TextArea } from "./styles";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { IoIosArrowBack } from "react-icons/io";

export function NewDish() {
  return (
    <Container>
      <SideMenu />
      <Header />

      <main>
        <BackButton>
          <IoIosArrowBack />
          <span>voltar</span>
        </BackButton>

        <h1>Novo prato</h1>

        <Form>
          <Wrapper>
            <label htmlFor="name">Nome</label>
            <Input 
              id="name"
              type="text" 
              placeholder="Ex:. Salada Ceasar" 
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="price">Preço</label>
            <Input 
              id="price"
              type="text" 
              placeholder="R$ 00,00" 
            />
          </Wrapper>
          <Wrapper>
            <label htmlFor="description">Descrição</label>
            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
          </Wrapper>

          <Button 
            title="Salvar alterações"
            bg="TOMATO_400"
          />
        </Form>
      </main>

      <Footer />
    </Container>
  );
}
