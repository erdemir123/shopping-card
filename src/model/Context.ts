import { ReactNode } from "react";
export type ıChildren = {
  children: ReactNode;
};

export type IBasketContext = {
  card:Product[];
  setCard: React.Dispatch<React.SetStateAction<Product[]>>
  getData:()=>void,
  load:boolean,
  isOpen:boolean,
  closeCart: () => void,
  openCart: () => void,
  closeBasket: () => void,
  openBasket: () => void,
  setIsOpen: (e:boolean) => void,
  isbasket:boolean
};

export type IResponse ={
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
