import React, { useRef } from 'react';  

function VideoPlayer() {  
  const videoRef = useRef(null);  

  const handlePlay = () => {  
    videoRef.current.play();  
  };  

  const handlePause = () => {  
    videoRef.current.pause();  
  };  

  const handleRestart = () => {  
    videoRef.current.currentTime = 0;  
    videoRef.current.play();  
  };  

  return (  
    <div>  
      <video width="640" height="360" ref={videoRef} controls>  
        <source src="your-video.mp4" type="video/mp4" />  
        Your browser does not support the video tag.  
      </video>  
      <div>  
        <button onClick={handlePlay}>Play</button>  
        <button onClick={handlePause}>Pause</button>  
        <button onClick={handleRestart}>Restart</button>  
      </div>  
    </div>  
  );  
}  

export default VideoPlayer;  