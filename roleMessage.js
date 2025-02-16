function getAccessMessage(user) {
    return user.role === "admin" 
        ? (user.active ? "Admin Access Granted!" : "Admin Access Revoked") 
        : user.role === "user" 
        ? (user.active ? "User Access Granted!" : "User Access Revoked") 
        : "Access Denied";
}

let user1 = { name: "Ashutosh", role: "admin", active: false };
console.log(getAccessMessage(user1)); 

