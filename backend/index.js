const express = require('express');
const users = require("./routes/users");
const verifyJWT = require('./middleware/verifyJWT');

const cors = require('cors');

require('dotenv').config()
const app = express();

const PORT = process.env.PORT || 80;

// Will need to restrict access in the future, otherwise very vulnerable
const whitelist = ['http://localhost:3000']
const corsOptions = {
    credentials:true,
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false}));

app.use(express.json());

app.use('/users', users);
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));

app.use(verifyJWT);
app.get('/', (req, res) => {
    res.json("hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})