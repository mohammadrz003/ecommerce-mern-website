import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Cart from "../../components/cart/Cart";
import UserProfileButton from "../../components/UserProfileButton";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Layout";
import ProductDetail from "./container/ProductDetail";
import { listProductDetails } from "../../actions/productActions";

const SingleProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [productId, dispatch]);

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
        {loading ? (
          <div className="flex">
            <button className="mx-auto btn loading bg-transparent text-gray-700 border-none">
              Loading...
            </button>
          </div>
        ) : error ? (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        ) : (
          <ProductDetail product={product} />
        )}
      </main>
    </Layout>
  );
};

export default SingleProductScreen;
