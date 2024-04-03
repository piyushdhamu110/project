// SWITCH CASE

const month = 2;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    break;
}

//  FALSY VALUES

//  false ,0, -0, BigInt 0n, "", null, undefined, NaN

//  TRUTHY VALUES

// "0", 'false'," ", [],{},function(){}

// EMPTY ARRAY CHECK

let arr = [];
if (arr.length === 0) {
  // console.log("Array is empty");
}

// EMPTY OBJECT CHECK

const obj = {};

// Object.keys(obj) will a array of keys

if (Object.keys(obj).length === 0) {
  // console.log("Object is empty");
}

// false == 0  --> True
// false == '' -->True
// 0 == ''  -->True

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10;  --> 5
// val1 = null ?? 12;  --> 12
// val1 = undefined ?? 45;  --> 45
// val1 = null ?? undefined;  -->undefined
// val1 = undefined ?? null;  --> null
val1 = null ?? 34 ?? 65 ?? 54;

console.log(val1);

// TERNIARY OPERATOR

// condition ? true : false;

const icePrice = 100;
icePrice >= 80
  ? console.log("Price is more than 80")
  : console.log("Price is less than 80");
