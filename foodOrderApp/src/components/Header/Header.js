import React, { useContext, useEffect, useState } from "react";
import Food from "../../assets/food.png";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect will be everytime when btnName changes");
  }, [btnName]);

  const handleLogin = () => {
    if (btnName === "Login") {
      setBtnName("Logout");
    } else {
      setBtnName("Login");
    }
  };

  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Cart",
      path: "/cart",
    },
    {
      title: "Grocery",
      path: "/grocery",
    },
  ];

  return (
    <div className="flex justify-between border px-5 items-center">
      <div className="logo-container">
        <img src={Food} className="h-20" />
      </div>
      <div>
        <ul className="flex list-none justify-center items-center">
          {navItems.map(({ path, title }) => (
            <li key={title} className="p-2.5 m-2.5">
              <Link to={path}>{title}</Link>
            </li>
          ))}

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
