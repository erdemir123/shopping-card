import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Product } from "../model/Context";

const ProductDetails = () => {
  const location = useLocation();
  const state = location.state as Product;
  console.log(state);
  console.log(state.id);
  return (
    <div className="mt-8 md:flex w-full h-[80vh] items-center justify-between font-bold text-slate-600 gap">
      <div>
        <p className="text-center  text-2xl">{state.title}</p>
        <img src={state.thumbnail} alt="" className="w-[100%] " />
        <p>Price:{state.price}</p>
      </div>
      <div className="w-[100%] md:w-[60%]">
        <p>Category:{state.category}</p>
        <p>Brand:{state.brand}</p>
        <p>Description :{state.description}</p>
        <p>Discount :%{state.discountPercentage}</p>
        <p>Rating :{state.rating}</p>
        <p>Stock :{state.stock} piece</p>
      </div>
    </div>
  );
};

export default ProductDetails;
