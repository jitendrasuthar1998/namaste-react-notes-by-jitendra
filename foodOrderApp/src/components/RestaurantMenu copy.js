import React, { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer/Shimmer";

import resMenuData from "../utils/resMenu.json";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(resMenuData.data);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const response = await fetch(RESTAURANT_MENU);
  //   const resData = await response.json();
  //   setResInfo(resData.data);
  //   console.log(resData.data);
  // };

  if (resInfo === null) return null;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      {resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map((item) => {
        return (
          <div key={item.id}>
            {/* <h4>{item?.card?.card}</h4> */}
            {/* {console.log(item?.card?.card.hasOwnProperty("itemCards"))} */}
            {item?.card?.card.hasOwnProperty("title")
              ? console.log(`Item title is == `, item?.card?.card.title)
              : null}
            {item?.card?.card.hasOwnProperty("title") ? (
              <h2>{item?.card?.card.title}</h2>
            ) : null}
            {item?.card?.card.hasOwnProperty("itemCards")
              ? item?.card?.card.itemCards.map((res) => {
                  console.log(res.card.info.name);
                })
              : ""}
            {item?.card?.card.hasOwnProperty("itemCards") ? (
              <ul>
                {item?.card?.card.itemCards.map((res) => {
                  return <li>{res.card.info.name}</li>;
                })}
              </ul>
            ) : null}
          </div>
        );
      })}
      <h4>
        {
          resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
            .itemCards[0].card.info.name
        }
      </h4>
    </div>
  );
};

export default RestaurantMenu;
