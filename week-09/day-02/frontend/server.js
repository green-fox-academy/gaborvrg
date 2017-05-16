'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));

app.get('/doubling', function(req, res) {

    if (req.query === {} || req.query.input === undefined) {
        res.send( {
            error: "Please provide an input!"
        });
    } else {
        res.send( {
            received: parseInt(req.query.input),
            result: req.query.input * 2
        });
    }
});


// app.listen(8080);

app.listen(8080, function() {
    console.log('server is running');
});
