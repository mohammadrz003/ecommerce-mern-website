import React, { useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

import { images, screens } from "../../../constants";

const ProductImages = styled.div`
  ${screens.lg(css`
    height: ${(props) => `${props.productImageHeight}px`};
  `)};
`;

const ProductSingleImage = styled.div`
  grid-row: 1;

  ${screens.lg(css`
    grid-row: auto;
  `)};
`;

const QuantityInput = styled.input`
  width: 100%;
  max-width: 2rem;
  font-size: 1.4rem;
  text-align: center;
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const ProductDetail = ({ product }) => {
  const ProductImagesContainerRef = useRef(null);
  const [productImageHeight, setProductImageHeight] = useState(0);
  const [error, setError] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setProductImageHeight(entries[0].contentRect.height);
    });
    observer.observe(ProductImagesContainerRef.current);
    return () =>
      ProductImagesContainerRef.current &&
      observer.unobserve(ProductImagesContainerRef.current);
  }, []);

  const changeQuantityHandler = (amount, type) => {
    setError(null);
    const value = +amount;
    if (!value) {
      setProductQuantity(1);
    }
    const invalidValueHandler = () =>
      setError({ type: "IN_STOCK", message: "Please enter a valid value." });
    const biggerThanInStockHandler = () =>
      setError({
        type: "IN_STOCK",
        message: "Amount cannot be bigger than count in stock",
      });
    switch (type) {
      case "CUSTOM": {
        if (value <= 0) {
          invalidValueHandler();
          break;
        } else if (value > product.countInStock) {
          biggerThanInStockHandler();
          break;
        }
        setProductQuantity(value);
        break;
      }
      case "INCREASE": {
        if (productQuantity + value > product.countInStock) {
          biggerThanInStockHandler();
          break;
        }
        setProductQuantity((prevState) => prevState + value);
        break;
      }
      case "DECREASE": {
        if (productQuantity - value <= 0) {
          break;
        }
        setProductQuantity((prevState) => prevState - value);
        break;
      }
      default:
        break;
    }
  };

  console.log(error);

  return (
    <>
      <section className="grid gap-y-5 lg:gap-x-10 lg:grid-cols-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 grid-flow-dense min-h-0">
          <ProductImages
            className="flex overflow-auto lg:flex-col lg:col-span-2 lg:overflow-y-auto"
            productImageHeight={productImageHeight}
          >
            {[...Array(5)].map((item, index) => (
              <img
                key={index}
                className="w-[22%] lg:w-full"
                src={images.coat1}
                alt={product.name}
              />
            ))}
          </ProductImages>
          <ProductSingleImage className="lg:col-span-10 border border-gray-200 h-fit">
            <img
              ref={ProductImagesContainerRef}
              className="w-full object-cover"
              src={product.image}
              alt="product_image"
            />
          </ProductSingleImage>
        </div>
        <div className="flex flex-col justify-center items-start lg:px-5">
          <h2 className="font-semibold uppercase text-lg xl:text-xl 2xl:text-2xl text-palette-chineseBlack">
            {product.name}
          </h2>
          <div className="flex items-center mt-3">
            <Rating
              className="flex items-center text-palette-chineseBlack"
              initialRating={product.rating}
              readonly={true}
              fractions={2}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar />}
            />
            <span className="block text-base font-medium text-palette-chineseBlack">
              ({product.numReviews} Reviews)
            </span>
          </div>
          <p className="text-palette-graniteGray mt-7">
            Process of visual communication and problem-solving through the use
            of typography, photography and illustration. The field is considered
            a subset of visual communication and communication design.
          </p>
          <span className="font-bold text-palette-chineseBlack text-3xl mt-7">
            ${(Math.round(product.price * 100) / 100).toFixed(2)}
          </span>
          <div className="flex flex-wrap mt-7 gap-5">
            {product.countInStock > 0 ? (
              <>
                <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                  <button
                    className="p-3 disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={productQuantity === 1}
                    onClick={() => changeQuantityHandler(1, "DECREASE")}
                  >
                    <AiOutlineMinus />
                  </button>
                  <QuantityInput
                    value={productQuantity}
                    onChange={(e) =>
                      changeQuantityHandler(e.target.value, "CUSTOM")
                    }
                    min="1"
                    max={product.countInStock}
                    type="number"
                  />
                  <button
                    className="p-3 disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={productQuantity === product.countInStock}
                    onClick={() => changeQuantityHandler(1, "INCREASE")}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <button className="py-3 px-6 bg-palette-chineseBlack text-white">
                  ADD TO CART
                </button>
              </>
            ) : (
              <p className="text-red-500 font-semibold text-xl">Out Of Stock</p>
            )}
          </div>
          {error && error?.type === "IN_STOCK" && (
            <p className="text-red-500 text-xs mt-3">{error?.message}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
