const express = require('express')
const wineController = require('../controllers/wine')
const router = express();

router.get("/", wineController.index)
router.get("/country/:country", wineController.showCountry)
router.get("/name/:name", wineController.showName)
router.post("/", wineController.create)
router.put("/raiting/:raiting", wineController.edit)
router.delete("/delete/:id", wineController.delete)


module.exports = router
