import React, { useState } from "react";
import resData from "../utility/resData.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  // destructuring array returned by useState() on the fly
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  const filterRestaurant = () => {
   let restaurantsList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(restaurantsList);
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterRestaurant()}
        >
          Top Rated button
        </button>
      </div>
      <div className="restaurants-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resdata={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
