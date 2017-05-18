'use strict'

const mysql = require("mysql");
const express = require('express');
const app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});

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

app.get('/', function get(req, res) {
    conn.query("SELECT book_name FROM book_mast;",function(err, rows){
      var html = "<ul>";
      rows.forEach(function(record) {
          console.log(record.book_name);
          html += "<li>" + record.book_name + "</li>";
      });
      html += "</ul>"
      res.send(html);
    });
});


// conn.query("SELECT book_name FROM book_mast;",function(err,rows){
//   var html = "";
//   rows.forEach(function(record) {
//       // console.log(record);
//       html += "<li>" + record + "</li>";
//   });
//   res.send(html);
// });


app.listen(3000, function() {
    console.log('server is running');
});


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










