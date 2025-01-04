// ! Objects

// ? Properties = data contained within the object
// ? Methods = things that the object can do

// * Objects work with Key:Value pairs.
// * Keys are declared without quotes and seperated from values by a colon
// * Values can be any data type and are written accordingly
// * Pairs are seperated (,)

const objExample = {
  key1: "Value 1",
  key2: 2,
  key3: ["1", "2", "3"],
  exampleMethod: function () {
    return "I am a method.";
  },
};

// * Object Example - CoffeeShop

const coffeeShop = {
  name: "Costa - Manchester",
  branchNumber: 250,
  specialOffers: true,
  drinks: ["Americano", "Latte", "Tea"],
};

// * We can access the entire object by referencing its name
console.log(coffeeShop);

// * Using dot notation to access data within an object
console.log(coffeeShop.drinks);

// * Using bracket notation to access data in an array within an obj
console.log(coffeeShop.drinks[1]);
// * Bracket Notation can also be used to access keys from an obj
console.log(coffeeShop["branchNumber"]);

// * Dot notation can be used to assign new properties to an obj
coffeeShop.muffins = ["Blueberry", "Chocolate"];
console.log(coffeeShop.muffins);
console.log(coffeeShop);

// * Bracket notation can be used for the same purpose or to assign new value
coffeeShop["branchNumber"] = 100;
console.log(coffeeShop.branchNumber);

// * Adding Special Offers to our object
coffeeShop.breakfastOffer = "Free Bagel with any Coffee!";
coffeeShop.lunchOffer = "Free Coffee with any Sandwich!";

console.log(coffeeShop);

let offer = "No current offer.";
let time = 1100;

if (time < 1200) {
  offer = coffeeShop.breakfastOffer;
  console.log(offer);
} else if (time < 1500) {
  offer = coffeeShop.lunchOffer;
  console.log(offer);
}

// * Adding Methods to our obj
coffeeShop.open = function () {
  return "We are open, come on in!";
};

coffeeShop.close = function () {
  return "Sorry we are closed. Come back tomorrow morning.";
};

console.log(coffeeShop.open());
console.log(coffeeShop.close());

console.log(coffeeShop);

// * Alarm Clock Object

const alarm1 = {
  weekendAlarm: "Sleep in it's the weekend!",
  weekDayAlarm: "Get up at 7:00am.",
  checkAlarm: function (day) {
    if (day === "Saturday" || day === "Sunday") {
      return this.weekendAlarm;
    } else {
      return this.weekDayAlarm;
    }
  },
};

const alarm2 = {
  weekendAlarm: "Sleep in it's the weekend!",
  weekDayAlarm: "Get up at 5:30am.",
  checkAlarm: function (day) {
    if (day === "Saturday" || day === "Sunday") {
      return this.weekendAlarm;
    } else {
      return this.weekDayAlarm;
    }
  },
};

console.log(alarm1.checkAlarm("Monday"));
console.log(alarm1.checkAlarm("Sunday"));
console.log(alarm2.checkAlarm("Monday"));
console.log(alarm2.checkAlarm("Sunday"));

const user1 = {
  name: "Dave",
  greeting: function () {
    return `Hello ${this.name}`;
  },
};

const user2 = {
  name: "Joe",
  greeting: function () {
    return `Hello ${this.name}`;
  },
};

const user3 = {
  name: "Jane",
  greeting: function () {
    return `Hello ${this.name}`;
  },
};

console.log(user1.greeting());
console.log(user2.greeting());
console.log(user3.greeting());

//  ? Nested Objects
const employee = {
  id: 1,
  name: "John Doe",
  position: "Software Engineer",
  department: {
    name: "Engineering",
    location: "Building A",
    supervisor: {
      name: "Jane Smith",
      position: "Engineering Manager",
    },
  },
};

const library = {
  name: "Public Library",
  location: "City Center",
  books: [
    {
      id: "B001",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      details: {
        genre: "Fiction",
        year: 1925,
      },
    },
    {
      id: "B002",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      details: {
        genre: "Fiction",
        year: 1960,
      },
    },
  ],
};

// / ! JavaScript Objects Tasks:

// ? 1: Create an object called ‘person’ with keys of name age and city. Once created log your object to the console.

// ? 2: Add a method to your ‘person’ object that returns a string greeting the person by name.

// ? 3: Update the values of your ‘person’ object with dot notation to familiarise yourself with how new values can be set to an object.

// ! Nested Objects – Stretch Tasks:

// * Use the nested objects at the bottom of the reference file to complete the tasks below. Reference the requested data via the nested objects and log it to the console.

// ? 1: Log the name of John's supervisor to the console.

// ? 2: Log the title of 'The Great Gatsby' to the console.

// TODO: If you manage to complete all of the tasks, have a go at creating your own nested object.
