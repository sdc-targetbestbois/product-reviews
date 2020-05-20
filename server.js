const express = require('express')
const app = express()
var db = require('./queries');
var cors = require('cors')

app.use(express.static(__dirname + "/dist"));

app.use(cors());

app.use(express.json());

app.get('/api/reviews/:id', function (req, res) {
  db.getAllReviews(Number(req.params.id),(err,data) => {
    if (err) {
      console.log("error getting all users data in server")
      res.send("error getting all users data in server")
    }
    res.send(data);
  })
});

app.listen(8080, (err)=>{
  if(err){
  console.log("App.listen broke")
}else{
  console.log("server running successfully on 8080")
}
});