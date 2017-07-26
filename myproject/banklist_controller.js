module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("banklist.json");
        var banklist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, banklist);
        if (userIndex != -1) {
            banklist.splice(userIndex, 1);
            var dataToSave = JSON.stringify(banklist);
            fs.writeFileSync("banklist.json", dataToSave);
            res.send(banklist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/banklist/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("banklist.json");
        var banklist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, banklist);
        if (userIndex != -1) {
            banklist[userIndex] = postedUser;
            var dataToSave = JSON.stringify(banklist);
            fs.writeFileSync("banklist.json", dataToSave);
            res.send(banklist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/banklist/:id', put);
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
        var data = fs.readFileSync("banklist.json");
        var banklist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, banklist);
        if (userIndex != -1) {
            var user = banklist[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/banklist/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("banklist.json");
        var banklist = JSON.parse(data);
        banklist.push(postedUser);
        var dataToSave = JSON.stringify(banklist);
        fs.writeFileSync("banklist.json", dataToSave);
        res.send(banklist);
    }
    app.post('/banklist', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("banklist.json");
        var banklist = JSON.parse(data);
        res.send(banklist);
    }
    app.get('/banklist', getAll)
}