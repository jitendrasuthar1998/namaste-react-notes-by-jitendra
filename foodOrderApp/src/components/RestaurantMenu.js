import React, { useEffect, useState } from "react";
import { MENU_IMG, RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer/Shimmer";
import "./resMenu.css";
import resMenuData from "../utils/resMenu.json";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  
  if (resInfo === null) return null;

  // const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
  //   resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="menu-description">
          {/* {console.log("name is == ", resInfo?.cards[0]?.card?.card?.info)} */}
          <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
          <p className="cusines">
            {resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")}
          </p>
        </div>
        <div className="menu-ratings">
          <p>{resInfo?.cards[0]?.card?.card?.info.avgRating}</p>
          <p>{resInfo?.cards[0]?.card?.card?.info.totalRatingsString}</p>
        </div>
      </div>
      <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      {resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
        return item?.card?.card.hasOwnProperty("itemCards") ? (
          <MenuCard key={item.card.card.title} item={item} />
        ) : null;
      })}
    </div>
  );
};

export default RestaurantMenu;
