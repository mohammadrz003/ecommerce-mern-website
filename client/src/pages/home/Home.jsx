import React from "react";
import Cart from "../../components/cart/Cart";
import FilterProducts from "../../components/FilterProducts";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Layout";
import ProductList from "./container/ProductList";

const Home = () => {
  return (
    <Layout>
      <Header className="justify-end">
        <div className="flex items-center divide-x divide-gray-200 border-x border-b border-gray-200">
          <FilterProducts />
          <Cart />
        </div>
      </Header>
      <main className="container mx-auto px-14 py-16">
        <ProductList />
      </main>
    </Layout>
  );
};

export default Home;
