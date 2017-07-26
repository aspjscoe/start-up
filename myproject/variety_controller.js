module.exports = function (app) {
    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("variety.json");
        var variety = JSON.parse(data);
        var userIndex = indexOf(req.params.id, variety);
        if (userIndex != -1) {
            variety.splice(userIndex, 1);
            var dataToSave = JSON.stringify(variety);
            fs.writeFileSync("variety.json", dataToSave);
            res.send(variety);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/variety/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("variety.json");
        var variety = JSON.parse(data);
        var userIndex = indexOf(req.params.id, variety);
        if (userIndex != -1) {
            variety[userIndex] = postedUser;
            var dataToSave = JSON.stringify(variety);
            fs.writeFileSync("variety.json", dataToSave);
            res.send(variety);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/variety/:id', put);
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
        var data = fs.readFileSync("variety.json");
        var variety = JSON.parse(data);
        var userIndex = indexOf(req.params.id, variety);
        if (userIndex != -1) {
            var user = variety[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/variety/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("variety.json");
        var variety = JSON.parse(data);
        variety.push(postedUser);
        var dataToSave = JSON.stringify(variety);
        fs.writeFileSync("variety.json", dataToSave);
        res.send(variety);
    }
    app.post('/variety', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("variety.json");
        var variety = JSON.parse(data);
        res.send(variety);
    }
    app.get('/variety', getAll)
}