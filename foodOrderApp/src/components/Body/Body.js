import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import Search from "../Search";
import MOCK_DATA from "../../../mocks/restaurantList.json";
// import data from "../../utils/resData.json";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { FETCH_RESTAURANTS } from "../../utils/constants";

const Body = () => {
  // destructuring array returned by useState() on the fly
  const [resData, setResData] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const userIsOnline = useOnlineStatus();

  useEffect(() => {
    // this callback function will be called when the render cycle is complete

    // setTimeout(() => {
    //   setListOfRestaurants(data);
    //   setResData(data);
    // }, 10000);
    fetchData();
  }, []);

  const fetchData = async () => {

    // fetch function returns a promise, and that promise returns us data in string format
    // const data = await fetch(FETCH_RESTAURANTS);
    // we convert the data which comes in the form of string to json, so that we can use them or pass them to our components.
    // when we convert string to json, it gives us a promise.
    // when that promise fulfill, we access restaurants data from that json object, and save them into our state.
    // const json = await data.json();
    const restaurantList =
      MOCK_DATA?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log("restaurantList == ", restaurantList);
    setListOfRestaurants(restaurantList);
    setResData(restaurantList);
  };

  const filterRestaurant = () => {
    let restaurantsList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4.5
    );
    // console.log("restaurantsList == ",restaurantsList);
    setListOfRestaurants(restaurantsList);
  };

  if (userIsOnline === false) {
    return (
      <div className="warning">
        <h2>Please come online to see the list of restaurants</h2>
      </div>
    );
  }

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-around p-5 items-center">
        <div className="filter">
          <button
            type="button"
            data-testid="filterBtn"
            className="border-2 rounded-md p-2 text-md"
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
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-5">
          {listOfRestaurants.map((res) => (
            <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
              <RestaurantCard resdata={res.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
