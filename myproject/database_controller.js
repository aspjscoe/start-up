module.exports = function (app) {

function getById(req,res)
{
       var database=(req.params.id, advance);
}


    app.get('/database_controller/:mydb', getById);
}


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:127.0.0.1:8081/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
