let a = 10; //local scope
const b = 20; //local scope
var c = 30; //global scope

if (true) {
  //block scope
  let a = 100;
  const b = 200;
  c = 300;

  //   console.log("INNER A: ",a);
  //   console.log("INNER B: ",b);
}

// console.log("OUTER A: ",a);
// console.log("OUTER B: ",b);
// console.log("OUTER C: ",c);

// NESTED FUNCTION

function one() {
  const username = "piyush";

  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);
  two();
}

one();

if (true) {
  const username = "jangra";
  if (username === "jangra") {
    const website = " youtube";
    // console.log(username + website);
  }
}

// =============INTERESTING==========

console.log(addone(5));

function addone(num) {
  return num + 1;
}
console.log(addone(5));
console.log(addone(5));

function addone(num) {
  return num + 7;
}
console.log(addone(10));

// console.log(addTwo(10));
// const addTwo = function (num) {
//   return num + 2;
// };

// --> above declaration type of function will give error because we call the function earlier

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(10));
