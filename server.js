const express = require("express");
const layouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(layouts);

app.get("/", (req, res) => {
  res.render("index")
});
app.get('/songs', (req, res) => {
  res.render('songs');
});
app.get('/game', (req, res) => {
  res.render('game');
});
app.get('/results', (req, res) => {
  res.render('results');
});
app.get('/highscore', (req, res) => {
  res.render('highScore');
});

const server = app.listen(2500);

module.exports = server