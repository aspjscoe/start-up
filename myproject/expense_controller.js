module.exports=function(app){

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

function post(req,res){
var postedUser=req.body;
var fs=require("fs");
var data=fs.readFileSync("expense.json");
var users=JSON.parse(data);
users.push(postedUser);
var dataToSave=JSON.stringify(users);
fs.writeFileSync("expense.json",dataToSave);
res.send(users);
}
app.post('/expense',post);


  function getAll(req,res){
        var fs=require('fs');
        var data=fs.readFileSync("expense.json");
        var users=JSON.parse(data);
        res.send(users);
    }
    app.get('/expense',getAll)
}