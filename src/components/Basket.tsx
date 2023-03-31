import React, { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { ShoppingCart } from "../contexxt/ProductContext";

const Basket = () => {
  let sum: number = 0;
  const { closeBasket, isbasket, basket } = useContext(ShoppingCart);
  console.log(
    basket
      .map((item) => item.product.price * item.amount)
      ?.forEach((element) => {
        sum += element;
      })
  );
  console.log(sum);
  return (
    <div
      className={`${
        isbasket ? "right-0" : "-right-[100%]"
      } w-[400px] fixed h-[100vh] top-0  border bg-slate-300 transition-all duration-500 overflow-auto `}
    >
      <AiFillCloseCircle
        onClick={() => closeBasket()}
        className=" absolute top-4 right-2 font-bold text-2xl text-red-500 cursor-pointer"
      />
      <div className="mt-20 font-bold">
        <div className="mb-4 text-center underline">BASKET CARD </div>
        {basket.map((item) => (
          <div className="flex gap-2 mb-4 relative px-2 border border-slate-700 p-2 mx-1 rounded-md shadow-lg shadow-slate-500">
            <img
              src={item.product.thumbnail}
              alt=""
              className="w-40 rounded-lg"
            />
            <div>
              <p>{item.product.title}</p>
              <p>
                {item.product.price} $ * {item.amount}
              </p>
            </div>
            <div className="absolute right-2 top-10 underline">
              Total:${item.product.price * item.amount}
            </div>
            
          </div>
        ))}
        <div className=" mt-24 bg-slate-900 py-4 text-white flex justify-end items-center">
              <p className="mr-2 mt-2 ">Basket Total : {sum} $</p>
            </div>
      </div>
    </div>
  );
};

export default Basket;
