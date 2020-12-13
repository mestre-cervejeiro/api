const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
        ingredient_1: String,
        ingredient_2: String,
        ingredient_3: Number,
        ingredient_4: Number,
    time: String,
    challenge: Number,
    beerVote: {
        like: Number,
        dislike: Number
    },
    userVote: Number,
});

module.exports = mongoose.model('Product', Product);


