import React, { useState, useEffect } from 'react';  

function Counter() {  
  const [count, setCount] = useState(0);  

  useEffect(() => {  
    console.log(`Counter value: ${count}`);  
  }, [count]);  

  const increment = () => {  
    setCount(count + 1);  
  };  

  const decrement = () => {  
    setCount(count - 1);  
  };  

  const reset = () => {  
    setCount(0);  
  };  

  return (  
    <div>  
      <h1>Counter: {count}</h1>  
      <button onClick={increment}>Increment</button>  
      <button onClick={decrement}>Decrement</button>  
      <button onClick={reset}>Reset</button>  
    </div>  
  );  
}  

export default Counter;  