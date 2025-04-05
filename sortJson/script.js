const userList = document.getElementById("user-list");
const sortSelect = document.getElementById("sort-select");

// Fetch users from API
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch user data.");
    const users = await response.json();
    return users;
  } catch (error) {
    userList.innerHTML = `<p style="color: red;">${error.message}</p>`;
    return [];
  }
}

// Display users on the DOM
function displayUsers(users) {
  userList.innerHTML = ""; // Clear list first
  users.forEach(user => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>Username: ${user.username}</p>
      <p>Email: ${user.email}</p>
      <p>Website: ${user.website}</p>
    `;
    userList.appendChild(userCard);
  });
}

// Sort users by selected field
function sortUsers(users, criteria) {
  return users.sort((a, b) =>
    a[criteria].toLowerCase().localeCompare(b[criteria].toLowerCase())
  );
}

// Main logic
async function init() {
  let users = await fetchUsers();
  let currentCriteria = sortSelect.value;
  users = sortUsers(users, currentCriteria);
  displayUsers(users);

  sortSelect.addEventListener("change", () => {
    const sorted = sortUsers(users, sortSelect.value);
    displayUsers(sorted);
  });
}

init();
