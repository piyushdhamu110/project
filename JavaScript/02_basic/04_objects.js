// Singleton object

// const tinderUser= new Object()

// Non-singleton object

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Shyam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "rohit",
      lastname: "sharma",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

// MERGING OF OBJECTS

const obj1 = { 1: "a", 2: "g" };
const obj2 = { 3: "r", 14: "c" };
const obj3 = { 9: "r", 8: "u" };

// const obj3 = { obj1, obj2 };
// const obj4 = Object.assign( obj1, obj2, obj3);c

const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 3,
    email: "hq@gmail.com",
  },
  {
    id: 2,
    email: "ha@gmail.com",
  },
];

// console.log(users[0].email);
// console.log(users[1].id);
// console.log(users[2].email);

console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //stored in an array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // puts keys and value in same array

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));

// DESTRUCTING

const course = {
  name: "jangra",
  age: 15,
  courseInstructor: "dhamu",
};

// course.courseInstructor

const { courseInstructor: XYZ } = course;

// console.log(courseInstructor);
console.log(XYZ);

// API

// API in Objects form

// {
//   "name":"jangra",
//   "courseName":"Js in hindi",
//   "price":"free"
// }

// API in Array form

[
  {}, 
  {},
  {}
]