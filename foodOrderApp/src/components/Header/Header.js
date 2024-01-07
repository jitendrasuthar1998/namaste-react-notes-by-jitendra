import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import { FOOD_LOGO } from "../../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);


  // subscribing to the store using selector

  const cartItems = useSelector((state)=> state.cart.items);

  // console.log(cartItems);

  useEffect(() => {
    // console.log("useEffect will be everytime when btnName changes");
  }, [btnName]);

  const handleLogin = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  return (
    <div className="flex justify-between border px-5 items-center">
      <div className="logo-container">
        <img src={FOOD_LOGO} className="h-20" />
      </div>
      <div>
        <ul className="flex list-none justify-center items-center">
          <li className="p-2.5 m-2.5">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-2.5 m-2.5 font-bold">
            <Link to={"/cart"}>Cart ({cartItems.length} items)</Link>
          </li>
          <li className="p-2.5 m-2.5">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <button
            className="py-2.5 px-5 mx-2 text-black rounded-xl cursor-pointer border-2"
            onClick={() => handleLogin()}
          >
            {btnName}
          </button>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
