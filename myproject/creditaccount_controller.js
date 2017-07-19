module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("creditaccount.json");
        var creditaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, creditaccount);
        if (userIndex != -1) {
            creditaccount.splice(userIndex, 1);
            var dataToSave = JSON.stringify(creditaccount);
            fs.writeFileSync("creditaccount.json", dataToSave);
            res.send(creditaccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/creditaccount/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("creditaccount.json");
        var creditaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, creditaccount);
        if (userIndex != -1) {
            creditaccount[userIndex] = postedUser;
            var dataToSave = JSON.stringify(creditaccount);
            fs.writeFileSync("creditaccount.json", dataToSave);
            res.send(creditaccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/creditaccount/:id', put);
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
        var data = fs.readFileSync("creditaccount.json");
        var creditaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, creditaccount);
        if (userIndex != -1) {
            var user = creditaccount[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/creditaccount/:id', getById);



    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("creditaccount.json");
        var creditaccount = JSON.parse(data);
        creditaccount.push(postedUser);
        var dataToSave = JSON.stringify(creditaccount);
        fs.writeFileSync("creditaccount.json", dataToSave);
        res.send(creditaccount);
    }
    app.post('/creditaccount', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("creditaccount.json");
        var creditaccount = JSON.parse(data);
        res.send(creditaccount);
    }
    app.get('/creditaccount', getAll)
}