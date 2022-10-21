import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    })();
  }, []);

  return (
    <ul className={`${props.viewModeClasses}`}>
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </ul>
  );
};

export default ProductList;
