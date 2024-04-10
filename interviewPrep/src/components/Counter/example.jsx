import React, { useState } from 'react';

const Couter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  const decrementCount = () => setCount(prevCount => prevCount - 1);

  return (
    <div
      style={{
        display: 'flex',
        width: '100px',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={() => {
          incrementCount();
          incrementCount();
          incrementCount();
        }}
      >
        +
      </span>
      <span
        style={{
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '10px',
        }}
      >
        {count}
      </span>
      <span
        style={{
          padding: '10px',
          border: '1px solid gray',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={() => decrementCount()}
      >
        -
      </span>
    </div>
  );
};

export default Couter;
