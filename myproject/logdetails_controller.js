module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("logdetails.json");
        var logdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, logdetails);
        if (userIndex != -1) {
            logdetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(logdetails);
            fs.writeFileSync("logdetails.json", dataToSave);
            res.send(logdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/logdetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("logdetails.json");
        var logdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, logdetails);
        if (userIndex != -1) {
            logdetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(logdetails);
            fs.writeFileSync("logdetails.json", dataToSave);
            res.send(logdetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/logdetails/:id', put);
    ///end
    function indexOf(userId, usersArray) {
        for (var i = 0; i < usersArray.length; i++) {
            if (usersArray[i].id == userId) {
                return i;
            }
        }
        return -1;
    }

    function getById(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("logdetails.json");
        var logdetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, logdetails);
        if (userIndex != -1) {
            var user = logdetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/logdetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("logdetails.json");
        var logdetails = JSON.parse(data);
        logdetails.push(postedUser);
        var dataToSave = JSON.stringify(logdetails);
        fs.writeFileSync("logdetails.json", dataToSave);
        res.send(logdetails);
    }
    app.post('/logdetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("logdetails.json");
        var logdetails = JSON.parse(data);
        res.send(logdetails);
    }
    app.get('/logdetails', getAll)
}