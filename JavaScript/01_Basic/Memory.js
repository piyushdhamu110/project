// Stack(Primitive){copy} ,
// Heap (Non-Primitive){by reference/original}

// STACK =>>>>>>>>>>>>>>>>>>>>>>

let myYoutubename = "jangra.com";
let anothername = myYoutubename; // here 'anothername' takes copy of 'myyoutubename' not it's original value
console.log(anothername);

anothername = "dhamu.com";

console.log(myYoutubename);
console.log(anothername);

// HEAP {Original/Reference} =>>>>>>>>>>>>>>>>>>>>

let userOne = {
  email: "user@gmail.com",
  upi: "user@sbi",
};

let userTwo = userOne;

userTwo.email = "google@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
