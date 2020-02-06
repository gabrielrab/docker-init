//dependencies
const mysql = require("mysql");
const mongoose = require("mongoose");

//MySQL
try {
  const conn = mysql.createConnection({
    host: "localhost", //your MYSQL host [127.0.0.1 || localhost is the default if running local]
    user: "root", //your MYSQL user
    password: "password", //your MYSQL password
    port: 3306 //your MYSQL port [3306 default]
    //database: "your database name" [optional]
  });

  //init connection
  conn.connect(function(err) {
    //If there is an error
    if (err) {
      return console.error("error: " + err.message);
    }
    //Success connect
    console.log("Connected to the MySQL server.");
  });
  //Close connect
  conn.end(() => {
    console.log("End connection");
  });
} catch (error) {
  console.log("erro");
}

//MongoDB
mongoose.connect(
  //"mongodb://root:root@localhost:27017"
  "mongodb://user:password@host:port", //here your connection
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  //If there is an error
  err => {
    if (err) {
      return console.error("error: " + err.message);
    }
    //Success connect
    console.log("Conect mongo");
  }
);
