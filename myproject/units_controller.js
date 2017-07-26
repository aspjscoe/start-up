module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("units.json");
        var units = JSON.parse(data);
        var userIndex = indexOf(req.params.id, units);
        if (userIndex != -1) {
            units.splice(userIndex, 1);
            var dataToSave = JSON.stringify(units);
            fs.writeFileSync("units.json", dataToSave);
            res.send(units);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/units/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("units.json");
        var units = JSON.parse(data);
        var userIndex = indexOf(req.params.id, units);
        if (userIndex != -1) {
            units[userIndex] = postedUser;
            var dataToSave = JSON.stringify(units);
            fs.writeFileSync("units.json", dataToSave);
            res.send(units);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/units/:id', put);
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
        var data = fs.readFileSync("units.json");
        var units = JSON.parse(data);
        var userIndex = indexOf(req.params.id, units);
        if (userIndex != -1) {
            var user = units[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/units/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("units.json");
        var units = JSON.parse(data);
        units.push(postedUser);
        var dataToSave = JSON.stringify(units);
        fs.writeFileSync("units.json", dataToSave);
        res.send(units);
    }
    app.post('/units', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("units.json");
        var units = JSON.parse(data);
        res.send(units);
    }
    app.get('/units', getAll)
}