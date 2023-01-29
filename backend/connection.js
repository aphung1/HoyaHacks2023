const mysql = require('mysql');

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

module.exports = db;
