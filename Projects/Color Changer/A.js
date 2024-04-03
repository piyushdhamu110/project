const buttons = document.querySelectorAll(".btnbox");
const body = document.querySelector("body");
// console.log(buttons);

// buttons.forEach(function (btn) {
//   console.log(btn);
// });

buttons.forEach((btn) => {
  // console.log(btn);

  btn.addEventListener("click", function (event) {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    } else {
      body.style.backgroundColor = event.target.id;
    }
  });
});
