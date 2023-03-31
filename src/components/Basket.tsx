import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ShoppingCart } from "../contexxt/ProductContext";

const Basket = () => {
  const { closeBasket, basket } = useContext(ShoppingCart);
  console.log(basket);
  return (
    <div
      className={`${
        basket ? "right-0" : "-right-[100%]"
      } w-[400px] fixed h-[100vh] top-0  border bg-slate-300 transition-all duration-500`}
    >
      <AiFillCloseCircle onClick={() => closeBasket()} />
    </div>
  );
};

export default Basket;
