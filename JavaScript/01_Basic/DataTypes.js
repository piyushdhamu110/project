// Javascript is dynamically types langauge

// Primitive
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// String
let str = "jangra";

// Number
let score = 100;

// Bollean
let isLoggedIn = false;

// Null
let outsideTemp = null;

// undefined
let userEmail;

// Symbol
let id = Symbol("123");
let anotherId = Symbol("123");
console.log(typeof anotherId);
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

// BigInt
const bigNumber = 313216546897986546465n;
console.log(typeof bigNumber);

// Reference Type (Non Primitive)
// Array, Objects, Functions

// Array
const heros = ["shaktiman", "naagraj", "ironman"];
console.log(typeof heros);
// Objects
let myObj = {
  name: "jangra",
  age: 654,
};
console.log(typeof myObj);

// Function
const myFunction = function () {
  console.log("Hello World");
};
console.log(typeof myFunction);
