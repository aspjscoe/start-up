module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("purchasedetails.json");
        var purchasedetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasedetails);
        if (userIndex != -1) {
            purchasedetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(purchasedetails);
            fs.writeFileSync("purchasedetails.json", dataToSave);
            res.send(purchasedetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/purchasedetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchasedetails.json");
        var purchasedetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasedetails);
        if (userIndex != -1) {
            purchasedetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(purchasedetails);
            fs.writeFileSync("purchasedetails.json", dataToSave);
            res.send(purchasedetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/purchasedetails/:id', put);
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
        var data = fs.readFileSync("purchasedetails.json");
        var purchasedetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, purchasedetails);
        if (userIndex != -1) {
            var user = purchasedetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/advance/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("purchasedetails.json");
        var purchasedetails = JSON.parse(data);
        purchasedetails.push(postedUser);
        var dataToSave = JSON.stringify(purchasedetails);
        fs.writeFileSync("purchasedetails.json", dataToSave);
        res.send(purchasedetails);
    }
    app.post('/purchasedetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("purchasedetails.json");
        var purchasedetails = JSON.parse(data);
        res.send(purchasedetails);
    }
    app.get('/purchasedetails', getAll)
}