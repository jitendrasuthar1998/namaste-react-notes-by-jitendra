import React from "react";
import "./shimmer.css";

const Shimmer = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-wrap items-center gap-5 justify-center">
      {numbers.map((number) => (
        <div key={number} className="bg-gray-200 h-60 w-60 rounded-lg">
          Cards
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
