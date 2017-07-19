module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("customeraccount.json");
        var customeraccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, customeraccount);
        if (userIndex != -1) {
            customeraccount.splice(userIndex, 1);
            var dataToSave = JSON.stringify(customeraccount);
            fs.writeFileSync("customeraccount.json", dataToSave);
            res.send(customeraccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/customeraccount/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("customeraccount.json");
        var customeraccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, customeraccount);
        if (userIndex != -1) {
            customeraccount[userIndex] = postedUser;
            var dataToSave = JSON.stringify(customeraccount);
            fs.writeFileSync("customeraccount.json", dataToSave);
            res.send(customeraccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/customeraccount/:id', put);
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
        var data = fs.readFileSync("customeraccount.json");
        var customeraccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, customeraccount);
        if (userIndex != -1) {
            var user = customeraccount[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/customeraccount/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("customeraccount.json");
        var customeraccount = JSON.parse(data);
        customeraccount.push(postedUser);
        var dataToSave = JSON.stringify(customeraccount);
        fs.writeFileSync("customeraccount.json", dataToSave);
        res.send(customeraccount);
    }
    app.post('/customeraccount', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("customeraccount.json");
        var customeraccount = JSON.parse(data);
        res.send(customeraccount);
    }
    app.get('/customeraccount', getAll)
}