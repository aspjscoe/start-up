module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("carpentercommisionlist.json");
        var carpentercommisionlist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, carpentercommisionlist);
        if (userIndex != -1) {
            carpentercommisionlist.splice(userIndex, 1);
            var dataToSave = JSON.stringify(carpentercommisionlist);
            fs.writeFileSync("carpentercommisionlist.json", dataToSave);
            res.send(carpentercommisionlist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/carpentercommisionlist/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("carpentercommisionlist.json");
        var carpentercommisionlist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, carpentercommisionlist);
        if (userIndex != -1) {
            carpentercommisionlist[userIndex] = postedUser;
            var dataToSave = JSON.stringify(carpentercommisionlist);
            fs.writeFileSync("carpentercommisionlist.json", dataToSave);
            res.send(carpentercommisionlist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/carpentercommisionlist/:id', put);
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
        var data = fs.readFileSync("carpentercommisionlist.json");
        var carpentercommisionlist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, carpentercommisionlist);
        if (userIndex != -1) {
            var user = carpentercommisionlist[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/carpentercommisionlist/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("carpentercommisionlist.json");
        var carpentercommisionlist = JSON.parse(data);
        carpentercommisionlist.push(postedUser);
        var dataToSave = JSON.stringify(carpentercommisionlist);
        fs.writeFileSync("carpentercommisionlist.json", dataToSave);
        res.send(carpentercommisionlist);
    }
    app.post('/carpentercommisionlist', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("carpentercommisionlist.json");
        var carpentercommisionlist = JSON.parse(data);
        res.send(carpentercommisionlist);
    }
    app.get('/carpentercommisionlist', getAll)
}