import axios from "axios";

import {
  productListActions,
  productDetailsActions,
  productDeleteActions,
  productCreateActions,
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

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch(productDeleteActions.productDeleteRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/products/${id}`, config);

    dispatch(productDeleteActions.productDeleteSuccess());
  } catch (error) {
    dispatch(
      productDeleteActions.productDeleteFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch(productCreateActions.productCreateRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/products`, {}, config);

    dispatch(productCreateActions.productCreateSuccess(data));
  } catch (error) {
    dispatch(
      productCreateActions.productCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
