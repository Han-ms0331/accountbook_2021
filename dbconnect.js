const mysql = require('mysql');

module.exports = mysql.createConnection({
    connectionLimit: 10,
    waitForConnections: true ,
    host    : '',
    user    : '',
    password: '',
    database: '',
    port    : '3306'
});