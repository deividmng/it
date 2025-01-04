// ! Task 1 - Element References
const showHideImg = document.getElementById("showHideImg");
const showHideBtn = document.getElementById("showHideBtn");

// * Task 2 - Element References
const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");
const task_2 = document.getElementById("task_2");

// ? Task 3 - Element References
const addBtn = document.getElementById("addBtn");
const minusBtn = document.getElementById("minusBtn");
const countDisplay = document.getElementById("countDisplay");

// ! Task 1 - Function
function toggleImg() {
  if (showHideImg.style.display === "none") {
    showHideImg.style.display = "inline-block";
  } else {
    showHideImg.style.display = "none";
  }
}

// ! Task 1 - Event Listener
showHideBtn.addEventListener("click", toggleImg);

// * Task 2 - Function

let newElement = null;

function createElement() {
  if (newElement === null) {
    newElement = document.createElement("h2");
    newElement.textContent = input.value;
    task_2.append(newElement);
  } else {
    newElement.textContent = input.value;
  }
  input.value = "";
}

// * Task 2 - Event Listener
submitBtn.addEventListener("click", createElement);

// ? Task 3 - Counter
let count = 0;

function updateCounter() {
  countDisplay.textContent = count;
}

addBtn.addEventListener("click", function () {
  count += 1;
  updateCounter();
});

minusBtn.addEventListener("click", function () {
  count -= 1;
  updateCounter();
});
