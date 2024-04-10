import React from 'react';
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  if (count > 10) {
    throw new Error('Count is too high');
  }

  return (
    <div>
      {count} <button onClick={() => setCount(count + 1)}>Increase counter</button>
    </div>
  );
};

export default MyComponent;
