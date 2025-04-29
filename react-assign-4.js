import React, { useState, useEffect } from 'react';  
import { firestore } from './firebase-config'; // Assume correct config here.  

const TaskList = () => {  
  const [tasks, setTasks] = useState([]);  
  const [newTaskAdded, setNewTaskAdded] = useState(false); // State to track new task addition  

  useEffect(() => {  
    const fetchTasks = async () => {  
      const snapshot = await firestore.collection('tasks').get();  
      setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // Include document ID  
    };  
    fetchTasks();  
  }, [newTaskAdded]); // Only run when a new task is added  

  // Optional: Function to trigger re-fetch when a new task is added elsewhere (e.g., in a parent component)  
  const handleTaskAdded = () => {  
    setNewTaskAdded(prevState => !prevState); // Toggle the state to trigger useEffect  
  };  


  return (  
    <div>  
      <h1>Tasks</h1>  
      <ul>  
        {tasks.map((task) => (  
          <li key={task.id}>{task.name}</li> // Use document ID as key  
        ))}  
      </ul>  
       {/* Optional: Button to simulate adding a new task and re-fetching. Remove in final version. */}  
      <button onClick={handleTaskAdded}>Simulate New Task Added</button>  
    </div>  
  );  
};  

export default TaskList;  