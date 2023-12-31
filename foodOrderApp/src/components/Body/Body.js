import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import "./body.css";
import Search from "../Search";
import data from "../../utils/resData.json";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  // destructuring array returned by useState() on the fly
  const [resData, setResData] = useState(data);
  const [listOfRestaurants, setListOfRestaurants] = useState(data);
  const userIsOnline = useOnlineStatus();

  useEffect(() => {
    // this callback function will be called when the render cycle is complete

    setTimeout(() => {
      setListOfRestaurants(data);
      setResData(data);
    }, 10000);
  }, []);




  const filterRestaurant = () => {
    let restaurantsList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(restaurantsList);
  };

  if(userIsOnline === false){
    return (
      <div className="warning">
        <h2>Please come online to see the list of restaurants</h2>
      </div>
    )
  }

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="sub-header">
        <div className="filter">
          <button
            type="button"
            className="filter-btn"
            onClick={() => filterRestaurant()}
          >
            Top Rated button
          </button>
        </div>
        <Search
          listOfRestaurants={listOfRestaurants}
          setListOfRestaurants={setListOfRestaurants}
          resData={resData}
        />
      </div>
      <div className="restaurants-container">
        {listOfRestaurants.length === 0 ? (
          <Shimmer />
        ) : (
          <>
            {listOfRestaurants.map((res) => (
              <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                <RestaurantCard resdata={res.info} />
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;