// Select elements
const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const changeBgBtn = document.getElementById("change-bg-btn");
const updateTextBtn = document.getElementById("update-text-btn");
const contentBox = document.getElementById("content-box");

// Function to change background color
changeBgBtn.addEventListener("click", () => {
    const color = colorInput.value.trim(); // Get input and trim spaces
    
    // Create a temporary element to check if the color is valid
    const testElement = document.createElement("div");
    testElement.style.color = color;
    
    // If the color is invalid, alert the user
    if (testElement.style.color === "") {
        alert("Invalid color name!");
    } else {
        contentBox.style.backgroundColor = color;
    }
});

// Function to update text content
updateTextBtn.addEventListener("click", () => {
    const text = textInput.value.trim(); // Get input and trim spaces

    if (text === "") {
        alert("Please enter some text!");
    } else {
        contentBox.textContent = text;
    }
});
