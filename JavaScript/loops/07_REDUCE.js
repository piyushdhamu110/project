const number = [10, 20, 30, 60];
// let initialvalue = 0;
// const result = number.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, initialvalue);

// ----USING SIMPLE FUNCTION

// const result = number.reduce(function (acc, crtVal) {
//   console.log(`accumulator: ${acc} and currentValue: ${crtVal}`);
//   return acc + crtVal;
// }, 0);

// ----USING ARROW FUNCTION

// const result = number.reduce((acc, crtVal) => {
//   console.log(`accumulator: ${acc} and currentValue: ${crtVal}`);
//   return acc + crtVal;
// }, 0);

const result = number.reduce((acc, crtVal) => acc + crtVal, 0);

// console.log(result);

const shoppingCart = [
  {
    itemName: "Js",
    price: 999,
  },
  {
    itemName: "C++",
    price: 1999,
  },
  {
    itemName: "ML",
    price: 2999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalPrice);
