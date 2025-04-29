import React, { useState, useEffect } from 'react';  

function JokeCard() {  
  const [joke, setJoke] = useState(null);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {  
    const fetchJoke = async () => {  
      setLoading(true);  
      setError(null);  
      try {  
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');  
        if (!response.ok) {  
          throw new Error(`HTTP error! status: ${response.status}`);  
        }  
        const data = await response.json();  
        setJoke(data);  
      } catch (e) {  
        setError(e);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchJoke();  
  }, []);  

  const handleGetAnotherJoke = () => {  
    const fetchJoke = async () => {  
      setLoading(true);  
      setError(null);  
      try {  
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');  
        if (!response.ok) {  
          throw new Error(`HTTP error! status: ${response.status}`);  
        }  
        const data = await response.json();  
        setJoke(data);  
      } catch (e) {  
        setError(e);  
      } finally {  
        setLoading(false);  
      }  
    };  

    fetchJoke();  
  };  


  if (loading) {  
    return <div>Loading joke...</div>;  
  }  

  if (error) {  
    return <div>Error: {error.message}</div>;  
  }  

  return (  
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '20px', borderRadius: '5px' }}>  
      {joke && (  
        <>  
          <h3>{joke.setup}</h3>  
          <p>{joke.punchline}</p>  
        </>  
      )}  
      <button onClick={handleGetAnotherJoke}>Get Another Joke</button>  
    </div>  
  );  
}  

export default JokeCard;  