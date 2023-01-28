const express = require('express');
const mysql = require('mysql');
const aws = require('aws-sdk');

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

(async() => {await
	s3.putObject({
	Body:"hello world",
	Bucket:"roommatefinderimg",
	Key:"file.txt"
}).promise();
})();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.json("hello world");
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})
