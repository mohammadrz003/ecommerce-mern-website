import React, { useState } from "react";

const ProductItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const product = props.product;

  return (
    <li
      className="flex flex-col text-center cursor-pointer"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img
        className="object-cover object-center w-full h-80"
        src={product.imgUrl}
        alt={product.name}
      />
      <h5 className="text-palette-graniteGray font-normal mt-2">{product.name}</h5>
      {isShown && <button className="font-medium text-green-500 py-2 px-4">ADD TO CART</button>}
      {!isShown && (
        <span className="relative py-2 px-4 z-[1] w-full h-full text-palette-chineseBlack font-medium hover:hidden">
          ${product.price}
        </span>
      )}
    </li>
  );
};

export default ProductItem;
