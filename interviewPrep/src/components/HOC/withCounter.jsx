import React from 'react';
import { useState } from 'react';

const withCounter = (OriginalComponent) => {
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      setCount((count) => count + 1);
    };

    return (
      <div>
        {count}
        <OriginalComponent increment={() => incrementCounter()} {...props} />
      </div>
    );
  };

  return NewComponent;
};

export default withCounter;
