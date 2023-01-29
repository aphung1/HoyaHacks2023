const express = require("express");
const router = express.Router();
const db = require('../connection');


// GET request to /
router.get("/", function (req, res) {
    res.json("Getting users");
});

router.post("/", (req, res) => {
    const data = req.body;
    console.log(data);
    // {
    //     name: 'Anna',
    //     age: 0,
    //     email: '',
    //     major: '',
    //     location: '',
    //     status: '',
    //     ethnicity: '',
    //     insthandle: '',
    //     year: '',
    //     gender: '',
    //     diet: '',
    //     sleep: '',
    //     study: '',
    //     substance: '',
    //     allergies: '',
    //     clean: '',
    //     photo: ''
    //   }
})


module.exports = router;