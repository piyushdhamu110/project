// setting up parser for from

const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up public static files
app.use(express.static(path.join(__dirname, 'public')))

 
// setting up EJS forEJS pages
// install ejs -->  npm i ejs
// setup ejs as a view engine
app.set('view engine','ejs')



app.get('/', function (req, res) {
    res.render("index");
})


app.get('/profile/:username', function (req, res) {
    // res.send("Running..");
    res.send(req.params.username);
})

app.get('/profile/:username/:age', function (req, res) {
    // res.send("Running..");
    res.send(req.params);
    // res.send(req.params.age);
})

app.listen(3000, function () {
    console.log("its running....");
});

    

// dynamic routing
// dynamic routing
// how to get data coming from frontend at backend route


