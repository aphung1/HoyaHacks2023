const express = require('express');
const mysql = require('mysql');
const aws = require('aws-sdk');
const users = require("./routes/users");

const cors = require('cors');

require('dotenv').config()
const app = express();
const db = require('./connection');
// const db = mysql.createConnection({
// 	host:process.env.RDS_HOSTNAME,
// 	port:process.env.RDS_PORT,
// 	user:process.env.RDS_USERNAME,
// 	password:process.env.RDS_PASSWORD,
// 	database:"rm_db"
// });
// const s3 = new aws.S3();
// db.connect((err) => {
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     else{
//         console.log("Database connected");
//     }
// });

// (async() => {await
// 	s3.putObject({
// 	Body:"hello world",
// 	Bucket:"roommatefinderimg",
// 	Key:"file.txt"
// }).promise();
// })();

const PORT = process.env.PORT || 80;


// Will need to restrict access in the future, otherwise very vulnerable
// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     credentials:true,
//     origin: (origin, callback) => {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     optionsSuccessStatus: 200
// }
// app.use(cors(corsOptions));'

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

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
