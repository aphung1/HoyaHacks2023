const express = require('express');
<<<<<<< HEAD
const mysql = require('mysql');
const aws = require('aws-sdk');
=======
const users = require("./routes/users");
const mysql = require('mysql');

const cors = require('cors');
>>>>>>> d1d49bf17f071e6f32bf068a52afb5140d9f918f

require('dotenv').config()
const app = express();
const db = mysql.createConnection({
	host:process.env.RDS_HOSTNAME,
	port:process.env.RDS_PORT,
	user:process.env.RDS_USERNAME,
	password:process.env.RDS_PASSWORD,
	database:"rm_db"
});
const s3 = new aws.S3();
db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    else{
        console.log("Database connected");
    }
});

<<<<<<< HEAD
(async() => {await
	s3.putObject({
	Body:"hello world",
	Bucket:"roommatefinderimg",
	Key:"file.txt"
}).promise();
})();

const PORT = process.env.PORT || 80;
=======
const PORT = process.env.PORT || 80;

const db = mysql.createConnection({
	host:'database-2.cbrdazp1alco.us-east-1.rds.amazonaws.com',
	port:'3306',
	user:'admin',
	password:'password',
	database:"rm_db"
});

db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    else{
        console.log("Database connected");
    }
});


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
>>>>>>> d1d49bf17f071e6f32bf068a52afb5140d9f918f

app.get('/', (req, res) => {
    res.json("hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
