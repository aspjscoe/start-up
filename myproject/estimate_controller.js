module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("estimate.json");
        var estimate = JSON.parse(data);
        var userIndex = indexOf(req.params.id, estimate);
        if (userIndex != -1) {
            estimate.splice(userIndex, 1);
            var dataToSave = JSON.stringify(estimate);
            fs.writeFileSync("estimate.json", dataToSave);
            res.send(estimate);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/estimate/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("estimate.json");
        var estimate = JSON.parse(data);
        var userIndex = indexOf(req.params.id, estimate);
        if (userIndex != -1) {
            estimate[userIndex] = postedUser;
            var dataToSave = JSON.stringify(estimate);
            fs.writeFileSync("estimate.json", dataToSave);
            res.send(estimate);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/estimate/:id', put);
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
        var data = fs.readFileSync("estimate.json");
        var estimate = JSON.parse(data);
        var userIndex = indexOf(req.params.id, estimate);
        if (userIndex != -1) {
            var user = estimate[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/estimate/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("estimate.json");
        var estimate = JSON.parse(data);
        estimate.push(postedUser);
        var dataToSave = JSON.stringify(estimate);
        fs.writeFileSync("estimate.json", dataToSave);
        res.send(estimate);
    }
    app.post('/estimate', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("estimate.json");
        var estimate = JSON.parse(data);
        res.send(estimate);
    }
    app.get('/estimate', getAll)
}