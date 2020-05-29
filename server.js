const express = require('express');
const newrelic = require('newrelic');
const app = express();
let db = require('./queries');
let cors = require('cors');
let PORT = 9005

app.use(express.static(__dirname + "/dist"));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/reviews/:id', (req, res) => {
  console.log(req.body,req.query,req.params)
  db.getProductReview(req.params,(err,data) => {
    if (err) {
      console.log("error getting all users data in server")
      res.send("error getting all users data in server")
    }
    res.send(data);
  })
});

app.post('/api/reviews/', (req, res) => {
  db.saveReview(req.body, (err, results) => {
    if (err) {
      res.status(500).send("Error saving from server", err);
    } else {
      res.send(results);
    }
  })
});

app.delete('/api/reviews/', (req, res) => {
  db.deleteReview(req.body, (err, results) => {
    if (err) {
      res.status(400).send("Error deleting check server", err);
    } else {
      res.send(results);
    }
  })
});

app.put('/api/reviews/', (req, res) => {
  db.updateReview(req.body, (err, results) => {
    if (err) {
      res.status(500).send("failed to update in server",err);
    } else {
      res.send(results);
    }
  })
})



app.listen(9005, (err)=>{
  if(err){
  console.log("App.listen broke")
}else{
  console.log(`server running successfully on 9005`)
}
});




// saveReview
// getProductReview
// updateReview
// deleteReview