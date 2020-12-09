const mongoose = require("mongoose")


const wine = new mongoose.Schema({
    Name: String,
    Winery: String,
    Area : String,
    Province: String,
    Country: String,
    Varietal: String,
    vintage: String,
    nameClean: String,
    Style: String,
    Image: String,
    Type: String,
    rating: Number

})

module.exports = mongoose.model("Wine", wine)