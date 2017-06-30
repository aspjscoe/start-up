var express = require('express');
var app = express();

var employeeController=require('./employee_controller');
employeeController(app);
var advanceControll=require('./advance_controll');
advanceControll(app);
var areaSalesManController=require('./areasalesman_controller');
areaSalesManController(app);
var bankAccountController=require('./bankaccount_controller');
bankAccountController(app);
var bankListController=require('./banklist_controller');
bankListController(app);
var beastController=require('./beats_controller');
beastController(app);
var billDetailsController=require('./billdetails_controller');
billDetailsController(app);
var billItemDetailsController=require('./billitemdetails_controller');
billItemDetailsController(app);
var brandsController=require('./brands_controller');
brandsController(app);


app.get('/', function (req, res){
   
   res.send( "hello world" );
});
var staticServer=express.static('client');
app.use(staticServer);

app.listen(8081, function () {
    console.log("Example app listening at 8081");

});