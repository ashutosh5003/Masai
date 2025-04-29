import React, { useState, useEffect } from 'react';  
import { initializeApp } from 'firebase/app';  
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';  

const firebaseConfig = {  
  // Your Firebase configuration  
  apiKey: "YOUR_API_KEY",  
  authDomain: "YOUR_AUTH_DOMAIN",  
  projectId: "YOUR_PROJECT_ID",  
  storageBucket: "YOUR_STORAGE_BUCKET",  
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",  
  appId: "YOUR_APP_ID"  
};  

const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);  

function App() {  
  const [tasks, setTasks] = useState([]);  
  const [newTask, setNewTask] = useState('');  
  const [editingTaskId, setEditingTaskId] = useState(null);  
  const [editedTaskName, setEditedTaskName] = useState('');  
  const [completedCount, setCompletedCount] = useState(0);  
  const [ongoingCount, setOngoingCount] = useState(0);  
  const [notStartedCount, setNotStartedCount] = useState(0);  
  const [hoveredCategory, setHoveredCategory] = useState(null);  

  useEffect(() => {  
    const fetchTasks = async () => {  
      const querySnapshot = await getDocs(collection(db, "tasks"));  
      const taskList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  
      setTasks(taskList);  
    };  

    fetchTasks();  
  }, []);  

  useEffect(() => {  
    // Update counts and consider adding dependencies here  
    const completed = tasks.filter(task => task.status === 'completed').length;  
    const ongoing = tasks.filter(task => task.status === 'ongoing').length;  
    const notStarted = tasks.filter(task => task.status === 'not-started').length;  

    setCompletedCount(completed);  
    setOngoingCount(ongoing);  
    setNotStartedCount(notStarted);  
  }, [tasks]);  //Important: useEffect should run when the 'tasks' state changes  


  const addTask = async () => {  
    if (newTask.trim() === '') return;  

    try {  
      await addDoc(collection(db, "tasks"), {  
        name: newTask,  
        status: 'not-started' // Default status  
      });  
      setNewTask('');  

      // Optimistically update the UI  
      setTasks(prevTasks => [...prevTasks, { name: newTask, status: 'not-started' }]);  

      //Refresh the data from firebase, to get the id assigned to it  
      const querySnapshot = await getDocs(collection(db, "tasks"));  
      const taskList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));  
      setTasks(taskList);  



    } catch (error) {  
      console.error("Error adding task: ", error);  
      // Handle error (e.g., display an error message)  
    }  
  };  

  const deleteTask = async (id) => {  
    try {  
      await deleteDoc(doc(db, "tasks", id));  

      // Optimistically update UI  
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));  

    } catch (error) {  
      console.error("Error deleting task: ", error);  
      // Handle error  
    }  
  };  

  const startEditing = (task) => {  
    setEditingTaskId(task.id);  
    setEditedTaskName(task.name);  
  };  

  const updateTask = async (id) => {  
    try {  
      await updateDoc(doc(db, "tasks", id), { name: editedTaskName });  

      // Optimistically update UI  
      setTasks(prevTasks =>  
        prevTasks.map(task =>  
          task.id === id ? { ...task, name: editedTaskName } : task  
        )  
      );  
      setEditingTaskId(null);  
    } catch (error) {  
      console.error("Error updating task: ", error);  
      // Handle error  
    }  
  };  

  const updateTaskStatus = async (id, newStatus) => {  
    try {  
      await updateDoc(doc(db, "tasks", id), { status: newStatus });  

      //Optimistically update UI  
      setTasks(prevTasks =>  
        prevTasks.map(task =>  
          task.id === id ? { ...task, status: newStatus } : task  
        )  
      );  
    } catch (error) {  
      console.error("Error updating task status: ", error);  
      //Handle Error  
    }  
  }  

  const getTasksByCategory = (category) => {  
    return tasks.filter(task => task.status === category);  
  };  

  return (  
    <div>  
      <nav style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>  
        <div>  
          Completed: {completedCount} | Ongoing: {ongoingCount} | Not Started: {notStartedCount}  
        </div>  
      </nav>  

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>  
        <div  
          style={{ border: '1px solid #ccc', padding: '10px', width: '30%', backgroundColor: hoveredCategory === 'completed' ? '#e0e0e0' : 'white' }}  
          onMouseEnter={() => setHoveredCategory('completed')}  
          onMouseLeave={() => setHoveredCategory(null)}  
        >  
          <h3>Completed</h3>  
          {hoveredCategory === 'completed' && (  
            <ul>  
              {getTasksByCategory('completed').map(task => (  
                <li key={task.id}>{task.name}</li>  
              ))}  
            </ul>  
          )}  
        </div>  

        <div  
          style={{ border: '1px solid #ccc', padding: '10px', width: '30%', backgroundColor: hoveredCategory === 'ongoing' ? '#e0e0e0' : 'white' }}  
          onMouseEnter={() => setHoveredCategory('ongoing')}  
          onMouseLeave={() => setHoveredCategory(null)}  
        >  
          <h3>Ongoing</h3>  
          {hoveredCategory === 'ongoing' && (  
            <ul>  
              {getTasksByCategory('ongoing').map(task => (  
                <li key={task.id}>{task.name}</li>  
              ))}  
            </ul>  
          )}  
        </div>  

        <div  
          style={{ border: '1px solid #ccc', padding: '10px', width: '30%', backgroundColor: hoveredCategory === 'not-started' ? '#e0e0e0' : 'white' }}  
          onMouseEnter={() => setHoveredCategory('not-started')}  
          onMouseLeave={() => setHoveredCategory(null)}  
        >  
          <h3>Not Started</h3>  
          {hoveredCategory === 'not-started' && (  
            <ul>  
              {getTasksByCategory('not-started').map(task => (  
                <li key={task.id}>{task.name}</li>  
              ))}  
            </ul>  
          )}  
        </div>  
      </div>  

      <div>  
        <input  
          type="text"  
          value={newTask}  
          onChange={(e) => setNewTask(e.target.value)}  
          placeholder="Add new task"  
        />  
        <button onClick={addTask}>Add Task</button>  
      </div>  

      <ul>  
        {tasks.map(task => (  
          <li key={task.id}>  
            {editingTaskId === task.id ? (  
              <>  
                <input  
                  type="text"  
                  value={editedTaskName}  
                  onChange={(e) => setEditedTaskName(e.target.value)}  
                />  
                <button onClick={() => updateTask(task.id)}>Update</button>  
              </>  
            ) : (  
              <>  
                {task.name} - Status: {task.status}  
                <button onClick={() => startEditing(task)}>Edit</button>  
                <button onClick={() => deleteTask(task.id)}>Delete</button>  

                <select  
                  value={task.status}  
                  onChange={(e) => updateTaskStatus(task.id, e.target.value)}  
                >  
                  <option value="not-started">Not Started</option>  
                  <option value="ongoing">Ongoing</option>  
                  <option value="completed">Completed</option>  
                </select>  
              </>  
            )}  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
}  

export default App;  