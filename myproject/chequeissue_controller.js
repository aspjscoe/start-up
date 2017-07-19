module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("chequeissue.json");
        var chequeissue = JSON.parse(data);
        var userIndex = indexOf(req.params.id, chequeissue);
        if (userIndex != -1) {
            chequeissue.splice(userIndex, 1);
            var dataToSave = JSON.stringify(chequeissue);
            fs.writeFileSync("chequeissue.json", dataToSave);
            res.send(chequeissue);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/chequeissue/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("chequeissue.json");
        var chequeissue = JSON.parse(data);
        var userIndex = indexOf(req.params.id, chequeissue);
        if (userIndex != -1) {
            chequeissue[userIndex] = postedUser;
            var dataToSave = JSON.stringify(chequeissue);
            fs.writeFileSync("chequeissue.json", dataToSave);
            res.send(chequeissue);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/chequeissue/:id', put);
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
        var data = fs.readFileSync("chequeissue.json");
        var chequeissue = JSON.parse(data);
        var userIndex = indexOf(req.params.id, chequeissue);
        if (userIndex != -1) {
            var user = chequeissue[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/chequeissue/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("chequeissue.json");
        var chequeissue = JSON.parse(data);
        chequeissue.push(postedUser);
        var dataToSave = JSON.stringify(chequeissue);
        fs.writeFileSync("chequeissue.json", dataToSave);
        res.send(chequeissue);
    }
    app.post('/chequeissue', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("chequeissue.json");
        var chequeissue = JSON.parse(data);
        res.send(chequeissue);
    }
    app.get('/chequeissue', getAll)
}