const Wine = require('../models/Wine')
const wineData = require ('./wine.json') 

Wine.deleteMany({})
.then(()=>{  
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