import React from "react";

import { ProductContext } from "./contexxt/ProductContext";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <ProductContext>
      <Navbar />
      <div className="h-[60px]"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:product" element={<ProductDetails />} />
      </Routes>
    </ProductContext>
  );
}

export default App;
