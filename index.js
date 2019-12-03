var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"localhost",
    port: 3309,
    user:"root",
    password:"",
    database:""
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
});