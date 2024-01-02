import React, { useState } from "react";
import ItemList from "../ItemList";

const ResCategory = (props) => {
  const { data, setShowIndex, showItems } = props;
  const { itemCards } = data;

  const handleShowItem = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-2 cursor-pointer">
        <div onClick={handleShowItem} className="flex justify-between">
          <span className="font-bold">
            {data.title}
            {"  "}({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordion body */}
        {showItems ? <ItemList items={itemCards}/> : null}
      </div>
    </div>
  );
};

export default ResCategory;
