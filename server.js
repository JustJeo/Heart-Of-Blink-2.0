const express = require("express");
const layouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(layouts);

app.get("/", function(req, res) {
  res.send("Hello World!")
});

const server = app.listen(2500);

module.exports = server