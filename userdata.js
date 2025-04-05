import React, { useState, useEffect } from 'react';  
import { FirebaseDatabase } from './firebaseConfig'; // Adjust path as needed  
import { ref, get, update } from 'firebase/database';  

function UserTable() {  
  const [users, setUsers] = useState([]);  
  const [editingUser, setEditingUser] = useState(null);  
  const [editFormData, setEditFormData] = useState({  
    name: '',  
    email: '',  
  });  

  useEffect(() => {  
    const fetchData = async () => {  
      const usersRef = ref(FirebaseDatabase, 'users'); // Assuming 'users' is your Firebase path  
      try {  
        const snapshot = await get(usersRef);  
        if (snapshot.exists()) {  
          const usersData = snapshot.val();  
          // Convert the Firebase object into an array of users with their IDs  
          const usersArray = Object.keys(usersData).map(key => ({  
            id: key,  
            ...usersData[key],  
          }));  
          setUsers(usersArray);  
        } else {  
          console.log("No data available");  
          setUsers([]);  
        }  
      } catch (error) {  
        console.error("Error fetching data:", error);  
      }  
    };  

    fetchData();  
  }, []);  

  const handleEditClick = (user) => {  
    setEditingUser(user);  
    setEditFormData({  
      name: user.name,  
      email: user.email,  
    });  
  };  

  const handleCancelEdit = () => {  
    setEditingUser(null);  
  };  

  const handleInputChange = (event) => {  
    const { name, value } = event.target;  
    setEditFormData((prevFormData) => ({  
      ...prevFormData,  
      [name]: value,  
    }));  
  };  

  const handleUpdateUser = async (event) => {  
    event.preventDefault();  

    const userRef = ref(FirebaseDatabase, `users/${editingUser.id}`);  

    try {  
      await update(userRef, {  
        name: editFormData.name,  
        email: editFormData.email,  
      });  

      // Update the local state to reflect the changes  
      setUsers(  
        users.map((user) =>  
          user.id === editingUser.id ? { ...user, ...editFormData } : user  
        )  
      );  

      setEditingUser(null); // Clear the editing state  
      console.log('User updated successfully!');  
    } catch (error) {  
      console.error('Error updating user:', error);  
    }  
  };  

  return (  
    <div>  
      <h2>User Table</h2>  
      <table>  
        <thead>  
          <tr>  
            <th>Name</th>  
            <th>Email</th>  
            <th>Actions</th>  
          </tr>  
        </thead>  
        <tbody>  
          {users.map((user) => (  
            <tr key={user.id}>  
              <td>{user.name}</td>  
              <td>{user.email}</td>  
              <td>  
                {editingUser && editingUser.id === user.id ? (  
                  <div>  
                    <button onClick={handleUpdateUser}>Update</button>  
                    <button onClick={handleCancelEdit}>Cancel</button>  
                  </div>  
                ) : (  
                  <button onClick={() => handleEditClick(user)}>Edit</button>  
                )}  
              </td>  
            </tr>  
          ))}  
        </tbody>  
      </table>  

      {editingUser && (  
        <div>  
          <h2>Edit User</h2>  
          <form onSubmit={handleUpdateUser}>  
            <label>  
              Name:  
              <input  
                type="text"  
                name="name"  
                value={editFormData.name}  
                onChange={handleInputChange}  
              />  
            </label>  
            <br />  
            <label>  
              Email:  
              <input  
                type="email"  
                name="email"  
                value={editFormData.email}  
                onChange={handleInputChange}  
              />  
            </label>  
            <br />  
            <button type="submit">Update</button>  
            <button type="button" onClick={handleCancelEdit}>Cancel</button>  
          </form>  
        </div>  
      )}  
    </div>  
  );  
}  

export default UserTable;  