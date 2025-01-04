// ! Type Conversion - String

// * Sometimes we are required to convert the type of our data

// ? String Conversion - automatic  when the string form of a value is needed e.g. alert()

// * When an alert is called, the argument passed to it is automatically converted to string.

// alert(1000);

// ? We can use String() function - `let example = String(value)`

let oneThousand = String(1000);
console.log(oneThousand);
console.log(1000);

// ! Type Conversion - Number
// ? Numeric Conversion - automatically takes place in mathematical functions and expressions
// ! TIP: Ensure numbers are a number data type before working with the data

console.log("10" / "2");
console.log("10" + "10");

// ? We can use Number() function - `let example = Number(1000)`
// ! If string is not a valid number - `NaN` is returned
// * NaN = Not a Number

let numberOne = Number("1");
let numberTwo = Number("Two");

console.log(numberOne);
console.log(numberTwo);

// ! Type Conversion - Boolean
// ? We can use Boolean() function - `console.log(Boolean("hello"))` = true
// ! empty values = false
// * other values = true

console.log(Boolean("value"));
console.log(Boolean(""));

// ! Type Conversion - Check Type
// * We can use "typeof" to check the type of our data.

console.log(typeof 100);
console.log(typeof "String");
console.log(typeof false);

// ! Interaction
// ? alert - Shows the user a modal with a message and waits for users to press "ok".
// ! The message can be passed to the alert method manually or via a variable.

// alert("Hello");
// let message = "Good Afternoon";
// alert(message);

// ! Interaction
// ? prompt - Shows the user a modal with a message and an input field, ok and cancel buttons.

// let day = prompt("What day is it today?");

// console.log("The day today is " + day + "!");

// ! Template Literals / Strings
// * More streamlined method of utilising variable data
// ? To template literals we wrap our statement in backticks and then wrap the variable in "${variableName}"

// console.log(`The day is today ${day}!`);

// ! Interaction
// ? confirm - Shows the user a modal with a question and two buttons, ok and cancel.
// ! Registers the result as true or false

// console.log(confirm("Are you sure?"));

// ! Properties and Methods

// ? Properties - Information about our data
// ? Methods - Actions we can complete with our data, whether that be manipulating it or filtering it for example

// ! STRING .length property - returns the number of characters in a string - inluding spaces and special characters
// ? Properties provide information about our data
let exampleString = "Hello World";
console.log(exampleString.length);

// ! Method Examples - .toUpperCase / .toLowerCase
// ? Methods complete an action with our data or do somthing to it
console.log(exampleString.toUpperCase());
console.log(exampleString.toLowerCase());

/*
! Tasks:

? 1: Use prompt to take in a users name, using the value I would like you log a message to the console greeting them.

? 2: Use prompt to take in a number, I would like you to multiply that number by 10 and then display an alert containing the result.

? 3: Research the JavaScript "Math" object and utilise the in-built methods to achieve the following:

? - Take a decimal number (e.g. 1.5) and round it to its nearest integer (whole number).
? - Take a decimal number (e.g. 1.5) and round it DOWN to its nearest integer (whole number).
? - Generate a random number between 1 and 10.
*/

// ! Task 1:

// let user = prompt("What is your name?");
// console.log(`Good afternoon ${user}!`);

// ! Task 2:
// let numToMultiply = Number(
//   prompt("Provide a number that you would like to be multiplied by 10:")
// );
// console.log(numToMultiply);
// alert(numToMultiply * 10);

// ! Task 3:
let num = 1.5;
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));

// ? Code to generate a random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
