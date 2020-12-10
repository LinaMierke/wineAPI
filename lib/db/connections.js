const mongoose = require("mongoose");



let mongoURI = ""

if(process.env.NODE_ENV==="production"){
    console.log("hey we are in here")
    console.log(process.env.DB_URL)
    mongoURI = process.env.DB_URL;
}else {
    mongoURI = "mongodb://localhost/wine"
}


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;