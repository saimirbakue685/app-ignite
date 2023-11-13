/* 
 * Filename: complex_code.js
 * Description: This code demonstrates a complex and sophisticated JavaScript program.
 */

// Utility function to generate a random number between a given range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to calculate factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Class representing a Rectangle
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

// Asynchronous function to fetch data from a server
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Function to check if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Object representing a user
const user = {
  name: "John Doe",
  age: 30,
  profession: "Software Engineer",
  getAddress: function() {
    return "123 Main St, City, State";
  },
  displayInfo: function() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Profession: ${this.profession}`);
    console.log(`Address: ${this.getAddress()}`);
  }
};

// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop through the array and display even numbers
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Generate a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log(`Random number: ${randomNumber}`);

// Calculate factorial of a random number
const factorialNumber = factorial(randomNumber);
console.log(`Factorial of ${randomNumber}: ${factorialNumber}`);

// Create a new rectangle object and display its properties
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle Area: ${rectangle.getArea()}`);
console.log(`Rectangle Perimeter: ${rectangle.getPerimeter()}`);

// Fetch data from an API and display it
fetchData('https://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Check if a random number is prime
console.log(`${randomNumber} is prime: ${isPrime(randomNumber)}`);

// Display user information
console.log("User Info:");
user.displayInfo(); 

// ... rest of the code (more than 200 lines)