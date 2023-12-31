import React, { useEffect, useState } from "react";
import Food from "../../assets/food.png";
// import "./header.css";
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
    <div className="flex justify-between border px-5 items-center">
      <div className="logo-container">
        <img src={Food} className="h-20" />
      </div>
      <div>
        <ul className="flex list-none justify-center items-center">
          <li className="p-2.5 m-2.5"><Link to={"/"}>Home</Link></li>
          <li className="p-2.5 m-2.5"><Link to={"/about"}>About</Link></li>
          <li className="p-2.5 m-2.5"><Link to={"/contact"}>Contact</Link></li>
          <li className="p-2.5 m-2.5"><Link to={"/cart"}>Cart</Link></li>
          <li className="p-2.5 m-2.5"><Link to={"/grocery"}>Grocery</Link></li>
          <button className="py-2.5 px-5 text-black rounded-xl cursor-pointer border-2" onClick={()=> handleLogin()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
