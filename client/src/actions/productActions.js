import axios from "axios";

import {
  productListActions,
  productDetailActions,
} from "../reducers/productReducers";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(productListActions.productListRequest());

    const { data } = await axios.get("/api/products");

    dispatch(productListActions.productListSuccess(data));
  } catch (error) {
    dispatch(
      productListActions.productListFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productDetailActions.productDetailRequest());

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch(productDetailActions.productDetailSuccess(data));
  } catch (error) {
    dispatch(
      productDetailActions.productDetailFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
