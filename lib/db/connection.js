const mongoose = requiere("mongoose");
mongoose.connect("mongodb://localhost/wine",{useNewUrlParser:true});

module.exports = mongoose;