// Select elements
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Function to add a new task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    // Create a new <li> element
    const listItem = document.createElement("li");

    // Create a span to hold the task text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Create "Complete" button
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    // Create "Delete" button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    // Append elements to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // Append list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
});
