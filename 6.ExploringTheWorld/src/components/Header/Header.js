import React, { useState } from "react";
import Food from "../../assets/food.png";
import "./header.css";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  
  const handleLogin = () => {
    if(btnName === "Login"){
      setBtnName("Logout");
    }else{
      setBtnName("Login");
    }
  }

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
          <button className="login-btn" onClick={()=> handleLogin()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
