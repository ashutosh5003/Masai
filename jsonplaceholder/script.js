const userContainer = document.getElementById("user-container");
const paginationButtons = document.getElementById("pagination-buttons");

const USERS_PER_PAGE = 6;

// Fetch and display users for a specific page
async function fetchUsers(page) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${USERS_PER_PAGE}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch users.");
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
    console.error(error);
  }
}

// Display users in the DOM
function displayUsers(users) {
  userContainer.innerHTML = "";
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website: ${user.website}</p>
    `;
    userContainer.appendChild(userCard);
  });
}

// Setup pagination (3 pages as only 10 users exist in the API)
function setupPagination(totalUsers = 10) {
  const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => fetchUsers(i));
    paginationButtons.appendChild(btn);
  }
}

// Initial load
setupPagination();
fetchUsers(1);
