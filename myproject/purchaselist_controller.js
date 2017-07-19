module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("purchaselist.json");
        var purchaselist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchaselist);
        if (userIndex != -1) {
            purchaselist.splice(userIndex, 1);
            var dataToSave = JSON.stringify(purchaselist);
            fs.writeFileSync("purchaselist.json", dataToSave);
            res.send(purchaselist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/purchaselist/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchaselist.json");
        var purchaselist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchaselist);
        if (userIndex != -1) {
            purchaselist[userIndex] = postedUser;
            var dataToSave = JSON.stringify(purchaselist);
            fs.writeFileSync("purchaselist.json", dataToSave);
            res.send(purchaselist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/purchaselist/:id', put);
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
        var data = fs.readFileSync("purchaselist.json");
        var purchaselist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchaselist);
        if (userIndex != -1) {
            var user = purchaselist[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/purchaselist/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchaselist.json");
        var purchaselist = JSON.parse(data);
        purchaselist.push(postedUser);
        var dataToSave = JSON.stringify(purchaselist);
        fs.writeFileSync("purchaselist.json", dataToSave);
        res.send(purchaselist);
    }
    app.post('/purchaselist', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("purchaselist.json");
        var purchaselist = JSON.parse(data);
        res.send(purchaselist);
    }
    app.get('/purchaselist', getAll)
}