const MongoClient = require("mongodb").MongoClient;
//Create a database named "mydb":
const url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
