import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomeScreen from "./pages/home/HomeScreen";
import SingleProductScreen from "./pages/single-product/SingleProductScreen";
import CartScreen from "./pages/cart/CartScreen";
import LoginScreen from "./pages/login/LoginScreen";
import RegisterScreen from "./pages/register/RegisterScreen";
import ProfileScreen from "./pages/profile/ProfileScreen";
import ShippingScreen from "./pages/shipping/ShippingScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/product/:id" element={<SingleProductScreen />} />
        <Route path="/cart">
          <Route index element={<CartScreen />} />
          <Route path=":id" element={<CartScreen />} />
        </Route>
        <Route path="/shipping" element={<ShippingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
