import React, { useState } from "react";
import { MENU_IMG } from "../utils/constants";

const MenuCard = (props) => {
  const { item } = props;
  const [showMenuItem, setShowMenuItem] = useState(false);

  const handleShowMenuItem = () => {
    setShowMenuItem(!showMenuItem);
  };

  console.log("item is == ", item);

  return (
    <div className="menuItem">
      <div className="toggle-container">
        <h2>{item?.card?.card.title}</h2>
        <button className="toggle-btn" onClick={() => handleShowMenuItem()}>Toggle</button>
      </div>
      <>
        {showMenuItem ? (
          <>
            {item?.card?.card.itemCards.map((res) => {
              return (
                <div key={res.card.info.id} className="menu-item-card">
                  <div className="menu-details">
                    <h3>{res.card.info.name}</h3>
                    <p>{res.card.info.price}</p>
                  </div>
                  {res.card.info.hasOwnProperty("imageId") ? (
                    <div className="menu-image">
                      <img
                        src={`${MENU_IMG}${res.card.info.imageId}`}
                        alt={res.image}
                        height={100}
                        width={100}
                      />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </>
        ) : null}
      </>
    </div>
  );
};

export default MenuCard;
