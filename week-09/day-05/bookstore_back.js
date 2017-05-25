'use strict';

const mysql = require("mysql");
const express = require('express');
const app = express();
app.use('/frontend', express.static('frontend'));


const querys = `SELECT * FROM book_mast
                INNER JOIN author ON book_mast.aut_id=author.aut_id
                INNER JOIN category ON book_mast.cate_id=category.cate_id
                INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id`; // [what, filter]


var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});

app.get('/', function get(req, res) {
  var whereWhere = Object.keys(req.query).join();
  var whereWhat = req.query[whereWhere];

  if (whereWhere === '') {
    conn.query(querys, function(err, rows) {
    res.send(rows);
    });    
  } 

  if (whereWhere === 'category') {
        conn.query(querys + " WHERE cate_descrip = \'" + whereWhat + "\'" , function(err, rows) {
        res.send(rows);
        });        
    }

  if (whereWhere === 'publisher') {
        conn.query(querys + " WHERE pub_name = \'" + whereWhat + "\'" , function(err, rows) {
        res.send(rows);
        });        
    }

  if (whereWhere === 'author') {
        conn.query(querys + " WHERE aut_name = \'" + whereWhat + "\'" , function(err, rows) {
        res.send(rows);
        });        
    }
});



app.listen(3000, function() {
    console.log('server is running');
});
