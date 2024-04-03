function sayMyName() {
  console.log("P");
  console.log("I");
  console.log("Y");
  console.log("U");
  console.log("S");
  console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;
}

const result = addTwoNumbers(5, 3);

// console.log("Result:", result);

// console.log(addTwoNumbers(5, "3"));
// console.log(addTwoNumbers(5, null));
// console.log(addTwoNumbers(5, undefined));

function loginUserMessage(username = "piyush") {
  //   if (username === undefined) {
  //     return "Please enter a username";
  //   }
  if (!username) {
    return "Please enter a username";
  } else {
    return `${username} just logged in`;
  }
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Dhamu"));

function calculateCartPrice(...num1) {
  // ... --> rest operator
  return num1;
}

// console.log(calculateCartPrice(100, 200, 300, 400));

// object in function

const user = {
  username: "Shyam",
  price: 999,
  age: 13,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user); //alredy created object(user) is passed as arrgument

handleObject({
  username: "Ram",
  price: 899,
});

// arrays in functions

const myNewArray = [200, 300, 400, 600, 700];

function returnSecondValue(getArray) {
  return getArray[2];
}

console.log(returnSecondValue(myNewArray));
