import React from "react";
import ReactDOM from "react-dom/client";
import Food from "./assets/food.png";
import resData from "./resData.json";

/*
 *Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurants Container
 *  - Restaurant Card
 *      - Img
 *      - Name of Res, start rading, cusinins, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

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

const RestaurantCard = (props) => {
  const { name, cusine, avgRating, sla,cloudinaryImageId, cuisines,costForTwo } = props.resdata;

  return (
    <div className="restaurant-card">
      <div>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className="restaurant-image" />
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-address">{cuisines.join(", ")}</p>
        <p className="restaurant-address">{avgRating}</p>
        <p className="restaurant-address">{costForTwo}</p>
        <p className="restaurant-address">{sla.deliveryTime} min</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search" />
      </div>
      <div className="restaurants-container">
        {resData.map((res) => {
          return <RestaurantCard key={res.info.id} resdata={res.info} />;
        })}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
