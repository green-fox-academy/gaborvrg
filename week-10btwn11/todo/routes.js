module.exports = function (app) {

	app.get('/', function(req, res) {
		res.sendFile(__dirname + '../../index.html');
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
	    conn.query('SELECT * FROM todolist', function(err,rows){
	      if(err) {
	        console.log(err.toString());
	        return;
	      }
	      res.send(rows);
	    });
	  });
	});


};