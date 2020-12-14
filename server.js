// Require Statements
const express = require("express");
const layouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
// const fs = require("fs")
const app = express();

const db = require("./models");
const album = require("./models/album");

// Middleware
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(layouts);

app.use(methodOverride("_method"));

// Routes
// Get all albums
app.get("/", (req, res) => {
  // const albums = fs.readFileSync()
  db.album
    .findAll()
      .then(returnedAlbum => {
        console.log( "----------------Albums WORK!!!! -----------")
        // albums.forEach(function(album) {
        console.log(returnedAlbum)
        res.render("home", {
      albumName: returnedAlbum
    })
  })
});
// Get all songs
app.get('/songs', (req, res) => {
  db.song.findAll().then(returnedSong => {
    console.log(" -------------- Songs WORK!!! --------------")
    console.log(returnedSong)
    res.render('songs', {songName: returnedSong[1].songTitle});
  })
});
// Get one game
app.get('/game', (req, res) => {
  res.render('game');
});
// Get one score
app.get('/results', (req, res) => {
  res.render('results');
});
// Get all scores
app.get('/highscore', (req, res) => {
  res.render('highScore');
});

app.listen(2500, function() {
  db.sequelize.sync()
})

module.exports