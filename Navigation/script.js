// Select the <h1> element by its id and change its text content
document.getElementById("main-heading").textContent = "Welcome to the DOM World!";

// Select all <p> elements and set their text color to blue
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

// Select the first <div> with the class "container" and change its background color
document.querySelector(".container").style.backgroundColor = "yellow";
