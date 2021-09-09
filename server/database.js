const MongoClient = require("mongodb").MongoClient;
//Create a database named "mydb":

const url = `mongodb+srv://saoussen:%40vera9e135@cluster0.507fy.mongodb.net/test`;
const database = "ChildFirst";
const familyMember = "familyMember";

// Create a new collection.

MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;
  const db = client.db("ChildFirst");

  db.createCollection("familySpace", {
    capped: false,
    autoIndexId: true,
  });
  console.log("Database created!", db);
  /*  size: <number>,
      max: <number>,
      storageEngine: <document>,
      validator: <document>,
      validationLevel: <string>,
      validationAction: <string>,
      indexOptionDefaults: <document>,
      viewOn: <string>,
      pipeline: <pipeline>,
      collation: <document>,
      writeConcern: <document>
  });*/
  db.familyMember.insertOne({
    _id: 1,
    Name: "Chris",
    Age: 21,
    Subject: "MySQL",
  });

  //db.close();
});
