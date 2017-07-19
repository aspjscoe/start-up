module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("purchasereturnlist.json");
        var purchasereturnlist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasereturnlist);
        if (userIndex != -1) {
            purchasereturnlist.splice(userIndex, 1);
            var dataToSave = JSON.stringify(purchasereturnlist);
            fs.writeFileSync("purchasereturnlist.json", dataToSave);
            res.send(purchasereturnlist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/purchasereturnlist/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchasereturnlist.json");
        var purchasereturnlist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasereturnlist);
        if (userIndex != -1) {
            purchasereturnlist[userIndex] = postedUser;
            var dataToSave = JSON.stringify(purchasereturnlist);
            fs.writeFileSync("purchasereturnlist.json", dataToSave);
            res.send(purchasereturnlist);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/purchasereturnlist/:id', put);
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
        var data = fs.readFileSync("purchasereturnlist.json");
        var purchasereturnlist = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasereturnlist);
        if (userIndex != -1) {
            var user = purchasereturnlist[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/purchasereturnlist/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchasereturnlist.json");
        var purchasereturnlist = JSON.parse(data);
        purchasereturnlist.push(postedUser);
        var dataToSave = JSON.stringify(purchasereturnlist);
        fs.writeFileSync("purchasereturnlist.json", dataToSave);
        res.send(purchasereturnlist);
    }
    app.post('/purchasereturnlist', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("purchasereturnlist.json");
        var purchasereturnlist = JSON.parse(data);
        res.send(purchasereturnlist);
    }
    app.get('/purchasereturnlist', getAll)
}