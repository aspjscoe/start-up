module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("towns.json");
        var towns = JSON.parse(data);
        var userIndex = indexOf(req.params.id, towns);
        if (userIndex != -1) {
            towns.splice(userIndex, 1);
            var dataToSave = JSON.stringify(towns);
            fs.writeFileSync("towns.json", dataToSave);
            res.send(towns);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/towns/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("towns.json");
        var towns = JSON.parse(data);
        var userIndex = indexOf(req.params.id, towns);
        if (userIndex != -1) {
            towns[userIndex] = postedUser;
            var dataToSave = JSON.stringify(towns);
            fs.writeFileSync("towns.json", dataToSave);
            res.send(towns);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/towns/:id', put);
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
        var data = fs.readFileSync("towns.json");
        var towns = JSON.parse(data);
        var userIndex = indexOf(req.params.id, towns);
        if (userIndex != -1) {
            var user = towns[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/towns/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("towns.json");
        var towns = JSON.parse(data);
        towns.push(postedUser);
        var dataToSave = JSON.stringify(towns);
        fs.writeFileSync("towns.json", dataToSave);
        res.send(towns);
    }
    app.post('/towns', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("towns.json");
        var towns = JSON.parse(data);
        res.send(towns);
    }
    app.get('/towns', getAll)
}