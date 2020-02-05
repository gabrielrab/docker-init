const mysql = require("mysql");
const mongoose = require("mongoose");

//MySQL
try {
  const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "rapicare"
  });

  conn.connect(function(err) {
    if (err) {
      return console.error("error: " + err.message);
    }

    console.log("Connected to the MySQL server.");
  });

  conn.end(() => {
    console.log("End connection");
  });
} catch (error) {
  console.log("erro");
}

//MongoDB
mongoose.connect(
  "mongodb://root:root@localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Conect mongo");
  }
);
