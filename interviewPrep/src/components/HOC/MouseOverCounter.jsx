import React from 'react';
import { useState } from 'react';
import withCounter from './withCounter';

const MouseOverCounter = (props) => {
  const { increment } = props;

  console.log('MouseOverCounter',props);

  return (
    <button onMouseOver={() => increment()}>Mouse Over Counter</button>
  );
};

export default withCounter(MouseOverCounter);
