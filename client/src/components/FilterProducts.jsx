import React from "react";
import {
    BsFillGrid3X2GapFill,
  BsFillGridFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";

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

const FilterProducts = (props) => {
  return (
    <>
      {viewModes.map((item) => (
        <button className="p-6 flex justify-center items-center" key={item.mode}>
          <item.icon className="w-7 h-auto text-[#c2c3c4]" />
        </button>
      ))}
      <button className="py-6 px-10 text-palette-graniteGray font-semibold">FILTER</button>
    </>
  );
};

export default FilterProducts;
