import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ShoppingCart } from "../contexxt/ProductContext";

const Navbar = () => {
  const { openBasket, closeBasket,basket} = useContext(ShoppingCart);
  return (
    <div className="fixed top-0 left-0 h-[80px] bg-slate-400 w-full font-bold text-2xl flex items-center justify-between px-4">
      <div>LOGO</div>
      <div className="relative">
        <HiOutlineShoppingCart onClick={() => openBasket()} />
        <span className="bg-red-500 rounded-[50%] w-[15px] h-[15px] flex items-center justify-center text-sm absolute -top-2 left-3 text-white">{basket.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
