import { useState } from "react"


export const useCounter = (inicial = 10) => {
   const [counter, setCounter] = useState(inicial);

   const increment = (value = 1) => {
      setCounter(c => c + value);
   }

   const decrement = (value = 1) => {
      setCounter(c => c - value);
   }

   const reset = () => {
      setCounter(inicial);

   }
   return {
      counter,
      increment,
      decrement,
      reset
   }
}

