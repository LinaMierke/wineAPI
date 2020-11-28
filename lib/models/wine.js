const mongoose = require("../db/connection")

const wineSchema = new mongoose.Schema({
    Name: String,
    Winery: String,
    Area : String,
    Province: String,
    Country: String,
    Varietal: String,
    vintage: String,
    nameClean: String,
    Style: String,
    Tags: String,
    Type: String,
    count: Number,
    rating: Number

})

module.exports = mongoose.model("Wine", wineSchema)