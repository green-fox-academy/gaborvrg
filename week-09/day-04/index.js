'use strict'

const mysql = require("mysql");
const express = require('express');
const app = express();

// const what = 'aut_name';
// const filter = 'Thomas Morgan';

const querys = `SELECT book_mast.book_name ,author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM book_mast
                INNER JOIN author ON book_mast.aut_id=author.aut_id
                INNER JOIN category ON book_mast.cate_id=category.cate_id
                INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id`; // [what, filter]

// mi lenne, ha az osszes lehetosegre ra lehetne keresni kulon ertekek megadasaval,legordulo menuben, *-gal a SELECT utan


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

// /books?category=Science
// http://127.0.0.1:3000/book?category=Science
// const query = "SELECT * FROM author WHERE country = ? AND home_city = ?"
// conn.query(query, [country, city], function(err,rows){
// WHERE category.cate_descrip='Science'

//Object.keys(obj)

app.get('/book', function(req, res) {
    console.log(Object.keys(req.query));
    res.send(req.query);

    // if (req.query === 'Science') {}


    // conn.query( querys, function(err, rows) {
    // res.send(drawing(rows));
    // });

    // if (req.query === 'Science') {
    //     conn.query( querys, function(err, rows) {
    //     res.send(drawing(rows));
    //     });
    // }
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
