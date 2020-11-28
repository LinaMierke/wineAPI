const express = require("express");
const router = express();


router.use("/wine", require("./wine"));

module.exports = router;