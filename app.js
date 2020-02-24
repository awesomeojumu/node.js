// Requiring express
const express = require("express");

//initialize my app
const app = express();

//initialinzing port
const PORT = process.env.PORT || 4000;

// req is request
// res is response
// "/" this is a path
// req and res are called Handlers
app.get("/", (req, res) => {
    res.send("My first Nodejs Connection");
});

//listening to the port
app.listen(PORT,  () => {
    console.log (`Server is running at port: ${4000}`)
});

