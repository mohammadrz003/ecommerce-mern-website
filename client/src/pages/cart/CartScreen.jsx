import React, { useEffect } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../layouts/Layout";
import Header from "../../layouts/Header";
import Cart from "../../components/cart/Cart";
import UserProfileButton from "../../components/UserProfileButton";
import CartProductList from "./components/CartProductList";
import { addToCart } from "../../actions/cartActions";
import Alert from "../../components/Alert";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();

  const qty = searchParams.get("qty") ? Number(searchParams.get("qty")) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [productId, qty, dispatch]);

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping')
  };

  return (
    <Layout>
      <Header className="justify-between">
        <Link
          to="/"
          className="px-5 flex font-semibold py-6 lg:px-10 border border-gray-200 items-center space-x-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          <span>BACK TO SHOP</span>
        </Link>
        <div className="flex items-center divide-x divide-gray-200 border-x border-b border-gray-200">
          <Cart className="hidden lg:block p-6 text-palette-graniteGray" />
          <UserProfileButton className="hidden lg:block p-6 text-palette-graniteGray" />
        </div>
      </Header>
      <main className="container mx-auto px-5 py-8 md:px-14 md:py-16">
        {cartItems.length === 0 ? (
          <Alert>
            Your cart is empty{" "}
            <Link to="/" className="link">
              Go to Shop
            </Link>
          </Alert>
        ) : (
          <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-5">
            <CartProductList />
            <div className="w-full flex flex-col font-medium mt-8 lg:mt-0 lg:w-80">
              <div className="flex justify-between item-center">
                <span className="text-gray-500">
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                  item)
                </span>
                <span className="text-lime-700 font-bold">
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.price * item.qty, 0)
                    .toFixed(2)}
                </span>
              </div>
              <button
                className="w-full text-white bg-black px-5 py-3 mt-4"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default CartScreen;
