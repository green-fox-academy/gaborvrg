'use strict';

const express = require('express');
const mysql = require("mysql");
const bodyParser = require('body-parser');
const app = express();

app.use('/assets', express.static('assets'));
app.use('/img', express.static('img'));
app.use('/js', express.static('js'));
app.use(bodyParser.json());

const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "todo_db"
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

app.get('/todos', function(req, res) {
	conn.query('SELECT * FROM todolist', function(err,rows){
  if(err) {
    console.log(err.toString());
    return;
  }
    res.send(rows);
  });
});


app.post('/add-todos', function(req, res) {
  console.log(req.body.todoText);
  conn.query('INSERT INTO todolist (text) VALUES ("' + req.body.todoText + '")', function(err, rows){ 
    if(err) {
      console.log(err.toString());
      return;
    }
    // console.log(rows);
    // res.send(rows);
  });
});

// app.post('/add-todos', function(req, res) {
//   console.log(req.body.todoText);
//   conn.query('INSERT INTO todolist (text) VALUES ("' + req.body.todoText + '")', function(err, rows){ 
//     conn.query('SELECT * FROM todolist', function(err,rows){
//       if(err) {
//         console.log(err.toString());
//         return;
//       }
//       res.send(rows);
//     });
//   });
// });

app.listen(3000, function() {
	console.log('server is running');
});
