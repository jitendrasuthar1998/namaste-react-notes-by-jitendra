import React, { useState } from 'react';
import ListItem from './ListItem';

const arr = ['Play Cricket', 'Play Video Game', 'Read Book'];

const Mock = () => {
  const [items, setItems] = useState(arr);

  const handleDelete = (itemToDelete) => {
    const newItems = items.filter((item) => item !== itemToDelete);
    setItems(newItems);
  };

  return (
    <div>
      <h1>All Items</h1>

      <ul>
        {items.map((item, i) => (
          <ListItem item={item} key={i} handleDelete={handleDelete}/>
        ))}
      </ul>
    </div>
  );
};

export default Mock;
