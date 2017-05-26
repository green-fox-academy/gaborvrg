'use strict';

const express = require('express');
const app = express();

var playlists = [
  { "id": 1, "title": "Favorites", "system": 1},
  { "id": 2, "title": "Music for programming", "system": 0},
  { "id": 3, "title": "Driving", "system": 0},
  { "id": 5, "title": "Fox house", "system": 0},
];

var tracks = [ 
  { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
  { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" },
  { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
  { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" },
  { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
  { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" },
  { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
  { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" },
  { "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
  { "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }

];

app.use(express.static('myapp'));

// app.get('/', function get(req, res) {
//   console.log(req);
//   res.send(req);
// });

app.get('/playlists', function get(req, res) {
  // console.log(playlists);
  res.send(playlists);
});

app.get('/playlist-tracks', function get(req, res) {
  // console.log(tracks);
  res.send(tracks);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

app.listen(3000, function() {
    console.log('server is running');
});