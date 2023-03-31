import React from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import { Product } from "../model/Context";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const state = location.state as Product;
  console.log(state);
  console.log(state.id);
  return (
    <div className="mt-8 md:flex w-full h-[80vh] items-center justify-center font-bold text-slate-600 gap-4">
      <div className="m-4">
        <p className="text-2xl mb-2">{state.title}</p>
        <img src={state.thumbnail} alt="" className="w-[100%] " />
        
      </div>
      <div className="flex flex-col gap-2 m-4">
        <p>
          <span className="text-slate-500">Category:</span> {state.category}
        </p>
        <p>
          <span className="text-slate-500">Brand:</span> {state.brand}
        </p>
        <p>
          <span className="text-slate-500">Description:</span> {state.description}
        </p>
        <p className="mt-4"><span className="text-slate-500">Price:</span>{state.price} $</p>
        <p><span className="text-slate-500">Discount:</span>{state.discountPercentage}</p>
        <p>
        <span className="text-slate-500">Rating:</span> {state.rating}</p>
        <p>
        <span className="text-slate-500">Stock:</span>
             {state.stock} piece</p>
      </div>
      <div onClick={()=>navigate("/")} className="fixed bottom-0 right-0 py-1 px-2 bg-slate-400 m-2 rounded-lg">Go Home</div>
    </div>
  );
};

export default ProductDetails;
