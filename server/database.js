const MongoClient = require("mongodb").MongoClient;
//Create a database named "mydb":

const url = `mongodb+srv://saoussen:%40vera9e135@cluster0.507fy.mongodb.net/test`;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
