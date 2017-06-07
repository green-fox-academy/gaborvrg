'use script';

const express = require('express');
const mysql = require("mysql");
const bodyParser = require('body-parser');
let app = express();

app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "ceasar_cipher"
});

conn.connect(function(err){
	if(err){
		console.log("Error connecting to Db");
		return;
	}
	console.log("Connection established");
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

let decoder = function(text, shift) {
	let decodedLetterList = [];
	let textLetterList = text.split('');
	textLetterList.forEach(function(elem) {
		lettercode = elem.charCodeAt();
		if (lettercode !== 32) {
			decodedLetterList.push(String.fromCharCode(lettercode - 3));
		} else {
			decodedLetterList.push(String.fromCharCode(lettercode));
		}
	});

	let response = {
		"status": "ok",
		"text": decodedLetterList.join('')
	};
	return response;
};

app.post('/decode', function(req, res) {
	// dataCheck(req.body.text, req.body.shift);
	let decodedText = decoder(req.body.text, req.body.shift);
	console.log(decodedText.text);
	// res.send(decoder(req.body.text, req.body.shift));
	conn.query('INSERT INTO ceasar (decoded_text) VALUES ("' + decodedText.text  + '")', function(err,rows){
		if(err) {
			console.log(err.toString());
			return;
		} else {
		 // res.send(decoder(req.body.text, req.body.shift));
		conn.query('SELECT * FROM ceasar', function(err,rows){
			if(err) {
				console.log(err.toString());
				return;
			} else {
				console.log(rows);
				res.send(rows);
			}
		});
		}
	});
});

app.get('/decode/all', function(req, res) {
	console.log(res.url);
});

app.listen(3000, function() {
	console.log('server is running');
});

// let dataCheck = function(text, shift) {
	
// };





