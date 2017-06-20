var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(express.static('client'));
var fs = require("fs");


app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
   res.send( data );
   });
})
app.post('/users', function(req, res){
    var userName =req.body.userName;
  var html="hello"+userName;
  var ds=JSON.parse(html);
 res.send(ds);

});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
         