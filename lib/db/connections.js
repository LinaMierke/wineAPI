const mongoose = require("mongoose");



let mongoURI = ""

if(process.env.NODE_ENV==="production"){
    mongoURI = "mongodb+srv://wineoclock:123@cluster0.0dzdb.mongodb.net/<dbname>?retryWrites=true&w=majority"
}else {
    mongoURI = "mongodb://localhost/wine"
}


mongoose.connect(mongoURI, { useNewUrlParser: true });
module.exports = mongoose;