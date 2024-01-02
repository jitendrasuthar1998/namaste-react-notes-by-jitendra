import React, { useState } from "react";
import { MENU_IMG } from "../utils/constants";

const MenuCard = (props) => {
  const { item } = props;
  const [showMenuItem, setShowMenuItem] = useState(false);

  const handleShowMenuItem = () => {
    setShowMenuItem(!showMenuItem);
  };

  const title = item?.card?.card.title;
  const itemCount = item?.card?.card.itemCards.length;
  const itemCards = item?.card?.card?.itemCards;

  return (
    <div className="menuItem">
      <div className="toggle-container">
        <h2>{title} ({itemCount})</h2>
        <button className="toggle-btn" onClick={() => handleShowMenuItem()}>Toggle</button>
      </div>
      <>
        {showMenuItem ? (
          <>
            {itemCards.map((res) => {
              const {id, price,imageId} = res.card.info;
              return (
                <div key={id} className="menu-item-card">
                  <div className="menu-details">
                    <h3>{name}</h3>
                    <p>{price}</p>
                  </div>
                  {res.card.info.hasOwnProperty("imageId") ? (
                    <div className="menu-image">
                      <img
                        src={`${MENU_IMG}${imageId}`}
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
