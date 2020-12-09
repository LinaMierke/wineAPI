const mongoose = require("mongoose")



const reviews = new mongoose.Schema({
    name: String,
    score:Number,
    picture: String,
    review: String,
    paring : String,
    price: Number,
    user: String,
    type: String,
    country: String

})

module.exports = mongoose.model("Reviews", reviews)