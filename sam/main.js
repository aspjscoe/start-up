// JScript File

const http = require('http');
var car=require('./sample');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(JSON.stringify(car.myCars()));
  var fs = require("fs");
 var data = fs.readFileSync('myjson.json');
res.write("Synchronous read: " + data.toString());

console.log("Program Ended");


  
var fs = require("fs");
var obj = {name: 'JP'};
var file = JSON.stringify(obj);

 fs.writeFileSync('write.json',file);
  res.end();
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});