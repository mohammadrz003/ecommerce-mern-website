import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfileButton = (props) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      {userInfo ? (
        <div className={`dropdown lg:dropdown-end cursor-pointer ${props.className}`}>
          <label tabIndex={0} className="relative">
            <FaRegUserCircle className="w-7 h-7" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      ) : (
        <Link to={"/login"} className={`block ${props.className}`}>
          <div className="relative">
            <FaRegUserCircle className="w-7 h-7" />
          </div>
        </Link>
      )}
    </>
  );
};

export default UserProfileButton;
