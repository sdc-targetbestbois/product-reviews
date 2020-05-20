var mysql      = require('mysql');
const mysqlConfig = require('./config.js');
var connection = mysql.createConnection(mysqlConfig);

connection.connect((err) => {
  if(err){
    console.log("err in db connection",err)
  }else{
    console.log("connected db")
  }
});

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