import axios from "axios";

import { orderCreateActions, orderDetailsActions } from "../reducers/orderReducers";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch(orderCreateActions.orderCreateRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch(orderCreateActions.orderCreateSuccess(data));
  } catch (error) {
    dispatch(
      orderCreateActions.orderCreateFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(orderDetailsActions.orderDetailsRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch(orderDetailsActions.orderDetailsSuccess(data));
  } catch (error) {
    dispatch(
      orderDetailsActions.orderDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
