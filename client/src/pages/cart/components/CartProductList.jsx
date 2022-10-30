import React from "react";

import CartProductItem from "./CartProductItem";

const CartProductList = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th className="text-center">PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(3)].map((item) => (
            <CartProductItem />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartProductList;
