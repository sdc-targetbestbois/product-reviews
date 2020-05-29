
const mongoose = require('mongoose');
//var mysql  = require('mysql');


//const db = require('./config.js')
mongoose.connect('mongodb://localhost:27017/simpledata', {useNewUrlParser: true})
.then(() => {
  console.log('Database connection successful')
})
.catch(err => {
  console.error('Database connection error')
});

var schema = mongoose.Schema({
  id: Number,
  user: String,
  title: String,
  review: String,
  stars: Number
})
const reviewdata = mongoose.model('reviewdata', schema);



let saveReview = (review, cb) => {
  let doc = new reviewdata(review);

  doc.save((err, results) => {
    if (err) {
      console.log('Error in queries saving review');
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

let getProductReview = (id, cb) => {
  console.log(id)
  let obj = {id:id}
  reviewdata.find(id,(err, results) => {
    if (err) {
      console.log('Error finding item in queries');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
};

const updateReview = (id,body, cb) => {
  simpledata.updateOne({id: id},body, (err, results) => {
    if (err) {
      console.log('Error adding review to db');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
};

const deleteReview = (id, cb) => {
  simpledata.deleteOne({id:id}, (err,results)=>{
    if (err) {
      console.log("delete failed");
      cb(err, null)
    } else {
      cb(null, data);
    }
  })
};

module.exports = {
  saveReview,
  getProductReview,
  updateReview,
  deleteReview
}
