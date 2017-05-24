'use strict';

const express = require('express');
const app = express();

// app.use('/myapp', express.static('myapp'));
app.use(express.static('myapp'));

app.get('/', function get(req, res) {
  console.log(res);
  res.send(req);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});


app.listen(3000, function() {
    console.log('server is running');
});