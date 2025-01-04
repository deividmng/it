// ! Arrays

// * Think of an array as a list.
// * An array is a data structure we can use to store an ordered list.

// ? Arrays are declared in the same that way we declare variables
// ? However square brackets "[]" follow the assignment operator "="

// * EXAMPLE: "let array = []"

// ? Items in an array are separated by a comma within the square brackets

let array = ["Item 1", "Item 2", "Item 3"];

// * Referencing an array - same as any variable
console.log(array);

// * Array index
// ! JavaScript starts counting from zero (0)

console.log(array[0]);

// ! Arrays
// * Coffee Order Example:

let coffeeOrder = ["James - Americano", "Hannah - Frappuccino", "Alex - Latte"];

// * Log the array
console.log(coffeeOrder);

// * We can output the data in a table format
console.table(coffeeOrder);

// * If we want to access a specific item in the array
// * we can use bracket notation and reference the index [x]
console.log(coffeeOrder[0]);

// * Using bracket notation we can also edit / update items

coffeeOrder[0] = "James - Flat White";
console.log(coffeeOrder);

// * Referencing an index that is undefined, will return undefined
// * However we can also set new items to the index with bracket notation

console.log(coffeeOrder[3]);
coffeeOrder[3] = "New Array Item";
console.log(coffeeOrder[3]);

// ! Arrays
// * Properties and Methods
// ? As seen with other data, arrays have properties and methods we can access

// ? .length property
// * In the context of an array the .length property represents the number of items

console.log(coffeeOrder.length);

// ? .push() method
// * Adds a new item to the end of the array

coffeeOrder.push("Christian - Water", "Aisha - Orange Juice");
console.log(coffeeOrder);

// ? .pop() method
// * Removes the last item from the array

coffeeOrder.pop();
coffeeOrder.pop();
console.log(coffeeOrder);

// ? .slice() Example
let newCoffeeOrder = coffeeOrder.slice(0, 3);
console.log(coffeeOrder);
console.log(newCoffeeOrder);

// ! For Loop
// * Count to 10 Example:

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// * Loop over an Array:

let colours = [
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "Purple",
  "Pink",
  "Brown",
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "Purple",
  "Pink",
  "Brown",
  "Blue",
  "Green",
  "Red",
  "Yellow",
  "Orange",
  "Black",
  "Purple",
  "Pink",
  "Brown",
];

// console.log(colours[0]);
// console.log(colours[1]);
// console.log(colours[2]);
// console.log(colours[3]);
// console.log(colours[4]);
// console.log(colours[5]);
// console.log(colours[6]);
// console.log(colours[7]);
// console.log(colours[8]);

// * For Loop:

// * Rather than individually logging each item we can use a loop

// ! In order to breakdown the loop lets look at the 3 sections within brackets

// ? Firstly we are declaring our index - think of this as a loop counter.
// ? Secondly we are defining the conditions for our loop - loop while x is true.
// ? Thirdly we are instructing our counter to increase by one after each loop.

// * The body of the loop will be executed the necessary / specified number of times.
// * In our example, our loop will run once for every item in the array.

console.log(colours);
console.log(colours.length);

for (let i = 0; i < colours.length; i++) {
  console.log(colours[i]);
}

// * For Loop:
// ? We can also declare a for loop to run a stated number of times
// * Lets write a loop to find every multiple of 2 between 1-20

let multiplesOfTwo = [];

for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    multiplesOfTwo.push(i);
  }
}

console.log(`The multiples of 2 between 1 and 20 are: ${multiplesOfTwo}`);

// ! Increment Operator Demo i++
// let a = 1;
// console.log(a);
// let b = a++;
// console.log(a);
// console.log(b);
// console.log(a);

// let a = 1;
// console.log(a);
// let b = a;
// a = a + 1;
// console.log(a);
// console.log(b);

/*
! Tasks:

? 1: Create an array containing 3 of your favourite films. Use an array method of your choice to add 2 more items to your array, then using a loop I would like you to log each item to the console.

? 2: Using a loop, generate 10 random numbers between 1-100 and log them to the console.

? 3: Create a loop that counts backwards from 20 to 0 in the console.

? 4: Generate 5 random numbers between 1-50. For each number generated, check whether it is divisible by 5 or not. Log the result to the console.
*/
