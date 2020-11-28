const Wine = require ("../models/wine")

module.exports = {

    index: (req, res)=> {
        Wine.find({})
        .then(wine => {
            res.json(wine)
        })
    },
    
}