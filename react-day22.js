import React, { useRef } from 'react';  

function InputFocus() {  
  const inputRef = useRef(null);  

  const handleButtonClick = () => {  
    inputRef.current.focus();  
  };  

  return (  
    <div>  
      <input type="text" ref={inputRef} />  
      <button onClick={handleButtonClick}>Focus Input</button>  
    </div>  
  );  
}  

export default InputFocus;  