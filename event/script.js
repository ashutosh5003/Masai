// Select elements
const outerDiv = document.getElementById("outer");
const middleDiv = document.getElementById("middle");
const innerDiv = document.getElementById("inner");
const innerButton = document.getElementById("inner-button");

// Event listener for outer div (Bubbling and Capturing)
outerDiv.addEventListener("click", () => alert("Outer Div Clicked (Bubbling)"), false);
outerDiv.addEventListener("click", () => alert("Outer Div Clicked (Capturing)"), true);

// Event listener for middle div
middleDiv.addEventListener("click", () => alert("Middle Div Clicked (Bubbling)"), false);
middleDiv.addEventListener("click", () => alert("Middle Div Clicked (Capturing)"), true);

// Event listener for inner div
innerDiv.addEventListener("click", () => alert("Inner Div Clicked (Bubbling)"), false);
innerDiv.addEventListener("click", () => alert("Inner Div Clicked (Capturing)"), true);

// Event listener for inner button with event propagation stop
innerButton.addEventListener("click", (event) => {
    alert("Button Clicked");
    event.stopPropagation(); // Stops propagation to parent elements
});
