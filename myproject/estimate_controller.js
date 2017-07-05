module.exports=function(app){

var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

function post(req,res){
var postedUser=req.body;
var fs=require("fs");
var data=fs.readFileSync("estimate.json");
var users=JSON.parse(data);
users.push(postedUser);
var dataToSave=JSON.stringify(users);
fs.writeFileSync("estimate.json",dataToSave);
res.send(users);
}
app.post('/estimate',post);


  function getAll(req,res){
        var fs=require('fs');
        var data=fs.readFileSync("estimate.json");
        var users=JSON.parse(data);
        res.send(users);
    }
    app.get('/estimate',getAll)
}