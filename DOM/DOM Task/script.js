/* 

! JavaScript DOM Tasks


Create a new index.html and script.js in order to complete the following tasks:


* 1: Add a <h1> element to the HTML with some text inside it.

* 2: Using a DOM query method I would like you to select the h1 element from the DOM and store it in your JavaScript file in a variable.

* 3: Add an ID to the element using the DOM, then update the text content and styling of your <h1> element using the DOM.

* 4: Using DOM Methods I would like you to create a <ul> element and 3 <li>’s and add them to the document.

* 5: Edit the text content of each <li> and change the colour of the <li>’s.

* 6: Finally remove your heading element from the document.

*/

// ? Task 2:
const title = document.querySelector("h1");
console.log(title);

// ? Task 3:
title.setAttribute("id", "title");
title.textContent = "JavaScript - DOM Task";
title.style.color = "#E07BE0";

// ? Task 4 & 5:
const ul = document.createElement("ul");
console.log(ul);

for (let i = 0; i < 3; i++) {
  let newListItem = document.createElement("li");
  let listContent = ["Apple", "Orange", "Banana"];
  newListItem.style.color = "Red";
  newListItem.textContent = `${listContent[i]}`;
  ul.append(newListItem);
}

document.body.append(ul);

// ? Task 6:
title.remove();
