'use strict'

const mysql = require("mysql");
const express = require('express');
const app = express();
const query = `SELECT book_mast.book_name ,author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price FROM book_mast
                INNER JOIN author ON book_mast.aut_id=author.aut_id
                INNER JOIN category ON book_mast.cate_id=category.cate_id
                INNER JOIN publisher ON book_mast.pub_id=publisher.pub_id; `;

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});

app.get('/', function get(req, res) {
    conn.query( query ,function(err, rows) {
    // var table = "<table>";
    // table += "<tr><th>" + "Book name" + "</th><th>" + "Author" + "</th><th>" + "Category" + "</th><th>" + "Publisher Name" + "</th><th>" + "Book Price" + "</th></tr>";
    // rows.forEach(function(record) {
    //     // console.log(rows);
    //     table += "<tr>";
    //     table += "<td>" + record.book_name + "</td>";
    //     table += "<td>" + record.aut_name + "</td>";
    //     table += "<td>" + record.cate_descrip + "</td>";
    //     table += "<td>" + record.pub_name + "</td>";
    //     table += "<td>" + record.book_price + "</td>";
    //     table += "</tr>";
    //     });
    // table += "</table>";
    // drawing(rows);
    res.send(drawing(rows));
    // res.send(table);
    });
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

// /books?category=Science

// app.get('/book', function(req, res) {
//     console.log(req.query);
//     if (reg.query === 'Science') {

//     }
// });

// app.get('/', function(req, res) {

//     if (req.query === {} || req.query.input === undefined) {
//         res.send( {
//             error: "Please provide an input!"
//         });
//     } else {
//         res.send( {
//             received: parseInt(req.query.input),
//             result: req.query.input * 2
//         });
//     }
// });



app.listen(3000, function() {
    console.log('server is running');
});















// app.get('/', function get(req, res) {
//     conn.query("SELECT book_name FROM book_mast;",function(err, rows){
//     var html = "<ul>";
//     if(err) {
//         console.log('PARA', err);
//     } else {
//       rows.forEach(function(record) {
//           console.log(record.book_name);
//           html += "<li>" + record.book_name + "</li>";
//             });
//         }
//       html += "</ul>";
//       res.send(html);
//     });
// });

// conn.query("SELECT * FROM author;",function(err,rows){
//   console.log("Data received from Db:\n");
//   rows.forEach(function(elem) {
//       console.log(rows);
//   });
// });


// conn.query("SELECT * FROM author;",function(err,rows){
//     if ( err ) {
//         console.log("PARA", err);
//     } else {
//         console.log("Data received from Db:\n");
//         rows.forEach(row=>{
//             console.log(row.country);
//         });
//     }
// });


// const country = 'USA';
// const city = 'Atlanta';
// const query = "SELECT * FROM author WHERE country = ? AND home_city = ?"

// conn.query(query, [country, city], function(err,rows){
//     if(err) {
//         console.log("PARA", err);
//     } else {
//         console.log("Data recevied from DB:\n");
//         rows.forEach(row => {
//             console.log(row.aut_name)        
//         });
//     }
// });


// const country = 'USA';
// const city = 'Atlanta';
// const query = {
//     sql: "SELECT * FROM author WHERE country = ? AND home_city = ?",
//     values: [country, city]
// };

// app.get('/', function get(req, res) {
//     var result = [];
//     conn.query( query, function(err, rows){
//         if(err) {
//             console.log('PARA', err);
//         } else {
//             rows.forEach(function(row){
//                 result.push(row.aut_name);
//             });
//         }
//         res.send(result);
//     });
// });



// conn.query("SELECT book_name FROM book_mast;",function(err,rows){
//   var html = "";
//   rows.forEach(function(record) {
//       // console.log(record);
//       html += "<li>" + record + "</li>";
//   });
//   res.send(html);
// });




// conn.query(query, function(err,rows){
//     if(err) {
//         console.log("PARA", err);
//     } else {
//         console.log("Data recevied from DB:\n");
//         rows.forEach(row => {
//             console.log(row.aut_name)        
//         });
//     }
// });

// app.get('/', function get(req, res) {
//     var result = [];
//     conn.query(query, function(err,rows){
//         if(err) {
//             console.log("PARA", err);
//         } else {
//             console.log("Data recevied from DB:\n");
//             rows.forEach(row => {
//                 result.push(row.aut_name);       
//             });
//         }
//         res.send(result);
//     });
// });










