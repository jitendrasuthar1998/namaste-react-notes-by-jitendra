import React from 'react';
import ClickCounter from './ClickCounter';
import MouseOverCounter from './MouseOverCounter';

const ExampleOfHOC = () => {
  return (
    <>
      <ClickCounter name='Click Counter' />
      <MouseOverCounter name='Mouse Over Counter' />
    </>
  );
};

export default ExampleOfHOC;
