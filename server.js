const express = require('express')
const app = express()
var db = require('./queries');

app.use(express.static(__dirname + "/dist"))


/* TODO:

*/

app.use(express.json())

app.get('/api/reviews', function (req, res) {
  db.getAllReviews((err,data) => {
    if (err) {
      console.log("error getting all users data in server")
      res.send("error getting all users data in server:", err)
    }
    res.send(data);
  })
});

app.listen(8080, console.log("app is running hot on 8080!"))