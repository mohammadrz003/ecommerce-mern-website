import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserProfileButton = (props) => {
  return (
    <Link to="/profile" className={`block ${props.className}`}>
      <div className="relative">
        <FaRegUserCircle className="w-7 h-7" />
      </div>
    </Link>
  );
};

export default UserProfileButton;
