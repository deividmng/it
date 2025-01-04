// ! console log - This is a method of logging the result of our code to the console

// * The console - An object in JavaScript

// * Our Web Console can be used to log messages and view data.
// * We can also use the Console to debug our code and read errors.

console.log("Hello World");

// ! Semi-Colons ';'

// * We must add a semi-colon at the end of our statements.

// * JavaScript will automatically insert semi-colons if missed,
// * however, as best practice to avoid bugs we should try to end
// * all of our statements with them.

// * We can write statements one after another on one line.

// * Usually statements are separated onto different lines for readability.

console.log("Hello");
console.log("World");

// ! Variables

// * Variables allow us to store data under a label or reference

// ? Variables can be written in numerous ways with different keywords to declare them

// ! let - varaible declaration keyword

// * We declare a Variable with the 'let' keyword followed by
// * the assingment operator '='

// * As an example we will create a variable named 'greeting'
// * and assign it the word "Hello"

// ! Note that variable names are case sensitive.

let greeting = "Hello";

// ! Now we have stored the data we can reference it via our variable name

console.log(greeting);

// ! Variables - var

// * You may come across the 'var' keyowrd being used to declare
// * variables. However, this is an older method.

// ! Avoid using 'var' and stick to using 'let'

// ! Variables - Reassign Values

// * Once declared, we can assign new value to 'let' variables.

// * To assign a new value to a variable we reference the variable
// * name followed by the assignment operator (=) and the new value.

greeting = "Good Morning";
console.log(greeting);

greeting = "Good Afternoon";
console.log(greeting);

// ! If you try to redeclare a variable rather than assign it a new value you will encounter an error
// let greeting = "New Value";

// ! Variables - const

// * We can declare constant variables with the 'const' keyword.

// * The keyword 'const' should be used for variables where the data
// * will not change, the value will remain constant.

const sky = "Blue";
console.log(sky);

// ! If you try to assign a new value to a constant you will get an error
// sky = "Green";

// ! Data Types

// * Values in JavaScript can be different data types.

// ? Dynamically Typed - Data Types exist but variables arent bound to type

// * Our 'greeting' and 'sky' variables are examples of String's.

// ? String - Surrounded by "Quotes"

// ! 'Single Quotes'
// ! "Double Quotes"
// ! `Backticks`

let string1 = "Single Quotes";
let string2 = "Double Quotes";
let string3 = `Backticks`;

// ! Data Types

// ? Number
// * Number - Integer and Floating Points
// ! Mathematical Operations

// * BigInt - Represents Integers of arbitrary length
// ! Rarely Needed
// *Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt

let integer = 100;
let float = 1.5;

console.log(integer, float);

// * We can use mathematical operations in JavaScript

console.log(integer + 100);
console.log(integer / 2);
console.log(integer * 3);
console.log(50 * 5);

let test = "1000";
console.log(test);

// ! Anything wrapped in quote marks or backticks is a string

// ! Data Types

// * Boolean - True or False
// ! Evaluate comparisons or conditions

let boolean = true;
console.log(boolean);
boolean = false;
console.log(boolean);

// ! Data Types

// * Null - Doesn't fall under any specific type
// ! Forms its own 'null' type

let empty = null;
console.log(empty);

// ! Data Types

// * Undefined - Value not assigned therefore it is undefined
// ! Variables declared but not assigned

console.log(undefined);

// ! String Concatination

let firstName = "Christian";
let age = 30 + 2;

console.log(firstName);
console.log("My name is" + firstName);
console.log("My name is" + " " + firstName);
console.log("My name is " + firstName + ". And I am " + age + " years old");

/*
! Tasks:

? 1: Create a variable that stores your name, using string concatenation I would like you to construct a string and use an alert to display the greeting to the user e.g. “Hello John”.

? 2: Create additional variables to store your favourite colour and your favourite film or tv series. Using string concatenation construct and log a sentence including your name and these values to the console.

? 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the "breakfast", "lunch" and dinner "variables" to what you are eating today and log the new values to the console. 
*/

// ! Task 1:
let username = "John";
username = "Jane";

alert("Hello " + username);

// ! Task 2:
let favColour = "Blue";
let favSeries = "Breaking Bad";

console.log(
  "Hi my name is " +
    firstName +
    " my favourite colour is " +
    favColour +
    " and my favourite series is " +
    favSeries
);

// * Template Literal Version:
console.log(
  `My name is ${firstName}, my favourite colour is ${favColour} and my favourite TV show is ${favSeries}.`
);

// ! Task 3:

let breakfast = "Cereal";
let lunch = "Sandwich";
let dinner = "Pasta";

console.log("Breakfast: " + breakfast);
console.log("Lunch: " + lunch);
console.log("Dinner: " + dinner);

breakfast = "Toast";
lunch = "Wrap";
dinner = "Pizza";

console.log("Breakfast: " + breakfast);
console.log("Lunch: " + lunch);
console.log("Dinner: " + dinner);
