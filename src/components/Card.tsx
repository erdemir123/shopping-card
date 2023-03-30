import React, { useContext } from "react";
import { ShoppingCart } from "../contexxt/ProductContext";
import { Product } from "../model/Context";
import { useNavigate } from "react-router-dom";
interface ICard {
  item: Product;

  setModal: (e: Product) => void;
}

const Card = ({ item, setModal }: ICard) => {
  const navigate = useNavigate();
  const { card, setCard, getData, load, openCart, isOpen } =
    useContext(ShoppingCart);
  return (
    <div
      className=" w-[300px] h-[100%] flex items-center flex-col font-bold gap-3 mx-6 my-6 cursor-pointer"
      onClick={() => navigate(`${item.id}`, { state: item })}
    >
      <div className="text-center gap-3">{item.title}</div>
      <img
        src={item.thumbnail}
        alt=""
        className="w-[80%] h-[200px] rounded-md shadow-lg shadow-slate-500"
      />
      <div>Price:{item.price}$</div>
      <div className="flex gap-3">
        <div>Stock:{item.stock}</div>
        <div>Rating:{item.rating}</div>
      </div>
      <button
        className="bg-slate-500 shadow-lg shadow-slate-600 py-1 px-3 rounded-md hover:bg-slate-100 transition-all duration-500"
        onClick={() => {
          openCart();
          setModal(item);
        }}
      >
        İncele
      </button>
    </div>
  );
};

export default Card;
