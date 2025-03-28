// Select the <ul> using querySelector
const ul = document.querySelector("#item-list");

// Select the button
const button = document.querySelector("#add-item");

// Add click event listener to the button
button.addEventListener("click", () => {
    // Create a new <li> element
    const newItem = document.createElement("li");
    
    // Determine the new item number
    const itemCount = ul.children.length + 1;
    newItem.textContent = `New Item ${itemCount}`;

    // Apply styles based on sequence number
    if (itemCount % 2 === 1) {
        newItem.classList.add("bold-blue");
    } else {
        newItem.classList.add("italic-red");
    }

    // Append the new <li> to the <ul>
    ul.appendChild(newItem);
});
