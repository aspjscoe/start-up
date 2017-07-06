module.exports = function (app) {

   //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("beats.json");
        var beats = JSON.parse(data);
        var userIndex = indexOf(req.params.id, beats);
        if (userIndex != -1) {
            beats.splice(userIndex, 1);
            var dataToSave = JSON.stringify(beats);
            fs.writeFileSync("beats.json", dataToSave);
            res.send(beats);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/beats/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("beats.json");
        var beats = JSON.parse(data);
        var userIndex = indexOf(req.params.id, beats);
        if (userIndex != -1) {
            beats[userIndex] = postedUser;
            var dataToSave = JSON.stringify(beats);
            fs.writeFileSync("beats.json", dataToSave);
            res.send(beats);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/beats/:id', put);
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
        var data = fs.readFileSync("beats.json");
        var beats = JSON.parse(data);
        var userIndex = indexOf(req.params.id, beats);
        if (userIndex != -1) {
            var user = beats[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/beats/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("beats.json");
        var beats = JSON.parse(data);
        beats.push(postedUser);
        var dataToSave = JSON.stringify(beats);
        fs.writeFileSync("beats.json", dataToSave);
        res.send(beats);
    }
    app.post('/beats', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("beats.json");
        var beats = JSON.parse(data);
        res.send(beats);
    }
    app.get('/beats', getAll)
}