module.exports = function (app) {



  function createTables() {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/billing";

    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      db.createCollection("" + collectionName, function (err, res) {
        if (err) throw err;
        console.log("Table created!");
        db.close();
      });
    });
  }
}

