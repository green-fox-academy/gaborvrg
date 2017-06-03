'use strict';

const express = require('express');
const mysql = require("mysql");
const bodyParser = require('body-parser')
const app = express();


var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "todo_db"
});



app.listen(3000, function() {
	console.log('server is running');
});
