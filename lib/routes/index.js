const express = require("express");
const router = express();


router.use("/wine", require("./wine"));
router.use("/reviews", require("./reviews"))



module.exports = router;