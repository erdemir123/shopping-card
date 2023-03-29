import React from "react";

import "./App.css";
import { ProductContext } from "./contexxt/ProductContext";
import Home from "./Home";

function App() {
  return (
    <ProductContext>
      <Home/>
    </ProductContext>
  );
}

export default App;
