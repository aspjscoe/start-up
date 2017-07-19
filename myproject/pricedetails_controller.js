module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("pricedetails.json");
        var pricedetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, pricedetails);
        if (userIndex != -1) {
            pricedetails.splice(userIndex, 1);
            var dataToSave = JSON.stringify(pricedetails);
            fs.writeFileSync("pricedetails.json", dataToSave);
            res.send(pricedetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/pricedetails/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("pricedetails.json");
        var pricedetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, pricedetails);
        if (userIndex != -1) {
            pricedetails[userIndex] = postedUser;
            var dataToSave = JSON.stringify(pricedetails);
            fs.writeFileSync("pricedetails.json", dataToSave);
            res.send(pricedetails);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/pricedetails/:id', put);
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
        var data = fs.readFileSync("pricedetails.json");
        var pricedetails = JSON.parse(data);
        var userIndex = indexOf(req.params.id, pricedetails);
        if (userIndex != -1) {
            var user = pricedetails[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/pricedetails/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("pricedetails.json");
        var pricedetails = JSON.parse(data);
        pricedetails.push(postedUser);
        var dataToSave = JSON.stringify(pricedetails);
        fs.writeFileSync("pricedetails.json", dataToSave);
        res.send(pricedetails);
    }
    app.post('/pricedetails', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("pricedetails.json");
        var pricedetails = JSON.parse(data);
        res.send(pricedetails);
    }
    app.get('/pricedetails', getAll)
}