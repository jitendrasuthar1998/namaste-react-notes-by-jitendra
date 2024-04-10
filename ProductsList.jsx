import React, { useState } from 'react';

const products = ['Biscuit', 'Phone', 'TV', 'Laptop', 'Grocery'];

const ProductsList = () => {
  const [text, setText] = useState('');

  const [resultItem, setResultItem] = useState('');
  const [users, setUsers] = useState(users);

  const handleSearch = () => {
    const item = products.find((product) => product === text);
    setResultItem(item);
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleSearch()}></button>
      {products.map((product) => (
        <h1
          className={`border p-4 ${
            resultItem == product ? 'border-red-500' : ''
          }`}
        >
          {product}
        </h1>
      ))}
    </>
  );
};

export default ProductsList;
