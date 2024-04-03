// const coding = ["js", "ruby", "java", "c++"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

// USING FOREACH LOOP

const newNums = [];

myNums.forEach((num) => {
  if (num > 5) {
    newNums.push(num);
  }
});
// console.log(newNums);

const books = [
  {
    title: "B1",
    genre: "Fiction",
    publish: 1987,
    edition: 2012,
  },
  {
    title: "B2",
    genre: "Non-Fiction",
    publish: 1985,
    edition: 2011,
  },
  {
    title: "B3",
    genre: "History",
    publish: 1932,
    edition: 2000,
  },
  {
    title: "B4",
    genre: "Fiction",
    publish: 1327,
    edition: 2045,
  },
  {
    title: "B5",
    genre: "Science",
    publish: 1954,
    edition: 2010,
  },
  {
    title: "B6",
    genre: "Fiction",
    publish: 1887,
    edition: 3214,
  },
  {
    title: "B7",
    genre: "History",
    publish: 1999,
    edition: 2006,
  },
];

// const userBooks = books.filter((bk) => bk.genre === "Fiction");

const userBooks = books.filter(
  (bk) => bk.publish >= 1950 && bk.genre === "History"
);
console.log(userBooks);
