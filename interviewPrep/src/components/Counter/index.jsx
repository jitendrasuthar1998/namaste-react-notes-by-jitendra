import React, { useState } from 'react';
import './counter.css';

const Couter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  const decrementCount = () => setCount(count - 1);

  const [name, setName] = useState('');

  console.log('render');

  return (
    <div className='counter-container'>
      <span
        className='btn'
        onClick={() => {
          incrementCount();
          incrementCount();
          incrementCount();
          setName('jitendra');
        }}
      >
        +
      </span>
      <span className='btn'>{count}</span>
      <span className='btn' onClick={() => decrementCount()}>
        -
      </span>
    </div>
  );
};

export default Couter;
