module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("defaultvalues.json");
        var defaultvalues = JSON.parse(data);
        var userIndex = indexOf(req.params.id, defaultvalues);
        if (userIndex != -1) {
            defaultvalues.splice(userIndex, 1);
            var dataToSave = JSON.stringify(defaultvalues);
            fs.writeFileSync("defaultvalues.json", dataToSave);
            res.send(defaultvalues);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/defaultvalues/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("defaultvalues.json");
        var defaultvalues = JSON.parse(data);
        var userIndex = indexOf(req.params.id, defaultvalues);
        if (userIndex != -1) {
            defaultvalues[userIndex] = postedUser;
            var dataToSave = JSON.stringify(defaultvalues);
            fs.writeFileSync("defaultvalues.json", dataToSave);
            res.send(defaultvalues);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/defaultvalues/:id', put);
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
        var data = fs.readFileSync("defaultvalues.json");
        var defaultvalues = JSON.parse(data);
        var userIndex = indexOf(req.params.id, defaultvalues);
        if (userIndex != -1) {
            var user = defaultvalues[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/defaultvalues/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("defaultvalues.json");
        var defaultvalues = JSON.parse(data);
        defaultvalues.push(postedUser);
        var dataToSave = JSON.stringify(defaultvalues);
        fs.writeFileSync("defaultvalues.json", dataToSave);
        res.send(defaultvalues);
    }
    app.post('/defaultvalues', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("defaultvalues.json");
        var defaultvalues = JSON.parse(data);
        res.send(defaultvalues);
    }
    app.get('/defaultvalues', getAll)
}