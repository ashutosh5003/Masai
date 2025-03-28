// Select the second list item (Item 2)
const item2 = document.getElementById("item2");

// Add a click event listener
item2.addEventListener("click", () => {
    // Get and alert the text content of the parent node (<ul>)
    alert("Parent Node Content: " + item2.parentNode.textContent.trim());

    // Get the previous and next sibling elements
    const prevSibling = item2.previousElementSibling;
    const nextSibling = item2.nextElementSibling;

    // Log their text content if they exist
    if (prevSibling) {
        console.log("Previous Sibling: " + prevSibling.textContent);
    } else {
        console.log("No previous sibling.");
    }

    if (nextSibling) {
        console.log("Next Sibling: " + nextSibling.textContent);
    } else {
        console.log("No next sibling.");
    }
});
