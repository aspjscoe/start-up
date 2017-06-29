var express = require('express');
var app = express();

var employeeController=require('./employee_controller');
employeeController(app);

app.get('/', function (req, res) {
   
   res.send( "hello world" );
});


var staticServer=express.static('client');
app.use(staticServer);

app.listen(8081, function () {
    console.log("Example app listening at 8081");

});