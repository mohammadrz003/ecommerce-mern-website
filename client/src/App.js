import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/single-product/SingleProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
