import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../actions/userActions";

const UserProfileButton = (props) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      {userInfo ? (
        <div
          className={`dropdown lg:dropdown-end`}
        >
          <label tabIndex={0} className={`relative cursor-pointer ${props.className}`}>
            <FaRegUserCircle className="w-7 h-7 cursor-pointer" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-gray-900"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <Link to={"/login"} className={`block ${props.className}`}>
          <div className="relative">
            <FaRegUserCircle className="w-7 h-7 cursor-pointer" />
          </div>
        </Link>
      )}
    </>
  );
};

export default UserProfileButton;
