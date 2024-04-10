import React from 'react';
import { useState } from 'react';

const withCounter = (OriginalComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      setCount((count) => count + 1);
    };

    return (
      <div>
        {count}
        <OriginalComponent
          increment={() => incrementCounter()}
          number={'number'}
        />
      </div>
    );
  };

  return NewComponent;
};

export default withCounter;
