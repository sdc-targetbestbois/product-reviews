var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'database-1.cpsmzmzc7yet.us-west-2.rds.amazonaws.com',
  user     : 'admin',
  password : 'cheesedood123',
  database : 'rex_component'
});

connection.connect();

var getAllReviews = function(id, cb) {
  connection.query("select * from reviews where id=?", [id], (err, results) => {
    if (err) {
      console.log("error getting all user data")
      cb(err, null);
    }
    cb(null, results);
  })
};

module.exports.getAllReviews = getAllReviews;