const { user, password, database } = require("./env");

const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: user,
  password: password,
  database: database,
});

db.connect((error) => {
  if (error) {
    console.log("Error connecting to the MySQL Database");
    return;
  }
  console.log("Connection established successfully");
});
module.exports = db;

// db.query("SELECT * FROM actor", function (error, results, fields) {
//   if (error) throw error;

//   results.forEach((result) => {
//     console.log(result);
//   });
// });
