// Dates

const myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());

// let myCreateDate = new Date(2023, 2, 2);
// let myCreateDate = new Date("2023-01-15");
// let myCreateDate = new Date("01-15-2023");
let myCreateDate = new Date(2032, 2, 12, 16, 32, 54);
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // time is in milliseconds
// console.log(Math.floor(myTimeStamp / 1000));
// console.log(myCreateDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "short",
}));