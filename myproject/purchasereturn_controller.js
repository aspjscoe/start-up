module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("purchasereturn.json");
        var purchasereturn = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasereturn);
        if (userIndex != -1) {
            purchasereturn.splice(userIndex, 1);
            var dataToSave = JSON.stringify(purchasereturn);
            fs.writeFileSync("purchasereturn.json", dataToSave);
            res.send(purchasereturn);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/purchasereturn/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchasereturn.json");
        var purchasereturn = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasereturn);
        if (userIndex != -1) {
            purchasereturn[userIndex] = postedUser;
            var dataToSave = JSON.stringify(purchasereturn);
            fs.writeFileSync("purchasereturn.json", dataToSave);
            res.send(purchasereturn);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/purchasereturn/:id', put);
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
        var data = fs.readFileSync("purchasereturn.json");
        var purchasereturn = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasereturn);
        if (userIndex != -1) {
            var user = purchasereturn[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/purchasereturn/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchasereturn.json");
        var purchasereturn = JSON.parse(data);
        purchasereturn.push(postedUser);
        var dataToSave = JSON.stringify(purchasereturn);
        fs.writeFileSync("purchasereturn.json", dataToSave);
        res.send(purchasereturn);
    }
    app.post('/purchasereturn', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("purchasereturn.json");
        var purchasereturn = JSON.parse(data);
        res.send(purchasereturn);
    }
    app.get('/purchasereturn', getAll)
}