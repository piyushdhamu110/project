console.log("Number Conversion:-");
// let score= 32
// let score= "abc"
// let score= null
// let score= undefined
let score = true;

console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// conversion to number

// "33" => 33
// "abc"=> NaN
//  true => 1; false => 0

// Boolean conversion

console.log("Boolean conversion:-");
let isLoggedIn = 0;
// only empty string{= ""} and numeric value{= 0} is false
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true ; 0 => false
// "" => false ; "xyz" => true

// Conversion to String

console.log("String Conversion:-");

let someNumber = 21;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);



