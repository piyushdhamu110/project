const arr1 = [1, 5, 6, 4];
const arr2 = [65, 54, 32, 98, 100];

// arr1.push(arr2) //changes the existing array

// console.log(arr1);
// console.log(arr1[4]);
// console.log(arr1[4][2]);

const arr3 = arr1.concat(arr2); //returns new array
// here you can add only two array's
// console.log(arr3);

// Spread

const all_num = [...arr1, ...arr2, ...arr3]; // here you can add more than two array's
// console.log(all_num);

const another_arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, [11, 12]]];

const real_another_arr=another_arr.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

// console.log(another_arr);
// console.log(real_another_arr);


console.log(Array.isArray("Jangra"));
console.log(Array.from("Jangra"));
console.log(Array.from({name: "jangra"})); //interesting


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));