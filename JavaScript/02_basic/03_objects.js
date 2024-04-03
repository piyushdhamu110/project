// literals

// Objects literals

const mySym = Symbol("key1");

const JsUser = {
  name: "jangra",
  "full name": "dhamu",
  [mySym]: "myKey1",
  age: 15,
  location: "sirsa",
  email: "lkj@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "jang@gmail.com";
// Object.freeze(JsUser); //no other changes applicable after this
JsUser.email = "nvkfjn@gmial.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

