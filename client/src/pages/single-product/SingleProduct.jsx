import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import Cart from "../../components/cart/Cart";
import UserProfileButton from "../../components/UserProfileButton";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Layout";
import ProductDetail from "./container/ProductDetail";

const SingleProduct = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    })();
  }, [productId]);

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
          <button className="px-5 font-semibold py-6 lg:px-10">
            SHARE THIS
          </button>
          <Cart className="hidden lg:block p-6 text-palette-graniteGray" />
          <UserProfileButton className="hidden lg:block p-6 text-palette-graniteGray" />
        </div>
      </Header>
      <main className="container mx-auto px-5 py-8 md:px-14 md:py-16">
        <ProductDetail product={product} />
      </main>
    </Layout>
  );
};

export default SingleProduct;
