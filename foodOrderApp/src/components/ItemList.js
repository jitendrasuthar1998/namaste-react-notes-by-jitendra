import React from "react";
import { MENU_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, imageId,defaultPrice } = item.card.info;

        return (
          <div
            key={id}
            className="py-2 m-2 border-b-2 flex border-gray-200 justify-between"
          >
            <div className="w-9/12">
              <div>
                <span>{name}</span> - <span>₹{price ? price : defaultPrice / 100}</span>
              </div>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
            {imageId ? (
              <div className="3/12 relative">
                <img
                  src={`${MENU_IMG}${imageId}`}
                  className="h-20 w-20"
                  alt={name}
                />
                <button
                  onClick={() => handleAddItem(item)}
                  className="py-1 px-2 text-sm rounded bg-white shadow-lg absolute top-14 left-5"
                >
                  Add +
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
