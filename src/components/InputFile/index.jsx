import { Container } from "./styles";

import { MdOutlineFileUpload } from "react-icons/md";

export function InputFile() {
  return (
    <Container>
      <span>Imagem do prato</span>
      <label htmlFor="file">
        <MdOutlineFileUpload size={32}/>

        <input 
          type="file" 
          name="file" 
          id="file" />
      </label>
    </Container>
  );
}
