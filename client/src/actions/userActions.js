import axios from "axios";

import {
  userDetailsActions,
  userLoginActions,
  userRegisterActions,
} from "../reducers/userReducers";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(userLoginActions.userLoginRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch(userLoginActions.userLoginSuccess(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userLoginActions.userLoginFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch(userLoginActions.userLogout());
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(userRegisterActions.userRegisterRequest());

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch(userRegisterActions.userRegisterSuccess(data));
    dispatch(userLoginActions.userLoginSuccess(data));

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch(
      userRegisterActions.userRegisterFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDetailsActions.userDetailsRequest());

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch(userDetailsActions.userDetailsSuccess(data));
  } catch (error) {
    dispatch(
      userDetailsActions.userDetailsFail(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};
