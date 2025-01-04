// ! DOM - Document Object Model

// * Created on page load - When the HTML content is loaded into the browser, the broswer generates the DOM

// * When we log the document to the console we are able to see a representation of our HTML content.
console.log(document);

// ! Select an element from the DOM with DOM Query Methods
// * getElementById()
const title = document.getElementById("title");
console.log(title);

// *getElementsByClassName()
const listItems = document.getElementsByClassName("listItems");
console.log(listItems);

// *getElementsByTagName()
const ulElement = document.getElementsByTagName("ul");
console.log(ulElement);

// *querySelector()
// ! This method takes a CSS Selector as an argument
// * NOTE: This method only grabs the first element that matches the selector provided.
const paragraph = document.querySelector("p");
console.log(paragraph);

// *querySelectorAll()
// * This version of the method retreives all instances that match the selector
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// * Update the color of an element via the DOM
title.style.color = "Red";
title.style.backgroundColor = "Black";

// * Styling Multiple Elements via the DOM
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "Orange";
  paragraphs[i].style.color = "White";
}

// ! Create new Elements via the DOM
// * Create a new li element and add it to our existing list

// * Step 1: Select the ul element to store our new li element
const ul = document.querySelector("ul");
console.log(ul);

// * Step 2: Create the new li element
const newListItem = document.createElement("li");
console.log(newListItem);

// * Step 3: Adding our new li element to our ul element
ul.append(newListItem);

// * Step 4: Set the text of the new li element
newListItem.textContent = "New - List Item 5";

// ! Use the DOM to manipulate / set / remove attributes

// * Set an ID to an element
newListItem.setAttribute("id", "item5");

// * Remove the ID from an element
newListItem.removeAttribute("id");

// * Add a class to an element
newListItem.classList.add("newListItems");

// * Remove a class from an element
newListItem.classList.remove("newListItems");

// * Remove an element from the DOM
newListItem.remove();

/* 

JavaScript DOM Tasks


Create a new index.html and script.js in order to complete the following tasks:


1: Add a <h1> element to the HTML with some text inside it.

2: Using a DOM query method I would like you to select the h1 element from the DOM and store it in your JavaScript file in a variable.

3: Add an ID to the element using the DOM, then update the text content and styling of your <h1> element using the DOM.

4: Using DOM Methods I would like you to create a <ul> element and 3 <li>’s and add them to the document.

5: Edit the text content of each <li> and change the colour of the <li>’s.

6: Finally remove your heading element from the document.

*/
