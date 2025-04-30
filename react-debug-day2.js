import React, { useState, useRef, useEffect } from "react";  

function Timer() {  
  const [time, setTime] = useState(10);  
  const intervalId = useRef(null);  

  const startTimer = () => {  
    if (!intervalId.current) { // Prevent multiple intervals  
      intervalId.current = setInterval(() => {  
        setTime((prevTime) => {  
          if (prevTime > 0) {  
            return prevTime - 1;  
          } else {  
            clearInterval(intervalId.current);  
            intervalId.current = null;  
            return 0;  
          }  
        });  
      }, 1000);  
    }  
  };  

  const stopTimer = () => {  
    clearInterval(intervalId.current);  
    intervalId.current = null;  
  };  

  const resetTimer = () => {  
    clearInterval(intervalId.current);  
    intervalId.current = null;  
    setTime(10);  
  };  

  useEffect(() => {  
    if (time === 0 && intervalId.current) {  
      clearInterval(intervalId.current);  
      intervalId.current = null;  
    }  
  }, [time]);  


  return (  
    <div>  
      <h1>Time Left: {time}</h1>  
      <button onClick={startTimer}>Start</button>  
      <button onClick={stopTimer}>Stop</button>  
      <button onClick={resetTimer}>Reset</button>  
    </div>  
  );  
}  

export default Timer;  