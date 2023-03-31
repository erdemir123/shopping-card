import { createContext, useState } from "react";
import axios from "axios";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { IBasket, IBasketContext, ıChildren, Product } from "../model/Context";

export const ShoppingCart = createContext({} as IBasketContext);

export function ProductContext({ children }: ıChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [basket, setBasket] = useLocalStorage<IBasket[] >("basket-cart", [])
  const [isbasket, setIsBasket] = useState(false);
  const [card, setCard] = useLocalStorage<Product[]>("shopping-cart", []);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const openBasket = () => setIsBasket(true);
  const closeBasket = () => setIsBasket(false);
  const getData = async () => {
    try {
      setLoad(true);
      const { data } = await axios.get("https://dummyjson.com/products");
      setCard(data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoad(false);
      }, 3000);
    }
  };
  const handleBasket = (item: Product) => {
    const basketProduct = basket.find(
      (basketItem: any) => basketItem.product.id === item.id
    );
    if (basketProduct) {
      basketProduct.amount += 1;
      setBasket([
        ...basket.filter((a: any) => a.product.id !== item.id),
        {
          product: item,
          amount: basketProduct.amount,
        },
      ]);
    } else {
      setBasket([
        ...basket.filter((a: any) => a.product.id !== item.id),
        { product: item, amount: 1 },
      ]);
    }
  };

  const [load, setLoad] = useState(false);
  return (
    <ShoppingCart.Provider
      value={{
        card,
        setCard,
        getData,
        load,
        closeCart,
        openCart,
        isOpen,
        setIsOpen,
        openBasket,
        closeBasket,
        isbasket,
        basket,
        setBasket,
        handleBasket,
      }}
    >
      {children}
    </ShoppingCart.Provider>
  );
}
