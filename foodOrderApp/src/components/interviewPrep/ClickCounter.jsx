import React from 'react';
import { useState } from 'react';
import withCounter from './withCounter';

const ClickCounter = (props) => {
  console.log('clickCounter', props);
  const { increment } = props;

  return <button onClick={() => increment()}>Click Counter</button>;
};

export default withCounter(ClickCounter);
