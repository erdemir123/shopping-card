import React, { useContext, useState } from "react";
import { ShoppingCart } from "../contexxt/ProductContext";
import { Product } from "../model/Context";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

interface Imodal {
  modalProduct: Product;
}

const Modal = ({ modalProduct }: Imodal) => {
  const { setIsOpen } = useContext(ShoppingCart);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  console.log(modalProduct);
  function next() {
    setCurrentStepIndex((i) => {
      if (i > +modalProduct.images - 1) return i;
      if (i == +modalProduct.images - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }
  return (
    <>
      <div
        className="fixed w-[100vw] h-[100vh] bg-[#0f0a0a] z-50 top-0 left-0  opacity-40 text-black "
        onClick={() => setIsOpen(false)}
      ></div>

      <div className="fixed z-[5000] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  flex justify-center items-center gap-6">
        <p className="absolute -top-20 text-white font-bold text-2xl w-[200px]">
          {modalProduct.title}
        </p>
        {currentStepIndex != modalProduct.images?.length - 1 && (
          <button onClick={next} className="font-bold text-2xl ">
            <FaArrowCircleRight />
          </button>
        )}

        <img
          className=" h-[500px] rounded-xl shadow-xl shadow-gray-800"
          src={modalProduct.images[currentStepIndex]}
          alt=""
        />

        {currentStepIndex != 0 && (
          <button onClick={back} className="font-bold text-2xl ">
            <FaArrowCircleLeft />
          </button>
        )}
      </div>
    </>
  );
};

export default Modal;
