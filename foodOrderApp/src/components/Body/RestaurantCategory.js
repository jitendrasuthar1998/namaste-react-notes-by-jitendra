import React, { useState } from "react";
import ItemList from "../ItemList";

const ResCategory = (props) => {
  const { data, setShowIndex, showItems } = props;
  const { itemCards } = data;

  const handleShowItem = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4 my-2">
      <div
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
