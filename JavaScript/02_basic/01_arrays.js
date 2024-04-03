// Arrays in JavaScript
// --->Arrays can have different types of datatypes{int,string,bool}
// --->size of an array can be changed

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagaraj"];

const myArr2 = new Array(1, 5, 6, 9, 7);
// console.log(myArr2);
// console.log(myArr);

// Array Methods

myArr.push(12);
// to add en element at last position

myArr.pop();
// to remove last element

myArr.shift();
// to remove first element

myArr.unshift(10);
// to add element at first position

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(); //It copies the array but in string format

// console.log(myArr);
// console.log(newArr);
// console.log(typeof myArr);
// console.log(typeof newArr);

// Slice,Splice

console.log("A:", myArr);

const myn1 = myArr.slice(1, 3);
console.log("Slice Operation:", myn1);

console.log("B:", myArr);

const myn2 = myArr.splice(1, 3);
console.log("Splice Operation:", myn2);
console.log("C:", myArr);
