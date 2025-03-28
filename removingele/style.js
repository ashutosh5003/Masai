// Select the container where paragraphs will be added
const container = document.getElementById("container");

// Select the buttons
const addButton = document.getElementById("add-btn");
const removeButton = document.getElementById("remove-btn");

// Event listener for "Add Paragraph" button
addButton.addEventListener("click", () => {
    // Create a new paragraph element
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph.";

    // Append the new paragraph to the container
    container.appendChild(newParagraph);
});

// Event listener for "Remove Last Paragraph" button
removeButton.addEventListener("click", () => {
    // Get the last paragraph inside the container
    const lastParagraph = container.lastElementChild;

    // Remove it if it exists
    if (lastParagraph) {
        container.removeChild(lastParagraph);
    } else {
        alert("No more paragraphs to remove!");
    }
});
