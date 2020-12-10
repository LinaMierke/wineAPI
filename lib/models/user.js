const mongoose = require("../db/connections")


const User = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("User", User)