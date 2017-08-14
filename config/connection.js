// Node to MySQL database connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error('error connection: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

// Export for use in ORM.js
module.exports = connection;