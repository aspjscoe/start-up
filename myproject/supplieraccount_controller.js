module.exports = function (app) {

    //start delete api
    function deleteFile(req, res) {
        var fs = require("fs");
        var data = fs.readFileSync("supplieraccount.json");
        var supplieraccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, supplieraccount);
        if (userIndex != -1) {
            supplieraccount.splice(userIndex, 1);
            var dataToSave = JSON.stringify(supplieraccount);
            fs.writeFileSync("supplieraccount.json", dataToSave);
            res.send(supplieraccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.delete('/supplieraccount/:id', deleteFile);
    ////end
    ///start put api
    function put(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("supplieraccount.json");
        var supplieraccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, supplieraccount);
        if (userIndex != -1) {
            supplieraccount[userIndex] = postedUser;
            var dataToSave = JSON.stringify(supplieraccount);
            fs.writeFileSync("supplieraccount.json", dataToSave);
            res.send(supplieraccount);
        }
        else {
            res.status(500).send("user not found")
        }
    }
    app.put('/supplieraccount/:id', put);
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
        var data = fs.readFileSync("supplieraccount.json");
        var supplieraccount = JSON.parse(data);
        var userIndex = indexOf(req.params.id, supplieraccount);
        if (userIndex != -1) {
            var user = supplieraccount[userIndex];
            res.send(user);
        }
        else {
            res.status(500).send("user not found");
        }
    }
    app.get('/supplieraccount/:id', getById);


    function post(req, res) {
        var postedUser = req.body;
        var fs = require("fs");
        var data = fs.readFileSync("supplieraccount.json");
        var supplieraccount = JSON.parse(data);
        supplieraccount.push(postedUser);
        var dataToSave = JSON.stringify(supplieraccount);
        fs.writeFileSync("supplieraccount.json", dataToSave);
        res.send(supplieraccount);
    }
    app.post('/supplieraccount', post);


    function getAll(req, res) {
        var fs = require('fs');
        var data = fs.readFileSync("supplieraccount.json");
        var supplieraccount = JSON.parse(data);
        res.send(supplieraccount);
    }
    app.get('/supplieraccount', getAll)
}