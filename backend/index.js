const express = require('express');
const users = require("./routes/users");

const cors = require('cors');

require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 80;

// Will need to restrict access in the future, otherwise very vulnerable
app.use(cors());
app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use('/users', users);
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.json("hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})