import React, { useContext, useEffect } from "react";
import { ShoppingCart } from "./contexxt/ProductContext";

const Home = () => {
  const { card, setCard, getData, load } = useContext(ShoppingCart);
  useEffect(() => {
    getData();
  }, []);
  console.log(card);
  console.log(load);

  return (
    <div className="flex justify-center items-center flex-col">
      {card.map((item) => (
        <p >{item.id}</p>
      ))}
    </div>
  );
};

export default Home;
