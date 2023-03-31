import React,{useContext} from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { ShoppingCart } from "../contexxt/ProductContext";

const Navbar = () => {
    const {openBasket}=useContext(ShoppingCart)
  return (
    <div className="fixed top-0 left-0 h-[80px] bg-slate-400 w-full font-bold text-2xl flex items-center justify-between px-4">
      <div>LOGO</div>
      <HiOutlineShoppingCart onClick={()=>openBasket()}/>
    </div>
  );
};

export default Navbar;
