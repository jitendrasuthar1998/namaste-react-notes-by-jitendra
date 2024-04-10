import React, { useState } from 'react';

const productsData = ['Biscuit', 'Phone', 'TV', 'Laptop', 'Grocery'];

const ProductsList = () => {
  const [text, setText] = useState('');

  const [resultItem, setResultItem] = useState('');
  const [products, setProducts] = useState(productsData);

  const handleSearch = () => {
    const item = products.find((product) => product === text);
    setResultItem(item);
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleSearch()}>Search</button>
      {products.map((product) => (
        <h4 style={{ border: resultItem == product ? '1px solid red' : null }}>
          {product}
        </h4>
      ))}
    </>
  );
};

export default ProductsList;
