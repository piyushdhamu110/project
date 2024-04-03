let name = "Jangra";
// console.log(name[2]);
let age = 32;

// console.log(name+age+ "Ok");

// console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String("abc-lmn-pqr-xyz");

// console.log(gameName);
// console.log(gameName[2]);
// console.log(gameName.__proto__);
console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('u'));
console.log(gameName.split('-'));

const newString = gameName.substring(2, 7);
// console.log(newString);

const anotherString = gameName.slice(-10, 4);
// console.log(anotherString);

const newStringOne = "    JAnGra  l  ";
// console.log(newStringOne); 
// console.log(newStringOne.trim());

const url = "https://jangra.com/jangra%30dhamu";
// console.log(url);
// console.log(url.replace("an", "-"));

console.log(url.includes("jangra"));
console.log(url.includes("Jangra"));



