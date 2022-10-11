import React from "react";
import { CgShoppingBag } from "react-icons/cg";

const Cart = () => {
  return (
    <button className="p-6">
      <div className="relative">
        <CgShoppingBag className="text-palette-graniteGray w-7 h-7" />
        <div className="min-w-[15px] min-h-[15px] flex justify-center items-center top-0 right-0 -translate-y-1/3 translate-x-1/4 absolute text-xs text-white bg-palette-chineseBlack">
          <span>30</span>
        </div>
      </div>
    </button>
  );
};

export default Cart;
