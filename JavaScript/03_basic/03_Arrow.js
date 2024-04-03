const user = {
  username: "Jangra",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // this refers to inner contest
  },
};

// user.welcomeMessage()
// user.username="Dhamu"
// user.welcomeMessage()

// console.log(this);

function chai() {
  // OR  const chai=function(){}
  let temp = "Piyush";
  // console.log(this);
  // console.log(this.temp);
}

chai();

// ---------ARROW FUNCTION-------

const tea = () => {
  let name = "ram";
  //   console.log(this);
  //   console.log(this.name);
};

tea();

// Explict function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implict arrow function

// const addTwo = (num1, num2) => num1 + num2;
const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(12, 54));

// return an object in implict arrow function

const obj = () => ({ username: "Piyush Jangra" });

console.log(obj());
