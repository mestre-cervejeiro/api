const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
        malt_1: String,
        malt_2: String,
        hops_1: Number,
        hops_2: Number,
        fruit: String,
        style: String, 
    time: String,
    challenge: Number,
    beerVote: {
        like: Number,
        dislike: Number
    },
    userVote: Number,
});

module.exports = mongoose.model('Product', Product);


