import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cloudinaryImageId, cuisines, costForTwo } =
    props.resdata;

  return (
    <div className="restaurant-card">
      <div>
        <img loading="lazy" src={CDN_URL + cloudinaryImageId} className="restaurant-image" alt={`img+${cloudinaryImageId}`} />
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

export default RestaurantCard;
