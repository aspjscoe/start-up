module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("productunits.json");
        var productunits = JSON.parse(data);
        var userIndex = indexOf(req.params.id, productunits);
        if (userIndex != -1) {
            productunits.splice(userIndex, 1);
            var dataToSave = JSON.stringify(productunits);
            fs.writeFileSync("productunits.json", dataToSave);
            res.send(productunits);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/productunits/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("productunits.json");
        var productunits = JSON.parse(data);
        var userIndex = indexOf(req.params.id, productunits);
        if (userIndex != -1) {
            productunits[userIndex] = postedUser;
            var dataToSave = JSON.stringify(productunits);
            fs.writeFileSync("productunits.json", dataToSave);
            res.send(productunits);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/productunits/:id', put);
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
        var data = fs.readFileSync("productunits.json");
        var productunits = JSON.parse(data);
        var userIndex = indexOf(req.params.id, productunits);
        if (userIndex != -1) {
            var user = productunits[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/productunits/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("productunits.json");
        var productunits = JSON.parse(data);
        productunits.push(postedUser);
        var dataToSave = JSON.stringify(productunits);
        fs.writeFileSync("productunits.json", dataToSave);
        res.send(productunits);
    }
    app.post('/productunits', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("productunits.json");
        var productunits = JSON.parse(data);
        res.send(productunits);
    }
    app.get('/productunits', getAll)
}