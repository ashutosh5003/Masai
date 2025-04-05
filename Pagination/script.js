const todosContainer = document.getElementById("todos-container");
const paginationButtons = document.getElementById("pagination-buttons");

const TODOS_PER_PAGE = 10;

// Fetch todos and display based on page number
async function fetchTodos(page) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${TODOS_PER_PAGE}&_page=${page}`
    );
    const todos = await response.json();
    displayTodos(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// Display todos in the DOM
function displayTodos(todos) {
  todosContainer.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.textContent = `${todo.id}. ${todo.title}`;
    todosContainer.appendChild(todoItem);
  });
}

// Create pagination buttons (1 to 20 since 200 total / 10 per page)
function setupPagination() {
  for (let i = 1; i <= 20; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => fetchTodos(i));
    paginationButtons.appendChild(button);
  }
}

// Initialize the app
setupPagination();
fetchTodos(1); // Load page 1 by default
