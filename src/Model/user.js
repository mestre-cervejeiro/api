const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    email : {
    type: String,
    unique: true
  },
    password: String,
    firstName: String,
    lasName: String,
    age: Number,
    state: String,
    graduation: String,
    gender: String  
});

module.exports = User

module.exports = mongoose.model('User', User);
