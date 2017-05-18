'use strict';

const mysql = require("mysql");
const express = require('express');
const app = express();

const querys = `SELECT book_mast.book_name ,author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM book_mast
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
    conn.query( querys, function(err, rows) {
    console.log(rows);
    res.send(drawing(rows));
    });
});


app.get('/book', function(req, res) {
    var whereWhere = Object.keys(req.query).join();
    var whereWhat = req.query[whereWhere];

    if (whereWhere === 'category') {
        conn.query(querys + " WHERE cate_descrip = \'" + whereWhat + "\'" , function(err, rows) {
        res.send(drawing(rows));
        });        
    } 

    if (whereWhere === 'publisher') {
        conn.query(querys + " WHERE pub_name = \'" + whereWhat + "\'" , function(err, rows) {
        res.send(drawing(rows));
        });        
    } 
    if (whereWhere === 'plt') {
        conn.query(querys + " WHERE book_price < \'" + whereWhat + "\'" , function(err, rows) {
        res.send(drawing(rows));
        });        
    } 
    if (whereWhere === 'pgt') {
        conn.query(querys + " WHERE book_price > \'" + whereWhat + "\'" , function(err, rows) {
        res.send(drawing(rows));
        });        
    }
});


function drawing(rows) {
    var table = "<table>";
    table += "<tr><th>" + "Book name" + "</th><th>" + "Author" + "</th><th>" + "Category" + "</th><th>" + "Publisher Name" + "</th><th>" + "Book Price" + "</th></tr>";
    rows.forEach(function(record) {
        // console.log(rows);
        table += "<tr>";
        table += "<td>" + record.book_name + "</td>";
        table += "<td>" + record.aut_name + "</td>";
        table += "<td>" + record.cate_descrip + "</td>";
        table += "<td>" + record.pub_name + "</td>";
        table += "<td>" + record.book_price + "</td>";
        table += "</tr>";
        });
    table += "</table>";
    return table;
}

app.listen(3000, function() {
    console.log('server is running');
});
