module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("detailedstock.json");
        var detailedstock = JSON.parse(data);
        var userIndex = indexOf(req.params.id, detailedstock);
        if (userIndex != -1) {
            detailedstock.splice(userIndex, 1);
            var dataToSave = JSON.stringify(detailedstock);
            fs.writeFileSync("detailedstock.json", dataToSave);
            res.send(detailedstock);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/detailedstock/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("detailedstock.json");
        var detailedstock = JSON.parse(data);
        var userIndex = indexOf(req.params.id, detailedstock);
        if (userIndex != -1) {
            detailedstock[userIndex] = postedUser;
            var dataToSave = JSON.stringify(detailedstock);
            fs.writeFileSync("detailedstock.json", dataToSave);
            res.send(detailedstock);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/detailedstock/:id', put);
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
        var data = fs.readFileSync("detailedstock.json");
        var detailedstock = JSON.parse(data);
        var userIndex = indexOf(req.params.id, detailedstock);
        if (userIndex != -1) {
            var user = detailedstock[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/detailedstock/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("detailedstock.json");
        var detailedstock = JSON.parse(data);
        detailedstock.push(postedUser);
        var dataToSave = JSON.stringify(detailedstock);
        fs.writeFileSync("detailedstock.json", dataToSave);
        res.send(detailedstock);
    }
    app.post('/detailedstock', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("detailedstock.json");
        var detailedstock = JSON.parse(data);
        res.send(detailedstock);
    }
    app.get('/detailedstock', getAll)
}