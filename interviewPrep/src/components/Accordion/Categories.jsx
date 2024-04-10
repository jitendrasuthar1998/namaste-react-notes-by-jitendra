import React, { useState } from 'react';
import categoriesData from './categoriesData.json';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {categoriesData.map((category, index) => (
        <CategoryPanel
          category={category.title}
          items={category.items}
          isActive={activeIndex === index}
          onShow={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

const CategoryPanel = ({ category, items, isActive, onShow }) => {
  return (
    <div>
      <div>
        <h1>{category}</h1>{' '}
        {!isActive ? (
          <button onClick={() => onShow()}>Show</button>
        ) : (
          <button>Hide</button>
        )}
      </div>
      {isActive && (
        <div>
          {items.map((item, index) => (
            <li>
              {item.name} - {item.price}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
