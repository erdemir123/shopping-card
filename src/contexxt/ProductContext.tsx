import { createContext, useState } from "react";
import axios from "axios";

import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  IBasketContext,
  ıChildren,
  IResponse,
  Product,
} from "../model/Context";

export const ShoppingCart = createContext({} as IBasketContext);

export function ProductContext({ children }: ıChildren) {
  const [card, setCard] = useLocalStorage<Product[]>(
    "shopping-cart",
    []
  )
  const getData = async () => {
    try {
      setLoad(true);
      const { data } = await axios.get("https://dummyjson.com/products");
      setCard(data.products);
    } catch (error) {
      console.log(error);
    } finally {
     setTimeout(()=>{
        setLoad(false);
     },3000)
    }
  };

  const [load, setLoad] = useState(false);
  return (
    <ShoppingCart.Provider value={{ card, setCard, getData,load }}>
      {children}
    </ShoppingCart.Provider>
  );
}
