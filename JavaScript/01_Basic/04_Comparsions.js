// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("2" < 1);
// console.log("02" > 1);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);

// The reason is that an equality check == and comparison >, <, >=, <= work differently
// Comparison convert null to a number, treating it as 0
// That's why null>=0 and null<=0 is true && null>0 is false

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);
// console.log(undefined <= 0);

// strict check{it also check's the data type}  ===

console.log("2" == 2);  // it converts string i.e., "2" into number {2}
console.log("2" === 2);
