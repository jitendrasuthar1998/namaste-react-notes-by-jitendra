import React, { useEffect, useState } from "react";
import { MENU_IMG, RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer/Shimmer";
import resMenuData from "../utils/resMenu.json";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./Body/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return null;

  const resMenuInfo =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("resMenuInfo", resMenuInfo);

  const { name, cuisines, avgRating, totalRatingsString, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const dummy = "Dummy Data";

  return (
    <div>
      <h1 data-testid="resName" className="font-bold my-6 text-2xl text-center">{name}</h1>
      <p className="font-bold text-lg text-center">{cuisines.join(", ")}</p>
      {/* categories accordions */}
      {resMenuInfo.map((category, index) => (
        <ResCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
