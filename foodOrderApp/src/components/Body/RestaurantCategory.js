import React, { useState } from "react";
import ItemList from "../ItemList";

const ResCategory = (props) => {
  const { data } = props;
  const { itemCards } = data;
  const [showItems, setShowItems] = useState(false);
  const handleShowItem = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-2">
      <div
      data-testid="resCategoryHeader"
        onClick={handleShowItem}
        className="cursor-pointer flex justify-between"
      >
        <span className="font-bold">
          {data.title}
          {"  "}({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion body */}
      {showItems ? <ItemList items={itemCards} /> : null}
    </div>
  );
};

export default ResCategory;
