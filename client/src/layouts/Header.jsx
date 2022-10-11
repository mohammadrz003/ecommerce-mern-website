import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className={`container mx-auto flex px-14 ${props.className}`}>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
