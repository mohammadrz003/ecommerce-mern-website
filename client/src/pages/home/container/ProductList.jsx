import React from "react";
import ProductItem from "./ProductItem";

import {products} from '../../../constants'

const ProductList = (props) => {
  return (
    <ul className={`${props.viewModeClasses}`}>
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
