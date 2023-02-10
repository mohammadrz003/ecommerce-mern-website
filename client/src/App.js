import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomeScreen from "./pages/home/HomeScreen";
import SingleProductScreen from "./pages/single-product/SingleProductScreen";
import CartScreen from "./pages/cart/CartScreen";
import LoginScreen from "./pages/login/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/product/:id" element={<SingleProductScreen />} />
        <Route path="/cart">
          <Route index element={<CartScreen />} />
          <Route path=":id" element={<CartScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
