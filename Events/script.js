// ! Reference the elements we need via the DOM
const title = document.getElementById("title");
const btn = document.getElementById("btn");

// * Listen for a "click" event on our h1

// * Our code inside the function triggered by our event listener will run each time our event is detected
title.addEventListener("click", function () {
  alert("The h1 element has been clicked");
});

// * Example of running function that has been declared earlier in the file with an event listener

// * Pre-defined function
function updateTitle() {
  title.textContent = "The button has been clicked!";
  title.style.color = "Blue";
}

// * Event Listener that calls a function
// ! When referencing a function in an event listener parentheses are not required - ()
btn.addEventListener("click", updateTitle);
