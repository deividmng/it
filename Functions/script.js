// ! Functions

// * We often need to repeat actions in our code
// * Functions are blocks of code that we can reference
// * or call at any point in our script

// ? Think of functions like variables that store
// ? some form of functionality we can reference

// * Example Syntax - Function Expression:

// function functionName() {
//     function code that runs when it is called;
// }

// * Function Declaration - Greeting Example
// function greeting() {
//   alert("Hello World!");
// }

// * Calling a function (invoking):
// greeting();

// * Hoisting - Refers to calling a function before it has been declared. ONLY available when using a function declaration.
hoistingExample();

console.log("Hello");

function hoistingExample() {
  console.log("I am being called before I have been declared!");
}

// ? Think of a function as a block of code that we can call whenever needed.

// ? This block of code can contain other statements such as conditional checks and/or loops in order to control how our function behaves.

// * User Logged In / Logged Out Function Example:

let userOnline = true;

function updateUserStatus() {
  if (userOnline) {
    userOnline = false;
    console.log("User Logged Out.");
  } else {
    userOnline = true;
    console.log("User Logged In.");
  }
}

// From true to false
updateUserStatus();
// From false to true
updateUserStatus();
// From true to false
updateUserStatus();
// From false to true
updateUserStatus();

// ! Parameters and Arguments

// ? When delcaring functions, in our brackets we can set what are known as parameters.
// ? Think of parameters as expected data that our function requires in order to operate as expected.

// * Personal Greeting Example:

function personalGreeting(name) {
  alert(`Hello ${name}!`);
}

// personalGreeting("Name");
// personalGreeting("John");
// personalGreeting("Joanne");

// ! Multiple Parameters / Arguments

// ? Sometimes functions require more than one piece of data in order to run.

// ? We can set multiple parameters and pass multiple arguments seperated by a comma 'function(a,b)':

// * Add two numbers example:

function add(a, b) {
  console.log(a + b);
}

// add(5, 10);
// add(5);

// ! Default Parameters

// ? When declaring our function we can supply default parameters that will be used if the required data is not supplied.

function multiply(a = 5, b = 4) {
  console.log(a * b);
}

// multiply();
// multiply(20);
// multiply(10, 3);

// ! Return

// ? So far our functions have been calling a console.log() so that we can see our output.

// ? Using the 'return' keyword we can return a value from our function in case we wish to do something other than log it to the console. For adding it to an element in our UI.

// * Return Sum Example:

function returnSum(a, b) {
  return a + b;
}
returnSum(10, 5);
// * To see the output of a function that returns a value you can call the function in a console.log(function())
console.log(returnSum(10, 5));

let result = returnSum(10, 10);
console.log(result * 5);

// ! Scope:

// * Global Variables
const name = "Lydia";
const age = 21;
const city = "San Francisco";

function getPersonInfo() {
  // * Local Variables
  const name = "Sarah";
  const age = 22;
  const pet = "Dog";
  return `${name} is ${age} and lives in ${city} with her ${pet}.`;
}

console.log(getPersonInfo());
// console.log(pet);
updateUserStatus();

// ! Tasks:

// ? 1: Write a function with parameters of 'firstName' and 'surname'. The function should return a greeting string using the name provided.

// ? 2: Write a cash machine / atm function that takes in a withdrawal amount and a pin number as arguments and compares the supplied pin and requested withdrawal amount against a stored pin and account balance. If the pin matches and the balance is sufficient return a message approving the transaction, if not returning a message declining the transaction.

// ? 3: Write a function that takes in a string as an argument and sorts the string into alphabetical order, returning the result.

// ? 4: Write a function that takes a word as an argument and checks whether or not it is a palindrome (the same reversed as it is forwards – e.g. ‘racecar’ is ‘racecar’ backwards).

// ! Task 1:

function personalGreeting(firstName, surname) {
  alert(`Hello ${firstName} ${surname}`);
}

personalGreeting("John", "Smith");

// ! ATM / Cash Machine:

let accBal = 1000;
let storedPin = 1234;

function withdraw(withdrawAmount, pinNum) {
  if (accBal >= withdrawAmount && pinNum === storedPin) {
    return `Transaction approved. Please collect your £${withdrawAmount}.00.`;
  } else if (accBal >= withdrawAmount && pinNum !== storedPin) {
    return `Transaction denied. Incorrect Pin Number.`;
  } else {
    return `Transaction denied. Insufficient funds.`;
  }
}

console.log(withdraw(200, 1111));

// ! Task 3:

function stringSort(string) {
  return string.toLowerCase().split("").sort().join("");
}

console.log(stringSort("The quick brown fox jumps over the lazy dog"));

// ! Task 4:

function palindromeCheck(string) {
  let stringReversed = string.toLowerCase().split("").reverse().join("");
  if (stringReversed === string.toLowerCase()) {
    return `${string.toLowerCase()} backwards is ${stringReversed} therefore it IS a palindrome`;
  } else {
    return `${string.toLowerCase()} backwards is ${stringReversed} therefore it is NOT a palindrome`;
  }
}

console.log(palindromeCheck("Aibohphobia"));
