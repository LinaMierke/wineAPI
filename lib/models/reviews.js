// require ("./user")
const mongoose = require("../db/connections")



const reviews = new mongoose.Schema({
    name: String,
    score:Number,
    picture: String,
    review: String,
    paring : String,
    price: Number,
    type: String,
    country: String,
    User: {
        type: mongoose.Schema.Types.String,
        ref: 'User'
        }
        
    
        
    

})

module.exports = mongoose.model("Reviews", reviews)