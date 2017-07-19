module.exports = function (app) {

function getTable(result){
    var advance=result;
    createTables(advance);
}

function createTables(advance){
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/billing";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("advance", function(err, res) {
    if (err) throw err;
    console.log("Table created!");
    db.close();
  });
});
}
}   