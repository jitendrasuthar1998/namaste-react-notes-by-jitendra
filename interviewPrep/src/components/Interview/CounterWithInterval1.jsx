import React, { useState, useEffect, useRef } from 'react';

const CounterWithInterval1 = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false); // State to track counting status

  const handleStartClick = () => {
    setIsCounting(true); // Start counting on button click
  };

  const handleStopClick = () => {
    setIsCounting(false); // Stop counting on button click
  };

  const timeRef = useRef();

  const startInterval = () => {
    timeRef.current = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      console.log('count in interval', count);
    }, 200);
  };


  const stopInterval = () => {
    clearInterval(timeRef.current);
  }
//   useEffect(()=> {

//   },[])

  //   useEffect(() => {
  //     let intervalId;
  //     if (isCounting) {
  //       intervalId = setInterval(() => {
  //         setCount(count + 1);
  //       }, 1000);
  //     }

  //     return () => clearInterval(intervalId); // Clear interval on unmount or stop
  //   }, [isCounting]); // Dependency on isCounting

  return (
    <div
      style={{
        display: 'flexbox',
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
      <h3>React Example for using setInterval method</h3>
      <h1>{count}</h1>
      <button onClick={startInterval} disabled={isCounting}>
        Start
      </button>
      <button onClick={stopInterval} >
        Stop
      </button>
    </div>
  );
};

export default CounterWithInterval1;
