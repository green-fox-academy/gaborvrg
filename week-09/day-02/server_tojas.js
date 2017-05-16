'use strict';

var express = require('express');
var five = require('five');

var app = express(); 

app.get('/', function (req, res) {  //endpoint - a get kereshez
    // res.send('<a href="">Ez itt a fooldal</a>'); // akar html tag-ekkel is mukodik
    // res.send('Ez itt a fooldal');
    res.send({      // akar object is mehet bele
        name: "Gabor",
        age: 43,
        gender: 'male',
        banon: req.query.banon // ?? 
    });
});

// app.get('/five', function(req, res) {
//     // res.send(five.klingon());
//     var lang = req.query.lang || 'klingon';
//     var fiveFunct = five[lang];
//     res.send(fiveFunct());
// });

app.get('/five/:lang', function(req, res) { // masik megkozelites
    // res.send(five.klingon());
    var lang = req.params.lang;
    var fiveFunct = five[lang];
    res.send(fiveFunct());
});

app.listen(3000);