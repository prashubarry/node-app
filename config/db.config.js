'user strict';

const mysql = require('mysql2');

// local mysql db connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'prashant',
    password: 'xxxxxx',
    database: 'persons'
});
dbConn.connect((err)=>{
    if(err) throw err;
    console.log("Database connected");
});
module.exports = dbConn;
