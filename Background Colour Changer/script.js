const changeColourButton = document.getElementById("changeColourBtn");
const colourInput = document.getElementById("colourInput");
const customColourButton = document.getElementById("customColourBtn");

const colours = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "grey",
  "gold",
  "black",
];

let colourIndex = 0;

changeColourButton.addEventListener("click", function () {
  document.body.style.backgroundColor = colours[colourIndex];
  colourIndex = (colourIndex + 1) % colours.length;
});

customColourButton.addEventListener("click", function () {
  let customColour = colourInput.value;
  document.body.style.backgroundColor = customColour;
  colourInput.value = "";
});
