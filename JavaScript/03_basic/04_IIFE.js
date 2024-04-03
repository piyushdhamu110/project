// Immediately Invoked Function Expressions {IIFE}

// Named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();

// Unnamed IIFE

(() => {
  console.log(`DB CONNECTED TWO`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})(`Jangra`);
