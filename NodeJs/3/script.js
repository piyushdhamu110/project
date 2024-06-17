const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("Middle start");
  next();
});

app.use(function (req, res, next) {
  console.log("Middle start once more");
  next();
});

app.get("/", function (req, res) {
  res.send("this is home section");
});
app.get("/account", function (req, res) {
  res.send("this is account section");
});

app.get("/about", function (req, res) {
  res.send("this is about section");
});

app.get("/profile", function (req, res, next) {
  return next(new Error("something went wrong"));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("something broke!");
});

app.listen(4000);
