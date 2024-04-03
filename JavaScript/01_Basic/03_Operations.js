console.log("OPERATIONS");

let value = 4;
let negValue = -value;
console.log(negValue);

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "Piyush";
let str2 = " Jangra";
let str3 = str1 + str2;
console.log(str3);

console.log("Confusing conversions");

console.log("1" + 2);
console.log(1 + "3");
console.log("1" + 2 + 2);
console.log(1 + 2 + "5");
console.log(1 + "2" + 8);
console.log(6 + 1 + "2" + 8);

console.log(true);
console.log(+true); //here + is used to convert a string into boolean
console.log(+21);
console.log(typeof +21);
console.log("");
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.table([num1, num2, num3]);

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
