import React from "react";
import { AiOutlineClose, AiOutlineStar, AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import QuantityInput from "../../../components/cart/QuantityInput";

import { images } from "../../../constants";

const CartProductItem = () => {
  return (
    <tr className="font-semibold">
      <td>
        <div className="w-fit flex items-center gap-x-7">
          <AiOutlineClose />
          <img
            className="w-32 aspect-square border border-gray-200"
            src={images.tshirt1}
            alt="product"
          />
          <div className="space-y-2">
            <h4 className="lg:text-lg">Bag with split suede flap</h4>
            <Rating
              className="flex items-center text-palette-chineseBlack"
              initialRating={4}
              readonly={true}
              fractions={2}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
            />
          </div>
        </div>
      </td>
      <td>$594.00</td>
      <td>
        <div>
          <QuantityInput className="text-lg" productQuantity={3} countInStock={8} />
        </div>
      </td>
      <td>$594</td>
    </tr>
  );
};

export default CartProductItem;
