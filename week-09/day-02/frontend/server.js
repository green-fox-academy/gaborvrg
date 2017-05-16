'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));

app.get(/doubling)


app.listen(8080);