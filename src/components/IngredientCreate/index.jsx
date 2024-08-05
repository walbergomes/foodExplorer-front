import { Container } from "./styles";

import { X, Plus } from "@phosphor-icons/react"

export function IngredientCreate({ isNew, value, ...rest }) {
  return (
    <Container $isnew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest} 
      />

      <button 
        type="button"
        className={ isNew ? "button-add" : "button-delete"}
      >
        { isNew ? <Plus /> : <X />}
      </button>
      
    </Container>
  )
}