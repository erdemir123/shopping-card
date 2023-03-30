import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-[80px] bg-slate-400 w-full font-bold text-2xl flex items-center justify-between px-4">
      <div>LOGO</div>
      <HiOutlineShoppingCart />
    </div>
  );
};

export default Navbar;
