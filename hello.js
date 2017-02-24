var http = require('http');
var static = require('node-static');
var file = new static.Server('./');
http.createServer(function (req, res) {
     req.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(req, res);
    }).resume();
}).listen(process.env.PORT); 
