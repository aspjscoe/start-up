module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("purchase.json");
        var purchase = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchase);
        if (userIndex != -1) {
            purchase.splice(userIndex, 1);
            var dataToSave = JSON.stringify(purchase);
            fs.writeFileSync("purchase.json", dataToSave);
            res.send(purchase);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/purchase/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchase.json");
        var purchase = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchase);
        if (userIndex != -1) {
            purchase[userIndex] = postedUser;
            var dataToSave = JSON.stringify(purchase);
            fs.writeFileSync("purchase.json", dataToSave);
            res.send(purchase);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/purchase/:id', put);
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
        var data = fs.readFileSync("purchase.json");
        var purchase = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchase);
        if (userIndex != -1) {
            var user = purchase[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/purchase/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchase.json");
        var purchase = JSON.parse(data);
        purchase.push(postedUser);
        var dataToSave = JSON.stringify(purchase);
        fs.writeFileSync("purchase.json", dataToSave);
        res.send(purchase);
    }
    app.post('/purchase', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("purchase.json");
        var purchase = JSON.parse(data);
        res.send(purchase);
    }
    app.get('/purchase', getAll)
}