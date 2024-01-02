import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, avgRating, sla, cloudinaryImageId, cuisines, costForTwo, veg } =
    props.resdata;

  return (
    <div className="bg-white w-[230px] border-white hover:bg-gray-100 p-2 rounded-lg">
      <div className="relative">
        <img
          loading="lazy"
          src={CDN_URL + cloudinaryImageId}
          className="h-32 w-full object-cover rounded"
          alt={`img+${cloudinaryImageId}`}
        />
        <div className={`h-3 w-3 border-2 ${veg ? "border-green-500" : "border-red-600"} absolute top-2 right-2 flex justify-center items-center`}>
          <div className="h-1 w-1 border-[1px] border-black"></div>
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-lg mb-1">{name}</h3>
        <p className="text-sm mb-1">{cuisines.join(", ")}</p>
        <p className="text-gray-500 mb-1">{avgRating}</p>
        <p className="font-bold mb-1">{costForTwo}</p>
        <p className="restaurant-address mb-1">{sla.deliveryTime} min</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
