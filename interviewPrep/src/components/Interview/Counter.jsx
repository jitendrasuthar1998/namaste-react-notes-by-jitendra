import React, { useState } from 'react'

const TestCounter = () => {
const [count, setCount] = useState(0);
  return (
    <div>
        <p>Counter :{count}</p>
        <button onClick={()=>{
            setCount((prevCount) =>prevCount +1)
            setCount((prevCount) =>prevCount +1)
            setCount((prevCount) =>prevCount +1)
            console.log(count);
        }}>Increment</button>
    </div>
  )
}

export default TestCounter