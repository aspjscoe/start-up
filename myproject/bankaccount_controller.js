module.exports = function (app) {


    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, bankaccount);
        if (userIndex != -1) {
            bankaccount.splice(userIndex, 1);
            var dataToSave = JSON.stringify(bankaccount);
            fs.writeFileSync("bankaccount.json", dataToSave);
            res.send(bankaccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/bankaccount/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, bankaccount);
        if (userIndex != -1) {
            bankaccount[userIndex] = postedUser;
            var dataToSave = JSON.stringify(bankaccount);
            fs.writeFileSync("bankaccount.json", dataToSave);
            res.send(bankaccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/bankaccount/:id', put);
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
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, bankaccount);
        if (userIndex != -1) {
            var user = bankaccount[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/bankaccount/:id', getById);



    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        bankaccount.push(postedUser);
        var dataToSave = JSON.stringify(bankaccount);
        fs.writeFileSync("bankaccount.json", dataToSave);
        res.send(bankaccount);
    }
    app.post('/bankaccount', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("bankaccount.json");
        var bankaccount = JSON.parse(data);
        res.send(bankaccount);
    }
    app.get('/bankaccount', getAll)
}