// for of

const arr = [1, 2, 3, 4];

for (const num of arr) {
  // console.log(num);
}

const greetings = "HELLO WORLD!";
for (const greet of greetings) {
  if (greet === " ") continue;

  //   console.log(`Char in greeting ${greet}`);
}

// -----------MAPS-----------

// USE OF 'new' KEYWORD IN JS

// THE 'NEW' KEYWORD IS USED IN JAVASCRIPT TO CREATE A OBJECT FROM A CONSTRUCTOR FUNCTION. THE 'NEW' KEYWORD HAS TO BE PLACED BEFORE THE CONSTRUCTOR FUNCTION CALL AND WILL DO THE FOLLOWING THINGS: CREATES A NEW OBJECT

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES OF AMERICA");
map.set("FR", "FRANCE");
map.set("FRf", "FRANCE");
map.set("FRd", "FRANCE");
map.set("IN", "INDIA");

// console.log(map);

for (const key of map) {
  // console.log(key); // this will print an array of each key and its value seperately
}

// To print key and value seperately

for (const [key, value] of map) {
  // console.log(`${key}:-${value}`);
}

const obj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  py: "python",
};

// for (const [key, value] of obj) {
//   console.log(`${key}:-${value}`);
// }

// for of loop on objects
// --> objects are not iterable using for of loop
