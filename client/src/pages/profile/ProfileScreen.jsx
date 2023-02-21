import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Alert from "../../components/Alert";
import { getUserDetails } from "../../actions/userActions";
import Layout from "../../layouts/Layout";
import Header from "../../layouts/Header";
import Cart from "../../components/cart/Cart";
import UserProfileButton from "../../components/UserProfileButton";

const ProfileScreen = () => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo: userLoginInfo } = userLogin;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!userLoginInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setInputValues((curState) => {
          return { ...curState, name: user.name, email: user.email };
        });
      }
    }
  }, [navigate, userLoginInfo, dispatch, user.email, user.name]);

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputValues((curState) => {
      return { ...curState, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValues.password !== inputValues.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      // DISPATCH UPDATE PROFILE
    }
  };

  return (
    <Layout>
      <Header className="justify-end">
        <div className="flex items-center divide-x divide-gray-200 border-x border-b border-gray-200">
          <Cart className="hidden lg:block p-6 text-palette-graniteGray" />
          <UserProfileButton className="hidden lg:block p-6 text-palette-graniteGray" />
        </div>
      </Header>
      <section>
        <div>
          <h2 className="text-3xl mb-6">User Profile</h2>
          <div className="space-y-2">
            {message && <Alert variant="error">{message}</Alert>}
            {error && <Alert variant="error">{error}</Alert>}
          </div>
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={inputValues.name}
                name="name"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email Address</span>
              </label>
              <input
                className="input input-bordered"
                id="email"
                type="email"
                placeholder="Enter email"
                value={inputValues.email}
                name="email"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Pasword</span>
              </label>
              <input
                className="input input-bordered"
                id="password"
                type="password"
                placeholder="Enter password"
                value={inputValues.password}
                name="password"
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                className="input input-bordered"
                id="confirmPassword"
                type="password"
                placeholder="Enter Confirm password"
                value={inputValues.confirmPassword}
                name="confirmPassword"
                onChange={inputChangeHandler}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn w-full mt-5"
            >
              {loading ? "Loading..." : "Update"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ProfileScreen;
