import React, { useRef, useEffect } from 'react';  

const OTPInput = () => {  
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];  

  const handleChange = (index, event) => {  
    const value = event.target.value;  

    if (isNaN(value)) {  
      return; // Only allow digits  
    }  

    if (value.length > 1) {  
      event.target.value = value.slice(0, 1);  
      return; // Only allow one digit  
    }  

    if (value !== '' && index < inputRefs.length - 1) {  
      inputRefs[index + 1].current.focus();  
    }  
  };  

  const handleKeyDown = (index, event) => {  
    if (event.key === 'Backspace') {  
      if (event.target.value === '' && index > 0) {  
        inputRefs[index - 1].current.focus();  
      }  
    }  
  };  

  return (  
    <div>  
      {inputRefs.map((ref, index) => (  
        <input  
          key={index}  
          type="text"  
          maxLength="1"  
          ref={ref}  
          onChange={(event) => handleChange(index, event)}  
          onKeyDown={(event) => handleKeyDown(index, event)}  
          style={{ width: '2rem', textAlign: 'center', margin: '0.5rem' }}  
        />  
      ))}  
    </div>  
  );  
};  

export default OTPInput;  