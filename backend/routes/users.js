const express = require("express");
const router = express.Router();

// GET request to /
router.get("/", function (req, res) {
    res.json("Getting users");
});


module.exports = router;