let mongoose = require('mongoose');
let mongodb = "mongodb://localhost:27117/hacka";

// db config
let db = mongoose.connect(mongodb,{
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});

module.exports = db

