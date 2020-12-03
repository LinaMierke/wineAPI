const Reviews = require ("../models/reviews")

module.exports = {

    index: (req, res) => {
      Reviews.find({})
        .then(reviews => {
          res.json(reviews)
        })
    },
  
    showType: (req, res) => {
      Reviews.find({type: req.params.type})
        .then(reviews => {
          res.json(reviews)
        })
    },
    
    showCountry: (req, res) => {
      Reviews.find({country: req.params.country})
        .then(reviews => {
          res.json(reviews)
        })
    },
    create: (req, res) => {
      Reviews.create(req.body)
        .then(reviews => {
          res.json(reviews)
        })
    },
    edit: (req, res) => {
      Reviews.findOneAndUpdate({review: req.params.review}, req.body, {new: true})
        .then(reviews => {
          res.json(reviews);
        }
        )
    },
    edit: (req, res) => {
      Reviews.findOneAndUpdate({score: req.params.score}, req.body, {new: true})
        .then(reviews => {
          res.json(reviews);
        }
        )
    },
    delete: (req, res) => {
      Reviews.findOneAndDelete({_id: req.params.id})
        .then(reviews => {
          res.json(reviews)
        })
    }
  }

 
  