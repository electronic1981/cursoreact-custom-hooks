import { useState } from "react";

export const useForm = (inicial = {}) => {
   const [formState, setFormState] = useState(inicial);

   const onInputChange = ({ target }) => { // target pertenece al objeto event
      const { name, value } = target;
      //console.log(name, value);
      setFormState({
         ...formState,
         [name]: value
      })
   }

   const onResetForm = () => {
      setFormState(inicial);
   }
   return {
      ...formState,
      formState,
      onInputChange,
      onResetForm
   }
}
