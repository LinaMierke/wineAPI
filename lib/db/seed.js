const Wine = require('../models/wine')
const Reviews = require('../models/reviews')
const wineData = require('./wine.json')
const reviewsData = require('./reviews.json')

Wine.deleteMany({})
  .then(() => {
    Wine.create(
      wineData
    )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })

Reviews.deleteMany({})
  .then(() => {
    Reviews.create(
      reviewsData
    )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })