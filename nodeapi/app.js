var express = require('express');
var app = express();
app.use(express.static('client'));
var fs = require("fs");


app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   res.send( data );
   });
})
app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "addUser.json", 'utf8', function (err, data) {
       data = JSON.parse( user);
       data["user4"] = user["user4"];

      var file = JSON.stringify(data);

 fs.writeFileSync('addUser.json',file); 
 res.send(file);
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
