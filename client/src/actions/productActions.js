import axios from "axios";

import {
  productListActions,
  productDetailsActions,
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
    dispatch(productDetailsActions.productDetailsRequest());

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch(productDetailsActions.productDetailsSuccess(data));
  } catch (error) {
    dispatch(
      productDetailsActions.productDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
