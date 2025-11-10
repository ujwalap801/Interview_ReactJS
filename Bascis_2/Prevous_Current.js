import { useEffect, useRef } from 'react';

export default function usePrevious(value) {

    const ref = useRef();

    useEffect(() =>
    {
        ref.current = value;
  },[value])


    return ref.current;
 
}




import "./styles.css";
import { useState } from 'react';
import usePrevious from "./usePrevious";

export default function Counter() {
  const [current, setCurrent] = useState(0);
  const increment = () => { setCurrent((prev) => prev + 1) };
  const decrement = () => { setCurrent((prev) => prev - 1) };

  const reset = () => { setCurrent(0) };

  const previousCount = usePrevious(current);

  return (
    <div className="App">
      <h2>Current Count:{current}</h2>
      <h2>Previous Count:{previousCount}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
