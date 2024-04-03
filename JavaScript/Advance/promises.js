const promiseOne = new Promise(function (resolve, Reject) {
  // Do an async task
  // Data base calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// TWO

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved");
});

// THREE

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Shyam", email: "chai@example.com" });
  }, 3000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// FOUR

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "jangra", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((Myusername) => {
    console.log(Myusername);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// FIVE

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "dhamu", password: "54645" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 5000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// BEHIND THE SCENES

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    let data = await response.json();
    data = JSON.stringify(data); // used to convert object into string
    console.log(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}

getAllUsers();

// ABOVE EXAMPLE USING THEN AND CATCH

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
