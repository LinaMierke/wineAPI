const express = require('express')
const app = express ()
const cors = require("cors");
const parser = require("body-parser");

app.use(express.json())
app.use(parser.json());
app.use(cors())



app.use(require("./lib/routes/index"))
app.set("port", process.env.PORT || 3000)
app.listen(app.get("port"), () => console.log('listening on port 3000'))
