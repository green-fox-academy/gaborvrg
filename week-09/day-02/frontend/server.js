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


app.get('/greeter', function (req, res) {
    // console.log(req.query.name + " " + req.query.title);
    if (req.query.name === undefined) {
        res.send({
            error: "Please provide a name!"
                });
    } else if (req.query.title === undefined) {
        res.send({
            error: "Please provide a title!"
                });
    } else if (req.query.name === "Petike" && req.query.title === "student"){
        res.send({
            welcome_message: "Oh, hi there " + req.query.name + " , my dear " + req.query.title + " !"
                });
    }
});

app.get('/appenda', function(req, res) {
    console.log(req.originalUrl); 
});



// app.listen(8080);
app.listen(8080, function() {
    console.log('server is running');
});
