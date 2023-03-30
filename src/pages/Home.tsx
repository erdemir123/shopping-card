import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import { ShoppingCart } from "../contexxt/ProductContext";
import Modal from "../components/Modal";
import { Product } from "../model/Context";

const Home = () => {
  const { card, setCard, getData, load, openCart, isOpen } =
    useContext(ShoppingCart);
  const [modal, setModal] = useState<Product>({} as Product);
  useEffect(() => {
    getData();
  }, []);
  console.log(isOpen);
  return (
    <div className="flex flex-wrap justify-center items-center  gap-4 mt-12">
      {card.map((item) => (
        <div className="h-[400px] rounded-2xl shadow-md bg-slate-300 shadow-slate-500">
          <Card item={item} setModal={setModal} />
        </div>
      ))}

      {isOpen && (
        <>
          {console.log("first")}
          <Modal modalProduct={modal} />
        </>
      )}
    </div>
  );
};

export default Home;
