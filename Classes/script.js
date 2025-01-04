// ! Classes

// ! Task 1 - Film Class

// * Define the film class with the relevant constructor
// ! When working with classes make sure to use capital letters to start the class name
class Film {
  constructor(title, director, releaseYear, genre) {
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genre = genre;
  }

  // * Add the getInfo() method to the class to display film info
  getInfo() {
    return `${this.title} is a ${this.genre} film directed by ${this.director}.`;
  }
}

// * Create instances of the Film class
// ! Remember to use "new" when creating a new instance of a class

const film1 = new Film(
  "Inception",
  "Christopher Nolan",
  2010,
  "Science Fiction"
);
const film2 = new Film("The Godfather", "Francis Ford Coppola", 1972, "Crime");
const film3 = new Film("Spirited Away", "Hayao Miyazaki", 2001, "Fantasy");

// * Use Get Info Method
// console.log(film1.getInfo());
// console.log(film2.getInfo());
// console.log(film3.getInfo());

// ! Task 2 - Book Class

// * Define the film class with the relevant constructor
class Book {
  constructor(title, author, publicationYear, genre, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.isAvailable = isAvailable;
  }

  // * borrow() method - checks the status of "isAvailable"
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `${this.title} has been borrowed.`;
    } else {
      return `${this.title} is currently unavailable and cannot be borrowed.`;
    }
  }

  // * returnBook() method to update status of "isAvailable"
  returnBook() {
    this.isAvailable = true;
    return `${this.title} has been returned.`;
  }

  // * getDetails() method to display book details
  getDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.publicationYear}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Available: ${this.isAvailable ? "Yes" : "No"}`);
  }
}
// * Line 73 uses a ternary operator:
// https://www.w3schools.com/react/react_es6_ternary.asp
// ! condition ? if true do this : if false do this

// * Create instances of the Book class
const book1 = new Book("1984", "George Orwell", 1949, "Dystopian");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");
const book3 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  1925,
  "Classic"
);

//   * Use borrow() method
console.log(book1.borrow());
console.log(book1.borrow());

// * Use returnBook() method
console.log(book1.returnBook());

// * Use getDetails() method
book3.getDetails();
