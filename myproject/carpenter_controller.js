module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("carpenter.json");
        var carpenter = JSON.parse(data);
        var userIndex = indexOf(req.params.id, carpenter);
        if (userIndex != -1) {
            carpenter.splice(userIndex, 1);
            var dataToSave = JSON.stringify(carpenter);
            fs.writeFileSync("carpenter.json", dataToSave);
            res.send(carpenter);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/carpenter/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("carpenter.json");
        var carpenter = JSON.parse(data);
        var userIndex = indexOf(req.params.id, carpenter);
        if (userIndex != -1) {
            carpenter[userIndex] = postedUser;
            var dataToSave = JSON.stringify(carpenter);
            fs.writeFileSync("carpenter.json", dataToSave);
            res.send(carpenter);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/carpenter/:id', put);
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
        var data = fs.readFileSync("carpenter.json");
        var carpenter = JSON.parse(data);
        var userIndex = indexOf(req.params.id, carpenter);
        if (userIndex != -1) {
            var user = carpenter[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/carpenter/:id', getById);

    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("carpenter.json");
        var carpenter = JSON.parse(data);
        carpenter.push(postedUser);
        var dataToSave = JSON.stringify(carpenter);
        fs.writeFileSync("carpenter.json", dataToSave);
        res.send(carpenter);
    }
    app.post('/carpenter', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("carpenter.json");
        var carpenter = JSON.parse(data);
        res.send(carpenter);
    }
    app.get('/carpenter', getAll)
}