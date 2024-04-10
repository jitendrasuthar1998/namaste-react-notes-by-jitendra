import React from 'react';
import withCounter from './withCounter';

const ClickCounter = (props) => {

  const { increment, name } = props;

  return <button onClick={() => increment()}>{name}</button>;
};

export default withCounter(ClickCounter);
