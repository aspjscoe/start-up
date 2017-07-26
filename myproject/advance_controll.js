module.exports=function(app){
//start
function delet(req,res) {
    var fs=require("fs");
var data=fs.readFileSync("advance.json");
var users=JSON.parse(data);
var userIndex=indexOf(req.params.id,users);
if(userIndex != -1){
users.splice(userIndex, 1) ;  
var dataToSave=JSON.stringify(users);
 fs.writeFileSync("advance.json",dataToSave);   
  res.send(users);   
    }
    else
    {
        res.status(500).send("user not found")
    }
}
app.delete('/advance/:id',delet);

////end
function put(req,res){
var postedUser=req.body;
var fs=require("fs");
var data=fs.readFileSync("advance.json");
var users=JSON.parse(data);
var userIndex=indexOf(req.params.id,users);
if(userIndex != -1){
users[userIndex]=postedUser;
var dataToSave=JSON.stringify(users);
 fs.writeFileSync("advance.json",dataToSave);   
  res.send(users);   
    }
    else
    {
        res.status(500).send("user not found")
    }
}
app.put('/advance/:id',put);

function indexOf(userId,usersArray)  {
for(var i=0;i<usersArray.length;i++){
    if(usersArray[i].id==userId){
        return i;
    }
}
return -1;
}

function getById(req,res)
{
    var fs=require("fs");
var data=fs.readFileSync("advance.json");
var users=JSON.parse(data);
var userIndex=indexOf(req.params.id,users);
if(userIndex != -1){
    var user=users[userIndex];
    res.send(user);
}
else{
    res.status(500).send("user not found");
}
}
app.get('/advance/:id',getById);

function post(req,res){
var postedUser=req.body;
var fs=require("fs");
var data=fs.readFileSync("advance.json");
var users=JSON.parse(data);
users.push(postedUser);
var dataToSave=JSON.stringify(users);
fs.writeFileSync("advance.json",dataToSave);
res.send(users);
}
app.post('/advance',post);


  function getAll(req,res){
        var fs=require('fs');
        var data=fs.readFileSync("advance.json");
        var users=JSON.parse(data);
        res.send(users);
    }
    app.get('/advance',getAll)
}