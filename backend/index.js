const express = require('express');
require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json("hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})