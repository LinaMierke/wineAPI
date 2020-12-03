const express = require('express')
const reviewsController = require('../controllers/reviews')
const router = express();

router.get("/", reviewsController.index)
router.get("/type/:type", reviewsController.showType)
router.get("/country/:country", reviewsController.showCountry)
router.post("/", reviewsController.create)
router.put("/review/:name", reviewsController.edit)
router.put("/score/:name", reviewsController.edit)
router.delete("/delete/:id", reviewsController.delete)


module.exports = router