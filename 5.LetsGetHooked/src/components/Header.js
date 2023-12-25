import React from "react";
import Food from "../assets/food.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Food} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
