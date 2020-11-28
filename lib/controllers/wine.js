const Wine = require ("../models/Wine")

module.exports = {

    index: (req, res) => {
      Wine.find({})
        .then(wine => {
          res.json(wine)
        })
    },
  
    showCountry: (req, res) => {
      Wine.find({country: req.params.country})
        .then(wine => {
          res.json(wine)
        })
    },
    
    showName: (req, res) => {
      Wine.find({name: req.params.name})
        .then(wine => {
          res.json(wine)
        })
    },
    create: (req, res) => {
      Wine.create(req.body)
        .then(wine => {
          res.json(wine)
        })
    },
    edit: (req, res) => {
      Wine.findOneAndUpdate({name: req.params.name}, req.body, {new: true})
        .then(wine => {
          res.json(wine);
        }
        )
    },
    delete: (req, res) => {
      Wine.findOneAndDelete({_id: req.params.id})
        .then(wine => {
          res.json(wine)
        })
    }
  }

 
  