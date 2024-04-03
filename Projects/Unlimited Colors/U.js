// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

// document.querySelector("#start").addEventListener("click", startChangingColor);  // this will not work here
// document.querySelector("#stop").addEventListener("click", stopChangingColor);  // this will not work here

// 


let intervalId;

// START CHANGING COLOR

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

// STOP CHANGING COLOR

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;  
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

