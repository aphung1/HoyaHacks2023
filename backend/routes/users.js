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
});

// Sends a swipe
router.post("/swipe", (req, res) => {
    const data = req.body;
    // {
    // liker: ksfls@gmail.com,
    // likee: asjdfks@gmail.com
    // }
    

    }
)




module.exports = router;