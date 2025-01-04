// ! Conditional Statements

// * In order to evaluate conditions we need comparison operators
// * Comparison Operators take the left value and compare it to the right value
// * the result will always be a boolean: "true" or "false"

// ! Comparison Operators

// ? Equal to (==)
// ? Equal value and type (===)
// ? Not Equal (!=)
// ? Not Equal value or type (!==)
// ? Greater than (>)
// ? Less than (<)
// ? Greater than or Equal to (>=)
// ? Less than or Equal to (<=)

let num = 100;

// * Equal To Operator == (Check if value on the left is equal to the value on the right)
console.log(num == 100);
console.log(num == "100");

// * Strictly Equal To === (Checks the value AND data type)
console.log(num === "100");
console.log(num === 100);

// ! If Statement
// ? Check if a condition is true and if so execute the associated code block
// * Weather Example:

let weather = "Sunny";

weather = "Rain";

// *We define our condition to evauluate in the parentheses(condition)
if (weather === "Sunny") {
  // * Code we want to run if the condition is true
  console.log("Grab your sunglasses!");
}

// ! If / Else Statement
// ? Check if a condition is true and if so execute the associated code block
// ? Else allows us to specify a code block that runs if our condition is false
// * Weather Example:

weather = "Sunny";
weather = "Rain";

// if (weather === "Sunny") {
//   console.log("Grab your sunglasses!");
// } else {
//   console.log("Not too sure at the minute, look out the window.");
// }

// ! If / Else If / Else Statement
// ? Check if a condition is true and if so execute the associated code block
// ? Else if is added between if and else to add another condition
// * Weather Example:

weather = "Sunny";
weather = "Rain";
weather = "Snow";

// if (weather === "Sunny") {
//   console.log("Grab your sunglasses!");
// } else if (weather === "Rain") {
//   console.log("Grab an umbrella!");
// } else {
//   console.log("Not too sure at the minute, look out the window.");
// }

// ! If / Else If / Else Statement - With multiple else ifs

weather = "Sunny";
weather = "Rain";
weather = "Snow";
weather = "Foggy";

if (weather === "Sunny") {
  console.log("Grab your sunglasses!");
} else if (weather === "Rain") {
  console.log("Grab an umbrella!");
} else if (weather === "Snow") {
  console.log("It's snowing, grab some gloves!");
} else {
  console.log("Not too sure at the minute, look out the window.");
}

// ! Logical Operators

// ? Allow us to check against more than one condition

// ? and (&&)
// ? or (||)
// ? not (!)

// ! Logical Operators - || (or)
// ? Allow us to check against more than one condition
// ? Be sure to add a full condition either side of the operator
// * Traffic Light example

let trafficLight = "Green";
// trafficLight = "Red";
// trafficLight = "Amber";

if (trafficLight === "Red" || trafficLight === "Amber") {
  console.log("Stop!");
} else {
  console.log("Go!");
}

// ! Refactored simpler version using !(not)
if (trafficLight !== "Green") {
  console.log("Stop!");
} else {
  console.log("Go!");
}

// ! Logical Operators - && (and)
// ? Allow us to check against more than one condition
// * Number between 5 and 10 example

let number = 8;
number = 4;

if (number > 5 && number < 10) {
  console.log(`${number} is between 5 and 10`);
} else {
  console.log(`${number} is NOT between 5 and 10`);
}

// ! Switch Statement

// ? Alternate conditional statement used to compare a value against multiple options
// ? We pass a value to our switch statement and define cases that will be compared against it
// ? Once a matching case is found, the associated code is exectuted and we exit the statement

// ! The "break" keyword instructs our code to exit the code block

// * Days of the week example

// * Declare our "day" variable to check the value of
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Weekend is over! Happy Monday!");
    break;
  case "Tuesday":
    console.log("Second day of the week!");
    break;
  case "Wednesday":
    console.log("Halfway through the week!");
    break;
  case "Thursday":
    console.log("It's almost Friday!");
    break;
  case "Friday":
    console.log("Happy Friday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the Weekend!");
    break;
  default:
    console.log("Day not recognised. Try again.");
}

// ! Tasks

// ? 1: Write a conditional statement to check whether a customer is old enough to be granted access to a film with a rating of 18. Check the value of a variable named "age" and log a message to the console either granting or denying them access depending on their age.

// * You could expand upon this activity by obtaining the age with a prompt.

// ? 2: Write a conditional statement to check whether a number is odd or even and log a message to the console stating whether the number is odd or even.

// ? 3: Write a conditional statement to check whether a number is divisible by 3 or 5 and log the result to the console.

// ? 4: Write a conditional statement to check whether a number is divisible by 3 and / or 5. If the number is divisible by 3 log "Fizz" to the console, if the number is divisible by 5 log "Buzz" to the console, if the number is divisible by 3 and 5 log "Fizz Buzz" to the console and if the number is divisible by neither 3 or 5 log the number to the console.

// * Helpful Hint:

// * For tasks 2,3 and 4 you will need to make use of the remainder operator:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

// * You will also need to be conscious of the order of your conditions.

// ! Task 1:

// let age = prompt("How old are you?");

// if (age > 17) {
//   console.log("Please continue.");
// } else {
//   console.log("Sorry you're not old enough.");
// }

// if (age < 18) {
//   console.log("Sorry you're not old enough.");
// } else {
//   console.log("Please continue.");
// }

// ! Task 2:

let oddEven = 10;
oddEven = 9;

if (oddEven % 2 === 0) {
  console.log(`${oddEven} is an even number.`);
} else {
  console.log(`${oddEven} is an odd number.`);
}

// ! Task 4:

let fizzBuzz = 9;

if (fizzBuzz % 3 === 0 && fizzBuzz % 5 === 0) {
  console.log("FizzBuzz");
} else if (fizzBuzz % 3 === 0) {
  console.log("Fizz");
} else if (fizzBuzz % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(fizzBuzz);
}

// ! Switch Example
let numToCheck = 10;
switch (true) {
  case numToCheck % 3 == 0 && numToCheck % 5 == 0:
    console.log("Fizz Buzz");
    break;
  case numToCheck % 3 == 0:
    console.log("Fizz");
    break;
  case numToCheck % 5 == 0:
    console.log("Buzz");
    break;
  default:
    console.log(numToCheck);
}
