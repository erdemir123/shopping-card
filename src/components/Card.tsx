import React, { useContext, useEffect } from "react";
import { ShoppingCart } from "../contexxt/ProductContext";
import { Product } from "../model/Context";
import { useNavigate } from "react-router-dom";
interface ICard {
  item: Product;
  setModal: (e: Product) => void;
}

const Card = ({ item, setModal }: ICard) => {
  const navigate = useNavigate();

  const { openCart, setBasket, basket } = useContext(ShoppingCart);
  const handleBasket = (item: Product) => {
    const basketProduct = basket.find(
      (basketItem: any) => basketItem.product.id === item.id
    );
    console.log(basketProduct?.amount);
    if (basketProduct) {
      basketProduct.amount += 1;
      setBasket([
        ...basket.filter((a:any)=>a.product.id !== item.id),
        {
          product: item,
          amount: basketProduct.amount,
        },
        
      ]);
      console.log("bura")
    } else {
      setBasket([...basket.filter((a:any)=>a.product.id !== item.id), {product:item, amount: 1} ]);
      console.log("bura else")
    }
  };
  useEffect(() => {
    console.log(basket);
  }, [basket]);
  return (
    <div className=" w-[300px] flex items-center flex-col font-bold gap-5 mx-6 my-6 cursor-pointer">
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

      <div className="flex gap-5">
        <button
          className="bg-slate-500 shadow-lg shadow-slate-600 py-1 px-3 rounded-md hover:bg-slate-100 transition-all duration-500"
          onClick={() => {
            openCart();
            setModal(item);
          }}
        >
          İncele
        </button>
        <button
          className="bg-slate-500 shadow-lg shadow-slate-600 py-1 px-3 rounded-md hover:bg-slate-100 transition-all duration-500"
          onClick={() => navigate(`${item.id}`, { state: item })}
        >
          Detay
        </button>
        <button
          className="bg-slate-500 shadow-lg shadow-slate-600 py-1 px-3 rounded-md hover:bg-slate-100 transition-all duration-500"
          onClick={() => handleBasket(item)}
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
