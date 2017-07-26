module.exports = function (app) {
    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("states.json");
        var states = JSON.parse(data);
        var userIndex = indexOf(req.params.id, states);
        if (userIndex != -1) {
            states.splice(userIndex, 1);
            var dataToSave = JSON.stringify(states);
            fs.writeFileSync("states.json", dataToSave);
            res.send(states);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/states/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("states.json");
        var states = JSON.parse(data);
        var userIndex = indexOf(req.params.id, states);
        if (userIndex != -1) {
            states[userIndex] = postedUser;
            var dataToSave = JSON.stringify(states);
            fs.writeFileSync("states.json", dataToSave);
            res.send(states);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/states/:id', put);
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
        var data = fs.readFileSync("states.json");
        var states = JSON.parse(data);
        var userIndex = indexOf(req.params.id, states);
        if (userIndex != -1) {
            var user = states[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/states/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("states.json");
        var states = JSON.parse(data);
        states.push(postedUser);
        var dataToSave = JSON.stringify(states);
        fs.writeFileSync("states.json", dataToSave);
        res.send(states);
    }
    app.post('/states', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("states.json");
        var states = JSON.parse(data);
        res.send(states);
    }
    app.get('/states', getAll)
}