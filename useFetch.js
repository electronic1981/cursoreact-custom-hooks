import { useEffect, useState } from "react";

export const useFetch = (url) => {

   //https://api.breakingbadquotes.xyz/v1/quotes/5
   //https://api.breakingbadquotes.xyz/v1/quotes

   //https://api.breakingbadquotes.xyz/v1/quotes
   //
   const [state, setState] = useState({
      data: null,
      isLoading: true,
      error: null,
   })

   const getFetch = async () => {
      setState({
         ...state,
         isLoading: true,
      });
      const res = await fetch(url);
      const data = await res.json();
      setState({
         data: [data],
         isLoading: false,
         error: false,
      });
   }

   useEffect(() => {
      getFetch();
      return () => {
         //
      }
   }, [url])


   return {
      ...state
   };
}
