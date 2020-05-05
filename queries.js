var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cheesedood123',
  database : 'rex_component'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results))
});