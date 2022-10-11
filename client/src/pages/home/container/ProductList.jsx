import React from "react";
import ProductItem from "./ProductItem";

import { images } from "../../../constants";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    imgUrl: images.coat1,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "2",
    imgUrl: images.coat2,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "3",
    imgUrl: images.coat3,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "4",
    imgUrl: images.tshirt1,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "5",
    imgUrl: images.tshirt2,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "6",
    imgUrl: images.tshirt3,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "7",
    imgUrl: images.shows1,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "8",
    imgUrl: images.shows2,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
  {
    id: "9",
    imgUrl: images.shows3,
    name: "Silver-toned pilmsolls",
    price: "1999.00",
  },
];

const ProductList = () => {
  return (
    <ul className="grid grid-cols-4 gap-x-6 gap-y-10">
      {DUMMY_PRODUCTS.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
