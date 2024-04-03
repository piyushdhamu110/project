const coding = ["js", "ruby", "java", "c++"];

// for each loop

// coding.forEach(function (val) {
//   console.log(val);
// });



// arrow function



// coding.forEach((item) => {
//   console.log(item);
// });



// using alredy declared function



// function printme(item) {
//   console.log(item);
// }
// coding.forEach(printme);



// MORE ABOUT FOREACH LOOP





// coding.forEach((item,index,array)=>{
//     console.log(item,index,array);
// })
// coding.forEach((x, y, z) => {
//   console.log(x, y, z);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
