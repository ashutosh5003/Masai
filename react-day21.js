import React, { useState, useEffect } from 'react';  

function UnmountComponent() {  
  useEffect(() => {  
    console.log("Component Mounted");  

    return () => {  
      console.log("Component Unmounted");  
    };  
  }, []);  

  return (  
    <div>  
      <p>This component demonstrates the unmount phase.</p>  
    </div>  
  );  
}  

function App() {  
  const [isVisible, setIsVisible] = useState(true);  

  const toggleVisibility = () => {  
    setIsVisible(!isVisible);  
  };  

  return (  
    <div>  
      <button onClick={toggleVisibility}>  
        {isVisible ? "Unmount Component" : "Mount Component"}  
      </button>  
      {isVisible && <UnmountComponent />}  
    </div>  
  );  
}  

export default App;  