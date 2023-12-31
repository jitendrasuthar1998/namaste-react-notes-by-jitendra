import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import "./body.css";
import Search from "../Search";
import data from "../../utils/resData.json";

const Body = () => {
  // destructuring array returned by useState() on the fly
  const [resData, setResData] = useState(data);
  const [listOfRestaurants, setListOfRestaurants] = useState(data);

  useEffect(() => {
    // this callback function will be called when the render cycle is complete
    // fetchData();

    setTimeout(()=>{
      setListOfRestaurants(data);
      setResData(data);
    },10000)
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2389469&lng=73.02430939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const json = await data.json();
  //   const resList =
  //     json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants;
  //   setResData(resList);
  //   setListOfRestaurants(resList);
  // };

  const filterRestaurant = () => {
    let restaurantsList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(restaurantsList);
  };

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  console.log("body rendered");

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
              <RestaurantCard key={res.info.id} resdata={res.info} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
