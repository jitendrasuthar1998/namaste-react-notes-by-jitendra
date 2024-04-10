import React, { useState } from 'react';

const ListItem = ({ item, handleDelete }) => {
  const [checked, setChecked] = useState(false);

  return (
    <li>
      <input
        type='checkbox'
        value={checked}
        onChange={() => setChecked(!checked)}
      />{' '}
      {item}
      {checked && <button onClick={()=>handleDelete(item)}>Delete</button>}
    </li>
  );
};

export default ListItem;
