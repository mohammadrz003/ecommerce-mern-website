import React, { useState } from "react";
import Cart from "../../components/cart/Cart";
import FilterProducts from "../../components/FilterProducts";
import Header from "../../layouts/Header";
import Layout from "../../layouts/Layout";
import ProductList from "./container/ProductList";
import {
  BsFillGrid3X2GapFill,
  BsFillGridFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import UserProfileButton from "../../components/UserProfileButton";

const viewModes = [
  {
    icon: BsFillGrid3X2GapFill,
    mode: "1",
  },
  {
    icon: BsFillGridFill,
    mode: "2",
  },
  {
    icon: BsGrid3X3GapFill,
    mode: "3",
  },
];

const Home = () => {
  const [viewMode, setViewMode] = useState(viewModes[2].mode);

  const changeViewModeHandler = (viewModeValue) => {
    setViewMode(viewModeValue);
  };

  let viewModeClasses = "";

  switch (viewMode) {
    case viewModes[0].mode:
      viewModeClasses = "grid grid-cols-2 gap-x-6 gap-y-10";
      break;
    case viewModes[1].mode:
      viewModeClasses =
        "grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:grid-cols-3";
      break;
    default:
      viewModeClasses =
        "grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-x-6 md:gap-y-8 lg:grid-cols-4";
      break;
  }

  return (
    <Layout>
      <Header className="justify-end">
        <div className="flex items-center divide-x divide-gray-200 border-x border-b border-gray-200">
          <FilterProducts
            activeViewMode={viewMode}
            viewModes={viewModes}
            onChangeViewMode={changeViewModeHandler}
          />
          <Cart className="hidden lg:block p-6 text-palette-graniteGray" />
          <UserProfileButton className="hidden lg:block p-6 text-palette-graniteGray" />
        </div>
      </Header>
      <main className="container mx-auto px-5 py-8 md:px-14 md:py-16">
        <ProductList viewModeClasses={viewModeClasses} />
      </main>
    </Layout>
  );
};

export default Home;
