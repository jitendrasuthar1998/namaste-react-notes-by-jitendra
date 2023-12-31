import React, { useEffect, useState } from "react";
import Food from "../../assets/food.png";
import "./header.css";
import { Link } from "react-router-dom";


const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  useEffect(()=>{
    console.log("useEffect will be everytime when btnName changes");
  },[btnName]);
  
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
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/cart"}>Cart</Link></li>
          <li><Link to={"/grocery"}>Grocery</Link></li>
          <button className="login-btn" onClick={()=> handleLogin()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
