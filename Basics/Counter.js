// Counter.js
import React, { useState } from 'react';

const Counter = () => {

  const [count, setCounter] = useState(0);

  const increment =()=>
  {
    setCounter(count +1)
  }

  const decrement = () => {
    setCounter(count-1)
  }


  const reset = () => {
    setCounter(0)
  }
  return (
    <div>
      <h2 data-testid="counter-value">Counter: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;