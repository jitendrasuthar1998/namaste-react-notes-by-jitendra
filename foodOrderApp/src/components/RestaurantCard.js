import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cloudinaryImageId, cuisines, costForTwo } =
    props.resdata;

  return (
    <div className="border-2 w-40 hover:border-red-300">
      <div>
        <img loading="lazy" src={CDN_URL + cloudinaryImageId} className="h-32 w-full object-cover" alt={`img+${cloudinaryImageId}`} />
      </div>
      <div className="p-3">
        <h3 className="text-lg">{name}</h3>
        <p className="restaurant-address">{cuisines.join(", ")}</p>
        <p className="restaurant-address">{avgRating}</p>
        <p className="restaurant-address">{costForTwo}</p>
        <p className="restaurant-address">{sla.deliveryTime} min</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
